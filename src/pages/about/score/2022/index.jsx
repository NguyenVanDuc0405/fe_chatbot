import {
    HomeOutlined,
    RightOutlined,
} from '@ant-design/icons';
import Footer from "../../../../components/footer";
import { useLocation, useNavigate, Link } from "react-router-dom";
function Score2022() {
    const data = [
        { stt: 1, tenNganh: 'Kỹ thuật điện tử viễn thông', maNganh: '7520207', toHop: 'A00, A01', diemThi: '25.60 TTNV <= 3', xtkh: '22.60', dgnl: '19.45' },
        { stt: 2, tenNganh: 'Công nghệ kỹ thuật điện, điện tử', maNganh: '7510301', toHop: 'A00, A01', diemThi: '25.1 TTNV <= 2', xtkh: '22.50', dgnl: '19.30' },
        { stt: 3, tenNganh: 'Kỹ thuật Điều khiển và Tự động hóa', maNganh: '7520216', toHop: 'A00, A01', diemThi: 'X', xtkh: 'X', dgnl: 'X' },
        { stt: 4, tenNganh: 'Mạng máy tính và truyền thông dữ liệu', maNganh: '7480102', toHop: 'A00, A01', diemThi: 'X', xtkh: 'X', dgnl: 'X' },
        { stt: 5, tenNganh: 'Công nghệ thông tin', maNganh: '7480201', toHop: 'A00, A01', diemThi: '27.25 TTNV = 1', xtkh: '27.97', dgnl: '21.50' },
        { stt: 6, tenNganh: 'Công nghệ thông tin (ứng dụng)', maNganh: '7480201_UDU', toHop: 'A00, A01', diemThi: 'X', xtkh: 'X', dgnl: 'X' },
        { stt: 7, tenNganh: 'Công nghệ thông tin (chất lượng cao)', maNganh: '7480201_CLC', toHop: 'A00, A01', diemThi: 'X', xtkh: 'X', dgnl: 'X' },
        { stt: 8, tenNganh: 'An toàn thông tin', maNganh: '7480202', toHop: 'A00, A01', diemThi: '26.7 TTNV <= 3', xtkh: '27.06', dgnl: '20.65' },
        { stt: 9, tenNganh: 'Khoa học máy tính', maNganh: '7480101', toHop: 'A00, A01', diemThi: '26.9 TTNV <= 2', xtkh: 'X', dgnl: 'X' },
        { stt: 10, tenNganh: 'Công nghệ đa phương tiện', maNganh: '7329001', toHop: 'A00, A01, D01', diemThi: '26.45 TTNV <= 3', xtkh: '26.45', dgnl: '20.20' },
        { stt: 11, tenNganh: 'Truyền thông đa phương tiện', maNganh: '7320104', toHop: 'A00, A01, D01', diemThi: '26.2 TTNV = 1', xtkh: '26.92', dgnl: '20.45' },
        { stt: 12, tenNganh: 'Báo chí', maNganh: '7320101', toHop: 'A00, A01, D01', diemThi: '24.4 TTNV <= 3', xtkh: 'X', dgnl: 'X' },
        { stt: 13, tenNganh: 'Quản trị kinh doanh', maNganh: '7340101', toHop: 'A00, A01, D01', diemThi: '25.55 TTNV <= 3', xtkh: '23.03', dgnl: '18.05' },
        { stt: 14, tenNganh: 'Thương mại điện tử', maNganh: '7340122', toHop: 'A00, A01, D01', diemThi: '26.35 TTNV <= 3', xtkh: '26.82', dgnl: '20.70' },
        { stt: 15, tenNganh: 'Marketing', maNganh: '7340115', toHop: 'A00, A01, D01', diemThi: '26.1 TTNV <= 2', xtkh: '25.50', dgnl: '19.70' },
        { stt: 16, tenNganh: 'Kế toán', maNganh: '7340301', toHop: 'A00, A01, D01', diemThi: '25.35 TTNV <= 8', xtkh: '23.04', dgnl: '18.15' },
        { stt: 17, tenNganh: 'Công nghệ tài chính', maNganh: '7340205', toHop: 'A00, A01, D01', diemThi: '25.85 TTNV <= 6', xtkh: '24.27', dgnl: '19.65' },
    ];

    return (
        <div className="min-h-[100vh] h-auto w-full bg-gradient-to-br  from-red-100 to-white">
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
                            <span>Điểm trúng tuyển 2022</span>
                        </div>
                        <div className='flex text-white lg:text-4xl md:text-2xl text-xl gap-1 lg:font-bold justify-center lg:mt-6 md:mt-3 mt-1'>Điểm trúng tuyển 2022</div>
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

export default Score2022;