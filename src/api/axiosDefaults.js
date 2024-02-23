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
    return null;
  }
};
export const signup = async (username, password1, password2) => {
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


    return response;
  } catch (error) {
    return error;
  }
};

export const getAllPost = () => {

}
export const getOnePost = () => {

}