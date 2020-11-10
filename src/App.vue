<template>
  <v-app>
   <v-main> 
    <div id="app">
      <Navbar/>
      </div>
    </v-main> 
  </v-app>
</template>

<script>
import Navbar from './components/navbar/Navbar'

export default {
  name:'App',
  components:{
    Navbar,
  }
 
  
}
</script>

<style>
</style>