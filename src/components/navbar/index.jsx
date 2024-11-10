import { useLocation, useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import { Dropdown, Menu, Button, Space } from "antd";
import {
  MenuUnfoldOutlined,
  DownOutlined,
} from '@ant-design/icons';
import "./index.css"
function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    {
      key: '1',
      label: <button onClick={() => navigate("/about/overview")}>Tổng quan học viện</button>,
    },
    {
      key: '2',
      label: <button onClick={() => navigate("/about/scholarship")}>Chính sách học bổng</button>,
    },
    {
      key: '3',
      label: <button onClick={() => navigate("/about/faqs")}>Câu hỏi thường gặp</button>,
    },
    {
      key: '4',
      label: <button onClick={() => navigate("/about/score/2024")}>Xem điểm các năm trước</button>,
      children: [
        {
          key: '4-0',
          label: <button onClick={() => navigate("/about/score/2024")}>Điểm trúng tuyển 2024</button>,
        },
        {
          key: '4-1',
          label: <button onClick={() => navigate("/about/score/2023")}>Điểm trúng tuyển 2023</button>,
        },
        {
          key: '4-2',
          label: <button onClick={() => navigate("/about/score/2022")}>Điểm trúng tuyển 2022</button>,
        },
        {
          key: '4-3',
          label: <button onClick={() => navigate("/about/score/2021")}>Điểm trúng tuyển 2021</button>,
        },
        {
          key: '4-4',
          label: <button onClick={() => navigate("/about/score/2020")}>Điểm trúng tuyển 2020</button>,
        },
      ],
    },

  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Đảo ngược trạng thái của menu
  };
  const menuItems = [
    {
      key: "home",
      label: <button onClick={() => navigate("/")}>Trang chủ</button>,
    },
    {
      key: "about",
      label: <button>Giới thiệu</button>,
      children: [
        {
          key: '1',
          label: <button button onClick={() => navigate("/about/overview")}>Tổng quan học viện</button>,
        },
        {
          key: '2',
          label: <button button onClick={() => navigate("/about/scholarship")}>Chính sách học bổng</button>,
        },
        {
          key: '3',
          label: <button button onClick={() => navigate("/about/faqs")}>Câu hỏi thường gặp</button>,
        },
        {
          key: '4',
          label: <button>Xem điểm các năm trước</button>,
          children: [
            {
              key: '4-0',
              label: <button onClick={() => navigate("/about/score/2024")}>Điểm 2024</button>,
            },
            {
              key: '4-1',
              label: <button onClick={() => navigate("/about/score/2023")}>Điểm 2023</button>,
            },
            {
              key: '4-2',
              label: <button onClick={() => navigate("/about/score/2022")}>Điểm 2022</button>,
            },
            {
              key: '4-3',
              label: <button onClick={() => navigate("/about/score/2021")}>Điểm 2021</button>,
            },
            {
              key: '4-4',
              label: <button onClick={() => navigate("/about/score/2020")}>Điểm 2020</button>,
            },
          ],
        },

      ]
    },
    {
      key: "project",
      label: <button onClick={() => navigate("/project")}>Đề án tuyển sinh</button>,
    },
    {
      key: "chat",
      label: <button onClick={() => navigate("/chat")}>Chatbot</button>,
    },
    {
      key: "feedback",
      label: <button onClick={() => navigate("/feedback")}>Phản hồi</button>,
    },
  ];
  return (
    <div className="navbar bg-base-100 w-full fixed top-0 shadow-lg z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden w-full" onClick={handleMenuToggle}>
            <MenuUnfoldOutlined className="text-2xl" />
          </label>

          {isMenuOpen && (
            <Menu mode="vertical" items={menuItems} className="lg:hidden rounded-md absolute z-40">
            </Menu>
          )}
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
                trigger={'hover'}
                menu={{
                  items,
                  style: {
                  }
                }}
              >
                <a
                  className={location.pathname.startsWith("/about") ? "text-red-500" : ""}>
                  <Space>
                    Giới thiệu
                    <DownOutlined className="size-[10px]" />
                  </Space>
                </a>
              </Dropdown>
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
                onClick={() => navigate("/chat")}
                className={location.pathname === "/chat" ? "text-red-500" : ""}
              >
                Chatbot
              </button>
            </li>

            <li className="p-1 text-lg font-medium hover:text-red-500 font-sans">
              <button
                onClick={() => navigate("/feedback")}
                className={location.pathname === "/feedback" ? "text-red-500" : ""}
              >
                Phản hồi
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
