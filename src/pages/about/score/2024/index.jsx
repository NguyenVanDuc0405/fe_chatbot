import {
    HomeOutlined,
    RightOutlined,
} from '@ant-design/icons';
import Footer from "../../../../components/footer";
import { useLocation, useNavigate, Link } from "react-router-dom";
function Score2024() {
    const data = [
        { stt: 1, tenNganh: 'Kỹ thuật Điện tử viễn thông', maNganh: '7520207', toHop: 'A00, A01', diemThi: '25.75 TTNV= 1', xtkh: '26.42', dgnl: '20.65' },
        { stt: 2, tenNganh: 'Công nghệ Kỹ thuật Điện, điện tử', maNganh: '7510301', toHop: 'A00, A01', diemThi: '25.46 TTNV<=2', xtkh: '25.07', dgnl: '19.84' },
        { stt: 3, tenNganh: 'Kỹ thuật Điều khiển và tự động hóa', maNganh: '7520216', toHop: 'A00, A01', diemThi: '26.08 TTNV<=3', xtkh: '27.71', dgnl: '22.05' },
        { stt: 4, tenNganh: 'Công nghệ thông tin', maNganh: '7480201', toHop: 'A00, A01', diemThi: '26.4 TTNV<=5', xtkh: '27.01', dgnl: '22.55' },
        { stt: 5, tenNganh: 'An toàn thông tin', maNganh: '7480202', toHop: 'A00, A01', diemThi: '25.85 TTNV<=2', xtkh: '26.8', dgnl: '21.6' },
        { stt: 6, tenNganh: 'Khoa học máy tính (định hướng Khoa học dữ liệu)', maNganh: '7480101', toHop: 'A00, A01', diemThi: '26.31 TTNV=1', xtkh: '28', dgnl: '23.5' },
        { stt: 7, tenNganh: 'Kỹ thuật dữ liệu (ngành Mạng máy tính và truyền thông dữ liệu)', maNganh: '7480102', toHop: 'A00, A01', diemThi: '25.59 TTNV<=11', xtkh: '23.74', dgnl: '19.45' },
        { stt: 8, tenNganh: 'Công nghệ thông tin Việt Nhật', maNganh: '7480201_VNH', toHop: 'A00, A01', diemThi: '24.25 TTNV=1', xtkh: 'X', dgnl: 'X' },
        { stt: 9, tenNganh: 'Công nghệ thông tin (Cử nhân định hướng ứng dụng)', maNganh: '7480201_UDU', toHop: 'A00, A01', diemThi: '24.87 TTNV<=4', xtkh: '25.5', dgnl: '17.1' },
        { stt: 10, tenNganh: 'Công nghệ đa phương tiện', maNganh: '7329001', toHop: 'A00, A01, D01', diemThi: '25.75 TTNV<=2', xtkh: '27', dgnl: '20.21' },
        { stt: 11, tenNganh: 'Truyền thông đa phương tiện', maNganh: '7320104', toHop: 'A00, A01, D01', diemThi: '25.94 TTNV<=6', xtkh: '28', dgnl: '20.7' },
        { stt: 12, tenNganh: 'Báo chí', maNganh: '7320101', toHop: 'A00, A01, D01', diemThi: '25.29 TTNV=1', xtkh: '26.73', dgnl: '18.5' },
        { stt: 13, tenNganh: 'Quản trị kinh doanh', maNganh: '7340101', toHop: 'A00, A01, D01', diemThi: '25.17 TTNV<=13', xtkh: '25.37', dgnl: '18.3' },
        { stt: 14, tenNganh: 'Thương mại điện tử', maNganh: '7340122', toHop: 'A00, A01, D01', diemThi: '26.09 TTNV<=2', xtkh: '27.26', dgnl: '20.7' },
        { stt: 15, tenNganh: 'Marketing', maNganh: '7340115', toHop: 'A00, A01, D01', diemThi: '25.85 TTNV<=3', xtkh: '26.97', dgnl: '19.85' },
        { stt: 16, tenNganh: 'Kế toán', maNganh: '7340301', toHop: 'A00, A01, D01', diemThi: '25.29 TTNV<=16', xtkh: '25.77', dgnl: '18.5' },
        { stt: 17, tenNganh: 'Công nghệ tài chính (Fintech)', maNganh: '7340205', toHop: 'A00, A01, D01', diemThi: '25.61 TTNV<=10', xtkh: '26.7', dgnl: '19.45' },
        { stt: 18, tenNganh: 'Quan hệ công chúng (ngành Marketing)', maNganh: '7340115_QHC', toHop: 'A00, A01, D01', diemThi: '25.15 TTNV<=4', xtkh: 'X', dgnl: 'X' },
        { stt: 19, tenNganh: 'Thiết kế và phát triển Game (ngành Công nghệ đa phương tiện)', maNganh: '7329001_GAM', toHop: 'A00, A01, D01', diemThi: '24.97 TTNV<=2', xtkh: 'X', dgnl: 'X' },
        { stt: 20, tenNganh: 'Công nghệ thông tin chất lượng cao', maNganh: '7480201_CLC', toHop: 'A00, A01, D01', diemThi: '25.43 TTNV=1', xtkh: '25.64', dgnl: '19.4' },
        { stt: 21, tenNganh: 'Kế toán chất lượng cao (chuẩn quốc tế ACCA)', maNganh: '7340301_CLC', toHop: 'A00, A01, D01', diemThi: '22.5 TTNV=1', xtkh: '23.36', dgnl: '15' },
        { stt: 22, tenNganh: 'Marketing chất lượng cao', maNganh: '7340115_CLC', toHop: 'A00, A01, D01', diemThi: '24.25 TTNV=1', xtkh: '25.51', dgnl: '17.45' },
        { stt: 23, tenNganh: 'Công nghệ thông tin (Liên kết với Đại học La Trobe. Austraha)', maNganh: '7480201_LK', toHop: 'X', diemThi: 'X', xtkh: '23.67', dgnl: '15' },
        { stt: 24, tenNganh: 'Cổng nghệ tài chính (Liên kết với Đại học Hudderssield. Vương quốc Anh)', maNganh: '7340205_LK', toHop: 'X', diemThi: 'X', xtkh: '22.83', dgnl: '15' },
        { stt: 25, tenNganh: 'Công nghệ đa phương tiện (Liên kết với Đại học Canberra. Australia)', maNganh: '7329001_LK', toHop: 'X', diemThi: 'X', xtkh: '24.3', dgnl: '16.6' },
    ];

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
                            <span>Xem điểm các năm trước</span>
                            <RightOutlined className='text-[12px] ' />
                            <span>Điểm trúng tuyển 2024</span>
                        </div>
                        <div className='flex text-white lg:text-4xl md:text-2xl text-xl gap-1 lg:font-bold justify-center lg:mt-6 md:mt-3 mt-1'>Điểm trúng tuyển 2024</div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center mt-20 pb-20'>
                <div className='w-[85%]'>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200 text-gray-700">
                                    <th className="px-4 py-2 border">STT</th>
                                    <th className="px-4 py-2 border">Tên Ngành</th>
                                    <th className="px-4 py-2 border">Mã Ngành</th>
                                    <th className="px-4 py-2 border">Tổ Hợp Xét Tuyển</th>
                                    <th className="px-4 py-2 border">Điểm Thi Tốt Nghiệp THPT</th>
                                    <th className="px-4 py-2 border">XTKH</th>
                                    <th className="px-4 py-2 border">ĐGNL/ĐGTD</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr key={item.stt} className="text-left text-gray-800 hover:bg-gray-100">
                                        <td className="px-4 py-2 border">{item.stt}</td>
                                        <td className="px-4 py-2 border">{item.tenNganh}</td>
                                        <td className="px-4 py-2 border">{item.maNganh}</td>
                                        <td className="px-4 py-2 border">{item.toHop}</td>
                                        <td className="px-4 py-2 border">{item.diemThi}</td>
                                        <td className="px-4 py-2 border">{item.xtkh}</td>
                                        <td className="px-4 py-2 border">{item.dgnl}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer>
            </Footer>
        </div >
    );
}

export default Score2024;