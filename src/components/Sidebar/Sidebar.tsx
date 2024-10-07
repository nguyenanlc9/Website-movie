import React from "react";
import { Layout, Menu, Typography, Tooltip, Button } from "antd";
import {
  LogoutOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { menuItems } from "../../utils/menuItems";

const { Sider } = Layout;
const { Title } = Typography;

interface SidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onCollapse }) => {
  const siderStyle: React.CSSProperties = {
    overflow: "auto",
    height: "100vh",
    position: "fixed",
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: "thin",
    scrollbarColor: "rgba(255,255,255,0.3) rgba(0,0,0,0)",
    background: "#000", // Màu nền đen
    paddingBottom: "50px", // Thêm paddingBottom để tránh chồng chéo
  };

  const projectNameStyle: React.CSSProperties = {
    color: "white", // Màu chữ trắng
    padding: "16px",
    textAlign: "center",
    background: "transparent",
    display: "flex",
    justifyContent: collapsed ? "center" : "space-between",
    alignItems: "center",
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    // Thêm logic xử lý logout tại đây
  };

  return (
    <Sider
      style={siderStyle}
      collapsible
      collapsed={collapsed}
      width={256}
      collapsedWidth={80}
      trigger={null} // Thêm dòng này để xóa nút collapse mặc định
    >
      <div style={projectNameStyle}>
        {/* Hiển thị tiêu đề sidebar */}
        <Title level={collapsed ? 5 : 4} style={{ color: "white", margin: 0 }}>
          {collapsed ? "TM" : "TMovie Dashboard"}
        </Title>

        {/* Nút collapse */}
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => onCollapse(!collapsed)}
          style={{ color: "white" }}
        />
      </div>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={menuItems}
        style={{ background: "transparent", color: "white" }} // Chữ trắng
      />

      {/* Nút Logout */}
      <Tooltip title="Đăng xuất" placement="right">
        <div
          style={{
            padding: "16px",
            textAlign: "center",
            background: "rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          }}
          onClick={handleLogout}
        >
          <LogoutOutlined style={{ fontSize: "18px", color: "#fff" }} />
        </div>
      </Tooltip>
    </Sider>
  );
};

export default Sidebar;
