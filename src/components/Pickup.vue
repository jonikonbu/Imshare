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
              <v-img class="pickup-img" :src="imgData.imgUrl" alt="img"></v-img>
            </v-card>
        </v-col>
 
        <!--コメントリスト-->
        <v-col class="comment-list" cols="12" md="6">
          <h4>投稿者コメント</h4>
          <div class="post-comment">
            <p>{{imgData.comment}}</p>
          </div>
          <div class="comment-header">
          <h3 class="comment-logo">コメント</h3>
            <div class="comment-btn">
              <v-btn color="#1E90FF" fab dark small>
                <v-icon class="comment-btn-icon" @click="commentDialog=!commentDialog">mdi-plus</v-icon>
              </v-btn>
            </div>
          </div>
          <div class="comment-area">
            <div v-for="(comment,index) in postComments" :key="index">
              <v-card
                class="mx-auto card"
                max-width="400"
                >
                <v-card-text class="v-card-text">
                  <v-row class="comment-balloon">
                    <v-col class="balloon-img" cols="3"><v-img class="balloon-img" :src="comment.myphoto"></v-img></v-col>
                    <v-col class="balloon-text-area" cols="9"><p class="balloon-name">{{comment.name}}</p>
                    <hr/>
                      <div class="balloon-text">{{comment.commentText}}</div>
                    </v-col>
                  </v-row> 
                </v-card-text>
              </v-card> 
            </div>         
          </div>
        </v-col>
      </v-row>
      <!--コメントダイアログ--> 
      <v-dialog v-model="commentDialog" max-width="500">
        <v-card>
          <v-card-title>コメントを入力して下さい。</v-card-title>
            <v-card-text>
              <v-textarea label="コメント入力" v-model="commentText">
              </v-textarea>
                <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                      <v-btn small color="red" @click="commentDialog = !commentDialog">
                        <span class="comment-dialog-btn-text">閉じる</span>
                      </v-btn>
                      <v-btn color="#1E90FF" @click="addComment" small>
                        <span class="comment-dialog-btn-text">送信</span>
                      </v-btn>
                  </v-card-actions> 
              </v-card-text> 
        </v-card>
      </v-dialog>
    </v-container>          
  </div>
</template>
<script>


import {addLike,deleteLike,addBookMark,deleteBookMark} from './js/Pickup'
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

        //コメント欄を表示
        postComments:[],

        //コメント入力欄の内容を保管
        commentText:"",
      }
    },
    computed:{
      ...mapState({userId:'userUid',loginUser:'login',userInformation:'user'}),
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
      },
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
        alert('ブックマークに登録されました。')
      },
      //bookMarkボタンが解除された時
      deleteBookMarkPush(){
        const uid = this.$store.state.userUid.uid
        this.imgData.bookMark --
        this.bookMarkShow = !this.bookMarkShow
        deleteBookMark(this.postId,uid)
        alert('ブックマークが解除されました。')
      },
      //likeボタンが押された時
      addLikePush(){
        const uid = this.$store.state.userUid.uid
        this.imgData.likeCount ++
        this.likeShow = !this.likeShow
        addLike(this.postId,uid)
        alert('いいね！登録されました。')
      },
      //likeボタンが解除された時  
      deleteLikePush(){
        const uid = this.$store.state.userUid.uid
        this.imgData.likeCount --
        this.likeShow = !this.likeShow
        deleteLike(this.postId,uid)
        alert('いいね！解除されました')
      },
      addComment(){
          //ログインユーザーが自分のアイコンを持っていない時
          if(this.$store.state.user.myphoto == undefined){ 
              db.collection('posts').doc(this.postId).collection('comment')
                .add({
                  myphoto:'https://firebasestorage.googleapis.com/v0/b/original-image-273c8.appspot.com/o/images%2Faccount.png?alt=media&token=84fcacb2-26ca-4d2d-b430-7502d923718e',
                  uid:this.$store.state.userUid.uid,
                  name:this.$store.state.user.name,
                  date:new Date,
                  commentText:this.commentText,
                })
                .then(()=>{
                  this.commentText = ""
                  this.commentDialog = false
                })
                //ログインユーザーが自分のアイコンを持っている時  
          }else{
              db.collection('posts').doc(this.postId).collection('comment')
                .add({
                  myphoto:this.$store.state.user.myphoto,
                  uid:this.$store.state.userUid.uid,
                  name:this.$store.state.user.name,
                  date:new Date,
                  commentText:this.commentText,
                })
                .then(()=>{
                  this.commentText = ""
                  this.commentDialog = false
                })
          }
        },
      }
    
}
</script>
<style scoped lang="scss">
//いいねボタンとブックマークボタン
.like-book-area {

  li{
    display: inline-block;
  }
}

//ピックアップ画像
.pickup-img{
  width:100%; height:500px
}

//コメントリスト
.comment-list{
  margin-top:20px;

  //投稿者コメント
  .post-comment{
    height:100px;
    border:1px solid #A9A9A9;
    overflow: scroll;

    p{
      text-align:left;
      margin-left:10px;
      margin-top:5px;
    }
  }

  //ユーザーコメント
  .comment-area{
    height:375px;
    overflow: scroll;
    border:1px solid #A9A9A9;
    border-radius: 10px;
    background-color:#F5F5F5;

    .card{
      border-radius:10px;
      padding:0;
      margin:10px;

      .v-card-text{
        text-align: center;
        margin:0;
        padding:5px;
      }

      .comment-balloon{
        margin:0;
        padding:0;

        .balloon-img{
          width:50px;
          height:50px;
          border-radius:50%;
        }
        .balloon-text-area{
        
        .balloon-name{
          text-align: left;
          font-size:15px;
          margin:5px;
          font-weight: bold;
        }
        .balloon-text{
          font-size:13px;
          text-align:left;
        }
        }

      }
    }
  }
}

//コメント欄のヘッダー
.comment-logo{
  text-align: left;
  position: relative;
  top:23px;
  left:20px;
}

//コメントボタン
.comment-btn{
  position: relative;
  bottom:10px;
  text-align: right;

  //プラスアイコン
  .comment-btn-icon{
    color:#fff;
  }
}

.comment-dialog-btn-text{
  color:#fff;
  font-weight:bold
}

</style>

