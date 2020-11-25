import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About',

  setup() {
    return () => {
      return <div>关于</div>;
    };
  },
});
