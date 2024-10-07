import React, { useState } from "react";
import img1 from "../../../public/img/beauty_and_the_beast.jpg";
import img2 from "../../../public/img/Alice_in_Borderland.jpg";
import img3 from "../../../public/img/MissionImpossible.jpg";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  notification,
  Upload,
  Image,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

// Define the type for a movie
interface Movie {
  title: string;
  genre: string;
  thumbnail: string | ArrayBuffer | null;
}

const MovieAdmin: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([
    {
      title: "Beauty and The Beast",
      genre: "Love , Animation",
      thumbnail: img1,
    },
    {
      title: "Alice in Borderland",
      genre: "Science , Drama",
      thumbnail: img2,
    },
    {
      title: "Mission Impossible",
      genre: "Action",
      thumbnail: img3,
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState<string>("");
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);

  const showModal = () => {
    setIsEditMode(false);
    setIsModalVisible(true);
  };

  const handleEdit = (movie: Movie) => {
    setCurrentMovie(movie);
    form.setFieldsValue(movie);
    setIsEditMode(true);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values: Movie) => {
        if (isEditMode && currentMovie) {
          // Update logic
          setMovies((prevMovies) =>
            prevMovies.map((movie) =>
              movie.title === currentMovie.title ? values : movie
            )
          );
          notification.success({ message: "Movie updated successfully!" });
        } else {
          // Add logic
          setMovies([...movies, values]);
          notification.success({ message: "Movie added successfully!" });
        }
        setIsModalVisible(false);
        form.resetFields();
      })
      .catch((info) => {
        console.log("Failed:", info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const removeMovie = (index: number) => {
    setMovies(movies.filter((_, idx) => idx !== index));
    notification.success({ message: "Movie removed successfully!" });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Genre",
      dataIndex: "genre",
      key: "genre",
    },
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (text: string) => <Image width={100} src={text} />,
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: Movie, index: number) => (
        <>
          <Button
            onClick={() => handleEdit(record)}
            style={{ marginRight: "10px" }}
            type="primary"
          >
            Edit
          </Button>
          <Button onClick={() => removeMovie(index)} type="primary">
            Remove
          </Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>Movie Management</h1>
      <Button type="primary" onClick={showModal}>
        Add Movie
      </Button>
      <Input
        placeholder="Search movies by title"
        value={searchText}
        onChange={handleSearch}
        style={{ marginTop: "20px", marginBottom: "20px" }}
      />
      <Table
        columns={columns}
        dataSource={filteredMovies}
        rowKey="title"
        title={() => "Recently Added"}
        style={{ marginTop: "20px" }}
      />
      <Modal
        title={isEditMode ? "Edit Movie" : "Add Movie"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Movie Title"
            name="title"
            rules={[
              { required: true, message: "Please input the movie title!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Genre"
            name="genre"
            rules={[{ required: true, message: "Please input the genre!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Thumbnail"
            name="thumbnail"
            rules={[{ required: true, message: "Please upload a thumbnail!" }]}
          >
            <Upload
              beforeUpload={(file) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                  form.setFieldsValue({ thumbnail: reader.result });
                };
                reader.readAsDataURL(file);
                return false; // Prevent upload
              }}
            >
              <Button icon={<UploadOutlined />}>Upload Thumbnail</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default MovieAdmin;
