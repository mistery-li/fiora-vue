import { defineComponent } from 'vue';
import Sidebar from './views/Sidebar/Sidebar';

export default defineComponent({
  name: 'App',
  setup() {
    return () => {
      return (
        <div class="fiora-main">
          <Sidebar />
        </div>
      );
    };
  },
});
