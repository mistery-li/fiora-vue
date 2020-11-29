import { resolve } from 'path';

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir);
}

export default {
  alias: {
    '/@/': pathResolve('src'),
    '/views/': pathResolve('src/views/')
  },
  optimizeDeps: {
    include: ['@ant-design/icons-vue'],
  },
};
