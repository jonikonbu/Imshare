<template>
  <div id="mypage">
    <v-container>
      <Mypagelist/>
      <MypageTabs/>
  </v-container>
          
</div>
</template>
  <script>
      import Mypagelist from './Mypagelist'
      import MypageTabs from './MypageTabs'

      export default{
        name:'Mypage',
        components:{
          MypageTabs,
          Mypagelist
        },
      }
  </script>
  <style scoped>
    #mypage{
      position: relative;
      top:50px;
    }
    ul{
      list-style: none;
    }
    
    

    



      
      
      
  </style>