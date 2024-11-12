import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="h-screen">
      <div className="flex items-center justify-center h-full w-full bg-gradient-to-r from-red-300 to-pink-100">
        <div className="text-center -mt-40">
          <div className="max-w-xl">
            <img
              className="w-[250px] mx-auto hover:scale-110"
              src="assets/chatbot_image_1.jpg"
            ></img>
            <h1 className="text-2xl lg:text-5xl font-bold">Chào mừng bạn đến với PTIT Chatbot</h1>
            <p className="py-6 font-semibold lg:text-lg text-sm">
              Giúp bạn giải đáp thắc mắc, tra cứu thông tin về tuyển sinh PTIT một cách nhanh chóng, hiệu quả
              và chính xác nhất!
            </p>
            <Link to="/chat">
              <button className="btn btn-info hover:scale-110 bg-cyan-300">Bắt đầu chat</button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HomePage;
