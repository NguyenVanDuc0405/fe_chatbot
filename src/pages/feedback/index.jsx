import emailjs from "@emailjs/browser";
import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Space, Modal } from 'antd';
import ENVIRONMENT_CONFIG from "../../config/env";
import axios from "axios";

const SubmitButton = ({ form, children }) => {
  const [submittable, setSubmittable] = React.useState(false);
  const values = Form.useWatch([], form);
  useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};
function IssuePage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (email && message) {
      sendMail();
    }
  }, [email, message]);
  function sendMail() {
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
    setEmail("");
    setMessage("");
  }

  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onFinish = async (values) => {
    setEmail(values.email);
    setMessage(values.feedback);
    setIsModalVisible(true);
    try {
      const API_ENDPOINT_FB = `${ENVIRONMENT_CONFIG}/api/save_feedback`
      const response = await axios.post(API_ENDPOINT_FB, {
        email: values.email,
        message: values.feedback
      });

      if (response.data.success) {
        console.log("Feedback saved successfully:", response.data.feedback_id);
      }
    } catch (error) {
      console.error("Error saving feedback:", error);
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
    form.resetFields();
  };
  return (
    <div className="h-screen">
      <div className="flex h-full justify-center bg-gradient-to-br from-red-100 to-white">
        <div className="md:w-[50%] mt-10">
          <h1 className="text-2xl lg:text-4xl md:text-3xl  text-center font-bold p-5 text-black">
            Phản hồi
          </h1>
          <p className="text-justify font-semibold text-sm lg:text-lg mb-10 px-2">
            Cảm ơn các bạn đã chia sẻ ý kiến. Những phản hồi của các bạn sẽ giúp chúng tôi cải thiện sản phẩm, mang đến trải nghiệm tốt hơn cho người dùng trong tương lai.
          </p>
          <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={onFinish}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: 'Email là bắt buộc!',
                },
                {
                  type: 'email',
                  message: 'Vui lòng nhập một email hợp lệ!',
                },
              ]}
            >
              <Input style={{ height: '40px' }} />
            </Form.Item>
            <Form.Item
              name="feedback"
              label="Phản hồi"
              rules={[
                {
                  required: true,
                  message: 'Phản hồi không được để trống!',
                },
              ]}
            >
              <Input.TextArea style={{ height: '100px' }} />
            </Form.Item>
            <Form.Item style={{ marginTop: "40px" }}>
              <Space>
                <SubmitButton form={form}>Gửi phản hồi</SubmitButton>
                <Button htmlType="reset">Làm mới</Button>
              </Space>
            </Form.Item>
          </Form>
          <Modal
            title="Phản hồi đã được gửi thành công!"
            open={isModalVisible}
            onOk={handleOk}
            onCancel={() => setIsModalVisible(false)}
          >
            <p>Những phản hồi của các bạn sẽ giúp chúng tôi cải thiện sản phẩm, mang đến trải nghiệm tốt hơn cho người dùng trong tương lai. Cảm ơn bạn! 💖</p>
          </Modal>
        </div>
      </div>
    </div>
  );
}
export default IssuePage;
