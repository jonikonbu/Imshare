<template>
  <!--ローディング画面-->
    <div>
      <v-overlay>
        <div class="fullview">
          <div class="loading-spacer"></div>
            <vue-loading 
              type="spin"
              color="#aaa"
              :size="{ width: '50px', height: '50px' }"
              >
            </vue-loading>
        </div>
      </v-overlay>
  </div>
</template>
<script>
import { VueLoading } from 'vue-loading-template'

export default {
  name: 'loading',
  components: {
    VueLoading,
  },

}
</script>
<style scoped>
.fullview {
  width: 100%;
  height: 100%;
  background: #fefefe;
  position: fixed;
  top: 0;
  left: 0;
}
.loading-spacer {
  height: 30%;
}
</style>