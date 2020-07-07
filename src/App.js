import React from "react";
import Home from "./scenes/Home";
import { RecoilRoot } from "recoil";
import "assets/vendors/style";
import "styles/wieldy.less";

function App() {
  return (
    <RecoilRoot>
      <Home />
    </RecoilRoot>
  );
}

export default App;
