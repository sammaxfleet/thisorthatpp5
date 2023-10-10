import React from "react";
import styles from "../../styles/HomePage.module.css";

const PopularProfiles = () => {
  const data = [
    {
      name: "Abc",
      image: "https://picsum.photos/200/300",
    },
    {
      name: "CYX",
      image: "https://picsum.photos/200/100",
    },
    {
      name: "Abc",
      image: "https://picsum.photos/200/340",
    },
    {
      name: "Abc",
      image: "https://picsum.photos/200/310",
    },
    {
      name: "Abc",
      image: "https://picsum.photos/200/360",
    },
    {
      name: "Abc",
      image: "https://picsum.photos/200/390",
    },
  ];

  //   Style based on bootstrap
  return (
    <div className={styles.postsContainer}>
      <h1>Popular This or That Users</h1>
      {/* Circles like Instagram stories */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {data.map((item) => (
          <div
            key={item.name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={item.image}
              alt="profile"
              style={{
                borderRadius: "50%",
                width: "60px",
                height: "60px",
                objectFit: "cover",
              }}
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProfiles;