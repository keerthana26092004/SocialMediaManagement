import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Icon } from "@iconify/react";
import Header from './Header'

import wave from './images/wave.svg'

const SignUp = () => {
  return (
    <div>
        <Header/>
        <div className="container">
        <div className="form">
          <SignupForm />
        </div>
        <img src={wave} alt="" className="wavee"/>
      </div>
    </div>
    
  );
};
const SignupForm = () => {
  const onFinish = (values) => {
    console.log("newuser", values);
    window.location.href = "/login";
  };
  const onFinishFailed = (errorInfo) => {
    window.location.href = "/login";
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
            icon="solar:user-outline"
            fontSize={22}
            color="rgb(22 119 255)"
          />
        </div>
        <div className="welcome justify" style={{ marginBottom: "1rem" }}>
          Create Account!
        </div>
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
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input placeholder="Email" />
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

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }} className="btns">
        <Button type="primary" htmlType="submit">
          Create
        </Button>
        <Button
          style={{ marginTop: "1rem" }}
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          Login
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default SignUp;
