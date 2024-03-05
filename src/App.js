import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import HomePage from "./pages/app/HomePage";
import { useEffect } from "react";
import Profiles from "./pages/profiles";
import ProfileEdit from "./pages/ProfileEdit";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  checkUserAuthenticated,
} from "./store/usersSlice";
import { useDispatch } from "react-redux";
import NewPost from "./pages/NewPost";
import PostEdit from "./pages/PostEdit";
import ChangePassword from "./pages/ChangePassword";
import PostDetailPage from "./pages/PostDetailPage";
import ChangeUsername from "./pages/ChangeUsername";
import ContactForm from "./pages/ContactForm";
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUserAuthenticated())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <ToastContainer />

        <Routes>

          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/signin" element={<SignInForm />} />
          <Route exact path="/signup" element={<SignUpForm />} />
          <Route exact path="/homepage" element={<HomePage />} />
          <Route exact path="/profiles/:slug" element={<Profiles />} />
          <Route exact path="/profiles/:slug/edit" element={<ProfileEdit />} />
          <Route exact path="/post/new" element={<NewPost />} />
          <Route exact path="/post/:slug" element={<PostDetailPage />} />
          <Route exact path="/post/:slug/edit" element={<PostEdit />} />
          <Route exact path="/changepassword" element={<ChangePassword />} />
          <Route exact path="/changeusername" element={<ChangeUsername />} />
          <Route exact path="/contact" element={<ContactForm />} />
          <Route element={() => <p>Page not found!</p>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;