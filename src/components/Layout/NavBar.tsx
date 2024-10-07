import React from "react";
import { Menu } from "antd";
import { menuItems } from "../../utils/menuItems"; // Import menuItems từ menuItems.ts

const NavBar: React.FC = () => {
  return (
    <Menu
      mode="vertical" // Đặt chế độ menu dọc
      theme="dark" // Đặt theme màu tối (giống hình bạn cung cấp)
      defaultSelectedKeys={[window.location.pathname]}
      items={menuItems} // Gắn các mục menu từ menuItems
    />
  );
};

export default NavBar;
