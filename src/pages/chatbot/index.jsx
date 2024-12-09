import { useState, useRef, useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faComment } from "@fortawesome/free-regular-svg-icons";
import { faTimes, faHistory } from '@fortawesome/free-solid-svg-icons';

import axios from "axios";
import {
  SendOutlined,
  ArrowUpOutlined
} from '@ant-design/icons';
import ENVIRONMENT_CONFIG from "../../config/env";
import "./index.css"
function ChatBot() {
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const [timeOfRequest, setTimeOfRequest] = useState(0);
  let [promptInput, setPromptInput] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [tag, setTag] = useState("");
  const [tagpre, setTagpre] = useState("");

  const [isOpenHistory, setIsOpenHistory] = useState(true);
  let [chatHistory, setChatHistory] = useState([]);
  const hintQuestions = [
    "Học viện có bao nhiêu loại học bổng?",
    "Các mốc thời gian quan trọng trong việc tuyển sinh?",
    "Quy trình nộp hồ sơ trực tuyến như nào?",
    "Hồ sơ nhập học cần chuẩn bị những gì?",
    "Các phương thức xét tuyển của học viện?",
    "Quy định, quy chế tuyển sinh của học viện?",
    "Những ngành học mới trong học viện năm 2024?",
    "Ngành Công nghệ thông tin xét tuyển theo tổ hợp nào?",
    "Các trang web chính thức của học viện?",
    "Điểm chuẩn tất cả các ngành năm nay?",
    "Điểm chuẩn tất cả các ngành năm 2023?",
    "Điểm chuẩn tất cả các ngành năm 2022?",
    "Điểm chuẩn tất cả các ngành năm 2021?",
    "Ngành Công nghệ Internet vạn vật (IoT) được đào tạo ở cơ sở nào?",
    "Học phí của Chương trình Công nghệ thông tin (định hướng ứng dụng) là bao nhiêu?",
    "Học viện đào tạo những ngành nào ở cơ sở miền bắc?",
    "Điểm chuẩn ngành công nghệ thông tin theo phương thức thi thpt năm nay tại cơ sở miền bắc là bao nhiêu?",
    "Chỉ tiêu của Ngành Công nghệ thông tin là bao nhiêu?",
    "Mã ngành của chương trình Công nghệ thông tin (định hướng ứng dụng) là bao nhiêu?",
    "Thời gian đào tạo của ngành Công nghệ thông tin là bao lâu?",
    "Cơ sở đào tạo của học viện tại cơ sở miền bắc ở đâu?",
    "Trụ sở chính của học viện ở đâu?",
    "Học tại học viện có nhàn không?",
    "Mình muốn đăng ký ký túc xá thì như nào?",
    "Có những kiểu đào tạo nào tại học viện?",
    "Ngành IoT có được đào tạo ở cơ sở miền bắc không?",
    "Các câu lạc bộ có ở học viện?",
    "Làm sao để kiếm người yêu khi học đại học?",
  ];
  let [isLoading, setIsLoading] = useState(false);
  let [isGen, setIsGen] = useState(false);
  const [dataChat, setDataChat] = useState([
    [
      "start",
      [
        "Chào bạn! Tôi là PTIT chatbot 🤖🤖🤖, một trợ lý ảo được thiết kế để giúp bạn giải đáp thắc mắc và cung cấp thông tin hữu ích về việc tuyển sinh tại Học Viện. Tôi có thể giúp gì cho bạn!💖💖💖",
        null,
      ],
    ],
  ]);
  useEffect(() => {
    ScrollToEndChat();
  }, [isGen]);
  useEffect(() => {
    ScrollToEndChat();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeOfRequest((timeOfRequest) => timeOfRequest + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  // useEffect(() => {
  //   sendGGSheet()
  // }, [tagpre]);
  function ScrollToEndChat() {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }
  const onChangeHandler = (event) => {
    setPromptInput(event.target.value);
    // setInput(event.target.value);
  };
  const sendGGSheet = async () => {
    try {
      const data = {
        ["question"]: input,
        ["answer"]: output,
        ["tag"]: tag,
        ["tag_predict"]: tagpre,

      };
      await axios
        .post(
          "https://api.sheetbest.com/sheets/740ee395-c884-4476-85d0-27b094b0b5c4",
          data
        )

    } catch (err) {
      console.log("err: ", err);
    }
  }
  async function SendMessageChat() {
    if (promptInput !== "" && isLoading === false) {
      setTimeOfRequest(0);
      setIsGen(true);
      setPromptInput("");
      setInput("")
      setOutput("")
      setTag("")
      setTagpre("")
      setIsLoading(true);
      setDataChat((prev) => [...prev, ["end", [promptInput]]]);
      setChatHistory((prev) => [promptInput, ...prev]);
      try {
        // Gửi yêu cầu đến API bằng axios
        const API_ENDPOINT = `${ENVIRONMENT_CONFIG}/api/chatbot`;
        const response = await axios.get(API_ENDPOINT, {
          params: { q: promptInput },
          headers: {
            "ngrok-skip-browser-warning": "69420",
          },

        });
        console.log('Câu hỏi:', response.data?.query);
        console.log('Câu trả lời:', response.data?.response);
        console.log('tag:', response.data?.tag);
        console.log('tag dự đoán:', response.data?.tag_predict);
        console.log("-------------")
        setInput(response.data?.query)
        setOutput(response.data?.response)
        setTag(response.data?.tag)
        setTagpre(response.data?.tag_predict)

        setDataChat((prev) => [...prev, ["start", [response.data?.response]]]);
      } catch (error) {
        setDataChat((prev) => [
          ...prev,
          ["start", ["Lỗi không thể kết nối với server ", null]],
        ]);
      } finally {
        setIsLoading(false);
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    }
  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      SendMessageChat();
    }
  };

  return (
    <div className="bg-gradient-to-r h-[89vh] w-full relative">
      <div className="hidden lg:block absolute lg:w-64 lg:h-[89vh] w-0 h-0">
        <div className={`absolute top-1 pt-4 left-0 bg-gray-50 p-2 w-full z-40 transition-transform duration-300 ease-in-out transform ${isOpenHistory ? "translate-x-0" : "-translate-x-full"}`} >
          <button
            onClick={() => setIsOpenHistory(!isOpenHistory)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-xl-heavy max-md:hidden">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.85719 3H15.1428C16.2266 2.99999 17.1007 2.99998 17.8086 3.05782C18.5375 3.11737 19.1777 3.24318 19.77 3.54497C20.7108 4.02433 21.4757 4.78924 21.955 5.73005C22.2568 6.32234 22.3826 6.96253 22.4422 7.69138C22.5 8.39925 22.5 9.27339 22.5 10.3572V13.6428C22.5 14.7266 22.5 15.6008 22.4422 16.3086C22.3826 17.0375 22.2568 17.6777 21.955 18.27C21.4757 19.2108 20.7108 19.9757 19.77 20.455C19.1777 20.7568 18.5375 20.8826 17.8086 20.9422C17.1008 21 16.2266 21 15.1428 21H8.85717C7.77339 21 6.89925 21 6.19138 20.9422C5.46253 20.8826 4.82234 20.7568 4.23005 20.455C3.28924 19.9757 2.52433 19.2108 2.04497 18.27C1.74318 17.6777 1.61737 17.0375 1.55782 16.3086C1.49998 15.6007 1.49999 14.7266 1.5 13.6428V10.3572C1.49999 9.27341 1.49998 8.39926 1.55782 7.69138C1.61737 6.96253 1.74318 6.32234 2.04497 5.73005C2.52433 4.78924 3.28924 4.02433 4.23005 3.54497C4.82234 3.24318 5.46253 3.11737 6.19138 3.05782C6.89926 2.99998 7.77341 2.99999 8.85719 3ZM6.35424 5.05118C5.74907 5.10062 5.40138 5.19279 5.13803 5.32698C4.57354 5.6146 4.1146 6.07354 3.82698 6.63803C3.69279 6.90138 3.60062 7.24907 3.55118 7.85424C3.50078 8.47108 3.5 9.26339 3.5 10.4V13.6C3.5 14.7366 3.50078 15.5289 3.55118 16.1458C3.60062 16.7509 3.69279 17.0986 3.82698 17.362C4.1146 17.9265 4.57354 18.3854 5.13803 18.673C5.40138 18.8072 5.74907 18.8994 6.35424 18.9488C6.97108 18.9992 7.76339 19 8.9 19H9.5V5H8.9C7.76339 5 6.97108 5.00078 6.35424 5.05118ZM11.5 5V19H15.1C16.2366 19 17.0289 18.9992 17.6458 18.9488C18.2509 18.8994 18.5986 18.8072 18.862 18.673C19.4265 18.3854 19.8854 17.9265 20.173 17.362C20.3072 17.0986 20.3994 16.7509 20.4488 16.1458C20.4992 15.5289 20.5 14.7366 20.5 13.6V10.4C20.5 9.26339 20.4992 8.47108 20.4488 7.85424C20.3994 7.24907 20.3072 6.90138 20.173 6.63803C19.8854 6.07354 19.4265 5.6146 18.862 5.32698C18.5986 5.19279 18.2509 5.10062 17.6458 5.05118C17.0289 5.00078 16.2366 5 15.1 5H11.5ZM5 8.5C5 7.94772 5.44772 7.5 6 7.5H7C7.55229 7.5 8 7.94772 8 8.5C8 9.05229 7.55229 9.5 7 9.5H6C5.44772 9.5 5 9.05229 5 8.5ZM5 12C5 11.4477 5.44772 11 6 11H7C7.55229 11 8 11.4477 8 12C8 12.5523 7.55229 13 7 13H6C5.44772 13 5 12.5523 5 12Z" fill="currentColor">
              </path>
            </svg>
          </button>
        </div>
        {!isOpenHistory && (
          <div className={`absolute top-1 pt-4 left-0 bg-white p-2 w-full z-40 transition-transform duration-300 ease-in-out transform ${!isOpenHistory ? "translate-x-0" : "-translate-x-full"}`} >
            <button
              onClick={() => setIsOpenHistory(true)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-xl-heavy max-md:hidden">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.85719 3H15.1428C16.2266 2.99999 17.1007 2.99998 17.8086 3.05782C18.5375 3.11737 19.1777 3.24318 19.77 3.54497C20.7108 4.02433 21.4757 4.78924 21.955 5.73005C22.2568 6.32234 22.3826 6.96253 22.4422 7.69138C22.5 8.39925 22.5 9.27339 22.5 10.3572V13.6428C22.5 14.7266 22.5 15.6008 22.4422 16.3086C22.3826 17.0375 22.2568 17.6777 21.955 18.27C21.4757 19.2108 20.7108 19.9757 19.77 20.455C19.1777 20.7568 18.5375 20.8826 17.8086 20.9422C17.1008 21 16.2266 21 15.1428 21H8.85717C7.77339 21 6.89925 21 6.19138 20.9422C5.46253 20.8826 4.82234 20.7568 4.23005 20.455C3.28924 19.9757 2.52433 19.2108 2.04497 18.27C1.74318 17.6777 1.61737 17.0375 1.55782 16.3086C1.49998 15.6007 1.49999 14.7266 1.5 13.6428V10.3572C1.49999 9.27341 1.49998 8.39926 1.55782 7.69138C1.61737 6.96253 1.74318 6.32234 2.04497 5.73005C2.52433 4.78924 3.28924 4.02433 4.23005 3.54497C4.82234 3.24318 5.46253 3.11737 6.19138 3.05782C6.89926 2.99998 7.77341 2.99999 8.85719 3ZM6.35424 5.05118C5.74907 5.10062 5.40138 5.19279 5.13803 5.32698C4.57354 5.6146 4.1146 6.07354 3.82698 6.63803C3.69279 6.90138 3.60062 7.24907 3.55118 7.85424C3.50078 8.47108 3.5 9.26339 3.5 10.4V13.6C3.5 14.7366 3.50078 15.5289 3.55118 16.1458C3.60062 16.7509 3.69279 17.0986 3.82698 17.362C4.1146 17.9265 4.57354 18.3854 5.13803 18.673C5.40138 18.8072 5.74907 18.8994 6.35424 18.9488C6.97108 18.9992 7.76339 19 8.9 19H9.5V5H8.9C7.76339 5 6.97108 5.00078 6.35424 5.05118ZM11.5 5V19H15.1C16.2366 19 17.0289 18.9992 17.6458 18.9488C18.2509 18.8994 18.5986 18.8072 18.862 18.673C19.4265 18.3854 19.8854 17.9265 20.173 17.362C20.3072 17.0986 20.3994 16.7509 20.4488 16.1458C20.4992 15.5289 20.5 14.7366 20.5 13.6V10.4C20.5 9.26339 20.4992 8.47108 20.4488 7.85424C20.3994 7.24907 20.3072 6.90138 20.173 6.63803C19.8854 6.07354 19.4265 5.6146 18.862 5.32698C18.5986 5.19279 18.2509 5.10062 17.6458 5.05118C17.0289 5.00078 16.2366 5 15.1 5H11.5ZM5 8.5C5 7.94772 5.44772 7.5 6 7.5H7C7.55229 7.5 8 7.94772 8 8.5C8 9.05229 7.55229 9.5 7 9.5H6C5.44772 9.5 5 9.05229 5 8.5ZM5 12C5 11.4477 5.44772 11 6 11H7C7.55229 11 8 11.4477 8 12C8 12.5523 7.55229 13 7 13H6C5.44772 13 5 12.5523 5 12Z" fill="currentColor">
                </path>
              </svg>
            </button>
          </div>
        )}
        <div
          className={`relative w-full h-full overflow-auto scrollbar-none bg-gray-50 pl-4 pt-16 transition-transform duration-300 ease-in-out transform ${isOpenHistory ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div>
            <ul className="menu text-sm">
              <h2 className="font-bold mb-2">Lịch sử trò chuyện</h2>
              {chatHistory.length === 0 ? (
                <p className="text-sm text-black">Chưa có lịch sử trò chuyện</p>
              ) : (
                ""
              )}
              {chatHistory.map((mess, i) => (
                <li key={i}>
                  <p>
                    <FontAwesomeIcon icon={faMessage} />
                    {mess.length < 40 ? mess : mess.slice(0, 40) + "..."}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute lg:w-64 lg:h-[89vh] w-0 h-0 right-0">
        <div className="w-full h-full bg-gray-50 rounded-2xl overflow-auto scrollbar-none pt-10 pl-4">
          <h2 className="font-bold mb-2">
            Những câu hỏi phổ biến
          </h2>
          <ul className="menu text-sm">
            {hintQuestions.map((mess, i) => (
              <li
                key={i}
                onClick={() => {
                  setPromptInput(mess);
                }}
              >
                <p className="max-w-64">
                  <FontAwesomeIcon icon={faComment} />
                  {mess}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center h-full w-full">
        <div
          id="chat-area"
          className={`text-sm bg-white rounded-xl border-2 h-full p-2 scrollbar-none overflow-auto scroll-y-auto pb-20 transition-width
             w-11/12 ${isOpenHistory ? "lg:w-1/2" : "lg:w-2/3"}`}
        >
          {dataChat.map((dataMessages, i) =>
            dataMessages[0] === "start" ? (
              <div className="chat chat-start drop-shadow-md mt-4" key={i}>
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full border-2 border-blue-500">
                    <img className="scale-100" src="/assets/chatbot_icon.jpg" />
                  </div>
                </div>
                <div className="chat-bubble chat-bubble-info">
                  <TypeAnimation
                    style={{ whiteSpace: "pre-line" }}
                    sequence={[
                      dataMessages[1][0],
                      () => {
                        setIsGen(false);
                      },
                    ]}
                    cursor={false}
                    speed={100}
                  />
                </div>
              </div>
            ) : (
              <div className="chat chat-end" key={i}>
                <div className="chat-bubble shadow-xl bg-gray-200 text-black">
                  {dataMessages[1][0]}
                </div>
              </div>
            )
          )}
          {isLoading ? (
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full border-2 border-blue-500">
                  <img src="/assets/chatbot_icon.jpg" />
                </div>
              </div>
              <div className="chat-bubble chat-bubble-info">
                <ScaleLoader
                  color="#000000"
                  loading={true}
                  height={10}
                  width={10}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
                <p className="text-xs font-medium">{timeOfRequest + "/15s"}</p>
              </div>
            </div>
          ) : (
            ""
          )}
          <div ref={messagesEndRef} />

        </div>
        <div className={`absolute bottom-0 flex flex-col items-center bg-white
          transition-width w-11/12 ${isOpenHistory ? "lg:w-1/2" : "lg:w-2/3"} `}>
          <div className="flex w-full items-center shadow-xl border-2 rounded-2xl overflow-hidden h-12 p-2">
            <input
              type="text"
              ref={inputRef}
              placeholder="Nhập câu hỏi tại đây..."
              className="flex-1 px-3 py-2 focus:outline-none"
              onChange={onChangeHandler}
              onKeyDown={handleKeyDown}
              value={promptInput}
            />
            <button
              disabled={isGen}
              onClick={() => SendMessageChat()}
              className="bg-black disabled:bg-gray-400 text-white p-2 rounded-full w-8 h-8 flex justify-center items-center"
            >
              <ArrowUpOutlined />
            </button>
          </div>

          {/* Đoạn thông báo dưới input */}
          <p className="text-xs text-center text-gray-500 px-4">
            Chatbot có thể mắc lỗi. Hãy kiểm tra các thông tin quan trọng.
          </p>
        </div>
      </div>
    </div>
  );
}
export default ChatBot;
