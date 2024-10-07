import React, { useState } from "react";
import { Card, Rate, Button } from "antd";

const defaultComments = [
  {
    name: "Nick",
    rate: 1,
    comment: "Never be that bad",
    pinned: false, // Tracks pinned status
  },
  {
    name: "Sarah",
    rate: 5,
    comment: "Good job",
    pinned: false,
  },
  {
    name: "Minh",
    rate: 1,
    comment: "Bad Site",
    pinned: false,
  },
];

const RatingComment = () => {
  const [comments, setComments] = useState(defaultComments);

  const handleDelete = (index: number) => {
    const newComments = comments.filter((_, i) => i !== index);
    setComments(newComments);
  };

  const handlePinToggle = (index: number) => {
    const newComments = [...comments];
    newComments[index].pinned = !newComments[index].pinned;
    setComments(newComments);
  };

  // Sort comments to show pinned comments first
  const sortedComments = [...comments].sort((a, b) => {
    return a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Rating</h2>
      {sortedComments.map((item, index) => (
        <Card key={index} style={{ marginBottom: "16px" }}>
          <h3>{item.name}</h3>
          <Rate disabled value={item.rate} />
          <p>{item.comment}</p>
          <Button
            type="primary"
            onClick={() => handlePinToggle(index)}
            style={{ marginRight: "8px" }}
          >
            {item.pinned ? "Unpin" : "Pin"}
          </Button>
          <Button type="primary" danger onClick={() => handleDelete(index)}>
            Delete
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default RatingComment;
