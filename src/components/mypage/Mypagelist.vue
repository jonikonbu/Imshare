<template>
    <div id="mypage-list">
        <div class="mypage-list">
            <Loading v-show="loading"/>
                <!--ユーザー名表示-->
                <ul style="margin:10px;" class="user-list">
                    <li style="margin-top:30px; font-size:20px;">
                        Name：{{this.$store.state.user.name}}
                    </li>
                    <hr/>
                    <!--変更する名前の入力-->
                    <li>
                        <v-text-field 
                            placeholder="変更したい名前を入力" 
                            v-model="userName" 
                            label="Name" 
                            required style="margin-top:10px;"
                        >
                                Name
                        </v-text-field>
                    </li>
                </ul>

                <!--名前変更ボタン--> 
                <div style="text-align:right; margin:20px;">
                    <v-btn
                    color="#1E90FF" 
                    class="btn" 
                    @click="userNameChangePush" 
                    style="margin-top:5px; font-weight:bold;"
                    >
                        <span style="color:#fff;">
                            名前を変更
                        </span>
                    </v-btn>
                </div>
                <!--Eメール表示-->
                <ul style="margin-top:10px; margin-left:10px;" class="user-list">
                    <li style="margin-top:30px; font-size:20px;">
                        Email：{{this.$store.state.user.email}}
                    </li>
                    <hr/>
                </ul>
                <div style="text-align:right;">
                    <ul>
                        <!--Eメール変更ボタン-->
                        <li style="margin:20px;">
                            <v-btn color="#1E90FF" @click="emailDialog = true">
                                <span style="color:#fff; font-weight:bold;">
                                    Emailを変更
                                </span>
                            </v-btn>
                        </li>
                        <!--パスワード変更ボタン-->
                        <li style="margin:20px;">
                            <v-btn color="#1E90FF" @click="passWordVerificationDialog = true">
                                <span style="color:#fff; font-weight:bold;">
                                    パスワードを変更
                                </span>
                            </v-btn>
                        </li>
                    </ul>
                </div>
        </div>
        <br/>
            <!--パスワード変更確認ダイアログ-->
            <v-dialog
            v-model="passWordVerificationDialog"
            max-width="300"
            >
                <v-card>
                    <v-card-title>パスワード変更</v-card-title>
                        <v-card-text>
                            パスワード変更のため、設定中のEmailアドレスに変更手続きメールを送りますが、よろしいですか？
                        </v-card-text>
                        <v-divider></v-divider>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                    <v-btn small color="#1E90FF" @click="passWordVerificationDialog = !passWordVerificationDialog">
                                    <span style="color:#fff; font-weight:bold">閉じる</span>
                                    </v-btn>
                                    <v-btn small color="red" @click="changePass(user.email)">
                                    <span style="color:#fff; font-weight:bold">はい</span>
                                    </v-btn>
                            </v-card-actions>  
                </v-card>  
            </v-dialog>
            <!--パスワード変更メール送信ダイアログ-->
            <v-dialog
            v-model="passWordDialog"
            max-width="300"
            @keydown.enter="passWordDialog=false"
            >
                <v-card>
                    <v-card-title>パスワード変更</v-card-title>
                        <v-card-text>
                            変更手続きメールを送信しました。メールを確認して下さい。
                        </v-card-text>
                            <v-divider></v-divider>
                                <v-card-actions>
                                <v-spacer></v-spacer>
                                    <v-btn small color="#1E90FF" @click="passWordDialog = !passWordDialog">
                                    <span style="color:#fff; font-weight:bold">閉じる</span>
                                    </v-btn>
                                </v-card-actions>  
                    </v-card>  
                </v-dialog>
                        <!--Eメールアドレス変更ダイアログ-->
            <v-dialog
            v-model="emailDialog"
            max-width="600"
            >
                <v-card>
                    <v-card-title>Eメール変更</v-card-title>
                        <v-card-text>
                            <v-text-field 
                            placeholder="変更したいEmailアドレスを入力して下さい" 
                            v-model="userEmail" 
                            label="Email" 
                            required style="margin-top:10px;"
                            >
                                            Email
                            </v-text-field>
                            <v-text-field 
                            placeholder="設定中のパスワードを入力して下さい" 
                            v-model="userPassword" 
                            label="PassWord" 
                            required style="margin-top:10px;"
                            >
                            PassWord
                            </v-text-field>
                            </v-card-text>
                            <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                        <v-btn small color="#1E90FF" @click="emailDialog = !emailDialog">
                                            <span style="color:#fff; font-weight:bold">閉じる</span>
                                        </v-btn>
                                        <v-btn small color="red" @click="changeEmail($store.state.user.email,userPassword,userEmail)">
                                            <span style="color:#fff; font-weight:bold">送信</span>
                                        </v-btn>
                                </v-card-actions>  
                </v-card>  
            </v-dialog>
    </div>
</template>
<script>
    import {db,auth,fb} from '../../firebase'
    import {logOut} from '../js/login'
    import {userNameChange} from '../js/Mypage'
    import Loading from '../Loading'
    
    export default{
        components:{
            Loading
        },
        data(){
              return{
                  loading:false,
                  //入力したユーザー名を保管(変更)
                  userName:'',

                  //入力したEmailアドレスを保管(変更)
                  userEmail:'',
                  userPassword:'',
                  
                  //ユーザー情報を保管
                  user:this.$store.state.user,

                  //パスワード変更確認ダイアログ
                  passWordVerificationDialog:false,
                  //パスワード変更メール送信ダイアログ
                  passWordDialog:false,

                  //メールアドレス変更ダイアログ
                  emailDialog:false,
              }
        },
        methods:{
            //ユーザー名変更
            userNameChangePush(){
              const name = this.userName
              const uid = this.$store.state.userUid.uid
              userNameChange(name,uid)
            },
            //パスワード変更
            changePass(email){
              this.passWordVerificationDialog = false
                auth.sendPasswordResetEmail(email)
                  .then(()=>{
                    console.log('送信しました')
                    this.passWordDialog = true
                  })
            },
            //Eメール変更
            changeEmail(email,inputPassword,inputEmail){
              const user = auth.currentUser
              const credential = fb.auth.EmailAuthProvider.credential(email,inputPassword)
                //ユーザー認証
                user.reauthenticateWithCredential(credential)
                  .then(()=>{
                    //Email変更
                    user.updateEmail(inputEmail)
                      .then(()=>{
                        //firestoreユーザー情報変更
                        db.collection('users').doc(this.$store.state.userUid.uid)
                          .update({
                            email:inputEmail
                          })
                            .then(()=>{
                              alert('Emailを変更しました。再ログインしてください。')
                              this.emailDialog = false
                            })
                              .then(()=>{
                                  logOut()
                              })
                                .then(()=>{
                                    this.$router.path('/')
                                })
                    })
                    .catch(error=>{
                        alert(error);
                    })
                  })
            },
        }
    }    
</script>
<style scoped lang="scss">
    ul{
      list-style: none;
    }
</style>