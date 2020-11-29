<template>
  <div>
    联系人列表
    <template v-for="linkman in linkmans" :key="linkman._id">
      <Linkman :id="linkman._id" :name="linkman.name" :avatar="linkman.avatar"/>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Linkman from './Linkman.vue';
export default defineComponent({
  name: 'LinkmanList',
  components: { Linkman },
  data() {
    return {
      linkmans: [
          {
              _id: 1,
              name: 'litujin',
              avatar: '',
          }
      ],
    };
  },
});
</script>

<style></style>
