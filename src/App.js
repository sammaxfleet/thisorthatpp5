import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import HomePage from "./pages/app/HomePage";
import { useEffect, useState } from "react";
import Profiles from "./pages/profiles";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setIsLoggedIn(true)
    }
  }, [])
  return (
    <div className={styles.App}>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Container className={styles.Main}>
        <Routes>
          <Route exact path="/" element={<HomePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route exact path="/signin" element={<SignInForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route exact path="/signup" element={<SignUpForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route exact path="/homepage" element={<HomePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route exact path="/profiles/:slug" element={<Profiles isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />

          <Route element={() => <p>Page not found!</p>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;