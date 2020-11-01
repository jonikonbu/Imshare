<template>
  <div id="pickup">
    <!--画像タイトルとお気に入りボタン、いいねボタン-->
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <!--いいねボタン-->
          <h2>{{imgData.title}}</h2>
            <ul class="like-book-area">
            <li v-if="is_like">
              <v-btn v-show="likeShow" class="ma-2" text icon color="dark" @click="addLikePush">
                <v-icon>mdi-thumb-up</v-icon>
              </v-btn>
              <v-btn v-show="!likeShow" class="ma-2" text icon color="pink" @click="deleteLikePush">
                <v-icon>mdi-thumb-up</v-icon>
              </v-btn>
                {{imgData.likeCount}}
            </li>
            <li v-else>
              <v-btn v-show="!likeShow" class="ma-2" text icon color="dark" @click="addLikePush">
                <v-icon>mdi-thumb-up</v-icon>
              </v-btn>
              <v-btn v-show="likeShow" class="ma-2" text icon color="pink" @click="deleteLikePush">
                <v-icon>mdi-thumb-up</v-icon>
              </v-btn>
                {{imgData.likeCount}}
            </li>
            <!--ブックマークボタン-->
            <li v-if="is_book_mark" class="book-mark-btn"> 
              <v-btn v-show="bookMarkShow" class="ma-2" text icon color="dark" @click="addBookMarkPush">
                <v-icon>mdi-star</v-icon>
              </v-btn>
              <v-btn v-show="!bookMarkShow" class="ma-2" text icon color="pink" @click="deleteBookMarkPush">
                <v-icon>mdi-star</v-icon>
              </v-btn>
                {{imgData.bookMark}}
            </li>
            <li v-else class="book-mark-btn"> 
              <v-btn v-show="!bookMarkShow" class="ma-2" text icon color="dark" @click="addBookMarkPush">
                <v-icon>mdi-star</v-icon>
              </v-btn>
              <v-btn v-show="bookMarkShow" class="ma-2" text icon color="pink" @click="deleteBookMarkPush">
                <v-icon>mdi-star</v-icon>
              </v-btn>
                {{imgData.bookMark}}
            </li>
            </ul>
            <!--選択した画像を表示-->
            <v-card>
              <v-img :src="imgData.imgUrl" alt="img" style="width:100%; height:500px;"></v-img>
            </v-card>
        </v-col>
 
        <!--コメントリスト-->
        <v-col cols="12" md="6" style="margin-top:20px;">
          <h4>投稿者コメント</h4>
          <div class="post-comment">
            <p style="text-align:left; margin-left:10px; margin-top:5px;">{{imgData.comment}}</p>
          </div>
          <div class="comment-header">
          <h3 class="comment-logo">コメント</h3>
            <div class="comment-btn">
              <v-btn color="#1E90FF" fab dark small>
                <v-icon style="color:#fff;" @click="commentDialog=!commentDialog">mdi-plus</v-icon>
              </v-btn>
            </div>
          </div>
          <div class="comment-area">
            <div v-for="(comment,index) in postComments" :key="index">
              <v-card
                class="mx-auto"
                max-width="400"
                style="border-radius:10px; margin-top:15px;"
                >
                <v-card-text>
                  <div>{{comment.name}}</div>
                    <hr/>
                  <div>{{comment.commentText}}</div>
                </v-card-text>
              </v-card> 
            </div>         
          </div>
        </v-col>
      </v-row>
      <!--コメントダイアログ--> 
      <v-dialog
        v-model="commentDialog"
        max-width="500"
      >
        <v-card>
          <v-card-title>コメントを入力して下さい。</v-card-title>
            <v-card-text>
              <v-textarea
                label="コメント入力"
                v-model="commentText"
              >
              </v-textarea>
                <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                      <v-btn small color="red" @click="commentDialog = !commentDialog">
                        <span style="color:#fff; font-weight:bold">閉じる</span>
                      </v-btn>
                      <v-btn color="#1E90FF" @click="addComment" small>
                        <span style="color:#fff; font-weight:bold">送信</span>
                      </v-btn>
                  </v-card-actions> 
              </v-card-text> 
        </v-card>  
      </v-dialog>
    </v-container>          
  </div>
</template>
<script>
import {addLike,deleteLike,addBookMark,deleteBookMark} from '../components/js/Pickup'
import {db} from '../firebase'
import {mapState} from 'vuex'
export default {
    data() {
      return {
        //firebaseStoreで受け取ったimg情報を受け取る
        imgData:{},
        //遷移時に渡したパラメーターを受け取る
        postId:this.$route.params.post,

        //bookMarkボタンの初期値
        bookMarkShow:false,
        //bookMarkボタンを押しているか比較用の配列
        postBookMarkList:[],

        //likeボタンの初期値
        likeShow:false,
        //likeボタンを押しているか比較用の配列
        postLikeList:[],

        //コメントダイアログの初期値
        commentDialog:false,
        //コメント入力欄の内容を保管
        commentText:"",
        //コメント欄を表示
        postComments:[]
      }
    },
    computed:{
      ...mapState({userId:'userUid',loginUser:'login'}),
      //likeボタン判別
      is_like(){
        if(this.loginUser){
          if(this.postLikeList.includes(this.userId.uid)){
            return true
          }else{
            return false
          }
        }else{
          return false
        }
      },
      //bookMarkボタン判別
      is_book_mark(){
        if(this.loginUser){
          if(this.postBookMarkList.includes(this.userId.uid)){
            return true
          }else{
            return false
          }
        }else{
          return false
        }
      }
    },

    //遷移時に渡したドキュメントIDを元にfirebaseでstore取得をしてdataに情報を入れている。
   mounted(){
      //postsリファレンス
      const postRef = db.collection('posts').doc(this.postId)
      //受け取ったparams（docId）を元にstoreを検索し、詳細画面に表示
        postRef.get().then(doc =>{
            this.imgData = doc.data()
          })
      //uid比較用配列(like)
        postRef.collection('like').get()
          .then((snap)=>{
            snap.forEach((doc)=>{
              this.postLikeList.push(doc.id)
            })
        })
      //uid比較用配列(bookMark)
        postRef.collection('bookMark').get()
          .then((snap)=>{
            snap.forEach((doc)=>{
              this.postBookMarkList.push(doc.id)
            })
        })  
      //コメント欄の内容を表示
        postRef.collection('comment').orderBy('date','desc').onSnapshot(snap =>{
          this.postComments = []
          snap.forEach(doc =>{
            this.postComments.push(doc.data())
          })
        })
   },
   methods:{
      //bookMarkボタンが押された時
      addBookMarkPush(){
        const uid = this.$store.state.userUid.uid
        this.imgData.bookMark ++
        this.bookMarkShow = !this.bookMarkShow
        addBookMark(this.postId,uid,this.imgData.imgUrl,this.imgData.title)
      },
      //bookMarkボタンが解除された時
      deleteBookMarkPush(){
        const uid = this.$store.state.userUid.uid
        this.imgData.bookMark --
        this.bookMarkShow = !this.bookMarkShow
        deleteBookMark(this.postId,uid)
      },
      //likeボタンが押された時
      addLikePush(){
        const uid = this.$store.state.userUid.uid
        this.imgData.likeCount ++
        this.likeShow = !this.likeShow
        addLike(this.postId,uid)
      },
      //likeボタンが解除された時  
      deleteLikePush(){
        const uid = this.$store.state.userUid.uid
        this.imgData.likeCount --
        this.likeShow = !this.likeShow
        deleteLike(this.postId,uid)
      },
      //コメント追加
      addComment(){
        db.collection('posts').doc(this.postId).collection('comment')
          .add({
            uid:this.$store.state.userUid.uid,
            name:this.$store.state.user.name,
            date:new Date,
            commentText:this.commentText,
          })
          .then(()=>{
            this.commentText = ""
            this.commentDialog = false
          })
        },
      }
    
}
</script>
<style>
.image-area v-img{
  text-align: center;
}
.like-book-area{
  list-style: none;
}
ul.like-book-area li{
  display: inline-block;
}
.post-comment{
  height:100px;
  border:1px solid #A9A9A9;
  overflow: scroll;
}
.comment-area{
  text-align: center;
  height:375px;
  overflow: scroll;
  border:1px solid #A9A9A9;
  border-radius: 10px;
  background-color:#F5F5F5;
}
.comment-logo{
  text-align: left;
  position: relative;
  top:23px;
  left:20px;
}
.comment-btn{
  position: relative;
  bottom:10px;
  text-align: right;
}
</style>

