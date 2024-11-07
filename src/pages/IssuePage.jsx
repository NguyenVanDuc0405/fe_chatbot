import emailjs from "@emailjs/browser";
import React, { useState } from "react";
function IssuePage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false)

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function sendMail() {
    if (message.trim() === "") {
      setMessageError("Phản hồi không được để trống.");
      setIsModalOpen(false); 
      return; 
    } else {
      setMessageError(""); 
      setIsModalOpen(false)
    }
    if (!validateEmail(email)) {
      setEmailError("Vui lòng nhập địa chỉ email hợp lệ.");
      setIsModalOpen(false)
      return;
    } else {
      setIsModalOpen(false)
      setEmailError(""); 
    }

    
    const templateParams = {
      from_name: email, 
      message: message, 
    };
    emailjs
      .send(
        "service_1jeq7jq",
        "template_2g5s24p",
        templateParams,
        "v85q955yWJU3ZvOPi"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
         
        }
      );
    setIsModalOpen(true)
    setEmail("");
    setMessage("");
  }

  

  return (
    <div className="flex  justify-center h-[85vh] bg-gradient-to-br from-blue-100 to-purple-100">
      <input type="checkbox" id="my-modal" className="modal-toggle" />
       {isModalOpen &&<div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Gửi thành công 🥳</h3>
          <p className="py-4">
            Cảm ơn bạn đã gửi góp ý / báo lỗi 🤗. Chúng tôi sẽ xem xét những ý
            kiến của người dùng để ngày càng hoàn thiện sản phẩm hơn nhé!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn btn-success">
              Đóng
            </label>
          </div>
        </div>
      </div>
      }
      <div className="md:w-[50%]">
        <h1 className="text-3xl text-center font-bold p-5 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text will-change-auto [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] motion-reduce:!tracking-normal max-[1280px]:!tracking-normal [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)]">
          Góp ý hoặc báo lỗi
        </h1>
        <p className="text-justify font-semibold text-sm pr-2 pl-2">
          Sự đóng góp ý kiến từ các bạn sẽ là sự hỗ trợ đắc lực giúp chúng tôi
          ngày càng tốt hoàn thiện sản phẩm hơn.
        </p>

        <textarea
          placeholder="Nhập phản hồi của bạn tại đây!"
          className="mt-5 h-[30%] textarea textarea-bordered textarea-md w-full "
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
        {messageError && <p className="text-red-500">{messageError}</p>}
        <input type="text" 
          placeholder="Email của bạn" 
          className="input w-full max-w-xs mt-4"   
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        {emailError && <p className="text-red-500">{emailError}</p>}
        <label
          htmlFor="my-modal"
          onClick={()=>sendMail()}
          className=" mt-5 w-full btn btn-primary btn-md  bg-gradient-to-tl from-transparent via-blue-600 to-indigo-500"
        >
          Gửi ý kiến
        </label>
      </div>
    </div>
  );
}
export default IssuePage;
