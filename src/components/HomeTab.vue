<template>
  <div id="home">
    <v-container>
      <!--サーチ機能-->
      <v-text-field
      color="#1E90FF"
      append-icon="mdi-magnify"
      flat
      hide-details
      solo-inverted
      style="max-width: 1500px;"
      v-model="keyword"
      @keydown.enter="search(keyword)"
      />
    <!--タブメニュー-->
      <div class="tab-menu">
        <v-tabs color="#000080" v-model="tabs" @change="tabChange">
          
              
                <v-tab>
                  <span class="tab-menu-item">
                    新着順
                  </span>
                </v-tab>
              
            
              <v-tab>
                <span class="tab-menu-item">
                  人気順
                </span>
              </v-tab>
            
            
              <v-tab>
                <span  class="tab-menu-item">
                  写真
                </span>
              </v-tab>
            
              <v-tab>
                <span class="tab-menu-item">
                  イラスト
                </span>
              </v-tab>
        </v-tabs>
      <v-container fluid>
        <v-tabs-items v-model="tabs"> 
         <!--画像リスト(タブの中身)-->
          <!--新着順-->
          <v-tab-item>
            <v-row>
              <v-col class="animate__animated animate__fadeIn" v-for="(post,index) in newPosts" :key="index" cols="6" sm="3">
                <v-card class="image-list-card">
                  <router-link class="image-list-link-img" :to="{ name: 'Pickup',params:{ post:`${post.docId}` }}">
                    <v-img :src="post.imgUrl" class="white--text align-end img">
                      <v-card-title class="image-list-title" v-text="post.title">
                      </v-card-title>
                    </v-img>
                  </router-link>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                        <v-btn small color="#1E90FF">
                          <router-link class="image-list-link" :to="{ name: 'Pickup',params:{ post:`${post.docId}` }}">
                            more
                          </router-link>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
          </v-row>
        </v-tab-item>
        <!--人気順-->
        <v-tab-item>
          <v-row>
            <v-col class="animate__animated animate__fadeIn" v-for="(post,index) in popularPosts" :key="index" cols="6" sm="3">
              <v-card class="image-list-card">
                <router-link class="image-list-link-img" :to="{ name: 'Pickup',params:{ post:`${post.docId}` }}">
                  <v-img :src="post.imgUrl" class="white--text align-end img">
                    <v-card-title class="image-list-title" v-text="post.title"></v-card-title>
                  </v-img>
                </router-link>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                      <v-btn small color="#1E90FF">
                        <router-link class="image-list-link" :to="{ name: 'Pickup',params:{ post:`${post.docId}` }}">
                          more
                        </router-link>
                      </v-btn>
                  </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>
        <!--写真-->
        <v-tab-item>
          <v-row>
            <v-col class="animate__animated animate__fadeIn" v-for="(post,index) in photoPosts" :key="index" cols="6" sm="3">
              <v-card class="image-list-card">
                <router-link class="image-list-link-img" :to="{ name: 'Pickup',params:{ post:`${post.docId}` }}">
                  <v-img :src="post.imgUrl" class="white--text align-end img">
                    <v-card-title class="image-list-title" v-text="post.title"></v-card-title>
                  </v-img>
                </router-link>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                      <v-btn small color="#1E90FF">
                        <router-link class="image-list-link" :to="{ name: 'Pickup',params:{ post:`${post.docId}` }}">
                          more
                        </router-link>
                      </v-btn>
                  </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>
        <!--イラスト-->
        <v-tab-item>
          <v-row>
            <v-col class="animate__animated animate__fadeIn" v-for="(post,index) in illustPosts" :key="index" cols="6" sm="3">
              <v-card class="image-list-card">
                <router-link class="image-list-link-img" :to="{ name: 'Pickup',params:{ post:`${post.docId}` }}">
                  <v-img :src="post.imgUrl" class="white--text align-end img">
                    <v-card-title class="image-list-title" v-text="post.title"></v-card-title>
                  </v-img>
                </router-link>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                          <v-btn small color="#1E90FF">
                            <router-link class="image-list-link" :to="{ name: 'Pickup',params:{ post:`${post.docId}` }}">
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
    </v-container>  
  </div>
</template>
<script>
import {db} from '../firebase'

  export default{
    name:'Home',
    
    data(){


      return {
        //キーワード検索
        keyword:"",
        //タブの初期値
        tabs:0,
        //新着順
        newPosts:[],
        //人気順
        popularPosts:[],
        //写真
        photoPosts:[],
        //イラスト
        illustPosts:[],

        topBtn:false
      }
    },
     mounted(){
       //新着順を取得
        const storeRef = db.collection('posts');
          storeRef.orderBy('date','desc').get()
            .then((snap)=>{
                snap.forEach(doc =>{
                  this.newPosts.push(doc.data())
                })
            }); 
     },
     methods:{
          //タブの切替時のチェンジメソッド
          tabChange(num){
            //人気順
            if(num === 1){
             const storeRef = db.collection('posts'); 
              this.popularPosts = []
                storeRef.orderBy('likeCount','desc').get()
                  .then((snap)=>{
                    snap.forEach(doc =>{
                      this.popularPosts.push(doc.data());
              })
            })
            //写真
            }else if(num === 2){
             const storeRef = db.collection('posts'); 
              this.photoPosts = []
                storeRef.where('category', '==','写真').get()
                  .then((snap)=>{
                    snap.forEach(doc =>{
                      this.photoPosts.push(doc.data());
              })
            })
            //イラスト
            }else if(num === 3){
             const storeRef = db.collection('posts'); 
              this.illustPosts = []
                storeRef.where('category', '==','イラスト').get()
                  .then((snap)=>{
                    snap.forEach(doc =>{
                      this.illustPosts.push(doc.data());
              })
            }) 
            }else{
              const storeRef = db.collection('posts');
                this.newPosts = []
                  storeRef.orderBy('date','desc').get()
                    .then((snap)=>{
                      snap.forEach(doc =>{
                        this.newPosts.push(doc.data());
                    });
                  }) 
            }
          },
          //検索機能メソッド
          search(keyword){
            this.tabs = 0
            this.newPosts =[]
            db.collection('posts').orderBy('title')
              .startAt(keyword).endAt(keyword + '\uf8ff').get()
               .then((snap)=>{
                 snap.forEach(doc=>{
                   this.newPosts.push(doc.data())
                 })
               })
          },
          //Topへ戻る
          toTop(){
           this.$vuetify.goTo(0)
          },
     }
      
  }
</script>
<style lang="scss" scoped>
  .tab-menu{

    .tab-menu-item{
      font-weight:bold;
    }
  }
  //画像リストの画像
  .img{
    border-radius: 15px 15px 0 0;
    height:200px;
  }
  .img:hover{
    transition: 0.5s;
    color:#fff;
    opacity:0.5;
  }
  .image-list-card{
    border-radius:15px;

    .image-list-link-img{
      text-decoration: none;
      
      .image-list-title{
        font-weight:bold;
        font-size:15px;
      }
    }

    .image-list-link{
      color:#fff;
      font-weight:bold; 
      text-decoration:none;
    }
  }
</style>
