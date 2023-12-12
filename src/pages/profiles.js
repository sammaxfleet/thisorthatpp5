import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { axiosInstance } from '../axiosApi';
import styles from "../styles/Profile.module.css";
import appStyles from "../styles/App.module.css";
import btnStyles from "../styles/Button.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
const Profiles = () => {
    let { slug } = useParams();
    const [profile, setProfile] = useState();
    const getUserProfileDetails = async () => {
        const res = await axiosInstance.get("profiles/" + slug)
        console.log(res)
        setProfile(res.data)
    }
    useEffect(() => {
        getUserProfileDetails()
    }, [slug])
    return (
        // <div className={"bg-red-400 text-lg"}>
        //     <div className={styles.profileSection}>

        //     </div>
        //     <div className={styles.mostFollowedUsers}>
        //         most followed account
        //     </div>
        // </div>
        <>
            {/* {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />} */}
            <Row noGutters className="px-3 text-center">
                <Col lg={3} className="text-lg-left">
                    <Image
                        className={styles.ProfileImage}
                        roundedCircle
                        src={profile?.image}
                    />
                </Col>
                <Col lg={6}>
                    <h3 className="m-2">{profile?.owner}</h3>
                    <Row className="justify-content-center no-gutters">
                        <Col xs={3} className="my-2">
                            <div>{profile?.posts_count}</div>
                            <div>posts</div>
                        </Col>
                        <Col xs={3} className="my-2">
                            <div>{profile?.followers_count}</div>
                            <div>followers</div>
                        </Col>
                        <Col xs={3} className="my-2">
                            <div>{profile?.following_count}</div>
                            <div className='bg-red-400'>following</div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={3} className="text-lg-right">
                    {profile && profile &&
                        !profile && profile.is_owner &&
                        (profile?.following_id ? (
                            <Button
                                className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
                            >
                                unfollow
                            </Button>
                        ) : (
                            <Button
                                className={`${btnStyles.Button} ${btnStyles.Black}`}
                            >
                                follow
                            </Button>
                        ))}
                </Col>
                {profile?.content && <Col className="p-3">profile.content</Col>}
            </Row>
        </>
    )
}

export default Profiles