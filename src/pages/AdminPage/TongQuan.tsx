import React from "react";
import { Row, Col, Card, Statistic } from "antd";

const TongQuan: React.FC = () => {
  // Dữ liệu tĩnh
  const data = {
    totalUsers: 20,
    totalMovies: 3,
    totalReviews: 3,
  };

  return (
    <div style={{ padding: "24px" }}>
      <h1>Tổng quan</h1>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Tổng số người dùng"
              value={data.totalUsers}
              valueStyle={{ color: "#3f8600" }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Tổng số phim"
              value={data.totalMovies}
              valueStyle={{ color: "#1890ff" }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Tổng số đánh giá"
              value={data.totalReviews}
              valueStyle={{ color: "#cf1322" }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TongQuan;
