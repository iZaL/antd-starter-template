import React from "react";
import {Drawer, Layout} from "antd";
import {useRecoilState} from "recoil";
import SidebarContent from "components/Sidebar/SidebarContent";
import drawerStateAtom from "atoms/drawer";

const { Sider } = Layout;

const Sidebar = () => {
  const [drawerState, setDrawerState] = useRecoilState(drawerStateAtom);

  const onToggleCollapsedNav = () => {
    setDrawerState({
      open:!drawerState.open
    });
  };

  return (
    <Sider className="gx-app-sidebar gx-layout-sider-dark gx-collapsed-sidebar">
      <Drawer
        className="gx-drawer-sidebar gx-drawer-sidebar-dark"
        placement="left"
        closable={false}
        onClose={onToggleCollapsedNav}
        visible={drawerState.open}
      >
        <SidebarContent />
      </Drawer>
    </Sider>
  );
};
export default Sidebar;
