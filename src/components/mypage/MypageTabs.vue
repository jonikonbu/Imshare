<template>
    <div id="Mypage-tabs">
      <Loading v-show="loading"/>
        <div class="management-img">
        <v-tabs color="#000080" v-model="tabs">
          <v-tab style="font-weight:bold;">投稿リスト</v-tab>
          <v-tab style="font-weight:bold;">ブックマーク</v-tab>
        </v-tabs>
          <v-container fluid>
            <v-tabs-items v-model="tabs">
              <!--投稿管理リスト-->
              <v-tab-item>
               <v-row>
                  <v-col 
                    v-for="(image,index) in postImages" 
                    :key="index" cols="6" lg="2">
                      <v-card style="border-radius:15px;">
                        <v-img :src="image.imgUrl" 
                          class="white--text align-end img img-size animate__animated animate__fadeIn"
                        >
                          <v-card-title style="font-weight:bold; font-size:15px;" v-text="image.title"></v-card-title>
                        </v-img>
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
                                  style="color:#fff; font-weight:bold; text-decoration:none;"
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
                    <v-card>
                      <v-img :src="bookMark.imgUrl" 
                        class="white--text align-end img img-size"
                      >
                        <v-card-title style="font-weight:bold; font-size:15px;" v-text="bookMark.title"></v-card-title>
                      </v-img>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                          <v-btn small color="#1E90FF">
                            <router-link :to="{ name: 'Pickup',params:{ post:`${bookMark.docId}` }}" style="color:#fff; font-weight:bold; text-decoration:none;">
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
<style>
.img-size{
  height:200px;
}
</style>