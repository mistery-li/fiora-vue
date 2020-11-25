import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SelfInfo',

  setup(props) {
    return () => {
      return <div>个人信息</div>;
    };
  },
});
