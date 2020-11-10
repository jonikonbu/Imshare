<template>
    <div id="mypage-list">
        <div class="mypage-list">
            <Loading v-show="loading"/>
                <!--ユーザー名表示-->
                <ul class="user-list-name">
                    <li class="user-list-name-text">
                        Name：{{this.$store.state.user.name}}
                    </li>
                    <hr/>
                    <!--変更する名前の入力-->
                    <li>
                        <v-text-field class="name-input" placeholder="変更したい名前を入力" v-model="userName" label="Name" required>
                            Name
                        </v-text-field>
                    </li>
                </ul>
                <!--名前変更ボタン--> 
                <div class="name-submit">
                    <v-btn color="#1E90FF" class="submit-btn" @click="userNameChangePush">
                        <span>
                            名前を変更
                        </span>
                    </v-btn>
                </div>
                <!--Eメール表示-->
                <ul class="user-list-email">
                    <li class="user-list-email-text">
                        Email：{{this.$store.state.user.email}}
                    </li>
                    <hr/>
                </ul>
                <div class="email-password-btn-area">
                    <ul>
                        <!--Eメール変更ボタン-->
                        <li>
                            <v-btn color="#1E90FF" @click="emailDialog = true">
                                <span>
                                    Emailを変更
                                </span>
                            </v-btn>
                        </li>
                        <!--パスワード変更ボタン-->
                        <li>
                            <v-btn color="#1E90FF" @click="passWordVerificationDialog = true">
                                <span>
                                    パスワードを変更
                                </span>
                            </v-btn>
                        </li>
                    </ul>
                </div>
        </div>
        <br/>
            <!--パスワード変更確認ダイアログ-->
            <v-dialog v-model="passWordVerificationDialog" max-width="300">
                <v-card>
                    <v-card-title>パスワード変更</v-card-title>
                        <v-card-text>
                            パスワード変更のため、設定中のEmailアドレスに変更手続きメールを送りますが、よろしいですか？
                        </v-card-text>
                        <v-divider></v-divider>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                    <v-btn small color="#1E90FF" @click="passWordVerificationDialog = !passWordVerificationDialog">
                                    <span class="dialog-btn">閉じる</span>
                                    </v-btn>
                                    <v-btn small color="red" @click="changePass(user.email)">
                                    <span class="dialog-btn">はい</span>
                                    </v-btn>
                            </v-card-actions>  
                </v-card>  
            </v-dialog>
            <!--パスワード変更メール送信ダイアログ-->
            <v-dialog v-model="passWordDialog" max-width="300" @keydown.enter="passWordDialog=false">
                <passwordChangeDialog @passwordClose="passWordDialog = false"></passwordChangeDialog>
            </v-dialog>
            <!--Eメールアドレス変更ダイアログ-->
            <v-dialog v-model="emailDialog" max-width="600">
                <MailChangeDialog @mailClose="emailDialog = false"></MailChangeDialog>
            </v-dialog>
    </div>
</template>
<script>

    import passwordChangeDialog from './dialog/PasswordChangeDialog'
    import MailChangeDialog from './dialog/MailChangeDialog'
    import {auth} from '../../firebase'
    import {userNameChange} from '../js/Mypage'
    import Loading from '../Loading'
    
    export default{
        components:{
            passwordChangeDialog,
            MailChangeDialog,
            Loading
        },
        data(){
              return{
                  loading:false,
                  //入力したユーザー名を保管(変更)
                  userName:'',

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
        }
    }    
</script>
<style scoped lang="scss">

    .mypage-list{
        width:100%;
        //ユーザー名の表示場所
        .user-list-name{
            text-align: left;
            margin-top:15px;

            li{
                list-style:none;
            }

            .user-list-name-text{
                font-size:20px;
            }
            .name-input{
                text-align: center;
                margin-top:30px;
                padding-right:10px;
            }
        }

        //名前変更ボタン
        .name-submit{
            text-align:right; 
            margin-top:25px;

            .submit-btn{
                margin-top:20px; 
                font-weight:bold;

                span{
                    color:#fff;
                }
            }
        }

        .user-list-email{
            text-align: left;
            margin-top:20px; 

            .user-list-email-text{
                margin-top:35px; 
                font-size:20px;
                list-style: none;
            }
        }
        .email-password-btn-area{
            text-align:right;

            li{
                list-style: none;
                margin-top:30px;

                span{
                    color:#fff; 
                    font-weight:bold;
                }
            }
        }
    }
    .dialog-btn{
        color:#fff; 
        font-weight:bold
    }
    .email-dialog-input{
        margin-top:10px;
    }
</style>