<template>
    <div id="Mypage-tabs">
      <Loading v-show="loading"/>
        <div class="mypage-tabs">
        <v-tabs color="#000080" v-model="tabs">
          <v-tab class="mypage-tabs-item">投稿リスト</v-tab>
          <v-tab class="mypage-tabs-item">ブックマーク</v-tab>
        </v-tabs>
          <v-container fluid>
            <v-tabs-items v-model="tabs">
              <!--投稿管理リスト-->
              <v-tab-item>
               <v-row>
                  <v-col v-for="(image,index) in postImages" :key="index" cols="6" lg="2">
                      <v-card class="management-list-card animate__animated animate__fadeIn">
                        <router-link  class="management-list-link" :to="{ name: 'Pickup',params:{ post:`${image.docId}` }}">
                        <v-img :src="image.imgUrl" class="white--text align-end img">
                          <v-card-title class="management-list-title" v-text="image.title"></v-card-title>
                        </v-img>
                        </router-link>
                          <v-card-actions>
                             <v-spacer></v-spacer>
                              <v-btn 
                                class="mx-2" 
                                fab dark small 
                                color="red" 
                                @click="deleteImgPush(image.docId)"
                              >
                                <v-icon color="#FFF">
                                  mdi-delete
                                </v-icon>
                              </v-btn>
                              <v-btn 
                                small 
                                color="#1E90FF"
                              >
                                <router-link 
                                  :to="{ name: 'Pickup',params:{ post:`${image.docId}` }}" 
                                  class="management-more-link"
                                >
                                  more
                                </router-link>
                              </v-btn>
                          </v-card-actions>
                      </v-card>
                 </v-col>
                </v-row>
              </v-tab-item>
              <!--ブックマークリスト-->
              <v-tab-item>
                <v-row>
                  <v-col class="animate__animated animate__fadeIn" v-for="bookMark in bookMarkImg" :key="bookMark.imgUrl" cols="6" lg="2">
                    <v-card class="bookmark-list-card">
                      <router-link class="bookmark-list-link" :to="{ name: 'Pickup',params:{ post:`${bookMark.docId}` }}">
                      <v-img :src="bookMark.imgUrl" class="white--text align-end img">
                        <v-card-title class="bookmark-list-title" v-text="bookMark.title"></v-card-title>
                      </v-img>
                      </router-link>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                          <v-btn small color="#1E90FF">
                            <router-link class="bookmark-more-link" :to="{ name: 'Pickup',params:{ post:`${bookMark.docId}` }}">
                              more
                            </router-link>
                          </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </v-tab-item>
            </v-tabs-items>
          </v-container>
        </div>
    </div>
</template>
<script>
    import {deleteImg} from '../js/Mypage'
    import {db} from '../../firebase'
    import Loading from '../Loading'
    export default{
        name:'MypageTabs',
        data(){
            return {
                //ローディング画面
                loading:false,
                //タブ情報
                tabs:null,
                //投稿した作品を保管
                postImages:[],
                //ブックマークした作品を保管
                bookMarkImg:[],
            }
        },
        components:{
          Loading
        },
        mounted(){
            //vuex uidの取得
            const uid = this.$store.state.userUid.uid
        
            //投稿データを取得
            const storeRef = db.collection('users').doc(uid).collection('posts');
              storeRef.get()
                .then((snap)=>{
                  snap.forEach(doc =>{
                    this.postImages.push(doc.data());
                });
              })
              .catch((error) => {
                alert(error)
              })

            //ブックマークのデータを取得
           db.collection('users').doc(uid)
           .collection('bookMark').get()
             .then((snap)=>{
               snap.forEach((doc)=>{
                 this.bookMarkImg.push(doc.data());
               })
             })
            .catch((error) => {
              alert(error)
            })
        },
        methods:{
            //投稿画像の削除
            deleteImgPush(postId){
              const conf = confirm('削除してもよろしいですか？')
                if(conf == true){
                  this.loading = true
                  const uid = this.$store.state.userUid.uid
                    deleteImg(postId,uid)
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
.mypage-tabs{
  
  //投稿管理リスト
  .mypage-tabs-item{
    font-weight:bold;
  }
  .management-list-card{
    border-radius:15px;

    .management-list-link{
      text-decoration: none;
    }

    .management-list-title{
      font-weight:bold;
      font-size:15px;
    }
    
    .management-more-link{
      color:#fff;
      font-weight:bold;
      text-decoration:none;
    }
  }

  //ブックマークリスト
  .bookmark-list-card{
    border-radius:15px;

    .bookmark-list-link{
      text-decoration:none;
    }

    .bookmark-list-title{
      font-weight:bold;
      font-size:15px;
    }
    .bookmark-more-link{
      color:#fff;
      font-weight:bold; 
      text-decoration:none;
    }
  }

  //リスト画像透視
  .img{
    border-radius: 15px 15px 0 0;
    height:200px;
  }
  .img:hover{
    transition: 0.5s;
    color:#fff;
    opacity:0.5;
  }

}

</style>