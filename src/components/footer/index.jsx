import React, { useState } from "react";
import "./index.css"
const Footer = () => {
  return (
    <footer className="bg-white text-black py-10">
      <div className="lg:w-[500px] md:w-[400px] w-[350px] md:ml-20 ml-6 my-10">
        <img
          src="/assets/logo_footer.svg"
          alt="Logo Tuyển sinh PTIT"
          className="w-full h-auto"
        />
      </div>
      <div className="container w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="lg:w-[125%]">
          <h3 className="md:text-xl text-lg font-semibold text-red-500 mb-4">ĐỊA CHỈ HỌC VIỆN</h3>
          <p className="text-lg mb-1 font-medium">Trụ sở chính</p>
          <p>122 Hoàng Quốc Việt, Q. Cầu Giấy, Hà Nội</p>
          <p className="text-lg mb-1 font-medium mt-2">Cơ sở đào tạo tại Hà Nội</p>
          <p>Km10, Đường Nguyễn Trãi, Q. Hà Đông, Hà Nội</p>
          <p className="text-lg mb-1 font-medium mt-2">Học viện cơ sở tại TP. Hồ Chí Minh</p>
          <p>11 Nguyễn Đình Chiểu, P. Đa Kao, Q.1 TP Hồ Chí Minh</p>
          <p className="text-lg mb-1 font-medium mt-2">Cơ sở đào tạo tại TP Hồ Chí Minh</p>
          <p>Đường Man Thiện, P. Hiệp Phú, Q.9 TP Hồ Chí Minh</p>
        </div>

        <div className="lg:pl-16">
          <h3 className="md:text-xl text-lg font-semibold text-red-500 mb-4">THÔNG TIN LIÊN HỆ</h3>
          <p className="text-lg mb-1 font-medium">Số điện thoại</p>
          <p>(024) 33528122</p>
          <p className="text-lg mb-1 font-medium mt-2">Email</p>
          <p>tuyensinh@ptit.edu.vn</p>
          <p className="text-lg mb-1 font-medium mt-2">Fagepage Tuyển sinh PTIT</p>
          <a
            href="https://www.facebook.com/ptittuyensinh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline hover:text-red-500"
          >
            https://www.facebook.com/ptittuyensinh/
          </a>
          <p className="text-lg mb-1 font-medium mt-2">Địa chỉ</p>
          <p>Phòng Đào tạo - HVCNBCVT</p>
        </div>

        <div className="lg:pl-10">
          <h3 className="md:text-xl text-lg font-semibold text-red-500 mb-4">ĐƯỜNG DẪN</h3>
          <p className="text-lg mb-1 font-medium">Cổng thông tin học viện</p>
          <a
            href="https://portal.ptit.edu.vn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline hover:text-red-500"
          >
            https://portal.ptit.edu.vn/
          </a>
          <p className="text-lg mb-1 font-medium mt-2">Cổng thông tin đào tạo</p>
          <a
            href="https://daotao.ptit.edu.vn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline hover:text-red-500"
          >
            https://daotao.ptit.edu.vn/
          </a>
          <p className="text-lg mb-1 font-medium mt-2">Cổng thông tin hợp tác quốc tế</p>
          <a
            href="https://htqt.ptit.edu.vn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline hover:text-red-500"
          >
            https://htqt.ptit.edu.vn/
          </a>
          <p className="text-lg mb-1 font-medium mt-2">Cổng thông tin Khoa học Công nghệ</p>
          <a
            href="https://qlkh.ptit.edu.vn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline hover:text-red-500"
          >
            https://qlkh.ptit.edu.vn/
          </a>
        </div>

        <div className="lg:pl-10">
          <h3 className="md:text-xl text-lg font-semibold text-red-500 mb-4">VỀ CHÚNG TÔI</h3>
          <a href="/home" className="text-lg mb-1 mt-2 inline-block hover:underline cursor-pointer hover:text-red-500">Trang chủ</a> <br />
          <a href="/about/overview" className="text-lg mb-1 mt-2 inline-block hover:underline cursor-pointer hover:text-red-500">Giới thiệu</a> <br />
          <a href="/project" className="text-lg mb-1 mt-2 inline-block hover:underline cursor-pointer hover:text-red-500">Đề án tuyển sinh</a> <br />
          <a href="/chat" className="text-lg mb-1 mt-2 inline-block hover:underline cursor-pointer hover:text-red-500">Chatbot</a> <br />
          <a href="/feedback" className="text-lg mb-1 mt-2 inline-block hover:underline cursor-pointer hover:text-red-500">Phản hồi</a> <br />
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">
        © 2024 Học viện Công nghệ Bưu chính Viễn thông. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
