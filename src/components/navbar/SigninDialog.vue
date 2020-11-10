<template>
    <v-card>
        <v-card-title>新規登録</v-card-title>
        <v-card-text>
          <v-text-field v-model="signInName" label="Name*" required></v-text-field>
          <v-text-field v-model="signInEmail" label="Email*" required></v-text-field>
          <v-text-field v-model="signInPassword" label="PassWord*" type="password" required></v-text-field>
        </v-card-text>
        <v-divider></v-divider>
          <v-card-actions>
          <v-btn color="error" @click="close">閉じる</v-btn>
          <v-btn color="primary" @click="userSignIn">確定</v-btn>
        </v-card-actions>
      </v-card>
</template>
<script>

    import {signIn} from '../js/login'

    export default{
        data(){
            return{
                //新規登録用
                signInName:'',
                signInEmail:'',
                signInPassword:''
            }
        },
        methods:{
            //新規登録処理
            userSignIn(){
                signIn(this.signInEmail,this.signInPassword,this.signInName)
                alert('登録が完了しました。');
                this.$emit('signinClose')
                this.$router.push('/');
                
            },
            close(){
                this.$emit('signinClose')
            }
        }
    }
</script>