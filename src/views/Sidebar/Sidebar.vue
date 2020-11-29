<template>
  <div class="fiora-siderbar">
    <div>
      <a-tooltip placement="right">
        <template #title>
          <span>源码</span>
        </template>
        <GithubOutlined />
      </a-tooltip>
    </div>
    <div>
      <a-tooltip placement="right">
        <template #title>
          <span>关于</span>
        </template>
        <InfoCircleOutlined />
      </a-tooltip>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { GithubOutlined, InfoCircleOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  name: 'Sidebar',
  components: {
    GithubOutlined,
    InfoCircleOutlined,
  },
  setup(props) {},
});
</script>

<style></style>
