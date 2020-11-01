<template>
    <div id="post-uploader">
        <v-row>
          <v-col cols="12" sm="6" class="img-grid">
            <v-card>
              <v-img v-show="uploadImage" :src="uploadImage" alt=""/>
            </v-card>
            <div>
              <label v-show="!uploadImage" class="img-btn" >ファイル選択
                 <input class="input" type="file" @change="onFileChange"/>
              </label>
              <div>
                <div depressed v-show="uploadImage" style="margin:10px;">
                  <v-btn @click="remove" color="red"><span style="color:#fff; font-weight:bold;">取消</span></v-btn>
                </div>
              </div>
            </div>
          </v-col>
            <Loading v-show="loading"></Loading>
          <!--タイトルやカテゴリー選択-->
          <v-col cols="12" sm="6" class="post-form">
            <v-textarea
              v-model="postComment"
              label="投稿者コメント"
              auto-grow
              outlined
              rows="1"
              row-height="15"
            ></v-textarea>
            <v-text-field v-model="title" label="タイトル"></v-text-field>
              <v-select style="margin-top:50px" class="select" v-model="category" :items="items" label="カテゴリー">
              </v-select>
                <br/>
                  <v-btn depressed color="#1E90FF" style="margin-top:50px;" class="save-btn" @click="addImgFirebase">
                    <span style="color:#fff; font-weight:bold;">投稿</span>
                  </v-btn>
          </v-col>
        </v-row>
      </div>
</template>
<script>
import Loading from '../Loading'
import {db,storage} from '../../firebase';

export default{
  name:'PostUpload',
    data(){
      return{
        //ローディング画面
        loading:false,

        fileName:'',
        imgDataUrl:'',
        uploadImage:'',
        //カテゴリーの値
        category:'null',
        items:[
          '写真',
          'イラスト'
        ],
        //作品のタイトル
        title:'',
        //投稿者コメント
        postComment:'',
      };
    },
    components:{
      Loading
    },
    methods:{
      onFileChange(e){
        const files = e.target.files || e.dataTransfer.files;
        this.createImage(files[0]);
        this.fileName = files[0].name
      },
      createImage(file){
        const reader = new FileReader();
        reader.onload = e =>{
          this.uploadImage = e.target.result;
        };
        reader.readAsDataURL(file);
        reader.onloadend = (e) =>{
          this.imgDataUrl = e.target.result
          
        }
      },
      remove(){
        this.uploadImage = false
      },
      
      addImgFirebase(){
        this.loading = true
        //ログイン中のユーザーのuidを取得
        const uid = this.$store.state.userUid.uid
        const name = this.fileName
        const imgDataUrl = this.imgDataUrl;
        //this.loading = true
        //親postsコレクションに入れるデータをまとめて定義
        const imgData={
          date:new Date(),
          title:this.title,
          comment:this.postComment,
          category:this.category,
          imgUrl:"",
          fileName:this.fileName,
          docId:"",
          likeCount:0,
          bookMark:0,
        }

       //ストレージのリファレンス
       const storageRef = storage.child(`${uid}/${name}`);
        //ストレージにbase64で画像を保管
        storageRef.putString(imgDataUrl,'data_url')
          //ストレージで保存した画像からファイルのURLを取得
          .then(()=>{
            storageRef.getDownloadURL().then((url)=>{
              //imgDataオブジェクトのimgUrlへファイルのURLを定義
              imgData.imgUrl = url

            //storeへ情報を保管

           //親のpostsにimgDataオブジェクトを保管
            db.collection('posts').add(imgData)
            //親のpostsのドキュメントIDをdocRefへ受取
              .then((docRef)=>{
                db.collection('posts').doc(docRef.id).update({docId:docRef.id})
              //usersのpostsサブコレクションのリファレンス（親のドキュメントIDと同じ）
        const userCl = db.collection('users').doc(uid).collection('posts').doc(docRef.id);
              //postsサブコレクションにデータを保管
            userCl.set({
              date:new Date(),
                //imgDataを直接入れていないため、ここでimgUrlプロパティを生成して
                //imgDataのimgUrlにアクセス
                imgUrl:imgData.imgUrl,
                title:imgData.title,
                docId:docRef.id
              })
              .then(()=>{
                alert('投稿を完了しました。')
                this.loading = false
                location.reload();
              })
            })
            .catch(function(error){
              console.log(error)
            })

          })
       })
      }
    }
}
</script>
<style>
.img-grid{
  text-align: center;
}
.img-btn > .input{
  display: none;
}
.img-btn{
  font-size:14px;
  padding:10px;
  border-radius:5px ;
  color:#fff;
  background-color:#1E90FF;
  font-weight:bold;
}
.img-btn:hover{
  transition: 0.9s;
 background-color:red	;
}
.img-btn::after {
  font-size: 1rem;
  color: #888;
  padding-left: 1rem;
}
</style>