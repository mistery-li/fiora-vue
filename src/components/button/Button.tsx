import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  setup(props, { slots, emit }) {
    const handleClick = (e) => {
      emit('click', e);
    };
    return () => {
      return (
        <div class="fiora-button">
          <button onClick={handleClick}>{slots.default()}</button>
        </div>
      );
    };
  },
});
