import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "./assets/thisorthat.jpg";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../store/usersSlice";
import { toast } from "react-toastify";

const NavBar = () => {
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavItemClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      className={styles.NavBar}
      expand="md"
      expanded={expanded}
      fixed="top"
      onToggle={handleToggle}
    >
      <Container className="button">
        <NavLink to="/" onClick={handleNavItemClick}>
          <Navbar.Brand className="d-flex justify-content-center align-items-center ">
            <img src={logo} alt="logo" height="45" />
            <h4 className="m-2">This Or That</h4>
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
              onClick={handleNavItemClick}
            >
              <i className="fas fa-home"></i>Home
            </NavLink>

            {isLoggedIn && (
              <>
                <span
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  onClick={() => {
                    localStorage.removeItem("user");
                    dispatch(logOut());
                    toast.success("Logged Out");
                    handleNavItemClick();
                  }}
                >
                  <i className="fas fa-sign-out"></i>Logout
                </span>
                <NavLink
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  to={"/profiles/" + user.profile_id}
                  onClick={handleNavItemClick}
                >
                  <i className="fas fa-user"></i>Profile
                </NavLink>
                <NavLink
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  to={"/post/new"}
                  onClick={handleNavItemClick}
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
                  onClick={handleNavItemClick}
                >
                  <i className="fas fa-sign-in-alt"></i>Sign in
                </NavLink>
                <NavLink
                  to="/signup"
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  onClick={handleNavItemClick}
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
