import React, { useState } from "react";
import { Table, Button, Modal, Form, Input, notification } from "antd";

interface User {
  id: number;
  fullName: string;
  email: string;
  phone: string;
}

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1001,
      fullName: "Luong Quynh Nhu",
      email: "Lqn@gmail.com",
      phone: "123456789",
    },
    {
      id: 1002,
      fullName: "Nguyen Huynh Tuong An",
      email: "Nhta@gmail.com",
      phone: "987654321",
    },
    {
      id: 1003,
      fullName: "Nguyen Tien Anh",
      email: "Nta@gmail.com",
      phone: "1122334455",
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsEditMode(false);
    setIsModalVisible(true);
  };

  const handleEdit = (user: User) => {
    setCurrentUser(user);
    form.setFieldsValue(user);
    setIsEditMode(true);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        if (isEditMode && currentUser) {
          // Nếu đang ở chế độ edit, cập nhật user hiện tại
          setUsers(
            users.map((user) =>
              user.id === currentUser.id ? { ...user, ...values } : user
            )
          );
          notification.success({ message: "User updated successfully!" });
        } else {
          // Nếu không phải edit, tạo user mới
          const newUser: User = {
            id: Math.floor(1000 + Math.random() * 9000), // Tạo ID ngẫu nhiên
            fullName: values.fullName,
            email: values.email,
            phone: values.phone,
          };
          setUsers([...users, newUser]);
          notification.success({ message: "User added successfully!" });
        }
        setIsModalVisible(false);
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCurrentUser(null);
    form.resetFields();
  };

  const removeUser = (key: number) => {
    setUsers(users.filter((user) => user.id !== key));
    notification.success({ message: "User removed successfully!" });
  };

  const columns = [
    {
      title: "User ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Action",
      key: "action",
      render: (record: User) => (
        <div>
          <Button
            onClick={() => handleEdit(record)}
            style={{ marginRight: "10px" }}
            type="primary"
          >
            Edit
          </Button>
          <Button onClick={() => removeUser(record.id)} type="primary">
            Remove
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>User Management</h1>
      <Button type="primary" onClick={showModal}>
        Add User
      </Button>
      <Table
        columns={columns}
        dataSource={users}
        title={() => "User Management"}
        style={{ marginTop: "20px" }}
        rowKey="id"
      />
      <Modal
        title={isEditMode ? "Edit User" : "Add User"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: "Please input the full name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input the email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              { required: true, message: "Please input the phone number!" },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UserManagement;
