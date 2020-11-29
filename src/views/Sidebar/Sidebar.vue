<template>
  <div class="fiora-siderbar">
    <div @click="goToGithub">
      <a-tooltip placement="right">
        <template #title>
          <span>源码</span>
        </template>
        <GithubOutlined />
      </a-tooltip>
    </div>
    <div @click="showAbout">
      <a-tooltip placement="right">
        <template #title>
          <span>关于</span>
        </template>
        <InfoCircleOutlined @click="showAbout" />
      </a-tooltip>
    </div>

    <a-modal title="关于" :footer="null" :visible="aboutVisible" @cancel="hideAbout">
      <About />
    </a-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { GithubOutlined, InfoCircleOutlined } from '@ant-design/icons-vue';
import About from './About.vue';
export default defineComponent({
  name: 'Sidebar',
  components: {
    GithubOutlined,
    InfoCircleOutlined,
    About,
  },
  data() {
    return {
      aboutVisible: false,
    };
  },
  methods: {
    showAbout() {
      console.log('show about');
      this.aboutVisible = true;
    },
    hideAbout() {
      this.aboutVisible = false;
    },
    goToGithub() {
      window.open('https://github.com/mistery-li/fiora-vue');
    },
  },
  setup(props) {},
});
</script>

<style>
.ant-modal-title {
  font-weight: bold !important;
}
</style>
