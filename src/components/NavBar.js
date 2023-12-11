import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "./assets/thisorthat.jpg";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = ({isLoggedIn,setIsLoggedIn}) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container className="button">
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
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
                onClick={()=>{
                  localStorage.removeItem("user")
                  setIsLoggedIn(false)

                }}
              >
                <i className="fas fa-sign-out"></i>Logout
              </span>
              <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
              to={"/profiles/"+user.user.profile_id}
              >
                <i className="fas fa-user"></i>Profile
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