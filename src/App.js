import React from 'react';
import Home from './scenes/Home';
import {RecoilRoot} from 'recoil';
import 'assets/vendors/style';

function App() {
  return (
    <RecoilRoot>
      <Home />
    </RecoilRoot>
  );
}

export default App;
