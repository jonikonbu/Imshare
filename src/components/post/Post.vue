<template>
  <div id="post">
    <v-container>
      <PostUploader/>
    </v-container>
  </div>
</template>
<script>
import PostUploader from './PostUploader'
  export default{
    name:'Post',
    components:{
      PostUploader
    }
  }
      </script>
    <style>
#post{
  margin:20px;
  position: relative;
  top:80px;
}
</style>
