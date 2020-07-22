import React,{useState} from 'react'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

function NavBar() {
  const [current,setCurrent]=useState('mail');

    return (
      <Menu selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="Navbar" icon={<AppstoreOutlined />}>
          About
        </Menu.Item>
        <Menu.Item key="alipay">
         Contact
        </Menu.Item>
      </Menu>
    );
  }
  export default NavBar;
