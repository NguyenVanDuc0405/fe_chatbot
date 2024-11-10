import {
  HomeOutlined,
  RightOutlined,
} from '@ant-design/icons';
import Footer from "../../../components/footer";
import "./index.css"
import { useLocation, useNavigate, Link } from "react-router-dom";
import React, { useState } from 'react';
function FAQPage() {
  const data = [["Chatbot hoạt động như thế nào?", "Chatbot hoạt động bằng cách từ câu hỏi của người dùng, sử dụng kỹ thuật tìm văn bản liên quan đến câu hỏi trong bộ dữ liệu đã được vector hóa và lưu trữ vào database. Giúp lấy ra những đoạn văn bản có liên quan sau đó dùng mô hình reranker để lấy ra câu hỏi liên quan nhất và câu trả lời tương ứng."],
  ["Cách sử dụng chatbot để tra cứu thông tin", "Để sử dụng chatbot một cách hiệu quả nhất bạn nên đặt câu hỏi một cách rõ ràng đầy đủ, hoặc bạn có thể tham khảo danh sách các câu hỏi gợi ý để mô hình có thể đưa ra câu trả lời chính xác nhất. Tuy nhiên, ở một số trường hợp câu trả lời có thể không chính xác nên bạn phải kiểm chứng thông tin hoặc liên hệ hỗ trợ nếu cần thiết nhé."],
  ["Thông tin từ chatbot có đáng tin cậy không?", "Chatbot có thể đưa ra các câu trả lời không chính xác ở một số trường hợp, bạn nên kiểm chứng thông tin hoặc liên hệ hỗ trợ nếu cần thiết nhé."],
  ["Tôi có thể liên hệ hỗ trợ như thế nào?", "Bạn có thể gửi phản hồi hoặc thông qua các cổng thông tin của Học Viện."],
  ]
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="min-h-[100vh] h-auto w-full bg-gradient-to-br from-red-100 to-white">
      <div className="w-full">
        <div className='relative' >
          <img src="/assets/about_bg.png" className='w-full' />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
            <div className='flex text-white lg:text-xl lg:gap-1 lg:font-normal text-xs md:text-base'>
              <button onClick={() => navigate("/")}>
                <HomeOutlined />
              </button>
              <RightOutlined className='text-[12px] ' />
              <span>Giới thiệu</span>
              <RightOutlined className='text-[12px] ' />
              <span>Câu hỏi thường gặp</span>
            </div>
            <div className='flex text-white lg:text-4xl md:text-2xl text-xl gap-1 lg:font-bold justify-center lg:mt-6 md:mt-3 mt-1'>Câu hỏi thường gặp</div>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center mt-20 pb-20'>
        <div className='w-[85%] flex justify-center'>
          <div className="md:w-[80%]">
            <h1 className="lg:text-3xl text-2xl text-center font-bold p-5 text-black">Những câu hỏi thường gặp</h1>
            {
              data.map((item, i) => <div onClick={() => handleClick(i)} key={i} className="mt-2 collapse collapse-plus shadow-md rounded-xl bg-white hover:scale-105">
                <input type="checkbox"
                  checked={activeIndex === i}
                  onChange={() => handleClick(i)}
                />
                <div className={`collapse-title text-base font-medium ${activeIndex === i ? 'text-red-500' : ''}`}>
                  {item[0]}
                </div>
                <div className="collapse-content">
                  <p>{item[1]}</p>
                </div>
              </div>
              )
            }
          </div>
        </div>
      </div>
      <Footer>
      </Footer>
    </div >

  );
}
export default FAQPage;
