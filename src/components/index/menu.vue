<template>
  <div class="m-menu" @mouseleave="menuLeave">
    <dl class="nav">
      <dt>全部分类</dt>
      <dd
        v-for="(item, index) in menuList"
        :key="index"
        @mouseenter="menuEnter(item)"
      >
        <i :class="item.type"></i>
        {{ item.name }}
        <span class="arrow"></span>
      </dd>
      <div v-if="curDetail" class="detail">
        <!-- 为二级内容区提供一个模板 -->
        <template v-for="(item, index) in curDetail.items">
          <h4 :key="index">{{ item.title }}</h4>
          <span
            v-for="(item, index) in item.items"
            :key="item + '' + index"
            >{{ item }}</span
          >
        </template>
      </div>
    </dl>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      curDetail: null,
      menuList: [],
    };
  },
  created() {
    api.getMenuList().then((res) => {
      this.menuList = res.data.data;
    });
  },
  methods: {
    menuEnter(item) {
      this.curDetail = item;
    },
    menuLeave() {
      this.curDetail = "";
    },
  },
};
</script>

<style>
</style>