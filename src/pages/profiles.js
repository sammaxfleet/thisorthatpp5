import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate as useNavigation } from "react-router-dom"
import { Container, Row, Col, Card, ListGroup, Image, Button } from "react-bootstrap";
import { useGetSingleProfileQuery, useGetProfilesQuery, useGetProfilePostsQuery, useFollowUserMutation, useUnFollowerUserMutation, useGetSavedPostsQuery, useDeleteSavedPostsMutation } from "../store/apiSlice";
import Dropdown from "react-bootstrap/Dropdown";
import Spinner from 'react-bootstrap/Spinner'
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import ChangeUsernameModal from "../components/ChangeUsernameModal";
const Profiles = () => {
  let { slug, } = useParams();
  const navigate = useNavigation();
  const [followUser, { isSuccess: followUserSuccess }] = useFollowUserMutation();
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
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
  const { data, isLoading } = useGetSingleProfileQuery(slug, {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
    refetchOnMount: true,

  });
  const { data: SavedPosts } = useGetSavedPostsQuery({
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
    refetchOnMount: true,
  })
  const [deleteSavePost, { isSuccess: DeleteSavedPostSucces }] = useDeleteSavedPostsMutation();
  useEffect(() => {
    if (DeleteSavedPostSucces) {
      toast.success("Post Removed from Saved")
    }
  }, [DeleteSavedPostSucces])
  const { data: ProfilePosts } = useGetProfilePostsQuery(slug, {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
    refetchOnMount: true,

  });
  const { data: ProfilesData } = useGetProfilesQuery()
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveUsername = (newUsername) => {
    // Perform the action to save the new username (e.g., send a request to update it)
    // Replace the console.log with your code to update the username
  };
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
                      <Button variant="primary" onClick={() => {
                        if (isLoggedIn) {
                          followUser({ followed: data.id })

                        } else {
                          toast.info("you need to login to follow")
                        }
                      }}>
                        Follow
                      </Button>
                    )}
                  </>
                )}
              </Card.Header>
              <Card.Body className="d-flex align-items-center">
                <Image src={data?.image} roundedCircle className="mr-3" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                <div>
                  <h3>{data?.owner}</h3>
                  <p>{data?.content}</p>
                  <div className="d-flex" style={{ flexWrap: "wrap" }}>
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
                {ProfilePosts && ProfilePosts.results && ProfilePosts.results.length > 0 && (
                  <>
                    <h3>User Posts</h3>
                    <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
                      {ProfilePosts.results.map((post) => (
                        <Col key={post.id} className="mb-3">
                          <Card style={{ width: '100%' }}>
                            <Card.Img
                              onClick={() => navigate(`/post/${post.id}`)}
                              variant="top"
                              src={post.image}
                              style={{ height: '150px', objectFit: 'cover', cursor: 'pointer' }}
                            />
                            <Card.Body>
                              <div onClick={() => navigate(`/post/${post.id}`)} style={{ cursor: 'pointer' }}>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.content}</Card.Text>
                              </div>
                              {post.is_owner && (
                                <Button
                                  variant="outline-secondary"
                                  size="sm"
                                  className="mt-2"
                                  onClick={() => navigate(`/post/${post.id}/edit`)}
                                >
                                  Edit
                                </Button>
                              )}
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </>
                )}

                {SavedPosts && SavedPosts.results && SavedPosts.results.length > 0 && (
                  <>
                    <h3>Saved Posts</h3>
                    <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
                      {SavedPosts.results.map((post) => (
                        <Col key={post.id} className="mb-3">
                          <Card style={{ width: '100%' }}>
                            <Card.Img
                              onClick={() => navigate(`/post/${post.post.id}`)}
                              variant="top"
                              src={post.post.image}
                              style={{ height: '150px', objectFit: 'cover', cursor: 'pointer' }}
                            />
                            <Card.Body>
                              <div onClick={() => navigate(`/post/${post.post.id}`)} style={{ cursor: 'pointer' }}>
                                <Card.Title>{post.post.title}</Card.Title>
                                <Card.Text>{post.post.content}</Card.Text>
                              </div>
                              <Button
                                variant="outline-secondary"
                                size="sm"
                                className="mt-2"
                                onClick={() => deleteSavePost(post.id)}
                              >
                                Remove Saved
                              </Button>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </>
                )}

                {/* Add a message if there are no posts */}
                {(!ProfilePosts || ProfilePosts.results.length === 0) &&
                  (!SavedPosts || SavedPosts.results.length === 0) && (
                    <p>No posts found.</p>
                  )}
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
