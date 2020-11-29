<template>
  <div class="fiora-main">
    <Sidebar />
    <FunctionBarAndLinkmanList />
    <Chat />
  </div>
</template>

<script lang="ts">
import Sidebar from '/views/Sidebar/Sidebar.vue';
import FunctionBarAndLinkmanList from '../src/views/FunctionBarAndLinkmanList/FunctionBarAndLinkmanList.vue';
import Chat from '/views/Chat/Chat.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  components: {
    Sidebar,
    FunctionBarAndLinkmanList,
    Chat,
  },
});
</script>

<style lang="sass" scoped>
</style>
