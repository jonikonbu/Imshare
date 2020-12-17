<template>
    <div>
        <v-btn
            @click="toTop" 
            fab
            dark
            fixed
            bottom
            right
            color="#1E90FF"
            class="top-btn animate__animated animate__rubberBand"
            >
         <v-icon>mdi-apple-keyboard-control</v-icon>
        </v-btn>
    </div>
</template>
<script>
    export default{
        methods:{
            //Topへ戻る
            toTop(){
            this.$vuetify.goTo(0)
            }
        }
    }
</script>