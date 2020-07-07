import {atom} from 'recoil';

const drawer = atom({
  key: 'drawerState',
  default: {
    open: false,
  },
});

export default drawer;
