import { Button, Card, Form, Input } from "antd";
import React from "react";
import "./home.css";
import logo from "../assets/images/image.png";
import { Link } from "react-router-dom";
const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Form Values:", values);
  };
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://www.shutterstock.com/image-photo/koi-crystal-waters-showcases-enchanting-600nw-2500920849.jpg)", // URL hình ảnh
      }}
    >
      <div className="p-5 flex justify-center items-center h-screen">
        <Card className="!shadow-inner" bordered={true} style={{ width: 400 }}>
          <div className="flex justify-center">
            <img src={logo} alt="" />
          </div>
          <p className="text-orange-400 text-center">
            Welcome back <span className="font-bold">KoiCare!</span>
          </p>
          <p className="text-center">Login Here</p>
          <Form
            name="basic"
            layout="vertical"
            labelCol={{ span: 8 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Email:"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                {
                  type: "email",
                  message: "Please enter a valid email address!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button
                className="w-full login-button"
                type="primary"
                htmlType="submit"
              >
                Login
              </Button>
            </Form.Item>
            <div className="mb-3 text-center">-Or Sign in with-</div>
            <Button className="w-full" type="primary" htmlType="submit">
              Login with Gmail
            </Button>
            <div className="text-center mt-2">
              <Link to={"/register"}>Not a member? Register</Link>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
