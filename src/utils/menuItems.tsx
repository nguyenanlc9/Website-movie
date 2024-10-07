import React from "react";
import type { MenuProps } from "antd";
import { Link } from "react-router-dom";
import {
  DashboardOutlined,
  VideoCameraOutlined,
  UserOutlined,
  CommentOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

export const menuItems: MenuProps["items"] = [
  {
    key: "1",
    icon: <DashboardOutlined />,
    label: React.createElement(Link, { to: "/admin/" }, "Tổng quan"),
  },
  {
    key: "2",
    icon: <VideoCameraOutlined />,
    label: React.createElement(
      Link,
      { to: "/admin/quanlyphim" },
      "Quản lý phim"
    ),
  },
  {
    key: "3",
    icon: <UserOutlined />,
    label: React.createElement(
      Link,
      { to: "/admin/quanlynguoidung" },
      "Quản lý người dùng"
    ),
  },
  {
    key: "4",
    icon: <CommentOutlined />,
    label: React.createElement(
      Link,
      { to: "/admin/danhgiabinhluan" },
      "Đánh giá & Bình luận"
    ),
  },
  {
    key: "5",
    icon: <FileTextOutlined />,
    label: React.createElement(
      Link,
      { to: "/admin/quanlynoidung" },
      "Quản lý nội dung"
    ),
  },
];
