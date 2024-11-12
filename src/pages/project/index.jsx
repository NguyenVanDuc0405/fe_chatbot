import React, { useState } from "react";
import {
  HomeOutlined,
  RightOutlined,
} from '@ant-design/icons';
import Footer from "../../components/footer";
import './index.css'
function Project() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
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
              <span>Đề án tuyển sinh</span>
            </div>
            <div className='flex text-white lg:text-4xl md:text-2xl text-xl gap-1 lg:font-bold justify-center lg:mt-6 md:mt-3 mt-1'>Đề án tuyển sinh</div>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center mt-20 pb-20'>
        <div className="w-[20%] mx-4 text-black h-full hidden md:flex">
          <div className="max-h-[420px] w-[90%] overflow-y-auto p-4 shadow-md rounded-xl">
            <h2 className="font-semibold mb-6 text-2xl">Mục lục</h2>
            <ul className="space-y-2 ">
              <li><button onClick={() => scrollToSection('section-i')} className="hover:underline hover:text-red-500 text-left">I. THÔNG TIN CHUNG</button></li>
              <ul className="pl-4 space-y-2">
                <li><button onClick={() => scrollToSection('info-general')} className="hover:underline hover:text-red-500 text-left">1.Tên cơ sở đào tạo</button></li>
                <li><button onClick={() => scrollToSection('university-code')} className="hover:underline hover:text-red-500 text-left">2.Mã trường: BVH và BVS</button></li>
                <li><button onClick={() => scrollToSection('address')} className="hover:underline hover:text-red-500 text-left">3.Địa chỉ các trụ sở</button></li>
                <li><button onClick={() => scrollToSection('website')} className="hover:underline hover:text-red-500 text-left">4.Địa chỉ trang thông tin điện tử</button></li>
                <li><button onClick={() => scrollToSection('social-media')} className="hover:underline hover:text-red-500 text-left">5.Địa chỉ các trang mạng xã hội</button></li>
                <li><button onClick={() => scrollToSection('contact-info')} className="hover:underline hover:text-red-500 text-left">6.Số điện thoại liên hệ tuyển sinh</button></li>
                <li><button onClick={() => scrollToSection('employment')} className="hover:underline hover:text-red-500 text-left">7.Tình hình việc làm của sinh viên</button></li>
                <li><button onClick={() => scrollToSection('recent-admissions')} className="hover:underline hover:text-red-500 text-left">8.Thông tin tuyển sinh chính quy của 2 năm gần nhất</button></li>
                <li><button onClick={() => scrollToSection('permitted-majors')} className="hover:underline hover:text-red-500 text-left">9.Thông tin danh mục ngành được phép đào tạo</button></li>
                <li><button onClick={() => scrollToSection('quality-assurance')} className="hover:underline hover:text-red-500 text-left">10.Điều kiện bảo đảm chất lượng</button></li>
                <li><button onClick={() => scrollToSection('public-links')} className="hover:underline hover:text-red-500 text-left">11.Đường link công khai Đề án tuyển sinh và Quy chế tuyển sinh</button></li>
                <li><button onClick={() => scrollToSection('public-links')} className="hover:underline hover:text-red-500 text-left">12.Đường link công khai Quy chế tuyển sinh của cơ sở đào tạo trên trang thông tin điện tử của Học viện</button></li>

              </ul>
              <li><button onClick={() => scrollToSection('section-ii')} className="hover:underline hover:text-red-500 text-left">II. TUYỂN SINH ĐÀO TẠO CHÍNH QUY</button></li>
              <ul className="pl-4 space-y-2 ">
                <li><button onClick={() => scrollToSection('undergraduate-admission')} className="hover:underline hover:text-red-500 text-left">1.Tuyển sinh chính quy đại học</button></li>
                <li><button onClick={() => scrollToSection('admission-method')} className="hover:underline hover:text-red-500 text-left pl-4">1.1.Phương thức tuyển sinh</button></li>
                <li><button onClick={() => scrollToSection('admission-criteria')} className="hover:underline hover:text-red-500 text-left pl-4">1.2.Đối tượng, điều kiện tuyển sinh</button></li>
                <li><button onClick={() => scrollToSection('admission-area')} className="hover:underline hover:text-red-500 text-left pl-4">1.3.Phạm vi tuyển sinh</button></li>
                <li><button onClick={() => scrollToSection('admission-quotas')} className="hover:underline hover:text-red-500 text-left pl-4">1.4.Chỉ tiêu tuyển sinh</button></li>
                <li><button onClick={() => scrollToSection('entry-threshold')} className="hover:underline hover:text-red-500 text-left pl-4">1.5.Ngưỡng đầu vào</button></li>
                <li><button onClick={() => scrollToSection('required-info')} className="hover:underline hover:text-red-500 text-left pl-4">1.6.Các thông tin cần thiết khác</button></li>
                <li><button onClick={() => scrollToSection('priority-policy')} className="hover:underline hover:text-red-500 text-left pl-4">1.7.Chính sách ưu tiên</button></li>
                <li><button onClick={() => scrollToSection('majors')} href="#majors" className="hover:underline hover:text-red-500 text-left pl-4">1.8.Ngành, mã ngành, tổ hợp xét tuyển</button></li>
                <li><button onClick={() => scrollToSection('exam-arrangement')} className="hover:underline hover:text-red-500 text-left pl-4">1.9.Tổ chức tuyển sinh</button></li>
                <li><button onClick={() => scrollToSection('exam-fee')} className="hover:underline hover:text-red-500 text-left pl-4">1.10.Lệ phí xét tuyển</button></li>
                <li><button onClick={() => scrollToSection('tuition-fees')} className="hover:underline hover:text-red-500 text-left pl-4">1.11.Học phí dự kiến</button></li>
                <li><button onClick={() => scrollToSection('enrollment-schedule')} className="hover:underline hover:text-red-500 text-left pl-4">1.12.Thời gian tuyển sinh</button></li>
                <li><button onClick={() => scrollToSection('other')} className="hover:underline hover:text-red-500 text-left pl-4">1.13.Các nội dung khác</button></li>
                <li><button onClick={() => scrollToSection('special-admissions')} className="hover:underline hover:text-red-500 text-left pl-4">1.14.Thông tin tuyển sinh ngành đặc thù</button></li>
              </ul>
            </ul>
          </div>
        </div>
        <div className='lg:w-[80%] md:w-[90%] w-[96%] md:px-16 px-2'>
          <div className="text-black">
            <h1 className="text-2xl font-bold mb-4" id="section-i">I. THÔNG TIN CHUNG</h1>
            <div className="mb-4">
              <h2 className="font-semibold" id="info-general">1. Tên cơ sở đào tạo</h2>
              <p>HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG (Posts and Telecommunications Institute of Technology - PTIT)</p>
            </div>
            <div className="mb-4">
              <h2 className="font-semibold" id="university-code">2. Mã trường</h2>
              <p>BVH và BVS</p>
            </div>
            <div className="mb-4">
              <h2 className="font-semibold" id="address">3. Địa chỉ các trụ sở (trụ sở chính và cơ sở đào tạo)</h2>
              <ul className="list-disc ml-6">
                <li><strong>TRỤ SỞ CHÍNH</strong>: 122 Hoàng Quốc Việt, Phường Nghĩa Đô, Quận Cầu Giấy, Tp. Hà Nội</li>
                <li><strong>CƠ SỞ ĐÀO TẠO PHÍA BẮC (BVH)</strong>: Km 10 Đường Nguyễn Trãi, Phường Mộ Lao, Quận Hà Đông, Tp. Hà Nội</li>
                <li><strong>CƠ SỞ ĐÀO TẠO PHÍA NAM (BVS)</strong>: Số 11 Nguyễn Đình Chiểu, Phường ĐaKao, Quận 1, Tp. Hồ Chí Minh</li>
              </ul>
            </div>

            <div className="mb-4">
              <h2 className="font-semibold" id="website">4. Địa chỉ trang thông tin điện tử của cơ sở đào tạo</h2>
              <ul className="list-disc ml-6">
                <li>Cổng thông tin điện tử: <a href="https://ptit.edu.vn" className="text-red-500 hover:underline">https://ptit.edu.vn</a></li>
                <li>Cổng thông tin đào tạo: <a href="https://daotao.ptit.edu.vn" className="text-red-500 hover:underline">https://daotao.ptit.edu.vn</a></li>
                <li>Cổng thông tin tuyển sinh: <a href="https://tuyensinh.ptit.edu.vn" className="text-red-500 hover:underline">https://tuyensinh.ptit.edu.vn</a></li>
              </ul>
            </div>

            <div className="mb-4">
              <h2 className="font-semibold" id="social-media">5. Địa chỉ các trang mạng xã hội của cơ sở đào tạo (có thông tin tuyển sinh)</h2>
              <ul className="list-disc ml-6">
                <li>Trang fanpage tuyển sinh: <a href="https://facebook.com/ptittuyensinh" className="text-red-500 hover:underline">https://facebook.com/ptittuyensinh</a></li>
                <li>Trang fanpage Học viện: <a href="https://facebook.com/HocvienPTIT" className="text-red-500 hover:underline">https://facebook.com/HocvienPTIT</a></li>
                <li>Trang Zalo: Học viện Công nghệ Bưu chính Viễn thông (ID 1260203497642986925)</li>
              </ul>
            </div>

            <div className="mb-4">
              <h2 className="font-semibold" id="contact-info">6. Số điện thoại liên hệ tuyển sinh</h2>
              <ul className="list-disc ml-6">
                <li><strong>CƠ SỞ ĐÀO TẠO PHÍA BẮC (BVH)</strong>: <br />ĐT: (024) 33528122, (024) 33512252</li>
                <li><strong>CƠ SỞ ĐÀO TẠO PHÍA NAM (BVS)</strong>: <br />ĐT: (028) 38297220; Fax: (028) 39105510</li>
              </ul>
            </div>

            <div className="mb-4">
              <h2 className="font-semibold" id="employment">7. Tình hình việc làm của sinh viên sau khi tốt nghiệp</h2>
              <span>Kết quả khảo sát sinh viên có việc làm trong khoảng thời gian 12 tháng kể từ khi được công nhận tốt nghiệp được xác định theo từng ngành, lĩnh vực đào tạo, được khảo sát ở năm liền kề trước năm tuyển sinh, đối tượng khảo sát là sinh viên đã tốt nghiệp ở năm trước cách năm tuyển sinh một năm.</span>
              <br />
            </div>
            <div className="my-4">
              <span ><strong>CƠ SỞ ĐÀO TẠO PHÍA BẮC (BVH)</strong></span>
              <img src="/assets/ks_job_bvh.png" className='lg:w-1/2 md:w-4/5 w-full my-2' />
            </div>
            <div className="my-4">
              <span ><strong>CƠ SỞ ĐÀO TẠO PHÍA NAM (BVS)</strong></span>
              <img src="/assets/ks_job_bvs.png" className='lg:w-1/2 md:w-4/5 w-full my-2' />
            </div>
            <div className="mb-4">
              <h2 className="font-semibold" id="recent-admissions">8. Thông tin về tuyển sinh chính quy của 2 năm gần nhất</h2>
              <p>
                Đường link công khai thông tin về tuyển sinh chính quy của 2 năm gần nhất trên trang thông tin điện tử của Học viện:
                <a href="https://tuyensinh.ptit.edu.vn" className="text-red-500 hover:underline"> https://tuyensinh.ptit.edu.vn</a>.
              </p>
            </div>

            <div className="mb-4 ml-4">
              <h3 className="font-semibold">8.1. Phương thức tuyển sinh của 2 năm gần nhất</h3>
              <p className="">Năm 2022, Học viện Công nghệ Bưu chính Viễn thông sử dụng 04 phương thức tuyển sinh để thực hiện xét tuyển vào đại học hệ chính quy. Gồm có:
              </p>
              <ul className="list-disc ml-10">
                <li>Tuyển thẳng và ưu tiên xét tuyển,</li>
                <li>Xét tuyển dựa vào kết quả điểm thi tốt nghiệp THPT năm 2022,</li>
                <li>Xét tuyển kết hợp giữa một trong các loại Chứng chỉ quốc tế hoặc Thành tích cá nhân trong các kỳ thi tuyển chọn học sinh giỏi hoặc Thành tích học tập tại các trường THPT chuyên với kết quả học tập ở bậc THPT</li>
                <li>Xét tuyển dựa vào kết quả các kỳ thi đánh giá năng lực, đánh giá tư duy.</li>
              </ul>

              <p className="mt-4">Năm 2023, Học viện Công nghệ Bưu chính Viễn thông sử dụng 04 phương thức tuyển sinh để thực hiện xét tuyển vào đại học hệ chính quy. Gồm có:
              </p>
              <ul className="list-disc ml-10">
                <li>Tuyển thẳng và ưu tiên xét tuyển,</li>
                <li>Xét tuyển dựa vào kết quả điểm thi tốt nghiệp THPT năm 2023,</li>
                <li>Xét tuyển kết hợp giữa một trong các loại Chứng chỉ quốc tế hoặc Thành tích cá nhân trong các kỳ thi tuyển chọn học sinh giỏi hoặc Thành tích học tập tại các trường THPT chuyên với kết quả học tập ở bậc THPT</li>
                <li>Xét tuyển dựa vào kết quả các kỳ thi đánh giá năng lực, đánh giá tư duy.</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold">8.2. Điểm trúng tuyển của 2 năm gần nhất</h3>
              <img src="/assets/score_1.png" className='lg:w-[60%] md:w-[80%] w-11/12 my-2' />
              <img src="/assets/score_2.png" className='lg:w-[60%] md:w-[80%] w-11/12 my-2' />
              <img src="/assets/score_3.png" className='lg:w-[60%] md:w-[80%] w-11/12 my-2' />
              <img src="/assets/score_4.png" className='lg:w-[60%] md:w-[80%] w-11/12 my-2' />
              <img src="/assets/score_5.png" className='lg:w-[60%] md:w-[80%] w-11/12 my-2' />

            </div>
            <div className="mb-4">
              <h2 className="font-semibold" id="permitted-majors">9. Thông tin danh mục ngành được phép đào tạo</h2>
              <p>
                Đường link công khai danh mục ngành được phép đào tạo trên trang thông tin điện tử của Học viện:
                <a href="https://tuyensinh.ptit.edu.vn" className="text-red-500"> https://tuyensinh.ptit.edu.vn</a>
              </p>
            </div>

            <div className="mb-4">
              <h2 className="font-semibold" id="quality-assurance">10. Điều kiện bảo đảm chất lượng (Mẫu số 03)</h2>
              <p>
                Đường link công khai các điều kiện đảm bảo chất lượng trên trang thông tin điện tử của Học viện:
                <a href="https://tuyensinh.ptit.edu.vn" className="text-red-500"> https://tuyensinh.ptit.edu.vn</a>
              </p>
            </div>

            <div className="mb-4">
              <h2 className="font-semibold" id='public-links'>11. Đường link công khai Đề án tuyển sinh trên trang thông tin điện tử của Học viện</h2>
              <p>
                <a href="https://tuyensinh.ptit.edu.vn" className="text-red-500">https://tuyensinh.ptit.edu.vn</a>
              </p>
            </div>

            <div className="mb-4">
              <h2 className="font-semibold" id="public-links">12. Đường link công khai Quy chế tuyển sinh của cơ sở đào tạo trên trang thông tin điện tử của Học viện</h2>
              <p>
                <a href="https://daotao.ptit.edu.vn" className="text-red-500">https://daotao.ptit.edu.vn</a>
              </p>
            </div>

            <h1 className="text-xl font-bold mb-4" id="section-ii">II. TUYỂN SINH ĐÀO TẠO CHÍNH QUY</h1>
            <div className="mb-6">
              <h2 className="text-lg font-bold" id="undergraduate-admission">1. Tuyển sinh chính quy đại học</h2>
              <div className="ml-4">
                <h3 className="text-base font-bold mt-4" id="admission-method">1.1. Phương thức tuyển sinh</h3>
                <p>Năm 2024, Học viện Công nghệ Bưu chính Viễn thông sử dụng 04 phương thức tuyển sinh như sau:</p>
                <div className="ml-4 mt-4">
                  <p className="font-semibold">a, Phương thức 1: Xét tuyển tài năng</p>
                  <p className="ml-4">
                    Xét tuyển tài năng gồm có:
                  </p>
                  <ul className="list-disc ml-8 mt-2">
                    <li>Xét tuyển thẳng và ưu tiên xét tuyển đối với các thí sinh là thành viên đội tuyển Olympic quốc tế hoặc đoạt giải Quốc gia, Quốc tế theo Quy chế tuyển sinh hiện hành của Bộ Giáo dục và Đào tạo và của Học viện (có thông báo chi tiết riêng,.</li>
                    <li>Xét tuyển dựa vào hồ sơ năng lực đối với các thí sinh có Thành tích đoạt giải trong kỳ thi chọn học sinh giỏi THPT cấp quốc gia (giải Khuyến khích), cấp Tỉnh/Thành phố trực thuộc TW (Nhất, Nhì, Ba và Khuyến khích), thời gian đoạt giải không quá 3 năm tính tới thời điểm xét tuyển hoặc là học sinh tại các trường THPT chuyên (điều kiện cụ thể tại điểm b mục 1.2 về Đối tượng tuyển sinh).</li>
                  </ul>
                </div>

                <div className="ml-4 mt-4">
                  <p className="font-semibold">b, Phương thức 2: Xét tuyển dựa vào kết quả thi tốt nghiệp THPT năm 2024</p>
                </div>

                <div className="ml-4 mt-4">
                  <p className="font-semibold">c, Phương thức 3: Xét tuyển kết hợp</p>
                  <p className="ml-4">
                    Xét tuyển kết hợp giữa một trong các loại Chứng chỉ quốc tế (Chứng chỉ SAT/ACT) hoặc Chứng chỉ tiếng Anh quốc tế (Chứng chỉ IELTS, TOEFL) với kết quả học tập ở bậc THPT (điều kiện cụ thể tại điểm d mục 1.2 về Đối tượng tuyển sinh).
                  </p>
                </div>

                <div className="ml-4 mt-4">
                  <p className="font-semibold">d, Phương thức 4: Xét tuyển dựa vào kết quả trong các kỳ thi đánh giá năng lực (ĐGNL), đánh giá tư duy (ĐGTD)</p>
                  <p className="ml-4">
                    Xét tuyển dựa vào kết quả trong các kỳ thi đánh giá năng lực (ĐGNL), đánh giá tư duy (ĐGTD) của các đơn vị: Đại học Quốc gia Hà Nội, Đại học Quốc gia Tp. Hồ Chí Minh và Đại học Bách khoa Hà Nội tổ chức (điều kiện cụ thể tại điểm e mục 1.2 về Đối tượng tuyển sinh).
                  </p>
                </div>

                <h3 className="text-base font-bold mt-4" id="admission-criteria">1.2. Đối tượng, điều kiện tuyển sinh</h3>
                <p><strong>a, Quy định chung:</strong></p>

                <div className="ml-4">
                  <ul className="list-disc ml-8 mt-2">
                    <li>Đối tượng dự tuyển được xác định tại thời điểm xét tuyển (trước khi công bố kết quả xét tuyển chính thức) là các thí sinh đã được công nhận tốt nghiệp trung học phổ thông (THPT) của Việt Nam hoặc có bằng tốt nghiệp của nước ngoài được công nhận trình độ tương đương hoặc đã có bằng tốt nghiệp trung cấp ngành nghề thuộc cùng nhóm ngành dự tuyển và đã hoàn thành đủ yêu cầu khối lượng kiến thức văn hóa cấp THPT theo quy định của pháp luật;</li>
                    <li>Có đủ thông tin cá nhân, hồ sơ dự tuyển theo quy định;</li>
                    <li>Đáp ứng các điều kiện khác theo quy chế tuyển sinh hiện hành của Bộ Giáo dục và Đào tạo và của Học viện.</li>
                  </ul>
                </div>

                {/* Phương thức 1 */}
                <div className="ml-4 mt-4">
                  <p className="font-semibold">b, Đối với Phương thức 1 - Xét tuyển tài năng:</p>
                  <p className="ml-4">Ngoài các yêu cầu theo quy định chung ở mục a, thì thí sinh cần có thêm một trong các điều kiện sau đây:</p>
                  <ul className="list-decimal ml-8 mt-2">
                    <li>Xét tuyển thẳng và ưu tiên xét tuyển: thí sinh là thành viên đội tuyển Olympic quốc tế hoặc đoạt giải Quốc gia, Quốc tế theo Quy chế tuyển sinh hiện hành của Bộ Giáo dục và Đào tạo và của Học viện (có thông báo chi tiết riêng).</li>
                    <li>Xét tuyển dựa vào hồ sơ năng lực: thí sinh cần có thêm một trong các điều kiện sau đây:</li>
                  </ul>
                  <ul className="list-disc ml-12 mt-2">
                    <li>Thí sinh đoạt giải Khuyến khích trong kỳ thi chọn học sinh giỏi quốc gia hoặc đã tham gia kỳ thi chọn học sinh giỏi quốc gia hoặc đoạt giải Nhất, Nhì, Ba, Khuyến khích trong kỳ thi chọn học sinh giỏi cấp Tỉnh, Thành phố trực thuộc Trung ương (TW) các môn Toán, Lý, Hóa, Tin học và có kết quả điểm trung bình chung học tập lớp 10, 11, 12 hoặc học kỳ 1 lớp 12 (nếu chưa có kết quả năm học lớp 12) đạt từ 7,5 trở lên và có hạnh kiểm Khá trở lên;</li>
                    <li>Là học sinh chuyên các môn Toán, Lý, Hóa, Tin học của trường THPT chuyên trên phạm vi toàn quốc (các trường THPT chuyên thuộc Tỉnh, Thành phố trực thuộc TW và các trường THPT chuyên thuộc Cơ sở giáo dục đại học) hoặc hệ chuyên thuộc các trường THPT trọng điểm quốc gia; Và có kết quả điểm trung bình chung học tập lớp 10, 11, 12 hoặc học kỳ 1 lớp 12 (nếu chưa có kết quả năm học lớp 12) đạt từ 7,5 trở lên và có hạnh kiểm Khá trở lên.</li>
                  </ul>
                </div>

                {/* Phương thức 2 */}
                <div className="ml-4 mt-4">
                  <p className="font-semibold">c, Đối với Phương thức 2 - Xét tuyển dựa vào kết quả thi tốt nghiệp THPT năm 2024:</p>
                  <p className="ml-4">Ngoài các yêu cầu theo quy định chung ở mục a, thì thí sinh phải tham dự kỳ thi tốt nghiệp THPT năm 2024 với các bài thi/môn thi theo tổ hợp xét tuyển tương ứng các ngành của Học viện.</p>
                </div>

                {/* Phương thức 3 */}
                <div className="ml-4 mt-4">
                  <p className="font-semibold">d, Đối với Phương thức 3 - Xét tuyển kết hợp:</p>
                  <p className="ml-4">Ngoài các yêu cầu theo quy định chung ở mục a, thì thí sinh cần có thêm một trong các điều kiện sau đây:</p>
                  <ul className="list-decimal ml-8 mt-2">
                    <li>Thí sinh có Chứng chỉ quốc tế SAT, trong thời hạn 02 năm (tính đến ngày xét tuyển) từ 1130/1600 trở lên hoặc ACT từ 25/36 trở lên; và có kết quả điểm trung bình chung học tập lớp 10, 11, 12 hoặc học kỳ 1 lớp 12 (nếu chưa có kết quả năm học lớp 12) đạt từ 7,5 trở lên và có hạnh kiểm Khá trở lên;</li>
                    <li>Thí sinh có Chứng chỉ tiếng Anh quốc tế trong thời hạn (tính đến ngày xét tuyển) đạt IELTS 5.5 trở lên hoặc TOEFL iBT 65 trở lên hoặc TOEFL ITP 513 trở lên; và có kết quả điểm trung bình chung học tập lớp 10, 11, 12 hoặc học kỳ 1 lớp 12 (nếu chưa có kết quả năm học lớp 12) đạt từ 7,5 trở lên và có hạnh kiểm Khá trở lên.</li>
                  </ul>
                </div>

                {/* Phương thức 4 */}
                <div className="ml-4 mt-4">
                  <p className="font-semibold">e, Đối với Phương thức 4 - Xét tuyển dựa vào kết quả bài thi đánh giá năng lực (ĐGNL) hoặc đánh giá tư duy (ĐGTD):</p>
                  <p className="ml-4">Ngoài các yêu cầu theo quy định chung ở mục a, thì thí sinh cần có thêm một trong các điều kiện sau đây:</p>
                  <ul className="list-decimal ml-8 mt-2">
                    <li>Thí sinh có điểm thi đánh giá năng lực của Đại học quốc gia Hà Nội (HSA) năm 2024 từ 75 điểm trở lên;</li>
                    <li>Thí sinh có điểm thi đánh giá năng lực của Đại học quốc gia Tp. Hồ Chí Minh (APT) năm 2024 từ 600 điểm trở lên;</li>
                    <li>Thí sinh có điểm thi đánh giá tư duy của Đại học Bách khoa Hà Nội (TSA) năm 2024 từ 50 điểm trở lên.</li>
                  </ul>
                </div>

                <h3 className="text-base font-bold mt-4" id="admission-area">1.3. Phạm vi tuyển sinh (Địa lý)</h3>
                <p>Học viện tuyển sinh trên phạm vi cả nước (thí sinh đăng ký xét tuyển vào Cơ sở đào tạo nào thì sẽ theo học tại Cơ sở đó – BVH hoặc BVS).</p>

                <h3 className="text-base font-bold mt-4" id="admission-quotas">1.4. Chỉ tiêu tuyển sinh</h3>
                <p>Tổng chỉ tiêu là 5.060, cụ thể:</p>

                <div className="ml-4">
                  <p className="font-semibold">a, Chỉ tiêu tuyển sinh theo các phương thức xét tuyển</p>
                  <img src="/assets/chi_tieu.png" className='lg:w-[40%] md:w-[60%] w-4/5 my-2' />

                  <p className="font-semibold">b, Chỉ tiêu tuyển sinh theo ngành và các Cơ sở đào tạo <br />
                    CƠ SỞ ĐÀO TẠO PHÍA BẮC (Mã trường: BVH)</p>
                  <p className="">Địa chỉ: Km10 Đường Nguyễn Trãi, Phường Mộ Lao, Quận Hà Đông, Tp. Hà Nội</p>
                  <img src="/assets/chi_tieu_bvh.png" className='lg:w-[40%] md:w-[60%] w-4/5 my-2' />

                  <p className="font-semibold">CƠ SỞ ĐÀO TẠO PHÍA NAM (Mã trường: BVS)</p>
                  <p className="">Địa chỉ: Số 11 Nguyễn Đình Chiểu, Phường Đa Kao, Quận 1, Tp. Hồ Chí Minh</p>
                  <img src="/assets/chi_tieu_bvs.png" className='lg:w-[40%] md:w-[60%] w-4/5 my-2' />

                </div>
                <div className="space-y-3">
                  <h2 className="text-base font-bold mt-4" id="entry-threshold">1.5. Ngưỡng đầu vào</h2>
                  <p>
                    Ngưỡng đảm bảo chất lượng đầu vào đối với Phương thức xét tuyển dựa vào kết quả thi tốt nghiệp THPT: Học viện sẽ thông báo sau khi có kết quả thi tốt nghiệp THPT năm 2024;
                  </p>
                  <p>
                    Ngưỡng đảm bảo chất lượng đầu vào đối với Phương thức xét tuyển tài năng (Xét tuyển dựa vào hồ sơ năng lực) và Phương thức xét tuyển kết hợp: thí sinh có kết quả điểm trung bình chung học tập các năm học lớp 10, lớp 11, lớp 12 hoặc học kỳ 1 lớp 12 (nếu chưa có kết quả năm học lớp 12) đạt từ 7,5 trở lên và có hạnh kiểm Khá trở lên tùy theo từng loại đối tượng;
                  </p>
                  <p>
                    Ngưỡng đảm bảo chất lượng đầu vào đối với Phương thức xét tuyển dựa vào kết quả bài thi đánh giá năng lực hoặc đánh giá tư duy:
                  </p>
                  <ul className="list-disc pl-6">
                    <li>Thí sinh có điểm thi đánh giá năng lực của Đại học quốc gia Hà Nội năm 2024 từ 75 điểm trở lên.</li>
                    <li>Thí sinh có điểm thi đánh giá năng lực của Đại học quốc gia Tp. Hồ Chí Minh năm 2024 từ 600 điểm trở lên.</li>
                    <li>Thí sinh có điểm thi đánh giá tư duy của Đại học Bách khoa Hà Nội năm 2024 từ 50 điểm trở lên.</li>
                  </ul>
                  <p>Các điều kiện xét tuyển: theo quy định và lịch trình chung của Bộ Giáo dục và Đào tạo.</p>
                </div>

                <h2 className="text-base font-bold mt-4" id="required-info">1.6. Các thông tin cần thiết khác để thí sinh dự tuyển vào các ngành của trường: Học bổng, nguyên tắc xét tuyển, quy định chênh lệch điểm xét tuyển giữa các tổ hợp; các điều kiện phụ sử dụng trong xét tuyển.</h2>
                <div className="space-y-3 ml-4 mt-4">
                  <h3 className="font-semibold">1.6.1 Chính sách học bổng</h3>
                  <p>
                    Học bổng đặc biệt: năm 2024, Học viện Công nghệ Bưu chính Viễn thông cấp tối đa 30 suất học bổng đặc biệt, giá trị mỗi suất học bổng tới 500 triệu đồng (gồm: học phí trong toàn thời gian học, chi phí ăn ở, kinh phí nghiên cứu khoa học, thực tập ở nước ngoài, kinh phí hỗ trợ từ doanh nghiệp đối tác và các hỗ trợ khác).
                  </p>
                  <p>
                    Đối tượng xét cấp học bổng đặc biệt là các thí sinh tham dự kỳ thi chọn đội tuyển quốc gia dự thi Olympic quốc tế, thí sinh đoạt giải Nhất, Nhì, Ba trong kỳ thi chọn học sinh giỏi quốc gia các môn Toán, Lý và Tin học; thí sinh có điểm thi tốt nghiệp THPT từ 29,0 điểm trở lên. Người được nhận học bổng đặc biệt phải đảm bảo điểm trung bình chung tích lũy năm học liên tục đạt từ loại Giỏi trở lên trong thời gian học tập.
                  </p>
                  <p>
                    Học bổng toàn phần: năm 2024, Học viện Công nghệ Bưu chính Viễn thông cấp tối đa 50 suất học bổng toàn phần với giá trị học bổng tới 250 triệu đồng (tương đương học phí toàn khóa học của chương trình chất lượng cao) cho các thí sinh đoạt giải Nhất trong kỳ thi học sinh giỏi cấp Tỉnh/Thành phố trực thuộc TW các môn Toán, Lý và Tin học. Người được nhận học bổng toàn phần phải đảm bảo điểm trung bình chung tích lũy năm học liên tục đạt từ loại Giỏi trở lên trong thời gian học tập.
                  </p>
                  <p>
                    Học bổng miễn 100% học phí trong năm học thứ nhất với tối đa 100 suất cho đối tượng là các thí sinh đoạt trong kỳ thi học sinh giỏi quốc tế, quốc gia hoặc thí sinh đoạt giải Nhất, Nhì, Ba trong kỳ thi học sinh giỏi cấp Tỉnh, Thành phố trực thuộc TW các môn Toán, Lý, Hóa và Tin học hoặc đạt kết quả cao trong kỳ thi tốt nghiệp THPT năm 2024;
                  </p>
                  <p>
                    Học bổng miễn 50% học phí trong năm học thứ nhất với tối đa 300 suất cho đối tượng là các thí sinh đoạt giải trong kỳ thi học sinh giỏi hoặc đạt kết quả cao trong kỳ thi tốt nghiệp THPT năm 2024;
                  </p>
                  <p>
                    Ngoài ra, sinh viên còn có nhiều cơ hội để được nhận các xuất học bổng của các doanh nghiệp hàng đầu như Samsung, VNPT, Mobifone, Viettel, FPT, AGR, ...
                  </p>
                  <p className="italic mb-4">Ghi chú: Thí sinh chỉ được xét và cấp một Loại học bổng trong chính sách học bổng nêu trên; xét cấp học bổng thực hiện xét từ trên xuống cho đến hết số suất học bổng.</p>
                </div>

                <div className="space-y-3 ml-4">
                  <h3 className="font-semibold mt-4">1.6.2 Nguyên tắc xét tuyển, Điểm xét tuyển, Xác nhận nhập học</h3>
                  <h4 className="font-semibold">a, Đối với Phương thức 1 – Xét tuyển tài năng</h4>
                  <p>Xét tuyển thẳng và ưu tiên xét tuyển: Thực hiện theo Quy chế và Kế hoạch của Bộ Giáo dục & Đào tạo, có thông báo riêng.</p>
                  <p>Xét tuyển dựa vào hồ sơ năng lực (HSNL):</p>
                  <ul className="list-disc pl-6">
                    <li>Thí sinh được đăng ký xét tuyển 02 nguyện vọng và phải sắp xếp nguyện vọng theo thứ tự ưu tiên từ cao xuống thấp (nguyện vọng 1 là nguyện vọng cao nhất). Thí sinh chỉ trúng tuyển vào một (01) nguyện vọng ưu tiên cao nhất trong danh sách các nguyện vọng đã đăng ký;</li>
                    <li>Xét tuyển theo ngành và theo Điểm hồ sơ năng lực (Điểm HSNL);</li>
                    <li>Xét trúng tuyển từ thí sinh có kết quả cao xuống cho đến hết chỉ tiêu;</li>
                  </ul>
                  <pre className="bg-gray-100 p-4 rounded">
                    Điểm HSNL = Điểm học lực + Điểm thành tích + Điểm ưu tiên
                  </pre>
                  <p>. Trong đó: <br /></p>
                  <ul className="list-disc pl-6">
                    <li>Điểm HSNL được quy đổi theo thang điểm 100;</li>
                    <li>Điểm học lực chiếm 60% (tối đa 60 điểm); Điểm thành tích chiếm 40% (tối đa 40 điểm); Điểm ưu tiên thực hiện theo Quy chế tuyển sinh của Bộ GD&ĐT và được quy đổi theo thang điểm 100 tương ứng.</li>
                    <li>
                      Điểm học lực (ĐHL) được tính bằng tổng của ba (03) điểm bình quân kết quả học tập ở năm học lớp 10, lớp 11, lớp 12 hoặc học kỳ 1 lớp 12 (nếu chưa có kết quả năm học lớp 12) của ba (03) môn học tương ứng với tổ hợp bài thi/môn thi của ngành đã đăng ký xét tuyển, cụ thể:
                    </li>
                    <div className="list-none ml-8">
                      <pre className="bg-gray-100 p-4 rounded mb-2">
                        ĐHL = [Điểm BQ môn 1 + Điểm BQ môn 2 + Điểm BQ môn 3]*6/3
                      </pre>
                      <p>Trong đó, Điểm BQ môn = [Điểm năm lớp 10 + Điểm năm lớp 11 + Điểm năm lớp 12]/3</p>
                      <p>Điểm thành tích được xác định cụ thể như sau:</p>
                      <img src="/assets/score_thanhtich.png" className='lg:w-[40%] md:w-[60%] w-4/5 my-2' />
                    </div>
                  </ul>
                  <span className="leading-[30px] block">Ghi chú: Thí sinh chỉ được lựa chọn một (01) loại thành tích cao nhất. <br />
                    Nếu xét tuyển không đủ chỉ tiêu thì số chỉ tiêu còn lại được chuyển sang xét tuyển theo phương thức khác; <br />
                    Thí sinh đủ điều kiện trúng tuyển vẫn phải đăng ký nguyện vọng trên Hệ thống tuyển sinh của Bộ Giáo dục và Đào tạo theo kế hoạch chung (thí sinh xếp nguyện vọng đã đủ điều kiện trúng tuyển là nguyện vọng 1 khi đăng ký nguyện vọng trên Hệ thống để được trúng tuyển chính thức vào Học viện); <br />
                    Thí sinh trúng tuyển phải xác nhận nhập học trên Hệ thống tuyển sinh và theo kế hoạch quy định của Bộ Giáo dục và Đào tạo. Nếu quá thời hạn này, thí sinh không xác nhận nhập học được xem là từ chối nhập học. <br />
                  </span>
                </div>
                <div className="space-y-4 ml-4">
                  <h2 className="font-semibold">b, Đối với Phương thức 2 - Xét tuyển dựa vào kết quả thi tốt nghiệp THPT năm 2024:</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Xét tuyển theo ngành và theo tổ hợp bài thi/môn thi xét tuyển;</li>
                    <li>Điểm trúng tuyển của các tổ hợp bài thi/môn thi trong cùng một ngành là bằng nhau (không có điểm chênh lệch giữa các tổ hợp trong cùng một ngành);</li>
                    <li>Xét trúng tuyển từ thí sinh có kết quả cao xuống và đảm bảo chất lượng tuyển sinh;</li>
                    <li>Xét tuyển các nguyện vọng bình đẳng (không có điểm chênh lệch giữa các nguyện vọng trong cùng một ngành), nếu thí sinh không trúng tuyển nguyện vọng ở thứ tự ưu tiên thứ nhất (nguyện vọng 1) thì sẽ được tự động xét tuyển ở nguyện vọng ưu tiên thứ hai (nguyện vọng 2) và kế tiếp;</li>
                    <li>Thí sinh chỉ trúng tuyển vào 1 nguyện vọng ưu tiên cao nhất trong danh sách các nguyện vọng đã đăng ký, khi đã trúng tuyển ở nguyện vọng nào thì không được xét tuyển tiếp ở nguyện vọng sau;</li>
                    <li>Điểm trúng tuyển được tính theo thang điểm 10 trên tổng điểm tối đa của 3 môn thi trong tổ hợp xét tuyển là 30 điểm;</li>
                    <li>Đối với các thí sinh bằng điểm xét tuyển ở cuối danh sách, nếu vẫn còn vượt chỉ tiêu thì ưu tiên thí sinh có nguyện vọng cao hơn theo Quy chế tuyển sinh của Bộ Giáo dục và Đào tạo, Học viện không sử dụng tiêu chí phụ riêng để xét tuyển;</li>
                    <li>Thí sinh trúng tuyển phải xác nhận nhập học trong thời gian quy định của Học viện. Nếu quá thời hạn này, thí sinh không xác nhận nhập học được xem là từ chối nhập học.</li>
                    <li>Các điều kiện khác thực hiện theo Quy chế tuyển sinh đại học hệ chính quy hiện hành của Bộ Giáo dục và Đào tạo và của Học viện.</li>
                  </ul>
                </div>

                <div className="space-y-4 mt-4 ml-4">
                  <h2 className="font-semibold">c, Đối với Phương thức 3 - Xét tuyển kết hợp:</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Thí sinh được đăng ký xét tuyển 02 nguyện vọng và phải sắp xếp nguyện vọng theo thứ tự ưu tiên từ cao xuống thấp (nguyện vọng 1 là nguyện vọng cao nhất). Thí sinh chỉ trúng tuyển vào một (01) nguyện vọng ưu tiên cao nhất trong danh sách các nguyện vọng đã đăng ký;</li>
                    <li>Xét tuyển theo ngành và theo kết quả học tập của năm học lớp 10, lớp 11, lớp 12 hoặc học kỳ 1 lớp 12 (nếu chưa có kết quả năm học lớp 12) của các môn học tương ứng với tổ hợp bài thi/môn thi của ngành đăng ký xét tuyển;</li>
                    <li>Xét trúng tuyển từ thí sinh có kết quả cao xuống cho đến hết chỉ tiêu;</li>
                    <li>Điểm trúng tuyển của các tổ hợp trong cùng một ngành là bằng nhau;</li>
                    <li>Điểm xét tuyển (ĐXT) được tính bằng tổng của ba (03) điểm bình quân kết quả học tập ở năm học lớp 10, lớp 11, lớp 12 hoặc học kỳ 1 lớp 12 (nếu chưa có kết quả năm học lớp 12) của ba (03) môn học tương ứng với tổ hợp bài thi/môn thi đã đăng ký xét tuyển, cộng với điểm ưu tiên, điểm thưởng như tại mục 1.7 (nếu có);</li>

                    <pre className="bg-gray-100 p-4 rounded mb-2">
                      ĐXT = [Điểm BQ môn 1 + Điểm BQ môn 2 + Điểm BQ môn 3] + Điểm ưu tiên
                    </pre>
                    <p> Trong đó:</p>
                    <ul className="list-none space-y-2">
                      <li>+ Điểm BQ môn = [Điểm năm lớp 10 + Điểm năm lớp 11 + Điểm năm lớp 12]/3</li>
                      <li>+ Nếu xét tuyển không đủ chỉ tiêu thì số chỉ tiêu còn lại được chuyển sang xét tuyển theo phương thức khác;</li>
                      <li>+ Thí sinh đủ điều kiện trúng tuyển vẫn phải đăng ký nguyện vọng trên Hệ thống tuyển sinh của Bộ Giáo dục và Đào tạo theo kế hoạch chung (thí sinh xếp nguyện vọng đã đủ điều kiện trúng tuyển là nguyện vọng 1 khi đăng ký nguyện vọng trên Hệ thống để được trúng tuyển chính thức vào Học viện);</li>
                      <li>+ Thí sinh trúng tuyển phải xác nhận nhập học trên Hệ thống tuyển sinh và theo kế hoạch quy định của Bộ Giáo dục và Đào tạo. Nếu quá thời hạn này, thí sinh không xác nhận nhập học được xem là từ chối nhập học.</li>
                    </ul>
                  </ul>
                </div>
                <div className="space-y-4 mt-4 ml-4">
                  <h2 className="font-semibold">d, Đối với Phương thức 4 - Xét tuyển dựa vào kết quả bài thi ĐGNL, ĐGTD:</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Thí sinh được đăng ký xét tuyển 02 nguyện vọng và phải sắp xếp nguyện vọng theo thứ tự ưu tiên từ cao xuống thấp (nguyện vọng 1 là nguyện vọng cao nhất). Thí sinh chỉ trúng tuyển vào một (01) nguyện vọng ưu tiên cao nhất trong danh sách các nguyện vọng đã đăng ký;</li>
                    <li>Xét tuyển theo ngành và theo điểm xét tuyển đã quy đổi về thang điểm 30;</li>
                    <li>Xét trúng tuyển từ thí sinh có kết quả cao xuống cho đến hết chỉ tiêu;</li>
                    <li>Điểm trúng tuyển của các tổ hợp trong cùng một ngành là bằng nhau;</li>
                    <li>Điểm xét tuyển (ĐXT) được quy đổi về theo thang điểm 30 như sau:</li>
                    <ul className="list-none space-y-2">
                      <li>+ ĐXT theo kỳ thi đánh gia năng lực của Đại học quốc gia Hà Nội:
                        <pre className="bg-gray-100 p-2 rounded mb-2">
                          ĐXT = Điểm ĐGNL *30/150 + Điểm ưu tiên
                        </pre>
                      </li>
                      <li>+ ĐXT theo kỳ thi đánh giá năng lực của Đại học quốc gia Tp. Hồ Chí Minh:
                        <pre className="bg-gray-100 p-2 rounded mb-2">
                          ĐXT = Điểm ĐGNL *30/1200 + Điểm ưu tiên
                        </pre>
                      </li>
                      <li>+ ĐXT theo kỳ thi đánh giá tư duy của Đại học Bách khoa Hà Nội:
                        <pre className="bg-gray-100 p-2 rounded mb-2">
                          ĐXT = Điểm ĐGTD *30/100 + Điểm ưu tiên
                        </pre>
                      </li>
                    </ul>
                    <li>Nếu xét tuyển theo phương thức dựa vào kết quả bài thi ĐGNL hoặc ĐGTD không đủ chỉ tiêu thì số chỉ tiêu còn lại được chuyển sang xét tuyển theo phương thức khác;</li>
                    <li>Thí sinh đủ điều kiện trúng tuyển vẫn phải đăng ký nguyện vọng trên Hệ thống tuyển sinh của Bộ Giáo dục và Đào tạo theo kế hoạch chung (thí sinh xếp nguyện vọng đã đủ điều kiện trúng tuyển là nguyện vọng 1 khi đăng ký nguyện vọng trên Hệ thống để được trúng tuyển chính thức vào Học viện);</li>
                    <li>Thí sinh trúng tuyển phải xác nhận nhập học trên Hệ thống tuyển sinh và theo kế hoạch quy định của Bộ Giáo dục và Đào tạo. Nếu quá thời hạn này, thí sinh không xác nhận nhập học được xem là từ chối nhập học.</li>
                  </ul>
                </div>

                <div className="space-y-4 mt-4 ml-4">
                  <h2 className="font-semibold">e, Học viện không sử dụng kết quả miễn thi bài thi môn ngoại ngữ, không sử dụng điểm thi được bảo lưu để xét tuyển.</h2>
                </div>

                <div className="my-8">
                  <h2 className="font-semibold" id="priority-policy">1.7. Chính sách ưu tiên</h2>
                  <div className="mt-4 space-y-4">
                    <p className="font-semibold">
                      a, Học viện thực hiện tuyển thẳng và ưu tiên xét
                      tuyển theo Quy chế tuyển sinh của Bộ GD&ĐT và Thông báo của Học
                      viện, không giới hạn số lượng chỉ tiêu (có Thông báo riêng);
                    </p>
                    <p className="font-semibold">
                      b, Chính sách ưu tiên về đối tượng, khu vực theo
                      Quy chế tuyển sinh của Bộ GD&ĐT. Trong đó, Thí sinh chỉ được hưởng
                      chính sách ưu tiên khu vực theo quy định trong năm tốt nghiệp THPT
                      (hoặc trung cấp) và một năm kế tiếp (thí sinh tốt nghiệp năm 2024
                      và năm 2023).
                    </p>
                    <p className="font-semibold">
                      c, Chính sách ưu tiên của Học viện đối với các
                      phương thức xét tuyển sớm (xét tuyển tài năng, xét tuyển kết hợp và
                      xét tuyển dựa vào kết quả bài thi đánh giá năng lực, đánh giá tư duy):
                    </p>
                    <p>
                      Quy đổi điểm Chứng chỉ tiếng Anh quốc tế: Áp dụng Đối với Phương
                      thức xét tuyển kết hợp.
                    </p>
                    <p>
                      Thí sinh được phép quy đổi điểm môn tiếng Anh trong tổ hợp xét tuyển khi có Chứng chỉ tiếng Anh quốc tế. Cụ thể:
                    </p>
                    <img src="/assets/score_eng.png" className='lg:w-[40%] md:w-[60%] w-4/5 my-2' />
                    <p>
                      (*): Chỉ quy đổi điểm môn tiếng Anh trong Điểm xét tuyển (điểm xét tuyển cuối cùng), không quy đổi điểm môn tiếng Anh của từng năm học
                      Cộng Điểm thưởng cho thí sinh đạt giải: Áp dụng Đối với Phương thức xét tuyển kết hợp và Phương thức xét tuyển dựa vào kết quả bài thi ĐGNL, ĐGTD
                    </p>
                    <p>
                      Thí sinh được cộng Điểm thưởng theo thành tích giải đạt được vào Điểm xét tuyển. Cụ thể:
                    </p>
                    <p className="font-semibold">
                      d,  Cách tính điểm ưu tiên:
                    </p>
                    <p>
                      Điểm ưu tiên, Điểm thưởng (ưu tiên đối tượng và khu vực theo quy
                      chế tuyển sinh, điểm thưởng) gọi chung là Điểm ưu tiên đối với thí
                      sinh đạt tổng điểm từ 22,5 trở lên (áp dụng theo thang điểm 10 và
                      tổng điểm 3 môn tối đa là 30) được xác định theo công thức sau:
                    </p>
                    <pre className="bg-gray-100 p-4 rounded">
                      Điểm ưu tiên = [(30 – Tổng điểm đạt được) / 7,5] x [Điểm ưu tiên theo QC + Điểm thưởng]
                    </pre>
                    <p>
                      (*) Tổng điểm đạt được là điểm xét tuyển (không gồm điểm ưu tiên) tương ứng với từng phương thức xét tuyển (là Kết quả thi tốt nghiệp THPT đối với PTXT dựa vào kết quả thi tốt nghiệp THPT hoặc Kết quả học tập THPT đối với PTXT kết hợp hoặc kết quả đánh giá năng lực, đánh giá tư duy sau quy đổi về thang điểm 30 đối với PTXT dựa vào kết quả bài thi đánh giá năng lực, đánh giá tư duy).
                    </p>
                    <p>
                      Đối với Phương thức xét tuyển tài năng theo thang điểm 100, các mức điểm trong xác định điểm ưu tiên được quy đổi theo thang điểm 100. Cụ thể, thí sinh đạt tổng điểm từ 75 điểm trở lên, điểm ưu tiên được xác định theo công thức sau:
                    </p>
                    <pre className="bg-gray-100 p-4 rounded">
                      Điểm ưu tiên = [(100 – Điểm HSNL đạt được(*))/25] x [Điểm ưu tiên theo QC]
                    </pre>
                  </div>
                </div>

                <div className="my-8">
                  <h2 className="font-semibold" id="majors">1.8. Ngành, mã ngành, tổ hợp xét tuyển</h2>
                  <img src="/assets/nganh.png" className='lg:w-[40%] md:w-[60%] w-4/5 my-2' />
                </div>

                <div className="my-8">
                  <h2 className="font-semibold" id="exam-arrangement">1.9. Tổ chức tuyển sinh</h2>
                  <div className="mt-4 space-y-4">
                    <p className="font-semibold">
                      a, Phương thức 1 – Xét tuyển tài năng:
                    </p>
                    <p>
                      Xét tuyển thẳng và ưu tiên xét tuyển: Theo quy định và theo lịch tuyển sinh của Bộ Giáo dục và Đào tạo.
                    </p>
                    <p>
                      Xét tuyển dựa vào hồ sơ năng lực:
                    </p>
                    <p>
                      Thời gian đăng ký và nhận hồ sơ ĐKXT: Từ 15/04/2024 đến hết 20/05/2024;
                    </p>
                    <p>
                      Hình thức đăng ký xét tuyển và nộp hồ sơ: thí sinh khai hồ sơ, đăng ký nguyện vọng xét tuyển trên Cổng xét tuyển trực tuyến của Học viện tại địa chỉ https://xettuyen.ptit.edu.vn và nộp hồ sơ (gửi qua đường Bưu điện, không nhận hồ sơ trực tiếp) cho các Cơ sở đào tạo của Học viện;
                    </p>
                    <p>
                      Công bố kết quả xét tuyển: Dự kiến cuối tháng 5/2024.
                    </p>
                    <p className="font-semibold">
                      b, Phương thức 2 – Xét tuyển dựa vào kết quả thi tốt nghiệp
                      THPT năm 2024:
                    </p>
                    <p>
                      Hình thức ĐKXT: Trực tuyến theo quy định của Bộ Giáo dục và Đào tạo;
                    </p>
                    <p>Thời gian xét tuyển: Theo lịch xét tuyển của Bộ Giáo dục và Đào tạo;</p>
                    <p>Các điều kiện xét tuyển: Không tổ chức sơ tuyển</p>
                    <p className="font-semibold">
                      c, Phương thức 3, 4 - Xét tuyển kết hợp và xét tuyển dựa vào
                      kết quả bài thi ĐGNL, ĐGTD:
                    </p>
                    <p>
                      Thời gian đăng ký và nhận hồ sơ ĐKXT: Từ 15/04/2024 đến hết 25/05/2024;
                    </p>
                    <p>Hình thức đăng ký xét tuyển và nộp hồ sơ: thí sinh khai hồ sơ, đăng ký nguyện vọng xét tuyển trên Cổng xét tuyển trực tuyến của Học viện tại địa chỉ https://xettuyen.ptit.edu.vn và nộp hồ sơ (gửi qua đường Bưu điện, không nhận hồ sơ trực tiếp) cho các Cơ sở đào tạo của Học viện;</p>
                    <p>Công bố kết quả xét tuyển: Dự kiến đầu tháng 6/2024.</p>
                  </div>
                </div>
                <div className="my-8">
                  <h2 className="font-semibold" id="exam-fee">1.10. Lệ phí xét tuyển</h2>
                  <p className="mt-4">Theo quy định của Bộ Giáo dục và Đào tạo và của Học viện.</p>
                </div>

                <div className="my-8">
                  <h2 className="font-semibold" id="tuition-fees">1.11. Học phí dự kiến với sinh viên chính quy</h2>
                  <div className="mt-4 space-y-4">
                    <p>
                      Học phí trình độ đại hệ chính quy chương trình đại trà năm học 2024-2025: trung bình từ khoảng 27 triệu đồng đến 34 triệu đồng/năm tùy theo từng ngành học;
                    </p>
                    <p>
                      Học phí chương trình chất lượng cao năm học 2024-2025: từ 39 triệu đồng
                      đến 55 triệu đồng/năm tùy theo ngành học;
                    </p>
                    <p>Học phí chương trình Cử nhân Công nghệ thông tin định hướng ứng dụng năm học 2024-2025: trung bình khoảng 35 triệu đồng đến 37 triệu đồng/năm;</p>
                    <p>Học phí chương trình liên kết quốc tế năm học 2024-2025: trung bình từ khoảng 49 triệu đồng đến 55,5 triệu đồng/năm tùy theo từng chương trình;
                      Lộ trình tăng học phí tối đa cho từng năm học: Mức học phí điều chỉnh theo lộ trình phù hợp tương xứng với chất lượng đào tạo và đảm bảo tỷ lệ tăng không quá 15%/năm (theo Nghị định 81/NĐ-CP của Chính phủ).</p>
                  </div>
                </div>

                <div className="my-8">
                  <h2 className="font-semibold" id="enrollment-schedule">1.12. Thời gian dự kiến tuyển sinh các đợt trong năm</h2>
                  <p className="mt-4">
                    Tuyển sinh đợt 1: Theo kế hoạch tuyển sinh của Bộ GD&ĐT
                  </p>
                  <p>Tuyển sinh bổ sung: sẽ có thông báo riêng trước 15 ngày thí sinh đăng ký xét tuyển.</p>
                </div>

                <div className="my-8">
                  <h2 className="font-semibold" id="other">1.13. Các nội dung khác</h2>
                  <div className="mt-4 space-y-4 ml-4">
                    <p className="font-semibold">
                      1.13.1 Chương trình chất lượng cao:
                    </p>
                    Năm 2024, Học viện tuyển sinh 600 chỉ tiêu vào các chương trình chất lượng cao (chương trình chất lượng cao do Học viện tự xác định) với nội dung, chất lượng chương trình đào tạo có nhiều ưu việt, nhiều lợi thế đối với người học và với quy mô lớp nhỏ. Cụ thể gồm có các chương trình chất lượng cao: Công nghệ thông tin, Marketing số, Kế toán theo chuẩn quốc tế ACCA.
                    <p></p>
                    <p className="font-semibold">
                      1.13.2 Chương trình liên kết quốc tế:
                    </p>
                    <p>Năm 2024, Học viện triển khai tuyển sinh các chương trình liên kết quốc tế: (1) Chương trình liên kết quốc tế 2+2 cấp bằng Cử nhân Công nghệ thông tin của Đại học La Trobe (Úc); (2) Dự kiến tuyển sinh Chương trình liên kết quốc tế 3+1 hoặc 2+2 cấp bằng Cử nhân Đa Phương Tiện của Đại học Canberra (Úc); (3) Dự kiến tuyển sinh Chương trình liên kết quốc tế 3+1 hoặc 2+2 theo hình thức đơn bằng hoặc song bằng ngành Công nghệ tài chính với Đại học Huddersfield, Vương quốc Anh trong năm 2024; với nội dung chương trình đào tạo nhiều ưu việt, đồng thời có nhiều cơ hội việc làm và định cư ở nước ngoài sau tốt nghiệp (Thông tin chi tiết tại: https://cie.ptit.edu.vn, https://tuyensinh.ptit.edu.vn).</p>
                    <p className="font-semibold">
                      1.13.3 Phân loại và xếp lớp học tiếng Anh:
                    </p>
                    <p>
                      Sau khi nhập học, Học viện sẽ tổ chức kỳ kiểm tra phân loại đầu vào tiếng Anh để tiến hành xếp lớp theo trình độ tiếng Anh cho sinh viên nhằm đảm bảo sinh viên sau khi hoàn thành chương trình đào tạo tiếng Anh sẽ đạt được chuẩn đầu ra tiếng Anh là TOEIC 450 điểm quốc tế (đối với hệ đại trà) và TOEFL iBT 70 điểm quốc tế (đối với các chương trình chất lượng cao).
                    </p>
                  </div>
                </div>
                <h2 className="font-semibold mb-4 ml-4">1.13.4. Thông tin trực hỗ trợ để giải đáp thắc mắc</h2>

                <div className="space-y-4 ml-4">
                  <div>
                    <h3 className="font-medium">a, Địa chỉ các trang thông tin điện tử của Học viện:</h3>
                    <ul className="list-disc pl-6">
                      <li>
                        <span>Cơ sở đào tạo phía Bắc (BVH): </span>
                        <a href="https://ptit.edu.vn" className="text-red-500 hover:underline">
                          https://ptit.edu.vn
                        </a> và
                        <a href="https://tuyensinh.ptit.edu.vn" className="text-red-500 hover:underline ml-1">
                          https://tuyensinh.ptit.edu.vn
                        </a>
                      </li>
                      <li>
                        <span>Cơ sở đào tạo phía Nam (BVS): </span>
                        <a href="https://ptithcm.edu.vn" className="text-red-500 hover:underline">
                          https://ptithcm.edu.vn
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium">b, Thông tin trực hỗ trợ để giải đáp thắc mắc:</h3>
                    <ul className="list-disc pl-6">
                      <li><span>Cơ sở đào tạo phía Bắc (BVH):</span> (024) 33528122, (024) 33512252</li>
                      <li><span>Cơ sở đào tạo phía Nam (BVS):</span> (028) 38297220</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium">c,Trang tư vấn trực tuyến:</h3>
                    <p>
                      Inbox trên trang Fanpage tuyển sinh hoặc trên cổng thông tin tuyển sinh.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium">d, Fanpage:</h3>
                    <ul className="list-disc pl-6">
                      <li>
                        <a href="https://facebook.com/ptittuyensinh" className="text-red-500 hover:underline">
                          https://facebook.com/ptittuyensinh
                        </a>
                      </li>
                      <li>
                        <a href="https://facebook.com/ptithcm.edu.vn" className="text-red-500 hover:underline">
                          https://facebook.com/ptithcm.edu.vn
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium">e) Zalo:</h3>
                    <p>
                      Học viện Công nghệ Bưu chính Viễn thông (ID: 1260203497642986925)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 ml-4">
                <h2 className="font-semibold mb-6">1.13.5. Ký túc xá</h2>
                <p>
                  Cơ sở phía Bắc có 200 chỗ cho sinh viên khóa mới, Cơ sở phía Nam có đầy đủ số chỗ cho sinh viên khóa mới.
                </p>
              </div>

              <h2 className="font-semibold mb-2 mt-6" id="special-admissions">1.14. Thông tin tuyển sinh các ngành đào tạo đặc thù có nhu cầu cao về nhân lực</h2>
              <div className="ml-4">
                <h3 className="font-medium">1.14.1. Thông tin về doanh nghiệp hợp tác đào tạo trong lĩnh vực CNTT</h3>
                <img src="/assets/doanh_nghiep_1.png" className='lg:w-[40%] md:w-[60%] w-4/5 my-2' />
                <img src="/assets/doanh_nghiep_2.png" className='lg:w-[40%] md:w-[60%] w-4/5 my-2' />
                <img src="/assets/doanh_nghiep_3.png" className='lg:w-[40%] md:w-[60%] w-4/5 my-2' />
                <img src="/assets/doanh_nghiep_4.png" className='lg:w-[40%] md:w-[60%] w-4/5 my-2' />
                <img src="/assets/doanh_nghiep_5.png" className='lg:w-[40%] md:w-[60%] w-4/5 my-2' />

              </div>
            </div>
          </div>
        </div>
      </div >
      <Footer>
      </Footer>
    </div >
  );
}
export default Project;
