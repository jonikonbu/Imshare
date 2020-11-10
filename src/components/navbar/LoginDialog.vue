<template>
        <v-card>
            <v-card-title>ログイン</v-card-title>
            <v-card-text>
            <v-text-field v-model="loginEmail" label="Email*" required></v-text-field>
            <v-text-field v-model="loginPassword" label="PassWord*" type="password" required></v-text-field>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
            <v-btn color="error" @click="close">閉じる</v-btn>
            <v-btn color="primary" @click="userLogIn">ログイン</v-btn>
            </v-card-actions>
        </v-card>
</template>
<script>
    import {logIn} from '../js/login'

    export default{
        data(){
            return {
                //ログイン登録用
                loginEmail:'',
                loginPassword:''
            }
        },
        methods:{
            userLogIn(){
                logIn(this.loginEmail,this.loginPassword)
                this.$emit('loginClose') 
            },
            close(){
                this.$emit('loginClose')
            }
        }
}   
</script>
<style>

</style>
    