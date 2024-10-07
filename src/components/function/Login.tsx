import React from "react";
import { Form, Input, Button, notification } from "antd";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const navigate = useNavigate(); // Used to programmatically navigate

  const onFinish = (values: { name: string; password: string }) => {
    // Dummy authentication logic (you can replace this with a real API call)
    if (values.name === "admin" && values.password === "password123") {
      notification.success({
        message: "Login Successful",
        description: `Welcome back, ${values.name}!`,
      });
      navigate("/dashboard"); // Redirect to the dashboard after successful login
    } else {
      notification.error({
        message: "Login Failed",
        description: "Invalid username or password.",
      });
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ maxWidth: "300px", margin: "auto", padding: "50px" }}>
      <h2>Login</h2>
      <Form
        name="loginForm"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <Form.Item
          label="Username"
          name="name"
          rules={[{ required: true, message: "Please enter your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
