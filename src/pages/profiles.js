import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate as useNavigation } from "react-router-dom"
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import { Button, Image } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
import { Container, Row, Col, Card, ListGroup, Image, Button } from "react-bootstrap";
import { useGetSingleProfileQuery, useGetProfilesQuery, useGetProfilePostsQuery, useFollowUserMutation, useUnFollowerUserMutation } from "../store/apiSlice";
import Dropdown from "react-bootstrap/Dropdown";
import Spinner from 'react-bootstrap/Spinner'
import { toast } from "react-toastify";
import ChangeUsernameModal from "../components/ChangeUsernameModal";
const Profiles = () => {
  let { slug, } = useParams();
  const navigate = useNavigation();
  const [followUser, { isSuccess: followUserSuccess }] = useFollowUserMutation();
  const [unfollowUser, { isSuccess: unFollowUserSucces }] = useUnFollowerUserMutation();
  useEffect(() => {
    if (followUserSuccess) {
      toast.success("User Followed")
    }
  }, [followUserSuccess])
  useEffect(() => {
    if (unFollowUserSucces) {
      toast.success("User UnFollowed")
    }
  }, [unFollowUserSucces])
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
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveUsername = (newUsername) => {
    // Perform the action to save the new username (e.g., send a request to update it)
    console.log('New username:', newUsername);
    // Replace the console.log with your code to update the username
  };
  console.log(data, "data from api ");
  return (
    <Container fluid className="py-4">
      <ChangeUsernameModal
        show={showModal}
        onHide={handleCloseModal}
        onSave={handleSaveUsername}
      />
      {isLoading && <Spinner animation="grow" />}
      {data && (
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="p-3">
              <Card.Header as="h5" className="d-flex justify-content-between align-items-center">
                <span>{data.owner}</span>
                {data.is_owner && (
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Edit
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => navigate(`/profiles/${slug}/edit`)}>
                        Edit Bio & Profile Image
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => navigate(`/changepassword`)}>
                        Change password
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleShowModal()}>
                        Change username
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}
                {!data.is_owner && (
                  <>
                    {data.following_id ? (
                      <Button variant="danger" onClick={() => unfollowUser({ id: data.following_id })}>
                        Unfollow
                      </Button>
                    ) : (
                      <Button variant="primary" onClick={() => followUser({ followed: data.id })}>
                        Follow
                      </Button>
                    )}
                  </>
                )}
              </Card.Header>
              <Card.Body className="d-flex align-items-center">
                <Image src={data?.image} roundedCircle className="mr-3" style={{ width: "100px", height: "100px" }} />
                <div>
                  <h3>{data?.owner}</h3>
                  <p>{data?.content}</p>
                  <div className="d-flex">
                    <div className="mr-3">
                      <strong>{data?.posts_count}</strong>
                      <span className="ml-1">posts</span>
                    </div>
                    <div className="mr-3">
                      <strong>{data?.followers_count}</strong>
                      <span className="ml-1">followers</span>
                    </div>
                    <div>
                      <strong>{data?.following_count}</strong>
                      <span className="ml-1">following</span>
                    </div>
                  </div>
                </div>
              </Card.Body>
              <hr />
              <Card.Body>
                <Row>
                  {ProfilePosts && ProfilePosts.results.map((post) => (
                    <Col key={post.id} xs={6} sm={4} md={3} className="mb-3">
                      <Card style={{ width: '100%' }}>
                        <Card.Img
                          onClick={() => navigate(`/post/${post.id}`)}
                          variant="top"
                          src={post.image}
                          style={{ height: '150px', objectFit: 'cover' }}
                        />
                        <Card.Body>
                          <div onClick={() => navigate(`/post/${post.id}`)}>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>{post.content}</Card.Text>
                          </div>


                          {post.is_owner && (
                            <Button variant="outline-secondary" size="sm" className="ml-2" onClick={() => navigate(`/post/${post.id}/edit`)}>
                              Edit
                            </Button>
                          )}
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="p-3">
              <Card.Header as="h5">Most followed profiles</Card.Header>
              <ListGroup variant="flush">
                {ProfilesData && ProfilesData.results.map((profile) => (
                  <ListGroup.Item key={profile.id} className="d-flex align-items-center mb-2 cursor-pointer overlay zoom" onClick={() => navigate("/profiles/" + profile.id)}>
                    <Image src={profile.image} roundedCircle style={{ width: "50px", height: "50px" }} className="mr-2" />
                    <span>{profile.owner}</span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Profiles;
