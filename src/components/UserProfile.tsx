import React, { useState } from "react";
import {
  Avatar,
  Dropdown,
  Menu,
  Modal,
  Form,
  Input,
  Switch,
  Select,
  notification,
} from "antd";
import { UserOutlined } from "@ant-design/icons";

const UserProfile: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [name, setName] = useState("Admin");

  const handleSettingsClick = () => {
    form.setFieldsValue({ name });
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        // Update the name state
        setName(values.name);
        // Handle the form submission (e.g., update user settings)
        console.log("Settings:", values);
        notification.success({
          message: "successful!",
        });
        setIsModalVisible(false);
      })
      .catch((info) => {
        console.log("Failed:", info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="/admin/Profile">Profile</a>
      </Menu.Item>
      <Menu.Item key="1" onClick={handleSettingsClick}>
        Settings
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <a href="/Logout">Logout</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu} trigger={["click"]}>
        <span className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <Avatar icon={<UserOutlined />} /> {name}{" "}
        </span>
      </Dropdown>

      <Modal
        title="Settings"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Name"
            name="name"
            initialValue={name} // Set name of admin
          >
            <Input />
          </Form.Item>

          <Form.Item label="Language" name="language" initialValue="10">
            <Select>
              <Select.Option value="10">Vietnamese</Select.Option>
              <Select.Option value="20">English</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Dark/Light" name="theme" valuePropName="checked">
            <Switch />
          </Form.Item>

          <Form.Item
            label="Notifications"
            name="notifications"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UserProfile;
