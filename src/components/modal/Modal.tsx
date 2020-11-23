import { defineComponent, render } from 'vue';
import Button from '../button/Button';

export default defineComponent({
  name: 'Modal',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      sVisible: !!this.visible,
    };
  },
  watch: {
    visible(val) {
      this.sVisible = val;
    },
  },
  setup(props, { emit }) {
    const prefixCls = 'fiora-modal';
    function handleCancel(e) {
      console.log('取消');
      emit('update:visible', false);
      emit('cancel', e);
      emit('change', false);
    }
    function handleOk(e) {
      console.log('确认');
      emit('ok', e);
    }
    function renderTitle() {
      return <div class={`${prefixCls}-title`}>{props.title}</div>;
    }
    function renderContent() {
      return <div class={`${prefixCls}-content`}>modal 内容</div>;
    }

    function renderFooter() {
      return (
        <div class={`${prefixCls}-footer`}>
          <Button onClick={handleCancel}>取消</Button>
          <Button onClick={handleOk}>确认</Button>
        </div>
      );
    }
    return () => {
      return (
        <div class="fiora-modal-wrapper">
          {renderTitle()}
          {renderContent()}
          {renderFooter()}
        </div>
      );
    };
  },
});
