import React from "react";
import { Badge, Dropdown, Menu } from "antd";
import { BellOutlined } from "@ant-design/icons";

const Notifications: React.FC = () => {
  const menu = (
    <Menu>
      <Menu.Item key="0">Thông báo 1</Menu.Item>
      <Menu.Item key="1">Thông báo 2</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">Xem tất cả thông báo</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Badge count={5}>
        <BellOutlined style={{ fontSize: "20px" }} />
      </Badge>
    </Dropdown>
  );
};

export default Notifications;
