<template>
  <div class="fiora-main">
    <Sidebar />
    <FunctionBarAndLinkmanList />
    <Chat />
  </div>
</template>

<script lang="ts">
import Sidebar from '../src/views/Sidebar/Sidebar.vue';
import FunctionBarAndLinkmanList from '../src/views/FunctionBarAndLinkmanList/FunctionBarAndLinkmanList.vue';
import Chat from '../src/views/Chat/Chat.vue';
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

<style></style>
