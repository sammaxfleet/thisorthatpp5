import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import HomePage from "./pages/app/HomePage";
import { useState } from "react";

function App() {
  const [isLoggedIn,setIsLoggedIn] =useState(null);
  return (
    <div className={styles.App}>
      <NavBar isLoggedIn={isLoggedIn}  setIsLoggedIn={setIsLoggedIn}/> 
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <HomePage isLoggedIn={isLoggedIn}  setIsLoggedIn={setIsLoggedIn}/> } />
          <Route exact path="/signin" render={() => <SignInForm isLoggedIn={isLoggedIn}  setIsLoggedIn={setIsLoggedIn}/>} />
          <Route exact path="/signup" render={() => <SignUpForm isLoggedIn={isLoggedIn}  setIsLoggedIn={setIsLoggedIn}/>} />
          <Route exact path="/homepage" render={() => <HomePage isLoggedIn={isLoggedIn}  setIsLoggedIn={setIsLoggedIn}/> } />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;