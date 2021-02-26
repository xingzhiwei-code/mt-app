<template>
  <div class="m-header">
    <el-row> 
        <top-bar />
    </el-row>
     <el-row> 
        <search-area />
    </el-row>
  </div>
</template>

<script>
import topBar from "./topBar.vue";
import searchArea from "./searchArea.vue";
export default {
  components: {
      topBar,
      searchArea
  },
};
</script>

<style lang="scss">
@import "@/assets/css/public/header/index.scss";
</style>