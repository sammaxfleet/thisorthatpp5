import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { axiosInstance } from "../axiosApi";


export const userInitialState = {
    isLoggedIn: false,
    access: "",
    refresh: "",
    user: [],
    following: [],
    followers: [],
    userDetails: [],
  };
  const userSlice = createSlice({
    name: "users",
    initialState: userInitialState,
    reducers: {
      logIn(state, action) {
        state.isLoggedIn = true;
        state.access = action.payload.access;
  
        localStorage.setItem("access", action.payload.access);
        state.refresh = action.payload.refresh;
        localStorage.setItem("refresh", action.payload.refresh);
      },
      logOut(state, action) {
        state.isLoggedIn = false;
        state.access = "";
        state.refresh = "";
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
      },
      checkAuthenticated(state, action) {
        if (action.payload === 200) {
          state.isLoggedIn = true;
          state.access =  localStorage.getItem("access")
          state.refresh = localStorage.getItem("refresh")
        } else {
          state.isLoggedIn = false;
        state.access = "";
        state.refresh = "";
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
  
        }
      },
      refreshToken(state, action) {
        state.access = action.payload.access;
        localStorage.setItem("access", action.payload.access);
       
      },
      load_user(state, action) {
        state.user = action.payload;
        state.isLoggedIn = true;
      },
    },
  });
  export const { logIn, logOut, checkAuthenticated, load_user, refreshToken } =
  userSlice.actions;
export default userSlice.reducer;

  export const checkUserAuthenticated = () => async (dispatch) => {
    try {
      const body = JSON.stringify({
        token: localStorage.getItem("access"),
      });
      const res = await axios.post(`${process.env.REACT_APP_apiUrl}/dj-rest-auth/token/verify/`,  body, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
      // console.log(res.data);
      if (res.status !== 200) {
        if (localStorage.getItem('refresh')){
          dispatch(getRefreshToken());
        }
      }else{
  
        dispatch(checkAuthenticated(res.status));
        // console.log("loading the user");
        dispatch(loadLoggedInUser());
      }
  
    } catch (e) {
      dispatch(getRefreshToken());
    }
  };

  export const getRefreshToken = () => async (dispatch) => {
    try {
      const body = JSON.stringify({
        refresh: localStorage.getItem("refresh"),
      });
      const res = await axiosInstance.post("/dj-rest-auth/token/refresh/", body);
      // console.log(res);
      if(res.status===200){
        dispatch(refreshToken(res.data));
        dispatch(loadLoggedInUser())
      }else{
        dispatch(logOut())
      }
    } catch (e) {
      dispatch(logOut());
    }
  };
  export const loadLoggedInUser = () => async (dispatch) => {
    try {
      // console.log("load logged in user ran ");
      const token = localStorage.getItem("access");
      const headers = {
        authorization: `Bearer ${token}`,
        accept: "application/json",
        "content-type": "application/json",
      };
      console.log(process.env.REACT_APP_apiUrl)
      // const res = await axiosInstance.get(`dj-rest-auth/user/`);
      const res = await axios.get(`${process.env.REACT_APP_apiUrl}/dj-rest-auth/user/`, {
        headers,
      });
      // console.log(res.data);
      dispatch(load_user(res.data));
    } catch (e) {
      dispatch(getRefreshToken());
    }
  };
  
  export const userLogin = (form) => async (dispatch) => {
    try {
      const {
        data: { refresh_token: refresh, access_token: access },
      } = await axiosInstance.post("/dj-rest-auth/login/", form);
      // console.log(refresh, access);
      if (refresh && access) {
        dispatch(logIn({ refresh, access }));
        dispatch(loadLoggedInUser());
        toast.success("You Are SuccessFully Logged In ");
      }
    } catch (e) {
      toast.error("Unable to log in with provided credentials.");
    }
  };