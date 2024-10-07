import React, { useState, ReactNode } from "react";
import { Layout } from "antd";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header";
import { Content } from "antd/es/layout/layout";

const { Footer } = Layout;

interface MainLayoutAdminProps {
  children: ReactNode;
}

const MainLayoutAdmin: React.FC<MainLayoutAdminProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = (value: boolean) => {
    console.log("Sidebar collapsed:", value);
    setCollapsed(value);
  };

  return (
    <Layout hasSider>
      <Sidebar collapsed={collapsed} onCollapse={handleCollapse} />
      <Layout
        style={{
          marginInlineStart: collapsed ? 80 : 256,
          transition: "margin 0.2s ease-in-out",
          overflow: "hidden",
        }}
      >
        <Header />
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          {children} {/* Render the children (routes) here */}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          TMovie Dashboard ©{new Date().getFullYear()} Created by An, Anh, Như
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayoutAdmin;
