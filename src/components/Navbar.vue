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
        <v-col>
          <v-img
            :src="require('../assets/logo.jpg')"
            class="mr-5"
            contain
            height="48"
            width="48"
            max-width="48"
          />
        </v-col>
        <!--ナビボタン-->
          <v-btn depressed class="hidden-sm-and-down nav-btn">
            <router-link to="/" class="nav-btn-link">
              HOME
            </router-link>
          </v-btn>
          <v-btn depressed class="hidden-sm-and-down nav-btn">
            <router-link to="/post" class="nav-btn-link">
              POST
            </router-link>
          </v-btn>
          <v-btn depressed class="hidden-sm-and-down nav-btn">
            <router-link to="/mypage" class="nav-btn-link">
              MYPAGE
            </router-link>
          </v-btn>
        <!--ユーザーボタン-->
        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-btn depressed class="hidden-sm-and-down nav-btn-user" v-bind="attrs" v-on="on">
              <span>
              USER
              </span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-btn color="#1E90FF" depressed class="login user-menu-btn" @click="loginModal = true">
                <span>
                  ログイン
                </span>
              </v-btn>
            </v-list-item>
            <v-list-item v-if="login">
              <v-list-item-title>
                <v-btn color="#1E90FF" class="logout user-menu-btn" depressed @click="userLogOut">
                  <span>
                    ログアウト
                  </span>
                </v-btn>
              </v-list-item-title>
            </v-list-item>
             <v-list-item v-else>
              <v-list-item-title>
                <v-btn depressed color="#1E90FF" class="signin user-menu-btn" @click="signinModal = true">
                  <span>
                    新規登録
                  </span>
                </v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-container>
    <br/>
    <!--ログイン確認テキスト-->
    <div class="navbar-text-area">
    <div v-if="login" class="navbar-text animate__animated animate__bounce">
          <p class="navbar-text-item">ようこそ {{this.$store.state.user.name}} さん</p>
    </div>
    <div v-else class="navbar-text animate__animated animate__bounce">
          <p class="navbar-text-item-else">※USERボタンからログイン又は新規登録ができます。
          </p>
    </div>
    </div>
  <!--ページコンポネント-->
  <router-view class="view animate__animated animate__slideInLeft"/>
    </v-container>
  <!--ハンバーガーメニュー ドロワー-->
  <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="#000080">mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
                <router-link to="/" class="drawer-link">
                  <span>
                    HOME
                  </span>  
                </router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="#000080">mdi-image</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
                <router-link to="/post" class="drawer-link">
                  <span>
                    POST
                  </span>  
                </router-link></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="#000080">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
                <router-link to="/mypage" class="drawer-link">
                  <span>
                    MYPAGE
                  </span>  
                </router-link></v-list-item-title>
          </v-list-item>

          <v-list-group no-action sub-group value="true">
        <!--ユーザードロワー-->
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="drawer-btn-user">
                <span>
                  USER
                </span>
                </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item >
            <v-list-item-title>
              <v-btn depressed color="#1E90FF" class="login drawer-btn-user-item" @click="loginModal = true">
                <span>
                  ログイン
                </span>
              </v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item v-if="login">
            <v-list-item-title>
              <v-btn depressed color="#1E90FF" class="logout drawer-btn-user-item" @click="userLogOut">
                <span>
                  ログアウト
                </span>
              </v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item v-else>
            <v-list-item-title>
              <v-btn depressed color="#1E90FF" class="signin drawer-btn-user-item" @click="signinModal = true">
                <span>
                  新規登録
                </span>
              </v-btn>
            </v-list-item-title>
          </v-list-item>
          
        </v-list-group>

        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>

    <!--新規登録ダイアログ-->
    <div>
    <v-dialog v-model = "signinModal" max-width="600px">
      <v-card>
        <v-card-title>新規登録</v-card-title>
        <v-card-text>
          <v-text-field v-model="signInName" label="Name*" required></v-text-field>
          <v-text-field v-model="signInEmail" label="Email*" required></v-text-field>
          <v-text-field v-model="signInPassword" label="PassWord*" type="password" required></v-text-field>
        </v-card-text>
        <v-divider></v-divider>
          <v-card-actions>
          <v-btn color="error" @click="signinModal = false">閉じる</v-btn>
          <v-btn color="primary" @click="userSignIn">確定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
    
    <!--ログインダイアログ-->
    <v-dialog v-model = "loginModal" max-width="600px">
      <v-card>
        <v-card-title>ログイン</v-card-title>
        <v-card-text>
          <v-text-field v-model="loginEmail" label="Email*" required></v-text-field>
          <v-text-field v-model="loginPassword" label="PassWord*" type="password" required></v-text-field>
        </v-card-text>
        <v-divider></v-divider>
          <v-card-actions>
          <v-btn color="error" @click="loginModal = false">閉じる</v-btn>
          <v-btn color="primary" @click="userLogIn">ログイン</v-btn>
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
    //ハンバーガーメニューの中身の表示（初期値）
    drawer: false,
    //ログアウトボタンの出現条件（初期値）
    logoutBtnShow:false,
    
    //ログインモーダルの初期値
    loginModal:false,
    //サインインモーダルの初期値
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
<style scoped lang="scss">
  
  .navbar-text {
    text-align: center;

    .navbar-text-item{
      font-size:13px;
      color:rgb(133, 133, 133);
      font-weight:bold;
    }
    .navbar-text-item-else{
      font-size:13px;
      color:red;
      font-weight:bold;
    }
  }
  .nav-btn{
    margin-left:20px;

      .nav-btn-link{
        text-decoration:none;
        color:#000080; 
        font-weight:bold;
      }
  }
  .nav-btn-user{
    margin-left:20px; 

      span{
        font-weight:bold;
        color:#000080;
      }
  }
  .user-menu-btn{

    span{
      color:white;
      font-weight:bold;
    }
  }
  .navbar-text {
    text-align: center;

      .navbar-text-item{
        font-size:13px;
      }
  }
  .drawer-link{
    text-decoration:none;

      span{
        color:#000080;
        font-weight:bold;
      }
  }
  .drawer-btn-user{
    color:#000080;

    span{
      font-weight:bold;
    }
  }
  .drawer-btn-user-item{

    span{
      color:white;
      font-weight:bold;
    }
  }

  .animate__animated.animate__slideInLeft {
    --animate-duration: 1.5s;
  }
</style>