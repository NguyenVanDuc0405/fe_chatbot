import { useState, useRef, useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import axios from 'axios';

function ChatBot() {
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const [timeOfRequest, SetTimeOfRequest] = useState(0);
  let [promptInput, SetPromptInput] = useState("");
  let [chatHistory, SetChatHistory] = useState([]);

  const commonQuestions=[
    "Học viện có bao nhiêu loại học bổng?",
    "Các mốc thời gian quan trọng trong việc tuyển sinh?",
    "Làm sao để kiếm người yêu khi học đại học?",
    "Hồ sơ nhập học cần chuẩn bị những gì?",
    "Các câu lạc bộ có ở học viện?",
    "Những ngành học mới trong học viện năm 2024?",
    "Các phương thức xét tuyển của học viện?",
    "Quy trình nộp hồ sơ trực tuyến như nào?",
    "Ngành Công nghệ thông tin xét tuyển theo tổ hợp nào?",
    "Chỉ tiêu của Ngành Công nghệ thông tin là bao nhiêu?",
    "Mã ngành của chương trình Công nghệ thông tin (định hướng ứng dụng) là bao nhiêu?",
    "Thời gian đào tạo của ngành Công nghệ thông tin là bao lâu?",
    "Ngành Công nghệ Internet vạn vật (IoT) được đào tạo ở cơ sở nào?",
    "Học phí của Chương trình Công nghệ thông tin (định hướng ứng dụng) là bao nhiêu?",
    "Học viện đào tạo những ngành nào ở cơ sở miền bắc?",
    "Điểm chuẩn tất cả các ngành năm nay?",
    "Điểm chuẩn ngành công nghệ thông tin theo phương thức thi thpt năm nay tại cơ sở miền bắc là bao nhiêu?",
    "Cơ sở đào tạo của học viện tại cơ sở miền bắc ở đâu?",
    "Trụ sở chính của học viện ở đâu?",
    "Học tại học viện có nhàn không?",
    "Mình muốn đăng ký ký túc xá thì như nào?",
    "Có những kiểu đào tạo nào tại học viện?",
    "Các trang web chính thức của học viện?",

  ]
  let [isLoading, SetIsLoading] = useState(false);
  let [isGen, SetIsGen] = useState(false);
  const [dataChat, SetDataChat] = useState([
    [
      "start",
      [
        "Chào bạn! Tôi là PTIT chatbot, một trợ lý ảo được thiết kế để giúp bạn giải đáp thắc mắc và cung cấp thông tin hữu ích về việc tuyển sinh tại Học Viện. Bạn cần tôi hỗ trợ điều gì hôm nay? 😄",
        null,
      ],
    ],
  ]);
  useEffect(() => {
    ScrollToEndChat();
  }, [isGen]);
  useEffect(() => {
    const interval = setInterval(() => {
      SetTimeOfRequest((timeOfRequest) => timeOfRequest + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function ScrollToEndChat() {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }
  const onChangeHandler = (event) => {
    SetPromptInput(event.target.value);
  }
  const sendTelegramBotForGgsheet = async () => {
    try {
      const data = {
        ["question"]: promptInput,
      };
      await axios
        .post(
          "https://api.sheetbest.com/sheets/5d12cce3-725a-4e8d-9b8d-a6269fe1688b",
          data
        )
    } catch (err) {
      console.log("err: ", err);
    }
  }
  async function SendMessageChat() {
    if (promptInput !== "" && isLoading === false) {
      SetTimeOfRequest(0);
      SetIsGen(true);
      SetPromptInput("");
      SetIsLoading(true);
      SetDataChat((prev) => [...prev, ["end", [promptInput]]]);
      SetChatHistory((prev) => [promptInput, ...prev]);
  
      try {
        await sendTelegramBotForGgsheet();
        // Gửi yêu cầu đến API bằng axios
        const response = await axios.get("http://127.0.0.1:5000/api/chatbot", { params: { q: promptInput } }); // Sử dụng promptInput thay cho query
        // Xử lý dữ liệu phản hồi từ API
        SetDataChat((prev) => [
            ...prev,
            ["start", [response.data]], // Thay đổi theo cấu trúc dữ liệu của API
        ]);
      } catch (error) {
        SetDataChat((prev) => [
          ...prev,
          ["start", ["Lỗi, không thể kết nối với server", null]],
        ]);
      } finally {
        SetIsLoading(false);
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
    <div className="bg-gradient-to-r from-blue-50 to-purple-100 h-[85vh] ">
      <div className="hidden lg:block  drawer-side absolute w-64 h-[30vh] left-3 mt-2 drop-shadow-md">
        <div className="menu p-4 w-full min-h-full bg-gray-50 text-base-content rounded-2xl mt-3  overflow-auto scroll-y-auto max-h-[80vh]">
          {/* Sidebar content here */}
          <ul className="menu text-sm">
            <h2 className="font-bold mb-2 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text will-change-auto [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] motion-reduce:!tracking-normal max-[1280px]:!tracking-normal [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)] ">
              Lịch sử trò chuyện
            </h2>
            {chatHistory.length == 0 ? (
              <p className="text-sm text-gray-500">
                Hiện chưa có cuộc hội thoại nào
              </p>
            ) : (
              ""
            )}
            {chatHistory.map((mess, i) => (
              <li key={i}>
                <p>
                  <FontAwesomeIcon icon={faMessage} />
                  {mess.length < 20 ? mess : mess.slice(0, 20) + "..."}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hidden lg:block  drawer-side absolute w-64 h-[50vh] mt-2 right-3 drop-shadow-md">
        <div
          className="menu p-4 w-full min-h-full bg-gray-50 text-base-content 
        rounded-2xl mt-3  overflow-auto scroll-y-auto max-h-[43vh]
        scrollbar-thin scrollbar-thumb-gray-300 
          scrollbar-thumb-rounded-full scrollbar-track-rounded-full
        "
        >
          {/* Sidebar content here */}
          <ul className="menu text-sm">
            <h2 className="font-bold mb-2 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text will-change-auto [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] motion-reduce:!tracking-normal max-[1280px]:!tracking-normal [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)] ">
              Những câu hỏi phổ biến
            </h2>

            {commonQuestions.map((mess, i) => (
              <li key={i} onClick={() => SetPromptInput(mess)}>
                <p className="max-w-64">
                  <FontAwesomeIcon icon={faMessage} />
                  {mess}
                  {/* {mess.length < 20 ? mess : mess.slice(0, 20) + "..."} */}

                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={"flex justify-center h-[80vh]"}>
        <div 
          id="chat-area"
          className="
          mt-5 text-sm 
          scrollbar-thin scrollbar-thumb-gray-300 bg-white  
          scrollbar-thumb-rounded-full scrollbar-track-rounded-full
          rounded-3xl border-2 md:w-[50%] md:p-3 p-1  w-full overflow-auto scroll-y-auto h-[80%] "
        >
          {dataChat.map((dataMessages, i) =>
            dataMessages[0] === "start" ? (
              <div className="chat chat-start drop-shadow-md" key={i}>
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full border-2 border-blue-500">
                    <img className="scale-150" src="/assets/robot_image.png"/>
                  </div>
                </div>
                <div className="chat-bubble chat-bubble-info break-words ">
                  <TypeAnimation
                    style={{ whiteSpace: 'pre-line' }} 
                    sequence={[
                      dataMessages[1][0]
                      ,
                      () => SetIsGen(false),
                    ]}
                    onTyping={() => scrollToBottom()}
                    cursor={false}
                    speed={100}
                  />
                </div>
              </div>
            ) : (
              <div className="chat chat-end">
                <div className="chat-bubble shadow-xl chat-bubble-primary bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                  {dataMessages[1][0]}
                </div>
              </div>
            )
          )}
          {isLoading ? (
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full border-2 border-blue-500">
                  <img src= "/assets/robot_image.png" />
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
                <p className="text-xs font-medium">{timeOfRequest + "/60s"}</p>
              </div>
              
            </div>
          ) : (
            ""
          )}
          <div ref={messagesEndRef} />

          <div className="absolute bottom-[0.2rem] md:w-[50%] grid ">
            <input
              type="text"
              ref={inputRef}
              placeholder="Nhập câu hỏi tại đây..."
              className="mr-1 shadow-xl border-2 focus:outline-none px-2 rounded-2xl input-primary col-start-1 md:col-end-12 col-end-11 "
              onChange={onChangeHandler}
              onKeyDown={handleKeyDown}
              // disabled={isGen}
              value={promptInput}

            />

            <button
              disabled={isGen}
              onClick={() => SendMessageChat()}
              className={
                " drop-shadow-md md:col-start-12 rounded-2xl col-start-11 col-end-12 md:col-end-13 btn btn-active btn-primary btn-square bg-gradient-to-tl from-transparent via-blue-600 to-indigo-500"
              }
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                color="white"
                height="15px"
                width="15px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
            <p className=" text-xs col-start-1 col-end-12 text-justify p-1">
              <b>Lưu ý: </b>Mô hình có thể đưa ra câu trả lời không chính xác ở
              một số trường hợp, vì vậy hãy luôn kiểm chứng thông tin bạn nhé!
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
export default ChatBot;
