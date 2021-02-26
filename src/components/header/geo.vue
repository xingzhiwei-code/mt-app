<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location" />
      {{ $store.state.position.name }}
      <router-link class="changeCity" :to="{ name: 'changeCity' }"
        >切换城市</router-link
      >
      [
         <a href="#" v-for="(item, index) in nearCity" :key="index"> {{item.name}} </a> 
      ]
      <div class="m-user">
        <router-link class="login" :to="{ name: 'login' }"
          >{{ $store.state.userName }}</router-link
        >
        <router-link class="register" :to="{ name: 'register' }"
          >注册</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      nearCity: [],
    };
  },
  watch: {
    "$store.state.position": function () {
      // 根本获取不到
      this.nearCity = this.$store.state.position.nearCity;
    },
  },
  created() {
    api.getCurPosition().then((res) => {
      this.$store.dispatch("setPosition", res.data.data);
      this.nearCity = res.data.data.nearCity;
    });
  },
};
</script>

<style>
</style>