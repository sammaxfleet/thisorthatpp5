import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "./assets/thisorthat.jpg";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../store/usersSlice";
import { thisOrThatApi } from "../store/apiSlice";
const NavBar = () => {
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container className="button">
        <NavLink to="/">
          <Navbar.Brand className="d-flex justify-content-center align-items-center ">
            <img src={logo} alt="logo" height="45" />
            <h1 className="m-2">This Or That</h1>
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fas fa-home"></i>Home
            </NavLink>

            {isLoggedIn && (
              <>
                <span
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  onClick={() => {
                    localStorage.removeItem("user")
                    // setIsLoggedIn(false)
                    dispatch(logOut())

                  }}
                >
                  <i className="fas fa-sign-out"></i>Logout
                </span>
                <NavLink
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  to={"/profiles/" + user.profile_id}
                >
                  <i className="fas fa-user"></i>Profile
                </NavLink>
                <NavLink
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  to={"/post/new"}
                >
                  <i className="fas fa-upload"></i>Add Post
                </NavLink>
              </>


            )}

            {!isLoggedIn && (
              <>
                <NavLink
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  to="/signin"
                >
                  <i className="fas fa-sign-in-alt"></i>Sign in
                </NavLink>
                <NavLink
                  to="/signup"
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                >
                  <i className="fas fa-user-plus"></i>Sign up
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;