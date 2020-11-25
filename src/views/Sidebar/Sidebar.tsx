import { defineComponent } from 'vue';

import Download from './Download';
import Setting from './Setting';
import SelfInfo from './SelfInfo';

export default defineComponent({
  name: 'Sidebar',

  setup(props) {
    return () => {
      return (
        <div>
          <Download />
          <SelfInfo />
          <Setting />
        </div>
      );
    };
  },
});
