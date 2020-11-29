<template>
  <div class="fiora-linkman">
      联系人
      <div class="avatar">
          <a-avatar>USER</a-avatar>
      </div>
      <div class="name-preview">
          <div class="name">{{name}}</div>
          <div class="preview">litujin:  碎觉</div>
      </div>
      <div class="date">昨天</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'Linkman',
    props: {
       id: {
           type: Number,
           defaullt: 0,
       },
       name: {
           type: String,
           default: ''
       },
       avatar: {
           type: String,
           default: ''
       },
       
    }
})
</script>

<style lang="scss" scoped>
.fiora-linkman {
    display: flex;
}
</style>