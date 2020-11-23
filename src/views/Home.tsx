import { defineComponent, reactive } from 'vue';
import { useStore } from 'vuex';

import Avatar from '../components/Avatar';
import Login from '../components/Login';
import Modal from '../components/modal/Modal';

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore();
    const state = reactive({ isLogin: false });
    const handleShowLogin = () => !state.isLogin;

    return () => {
      return (
        <>
          <Avatar url="123123" width={30} height={30} />
          <h1>Home</h1>
          <h1>{store.state.title}</h1>
          <button onClick={handleShowLogin}>登陆</button>
          <Login if={state.isLogin} />
          <Modal title="modal标题" />
        </>
      );
    };
  },
});
