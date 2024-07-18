import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Icon } from "@iconify/react";
import "./styles/login.css";
import Header from "./Header";
import wave from './images/wave.svg'

const Login = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="form">
          <LoginForm />
        </div>
        <img src={wave} alt="" className="wavee"/>
      </div>
    </div>
  );
};

const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
    if (values.username === "root" && values.password === "1234") {
      console.log("here");
      window.location.href = "/dashboard";
    } else {
      window.location.href = "/signup";
    }
  };
  const onFinishFailed = (errorInfo) => {
    window.location.href = "/signup";
  };
  const genRadiusStyle = {
    background: "#219fdf", // Replace with your desired background color
  };

  return (
    <div>
      <Form
      name="basic"
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="login-top">
        <div className="justify">
          <Icon
            icon="material-symbols:login"
            fontSize={22}
            color="rgb(22 119 255)"
          />
        </div>
        <div className="welcome justify">Welcome!</div>
        <div className="message justify">Sign in to your account</div>
      </div>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder="Name" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
          background: genRadiusStyle,
        }} className="btns">
        <Button type="primary" htmlType="submit">
          Login
        </Button>
        <Button
          style={{ marginTop: "1rem" }}
          onClick={() => {
            window.location.href = "/signup";
          }}
        >
          Sign Up
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Login;
