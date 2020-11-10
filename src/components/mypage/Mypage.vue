<template>
  <div id="mypage">
      <v-row>
        <v-col cols="12" sm="6" style="text-align:center;">
          <MypageIcon/>
        </v-col>
        <v-col cols="12" sm="6" style="text-align:center;">
          <Mypagelist/>
        </v-col>
      </v-row>
      <MypageTabs style="margin-top:50px;"/>  
</div>
</template>
  <script>
      import MypageIcon from './MypageIcon'
      import Mypagelist from './Mypagelist'
      import MypageTabs from './MypageTabs'

      export default{
        name:'Mypage',
        components:{
          MypageTabs,
          MypageIcon,
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