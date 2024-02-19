import axios from "axios";
axios.defaults.baseURL = 'https://thisorthatapi-56bb400a2b0e.herokuapp.com'

// Login functionality
export const login = async (username, password) => {


  try {
    const response = await axios.post(
      "/dj-rest-auth/login/",
      {
        username,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const signup = async (username, password1, password2) => {
  console.log("here");
  try {
    const response = await axios.post(
      "/dj-rest-auth/registration/",
      {
        username,
        password1,
        password2,
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    console.log(response);

    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getAllPost = () => {

}
export const getOnePost = () => {

}