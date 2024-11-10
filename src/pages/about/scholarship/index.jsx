import {
    HomeOutlined,
    RightOutlined,
} from '@ant-design/icons';
import Footer from "../../../components/footer";
import "./index.css"
import { useLocation, useNavigate, Link } from "react-router-dom";

function Scholarship() {
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
                            <span>Chính sách học bổng</span>
                        </div>
                        <div className='flex text-white lg:text-4xl md:text-2xl text-xl gap-1 lg:font-bold justify-center lg:mt-6 md:mt-3 mt-1'>Chính sách học bổng</div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center mt-20 pb-20'>
                <div className='w-[85%]'>
                    <span className='pl-3 border-l-4 border-solid border-red-500 lg:text-2xl md:text-xl text-base font-bold font-sans'>Học viện Công nghệ Bưu chính Viễn thông thực hiện chính sách học bổng <br /></span>
                    <span className='block py-6 font-sans md:text-base text-sm'>Học bổng đặc biệt: năm 2024, Học viện Công nghệ Bưu chính Viễn thông cấp tối đa 30 suất học bổng đặc biệt, giá trị mỗi suất học bổng tới 500 triệu đồng (gồm: học phí trong toàn thời gian học, chi phí ăn ở, kinh phí nghiên cứu khoa học, thực tập ở nước ngoài, kinh phí hỗ trợ từ doanh nghiệp đối tác và các hỗ trợ khác). <br />
                        Đối tượng xét cấp học bổng đặc biệt là các thí sinh tham dự kỳ thi chọn đội tuyển quốc gia dự thi Olympic quốc tế, thí sinh đoạt giải Nhất, Nhì, Ba trong kỳ thi chọn học sinh giỏi quốc gia các môn Toán, Lý và Tin học; thí sinh có điểm thi tốt nghiệp THPT từ 29,0 điểm trở lên. Người được nhận học bổng đặc biệt phải đảm bảo điểm trung bình chung tích lũy năm học liên tục đạt từ loại Giỏi trở lên trong thời gian học tập. <br />
                        Học bổng toàn phần: năm 2024, Học viện Công nghệ Bưu chính Viễn thông cấp tối đa 50 suất học bổng toàn phần với giá trị học bổng tới 250 triệu đồng (tương đương học phí toàn khóa học của chương trình chất lượng cao) cho các thí sinh đoạt giải Nhất trong kỳ thi học sinh giỏi cấp Tỉnh/Thành phố trực thuộc TW các môn Toán, Lý và Tin học. Người được nhận học bổng toàn phần phải đảm bảo điểm trung bình chung tích lũy năm học liên tục đạt từ loại Giỏi trở lên trong thời gian học tập. <br />
                        Học bổng miễn 100% học phí trong năm học thứ nhất với tối đa 100 suất cho đối tượng là các thí sinh đoạt trong kỳ thi học sinh giỏi quốc tế, quốc gia hoặc thí sinh đoạt giải Nhất, Nhì, Ba trong kỳ thi học sinh giỏi cấp Tỉnh, Thành phố trực thuộc TW các môn Toán, Lý, Hóa và Tin học hoặc đạt kết quả cao trong kỳ thi tốt nghiệp THPT năm 2024; <br />
                        Học bổng miễn 50% học phí trong năm học thứ nhất với tối đa 300 suất cho đối tượng là các thí sinh đoạt giải trong kỳ thi học sinh giỏi hoặc đạt kết quả cao trong kỳ thi tốt nghiệp THPT năm 2024; <br />
                        Ngoài ra, sinh viên còn có nhiều cơ hội để được nhận các xuất học bổng của các doanh nghiệp hàng đầu như Samsung, VNPT, Mobifone, Viettel, FPT, AGR, ... <br />
                        <span className='italic'><span className='font-semibold'>Ghi chú:</span> Thí sinh chỉ được xét và cấp một Loại học bổng trong chính sách học bổng nêu trên; xét cấp học bổng thực hiện xét từ trên xuống cho đến hết số suất học bổng. <br /></span></span>
                    <div className='w-full flex justify-center mt-10'>
                        <div className='w-[60%] hover:scale-105'>
                            <img src="/assets/scholarship_bg.png" className='w-full' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer>
            </Footer>
        </div >
    );
}
export default Scholarship;
