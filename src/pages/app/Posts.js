import React from "react";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import styles from "../../styles/HomePage.module.css";

const Posts = () => {
  const data = [
    {
      owner: "Fleety",
      created_at: "2021-10-03",
      title: "Kanye West",
      content: "This is amazinng Event",
      image: "assets/kanye.jpeg",
      likes: "12",
      comments: ["abc", "xyz"],
    },
    {
      owner: "Fleety",

      created_at: "2021-10-03",
      title: "Hello World",
      content: "This is amazinng Event",
      image: "https://picsum.photos/200/120",
      likes: "12",
      comments: ["abc", "xyz"],
    },
    {
      owner: "Fleetygram",
      created_at: "2021-10-03",
      title: "Best Event",
      content: "This is amazinng Event",
      image: "https://picsum.photos/200/160",
      likes: "12",
      comments: ["abc", "xyz"],
    },
  ];

  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = () => {
    const newComment = prompt("Enter your comment:");
    if (newComment) {
      setComments([...comments, newComment]);
    }
  };

  return (
    <div
      style={{
        marginTop: "20px",
        marginLeft: "80px",
      }}
    >
      {data.map((post) => {
        return (
          <Card style={{ width: "600px", marginBottom: "20px" }}>
            {/* User Circle */}
            <div className="flex-h">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <img
                  src="https://picsum.photos/200/300"
                  className="rounded-circle"
                  alt="user"
                  width={50}
                  height={50}
                />
                <p
                  style={{
                    marginTop: "20px",
                  }}
                >
                  {post.owner}
                </p>
                |
                <p
                  style={{
                    marginTop: "20px",
                    color: "blue",
                  }}
                >
                  {post.owner}
                </p>
              </div>
              <p
                style={{
                  marginTop: "10px",
                }}
              >
                {post.created_at}
              </p>
            </div>

            <Card.Img
              variant="top"
              src={post.image}
              style={{
                width: "600px",
                height: "400px",
              }}
            />

            <Card.Body>
              <h1 className={styles.cardText}>{post.title}</h1>
              <Card.Text className={styles.cardText}>{post.content}</Card.Text>
              <div className="flex-h">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <p
                    style={{
                      marginTop: "20px",
                    }}
                  >
                    {/* like emoji */}
                    <span role="img" aria-label="like" className={styles.emoji}>
                      👍
                    </span>{" "}
                    {likes} likes
                  </p>
                  <p
                    style={{
                      marginTop: "20px",
                    }}
                  >
                    {/* comment emoji */}
                    <span
                      role="img"
                      aria-label="comment"
                      className={styles.emoji}
                    >
                      💬
                    </span>{" "}
                    {comments.length} comments
                  </p>
                </div>
                <div>
                  <Button
                    variant="primary"
                    onClick={handleLike}
                    style={{
                      marginRight: "20px",
                    }}
                  >
                    Like
                  </Button>
                  <Button variant="primary" onClick={handleComment}>
                    Comment
                  </Button>
                </div>
              </div>
              <div>
                {comments.map((comment) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "20px",
                        borderRadius: "10px",
                        height: "50px",
                        marginBottom: "20px",
                        gap: "20px",
                        backgroundColor: "lightgray",
                      }}
                    >
                      <h3>
                        <span
                          role="img"
                          aria-label="comment"
                          className={styles.emoji}
                        >
                          💬
                        </span>
                      </h3>
                      <p
                        style={{
                          marginTop: "10px",
                        }}
                      >
                        {comment}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Posts;