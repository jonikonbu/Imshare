<template>
  <div>
 <!--ナビゲーションバー-->
    <v-app-bar flat Inverted-Scroll >
      <!--ハンバーガーアイコン-->
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="drawer = true"
    />
    <!--ロゴ-->
    <v-container class="mx-auto py-0">
      <v-row align="center">
        <v-img
          :src="require('../assets/logo.jpg')"
          class="mr-5"
          contain
          height="48"
          width="48"
          max-width="48"
        />

        <!--ナビボタン-->
          <v-btn depressed class="hidden-sm-and-down" style="margin-left:20px;">
            <router-link to="/" style="text-decoration:none; color:#000080; font-weight:bold;">
              Home
            </router-link>
          </v-btn>
          <v-btn depressed class="hidden-sm-and-down" style="margin-left:20px;">
            <router-link to="/post" style="text-decoration:none; color:#000080; font-weight:bold;">
              Post
            </router-link>
          </v-btn>
          <v-btn depressed class="hidden-sm-and-down" style="margin-left:20px;">
            <router-link to="/mypage" style="text-decoration:none; color:#000080; font-weight:bold;">
              Mypage
            </router-link>
          </v-btn>

        <!--ユーザーボタン-->
        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-btn depressed class="hidden-sm-and-down" v-bind="attrs" v-on="on" style="margin-left:20px; color:#000080; font-weight:bold;">
              User
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-btn color="#1E90FF" depressed class="login" @click="loginModal = true">
                <span style="color:#fff;">
                  Login
                </span>
              </v-btn>
            </v-list-item>
            <v-list-item v-if="login">
            <v-list-item-title><v-btn color="#1E90FF" depressed @click="userLogOut"><span style="color:#fff;">Logout</span></v-btn></v-list-item-title>
          </v-list-item>
             <v-list-item v-else>
            <v-list-item-title><v-btn depressed color="#1E90FF" class="signin" @click="signinModal = true"><span style="color:#fff;">Signin</span></v-btn></v-list-item-title>
          </v-list-item>
            
          </v-list>
        </v-menu>
        <!--サーチ機能-->
        </v-row>
      </v-container>
    </v-app-bar>
  <!--ページコンポネント-->
  <router-view class="view"/>
  
  <!--ハンバーガーメニュー ドロワー-->
  <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="#000080">mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
                <router-link to="/" style="text-decoration:none; color:#000080;">
                    Home
                </router-link></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="#000080">mdi-image</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
                <router-link to="/post" style="text-decoration:none; color:#000080;">
                    Post
                </router-link></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="#000080">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
                <router-link to="/mypage" style="text-decoration:none; color:#000080;">
                    Mypage
                </router-link></v-list-item-title>
          </v-list-item>

          <v-list-group no-action sub-group value="true"
        >
        <!--ユーザードロワー-->
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title style="color:#000080;">User</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item >
            <v-list-item-title><v-btn depressed color="#1E90FF" class="login" @click="loginModal = true"><span style="color:#fff;">Login</span></v-btn></v-list-item-title>
          </v-list-item>
          <v-list-item v-if="login">
            <v-list-item-title><v-btn color="#1E90FF" depressed @click="userLogOut"><span style="color:#fff;">Logout</span></v-btn></v-list-item-title>
          </v-list-item>
          <v-list-item v-else>
            <v-list-item-title><v-btn depressed color="#1E90FF" class="signin" @click="signinModal = true"><span style="color:#fff;">Signin</span></v-btn></v-list-item-title>
          </v-list-item>
          
        </v-list-group>

        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>

    <!--新規登録ダイアログ-->
    <v-dialog v-model = "signinModal" max-width="600px">
      <v-card>
        <v-card-title>Signin</v-card-title>
        <v-card-text>
          <v-text-field v-model="signInName" label="Name*" required></v-text-field>
          <v-text-field v-model="signInEmail" label="Email*" required></v-text-field>
          <v-text-field v-model="signInPassword" label="PassWord*" type="password" required></v-text-field>
        </v-card-text>
        <v-divider></v-divider>
          <v-card-actions>
          <v-btn color="error" @click="signinModal = false">Close</v-btn>
          <v-btn color="primary" @click="userSignIn">Registration</v-btn>
        </v-card-actions>
        
      </v-card>
    </v-dialog>
    
    <!--ログインダイアログ-->
    <v-dialog v-model = "loginModal" max-width="600px">
      <v-card>
        <v-card-title>Login</v-card-title>
        <v-card-text>
          <v-text-field v-model="loginEmail" label="Email*" required></v-text-field>
          <v-text-field v-model="loginPassword" label="PassWord*" type="password" required></v-text-field>
        </v-card-text>
        <v-divider></v-divider>
          <v-card-actions>
          <v-btn color="error" @click="loginModal = false">Close</v-btn>
          <v-btn color="primary" @click="userLogIn">Login</v-btn>
        </v-card-actions>
        
      </v-card>
    </v-dialog>
  </div> 
</template>
<script>
import {logOut,logIn,signIn} from '../components/js/login'
import {mapState} from 'vuex'

export default {
  name:'Navbar',
  data(){
    return{
    drawer: false,
    logoutBtnShow:false,
    
    loginModal:false,
    signinModal:false,

    //新規登録用
    signInName:'',
    signInEmail:'',
    signInPassword:'',

    //ログイン登録用
    loginEmail:'',
    loginPassword:''
    }
  },
  computed:{
    ...mapState({loginUser:'login'}),

    login(){
      if(this.loginUser){
        return true
      }else{
        return false
      }

    }
  },
  created(){
   //ログインステータスがfalseの場合はオートログイン
   if (this.$store.state.login == false){
     this.$store.dispatch('autoLogin')
   }
  },
  
  methods:{
    //ログアウト処理
    userLogOut(){
              logOut()
            },
    //ログイン処理        
    userLogIn(){
        logIn(this.loginEmail,this.loginPassword)
          this.loginModal= false 
    },
    //新規登録処理
    userSignIn(){
        signIn(this.signInEmail,this.signInPassword,this.signInName)
          alert('登録が完了しました。');
          this.signinModalt = false
          if(this.$router == '/'){
            console.log('')
          }else{
            this.$router.push('/');
          }
    }
  },
}
</script>