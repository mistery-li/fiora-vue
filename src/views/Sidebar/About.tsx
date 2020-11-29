import { defineComponent, toRefs } from 'vue';

import Modal from 'ant-design-vue';

export default defineComponent({
  name: 'About',

  setup(props) {
    const { visible } = toRefs(props);
    return () => {
      return (
        <Modal title="关于" visible={visible.value}>
          <div>作者主页</div>
          <div>
            <a>https:github.com</a>
          </div>
        </Modal>
      );
    };
  },
});
