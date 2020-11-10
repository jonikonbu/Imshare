<template>
    <v-card>
        <v-card-title>Eメール変更</v-card-title>
            <v-card-text>
                <v-text-field 
                    class="email-dialog-input"
                    placeholder="変更したいEmailアドレスを入力して下さい" 
                    v-model="userEmail" 
                    label="Email" 
                    required
                >
                    Email
            </v-text-field>
                <v-text-field 
                    class="email-dialog-input"  
                    placeholder="設定中のパスワードを入力して下さい" 
                    v-model="userPassword" 
                    label="PassWord" 
                    required
                >
                    PassWord
                </v-text-field>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn small color="#1E90FF" @click="emailClose">
                            <span class="dialog-btn">閉じる</span>
                        </v-btn>
                        <v-btn small color="red" @click="changeEmail($store.state.user.email,userPassword,userEmail)">
                            <span class="dialog-btn">送信</span>
                        </v-btn>
                    </v-card-actions>  
    </v-card> 
</template>
<script>

import {db,auth,fb} from '../../../firebase'
import {logOut} from '../../js/login'

export default{

    data(){
        return {
            //入力したEmailアドレスを保管(変更)
            userEmail:'',
            userPassword:'',
        }
    },
    methods:{
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
                              this.$emit('mailClose')
                            })
                              .then(()=>{
                                  logOut()
                                  this.$router.replace('/',() => {})
                              })
                    })
                    .catch(error=>{
                        alert(error);
                    })
                  })
        },
        emailClose(){
            this.$emit('mailClose')
        }
    }
}
</script>
<style scoped>
    .dialog-btn{
        color:#fff; 
        font-weight:bold
    }
</style>