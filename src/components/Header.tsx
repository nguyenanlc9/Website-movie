import React from "react";
import { Layout } from "antd";
import UserProfile from "../components/UserProfile";
import Notifications from "../components/Notifications";

const { Header } = Layout;

const AppHeader: React.FC = () => {
  return (
    <Header
      style={{
        padding: 0,
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end", // Đẩy các phần tử sang phải
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          marginRight: "24px", // Khoảng cách giữa cạnh phải và các phần tử
        }}
      >
        <Notifications />
        <UserProfile />
      </div>
    </Header>
  );
};

export default AppHeader;
