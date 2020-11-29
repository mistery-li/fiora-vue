<template>
  <div class="fiora-func-linkman-list">
    <FunctionBar v-if="isLogin"/>
    <LinkmanList />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import FunctionBar from './FunctionBar.vue';
import LinkmanList from './LinkmanList.vue';

export default defineComponent({
  name: 'FunctionBarAndLinkmanList',
  components: {
    FunctionBar,
    LinkmanList
  },
  data() {
    return {
      isLogin: false, // vuex 获取
    }
  }
});
</script>

<style></style>
