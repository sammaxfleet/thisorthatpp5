import React from "react";
import styles from "../../styles/HomePage.module.css";
import fleety from "./images/fleety.jpeg"
import sasha from "./images/sasha.jpeg"
import bev from "./images/bev.jpeg"
import mikel from "./images/mikel.jpeg"
import elon from "./images/elon.jpeg"
import Zuck from "./images/Zuck.jpeg"

const PopularProfiles = () => {
  const data = [
    {
      name: "Fleety",
      image: fleety,
    },
    {
      name: "Sasha",
      image: sasha,
    },
    {
      name: "Bev",
      image: bev,
    },
    {
      name: "Mikel",
      image: mikel,
    },
    {
      name: "Elon",
      image: elon,
    },
    {
      name: "Mark",
      image: Zuck,
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