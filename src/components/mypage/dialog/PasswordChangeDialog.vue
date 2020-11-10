<template>
    <v-card>
        <v-card-title>パスワード変更</v-card-title>
        <v-card-text>
            変更手続きメールを送信しました。メールを確認して下さい。
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>
                <v-btn small color="#1E90FF" @click="passClose">
                    <span class="dialog-btn">閉じる</span>
                </v-btn>
        </v-card-actions>  
                    </v-card>
</template>
<script>

export default{

    methods:{
        passClose(){
            this.$emit('passwordClose')
        }
    }
}
</script>
<style>
    .dialog-btn{
        color:#fff; 
        font-weight:bold
    }
</style>