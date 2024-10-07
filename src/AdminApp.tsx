import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayoutAdmin from "./components/Layout/MainLayoutAdmin";
import QuanLyNguoiDung from "./pages/AdminPage/QuanLyNguoiDung";
import TongQuan from "./pages/AdminPage/TongQuan";
import QuanLyPhim from "./pages/AdminPage/QuanLyPhim";
import QuanLyTheLoai from "./pages/AdminPage/QuanLyTheLoai";
import DanhGiaBinhLuan from "./pages/AdminPage/DanhGiaBinhLuan";
import ThongKeBaoCao from "./pages/AdminPage/ThongKeBaoCao";
import CaiDatHeThong from "./pages/AdminPage/CaiDatHeThong";
import Profile from "./pages/AdminPage/Profile";

const AdminApp = () => {
  return (
    <MainLayoutAdmin>
      <Routes>
        <Route path="/" element={<TongQuan />} />
        <Route path="quanlyphim" element={<QuanLyPhim />} />
        <Route path="quanlytheloai" element={<QuanLyTheLoai />} />
        <Route path="quanlynguoidung" element={<QuanLyNguoiDung />} />
        <Route path="danhgiabinhluan" element={<DanhGiaBinhLuan />} />
        <Route path="thongkebaocao" element={<ThongKeBaoCao />} />
        <Route path="caidathethong" element={<CaiDatHeThong />} />
        <Route path="Profile" element={<Profile />} />
      </Routes>
    </MainLayoutAdmin>
  );
};

export default AdminApp;
