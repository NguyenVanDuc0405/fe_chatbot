import { useLocation, useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import { Dropdown, Menu, Button, Space } from "antd";
import {
  MenuUnfoldOutlined,
  DownOutlined,
} from '@ant-design/icons';
import "../components/index.css"
function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    {
      key: '1',
      label: 'Tổng quan học viện',
    },
    {
      key: '2',
      label: 'Chính sách học bổng',
    },
    {
      key: '3',
      label: 'Câu hỏi thường gặp',
    },
    {
      key: '4',
      label: 'Xem điểm các năm trước',
      children: [
        {
          key: '4-1',
          label: 'Điểm trúng tuyển 2023',
        },
        {
          key: '4-2',
          label: 'Điểm trúng tuyển 2022',
        },
        {
          key: '4-3',
          label: 'Điểm trúng tuyển 2021',
        },
        {
          key: '4-4',
          label: 'Điểm trúng tuyển 2020',
        },
      ],
    },

  ];
  return (
    <div className="navbar bg-base-100 w-full ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden w-full">
            <MenuUnfoldOutlined className="text-2xl" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">
                <span>Trang chủ</span>
              </Link>
            </li>
            <li>
              <Link to="/chat">
                <span>Trò chuyện</span>
              </Link>
            </li>
            <li>
              <Link to="/faq">
                <span>FAQs</span>
              </Link>
            </li>
            <li>
              <Link to="/issue">
                <span>Góp ý/Báo lỗi</span>
              </Link>
            </li>
          </ul>
        </div>
        <button
          onClick={() => navigate("/")}
          className="btn btn-ghost normal-case font-extrabold text-2xl bg-[linear-gradient(90deg,hsl(0,100%,30%)_0%,hsl(0,100%,50%)_20%,hsl(30,100%,50%)_40%,hsl(30,100%,70%)_60%,hsl(30,100%,50%)_80%,hsl(0,100%,50%)_90%,hsl(0,100%,30%)_100%)] bg-clip-text will-change-auto [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] motion-reduce:!tracking-normal max-[1280px]:!tracking-normal [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(0,100%,30%)_0%,color-mix(in_oklch,hsl(0,100%,50%),hsl(30,100%,50%))_20%,hsl(30,100%,70%)_50%,color-mix(in_oklch,hsl(30,100%,50%),hsl(0,100%,50%))_80%,hsl(0,100%,30%)_100%)]"
        >
          PTIT Chatbot
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <nav className="p-4 rounded-box">
          <ul className="flex space-x-14">
            <li className="p-1 text-lg font-medium hover:text-red-500 font-sans">
              <button
                onClick={() => navigate("/")}
                className={location.pathname === "/home" ? "text-red-500" : ""}
              >
                Trang chủ
              </button>
            </li>
            <li className="p-1 text-lg font-medium hover:text-red-500 font-sans">
              <Dropdown
                menu={{
                  items,
                  style: {
                  }
                }}
              >
                <a onClick={() => navigate("/introduce")}
                  className={location.pathname === "/introduce" ? "text-red-500" : ""}>
                  <Space>
                    Giới thiệu
                    <DownOutlined className="size-[10px]" />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li className="p-1 text-lg font-medium hover:text-red-500 font-sans">
              <button
                onClick={() => navigate("/chat")}
                className={location.pathname === "/chat" ? "text-red-500" : ""}
              >
                Trò chuyện
              </button>
            </li>
            <li className="p-1 text-lg font-medium hover:text-red-500 font-sans">
              <button
                onClick={() => navigate("/project")}
                className={location.pathname === "/project" ? "text-red-500" : ""}
              >
                Đề án tuyển sinh
              </button>
            </li>
            <li className="p-1 text-lg font-medium hover:text-red-500 font-sans">
              <button
                onClick={() => navigate("/issue")}
                className={location.pathname === "/issue" ? "text-red-500" : ""}
              >
                Góp ý/Báo lỗi
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
export default NavBar;
