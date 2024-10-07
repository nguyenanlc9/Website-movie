import React, { useState } from "react";
import { Form, Input, Button, Avatar, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

// Định nghĩa kiểu dữ liệu cho user
interface UserData {
  name: string;
  email: string;
  phone: string;
  address: string;
  avatar: string;
}

const Profile: React.FC = () => {
  // Dữ liệu ban đầu của người dùng
  const [userData, setUserData] = useState<UserData>({
    name: "Admin",
    email: "Admin@gmail.com",
    phone: "0123456789",
    address: "Ho Chi Minh, Vietnam",
    avatar: "",
  });

  const [form] = Form.useForm();

  //  xử lý khi submit form
  const onFinish = (values: UserData) => {
    setUserData({
      ...userData,
      ...values,
    });
    message.success("Cập nhật thông tin thành công!");
  };

  //  upload ảnh
  const handleUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setUserData({
        ...userData,
        avatar: reader.result as string,
      });
    };
    reader.readAsDataURL(file);
    return false;
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <h2>Profile cá nhân</h2>
      <Avatar
        size={100}
        src={userData.avatar || "https://via.placeholder.com/100"}
      />
      <Upload beforeUpload={handleUpload} showUploadList={false}>
        <Button icon={<UploadOutlined />}>Upload avatar</Button>
      </Upload>

      <Form
        form={form}
        layout="vertical"
        initialValues={userData}
        onFinish={onFinish}
        style={{ marginTop: 20 }}
      >
        <Form.Item
          label="Tên"
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập tên!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Vui lòng nhập email hợp lệ!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Số điện thoại" name="phone">
          <Input />
        </Form.Item>

        <Form.Item label="Địa chỉ" name="address">
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Cập nhật thông tin
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Profile;
