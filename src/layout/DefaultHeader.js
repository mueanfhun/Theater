import React from 'react'
import { Layout, Button, Dropdown, Icon, Menu, Input   } from 'antd';
import logo from '../img/logo.png'

const { Header } = Layout;
const { Search } = Input;

function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      NOW SHOWING
    </Menu.Item>
    <Menu.Item key="2">
      COMEING SOON
    </Menu.Item>
  </Menu>
);

const DefaultHeader = () => (

    <div className="background-header">
        <img className="logo" src={logo} alt="logo"/>
    <Header className="header-second ">
    <Dropdown className="header-button" overlay={menu}>
      <Button >
        ALL Movie <Icon type="down" />
      </Button>
    </Dropdown>
    <Search
      className="header-button"
      placeholder="input search movie"
      onSearch={value => console.log(value)}
    />
    </Header>
    </div>
    
    
        
  
)

export default DefaultHeader;