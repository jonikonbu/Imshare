<template>
  <v-app>
   <v-main> 
    <div id="app">
      <Navbar/>
      <TopBtn
      v-show="topBtn"
      v-scroll="onScroll"
      />
      </div>
    </v-main> 
  </v-app>
</template>

<script>
import Navbar from './components/navbar/Navbar'
import TopBtn from './components/TopBtn'

export default {
  name:'App',
  components:{
    Navbar,
    TopBtn
  },
  data(){
    return {
      topBtn:false
    }
  },
  methods:{
    //Topへボタンの出現条件
    onScroll(e){
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.topBtn = top > 300
    }
  }
 
  
}
</script>

<style>
</style>