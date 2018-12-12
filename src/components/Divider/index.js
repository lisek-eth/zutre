import Divider from './Divider';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Divider);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Divider,
};
