import React from "react";
import { Menu } from "antd";
import IntlMessages from "util/IntlMessages";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const HorizontalNav = () => {
  return (
    <Menu
      defaultOpenKeys={[1]}
      selectedKeys={[1]}
      mode="horizontal"
    >
      <SubMenu
        className='gx-menu-horizontal'
        key="main"
        title={<IntlMessages id="sidebar.main" />}
      >
        <SubMenu
          className="gx-menu-horizontal"
          key="dashboard"
          title={
            <span>
              {" "}
              <i className="icon icon-dasbhoard" />
              <IntlMessages id="sidebar.dashboard" />
            </span>
          }
        >
          <Menu.Item key="main/dashboard/crypto">
            <a href="/main/dashboard/crypto">
              <i className="icon icon-crypto" />
              <IntlMessages id="sidebar.dashboard.crypto" />
            </a>
          </Menu.Item>

        </SubMenu>

        <Menu.Item key="main/widgets">
          <a href="/main/widgets">
            <i className="icon icon-widgets" />
            <IntlMessages id="sidebar.widgets" />
          </a>
        </Menu.Item>

        <Menu.Item key="main/metrics">
          <a href="/main/metrics">
            <i className="icon icon-apps" />
            <IntlMessages id="sidebar.metrics" />
          </a>
        </Menu.Item>

      </SubMenu>

      <SubMenu
        className='gx-menu-horizontal'
        key="in-built-apps"
        title={<IntlMessages id="sidebar.inBuiltApp" />}
      >
        <Menu.Item key="in-built-apps/mail">
          <a href="/in-built-apps/mail">
            <i className="icon icon-email" />
            <IntlMessages id="sidebar.mailApp" />
          </a>
        </Menu.Item>

      </SubMenu>

      <SubMenu
        className='gx-menu-horizontal'
        key="components"
        title={<IntlMessages id="sidebar.components" />}
      >
        <SubMenu
          className="gx-menu-horizontal"
          key="general"
          title={
            <span>
              <i className="icon icon-all-contacts" />
              <IntlMessages id="sidebar.components.general" />
            </span>
          }
        >
          <Menu.Item key="components/general/button">
            <a href="/components/general/button">
              <IntlMessages id="sidebar.general.button" />
            </a>
          </Menu.Item>
          <Menu.Item key="components/general/icon">
            <a href="/components/general/icon">
              <IntlMessages id="sidebar.general.icon" />
            </a>
          </Menu.Item>
        </SubMenu>

        <SubMenu
          className="gx-menu-horizontal"
          key="navigation"
          title={
            <span>
              <i className="icon icon-navigation" />
              <IntlMessages id="sidebar.components.navigation" />
            </span>
          }
        >
          <Menu.Item key="components/navigation/affix">
            <a href="/components/navigation/affix">
              <IntlMessages id="sidebar.navigation.affix" />
            </a>
          </Menu.Item>
          <Menu.Item key="components/navigation/breadcrumb">
            <a href="/components/navigation/breadcrumb">
              <IntlMessages id="sidebar.navigation.breadcrumb" />
            </a>
          </Menu.Item>

        </SubMenu>


        <SubMenu
          className="gx-menu-horizontal"
          key="feedBack"
          title={
            <span>
              <i className="icon icon-feedback" />
              <IntlMessages id="sidebar.components.feedBack" />
            </span>
          }
        >
          <Menu.Item key="components/feedBack/alert">
            <a href="/components/feedBack/alert">
              <IntlMessages id="sidebar.feedBack.alert" />
            </a>
          </Menu.Item>

        </SubMenu>


      </SubMenu>



    </Menu>
  );
};

HorizontalNav.propTypes = {};

export default HorizontalNav;
