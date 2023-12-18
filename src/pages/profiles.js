import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate as useNavigation } from "react-router-dom"
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import { Button, Image } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
import { Container, Row, Col, Card, ListGroup, Image, Button } from "react-bootstrap";
import { useGetSingleProfileQuery, useGetProfilesQuery, useGetProfilePostsQuery } from "../store/apiSlice";
import Dropdown from "react-bootstrap/Dropdown";
import Spinner from 'react-bootstrap/Spinner'
const Profiles = () => {
  let { slug, } = useParams();
  const navigate = useNavigation();
  const { data, isLoading, isFetching } = useGetSingleProfileQuery(slug, {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
    refetchOnMount: true,

  });
  const { data: ProfilePosts, isLoading: porilfePostsLoading, isFetching: ProfilesPostsIsFetching } = useGetProfilePostsQuery(slug, {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
    refetchOnMount: true,

  });
  const { data: ProfilesData, isLoading: ProfilesIsLoading, isFetching: ProfilesIsFetching } = useGetProfilesQuery()
  const mostFollowed = [
    { name: "Gui", icon: "path-to-icon" },
    { name: "Raul", icon: "path-to-icon" },
    // ... other profiles
  ];
  console.log(data, "data from api ");
  return (
    <Container fluid>
      {isLoading && (
        <Spinner animation="grow" />
      )}
      {data && (<Row>
        <Col md={8} className="user-profile">
          <Card>
            <Card.Header as="h5">
              <div className="d-flex justify-content-between align-items-center">
                {data.owner}
                {data.is_owner && (
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Edit Profile
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => navigate(`/profiles/${slug}/edit`)}>Edit</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}
              </div>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col xs={4} md={4} lg={3} className="text-center">
                  <Image
                    src={data?.image}
                    roundedCircle
                    className=""
                    style={{ width: "100px", height: "auto" }}
                  />
                  <Card className="mt-2">
                    <Card.Title>{data?.posts_count} posts</Card.Title>
                    <Card.Title>{data?.followers_count} followers</Card.Title>
                    <Card.Title>{data?.following_count} following</Card.Title>
                  </Card>
                </Col>
                <Col xs={8} md={8} lg={9}>
                  <Card.Title>{data?.owner}</Card.Title>
                  <Card.Text>{data?.content}</Card.Text>
                  {/* Add posts here */}
                  <div className="d-flex flex-wrap-wrap">

                    {ProfilePosts && ProfilePosts.results.map((posts) => (
                      <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={posts.image} width={"100px"} style={{
                          objectFit: "contain"
                        }} height={"100px"} />
                        <Card.Body>
                          <Card.Title>{posts.title}</Card.Title>
                          <Card.Text>
                            {posts.content}
                          </Card.Text>
                          <Card.Text>
                            {posts.fashion_inspiration}
                          </Card.Text>
                          <Button variant="primary">Edit</Button>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="most-followed">
          <Card>
            <Card.Header as="h5">Most followed profiles</Card.Header>
            <ListGroup variant="flush">
              {ProfilesData && ProfilesData.results.map((profile) => (
                <ListGroup.Item key={profile.id} className="d-flex align-items-center " style={{
                  gap: "10px",
                }}>
                  <Image src={profile.image} roundedCircle style={{ width: "50px", height: "auto" }} /> {profile.owner}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>)}

    </Container>
  );
};

export default Profiles;
