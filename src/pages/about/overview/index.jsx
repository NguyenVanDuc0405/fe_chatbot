import {
    HomeOutlined,
    RightOutlined,
} from '@ant-design/icons';
import Footer from "../../../components/footer";
import { useLocation, useNavigate, Link } from "react-router-dom";
import './index.css'
function Overview() {
    const navigate = useNavigate();
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
                            <span>Tổng quan học viện</span>
                        </div>
                        <div className='flex text-white lg:text-4xl md:text-2xl text-xl gap-1 lg:font-bold justify-center lg:mt-6 md:mt-3 mt-1'>Tổng quan học viện</div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center mt-20 pb-20'>
                <div className='w-[85%]'>
                    <span className='pl-3 border-l-4 border-solid border-red-500 lg:text-2xl md:text-xl text-base font-bold font-sans'>Học viện Công nghệ Bưu chính Viễn thông <br /></span>
                    <span className='block py-6 font-sans md:text-base text-sm'>Học viện Công nghệ Bưu chính Viễn thông được thành lập theo quyết định số 516/TTg của Thủ tướng Chính phủ ngày 11 tháng 7 năm 1997 trên cơ sở sắp xếp lại 4 đơn vị thành viên thuộc Tổng Công ty Bưu chính Viễn thông Việt Nam, nay là Tập đoàn Bưu chính Viễn thông Việt Nam là Viện Khoa học Kỹ thuật Bưu điện, Viện Kinh tế Bưu điện, Trung tâm đào tạo Bưu chính Viễn thông 1 và 2. Các đơn vị tiền thân của Học viện là những đơn vị có bề dày lịch sử hình thành và phát triển với xuất phát điểm từ Trường Đại học Bưu điện 1953. <br />
                        Từ ngày 1/7/2014, thực hiện Quyết định của Thủ tướng Chính phủ, Bộ trưởng Bộ Thông tin và Truyền thông đã ban hành Quyết định số 878/QĐ-BTTTT điều chuyển quyền quản lý Học viện từ Tập đoàn Bưu chính Viễn thông Việt Nam về Bộ Thông tin và Truyền thông. Học viện Công nghệ Bưu chính Viễn thông là đơn vị sự nghiệp trực thuộc Bộ. Là trường đại học, đơn vị nghiên cứu, phát triển nguồn nhân lực trọng điểm của Ngành Thông tin và Truyền thông. <br />
                        Với vị thế là đơn vị đào tạo, nghiên cứu trọng điểm, chủ lực của Ngành Thông tin và Truyền thông Việt Nam, là trường đại học trọng điểm quốc gia trong lĩnh vực ICT, những thành tựu trong gắn kết giữa Nghiên cứu – Đào tạo – Sản xuất kinh doanh năng lực, quy mô phát triển của Học viện hôm nay, Học viện sẽ có những đóng góp hiệu quả phục vụ sự phát triển chung của Ngành Thông tin và truyền thông và sự nghiệp xây dựng, bảo vệ tổ quốc, góp phần để đất nước, để Ngành Thông tin và truyền thông Việt Nam có sự tự chủ, độc lập về khoa học công nghệ và nguồn nhân lực, qua đó tự tin cạnh tranh với các đối thủ lớn và sánh vai với các cường quốc trên thế giới. <br />
                        Là trường Đại học, đơn vị nghiên cứu, phát triển nguồn nhân lực trọng điểm của Ngành Thông tin và Truyền thông. Học viện sẽ có những đóng góp hiệu quả phục vụ sự phát triển chung của Ngành và sự nghiệp xây dựng, bảo vệ tổ quốc. <br /></span>
                    <div className='w-[100%] flex justify-center mt-10'>
                        <div className='w-[60%] hover:scale-105'>
                            <img src="/assets/A2_ptit.jpg" className='w-full' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer>
            </Footer>
        </div >
    );
}
export default Overview;
