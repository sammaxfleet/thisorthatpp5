import React, { useEffect, useState } from "react";
import styles from "../../styles/HomePage.module.css";
import axios from "axios";
import { useNavigate as useNavigation } from "react-router-dom";

const PopularProfiles = () => {
  const navigate = useNavigation();
  const [profilesData, setProfilesData] = useState(null);
  const getProfiles = async () => {
    const res = await axios.get('https://thisorthatapi-56bb400a2b0e.herokuapp.com/profiles/')
    console.log(res, 'res')
    setProfilesData(res.data)
  }

  useEffect(() => {
    getProfiles();
  }, [])


  //   Style based on bootstrap
  return (
    <div className={styles.postsContainer}>
      <h3>Popular This or That Users</h3>
      {/* Circles like Instagram stories */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        {profilesData && profilesData.results.slice(0, 5).map((item) => (
          <div
            onClick={() => navigate("/profiles/" + item.id)}
            key={item.owner}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer"
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
            <p>{item.owner}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProfiles;