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
      <div>
        <v-tabs color="#000080" v-model="tabs" @change="tabChange">
          <v-tab>
            <span style="font-weight:bold;">
              新着順
            </span></v-tab>
          <v-tab>
            <span style="font-weight:bold;">
              人気順
            </span>
          </v-tab>
          <v-tab>
            <span style="font-weight:bold;">
              写真
            </span>
          </v-tab>
          <v-tab>
            <span style="font-weight:bold;">
              イラスト
            </span>
          </v-tab>
        </v-tabs>
      <v-container fluid>
        <v-tabs-items v-model="tabs"> 
         <!--画像リスト-->
          <!--新着順-->
          <v-tab-item>
            <v-row>
              <v-col v-for="(post,index) in newPosts" :key="index" cols="6" sm="3">
                <v-card style="border-radius:15px;">
                  <v-img :src="post.imgUrl" class="white--text align-end img img-size">
                    <v-card-title style="font-weight:bold; font-size:15px;" v-text="post.title"></v-card-title>
                  </v-img>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                        <v-btn small color="#1E90FF">
                          <router-link :to="{ name: 'Pickup',params:{ post:`${post.docId}` }}" style="color:#fff; font-weight:bold; text-decoration:none;">
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
            <v-col v-for="(post,index) in popularPosts" :key="index" cols="6" sm="3">
              <v-card style="border-radius:15px;">
                <v-img :src="post.imgUrl" class="white--text align-end img img-size">
                  <v-card-title style="font-weight:bold; font-size:15px;" v-text="post.title"></v-card-title>
                    </v-img>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                      <v-btn small color="#1E90FF">
                        <router-link :to="{ name: 'Pickup',params:{ post:`${post.docId}` }}" style="color:#fff; font-weight:bold; text-decoration:none;">
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
            <v-col v-for="(post,index) in photoPosts" :key="index" cols="6" sm="3">
              <v-card style="border-radius:15px;">
                <v-img :src="post.imgUrl" class="white--text align-end img img-size">
                  <v-card-title style="font-weight:bold; font-size:15px;" v-text="post.title"></v-card-title>
                </v-img>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                      <v-btn small color="#1E90FF">
                        <router-link :to="{ name: 'Pickup',params:{ post:`${post.docId}` }}" style="color:#fff; font-weight:bold; text-decoration:none">
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
            <v-col v-for="(post,index) in illustPosts" :key="index" cols="6" sm="3">
              <v-card style="border-radius:15px;">
                <v-img :src="post.imgUrl" class="white--text align-end img img-size">
                  <v-card-title style="font-weight:bold; font-size:15px;" v-text="post.title"></v-card-title>
                    </v-img>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                          <v-btn small color="#1E90FF">
                            <router-link :to="{ name: 'Pickup',params:{ post:`${post.docId}` }}" style="color:#fff; font-weight:bold; text-decoration:none">
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
      <v-btn
        v-scroll="onScroll" 
        @click="toTop" 
        v-show="topBtn"
        fab
        dark
        fixed
        bottom
        right
        color="#1E90FF"
        >
         <v-icon>mdi-apple-keyboard-control</v-icon>
        </v-btn>
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
          toTop(){
           this.$vuetify.goTo(0)
          },
          onScroll(e){
            if (typeof window === 'undefined') return
            const top = window.pageYOffset ||   e.target.scrollTop || 0
            this.topBtn = top > 500
          }
     }
      
  }
</script>
<style>
  .img:hover{
    transition: 0.5s;
    color:#fff;
    opacity:0.5;
  }
.img-size{
  height:200px;
}
</style>
