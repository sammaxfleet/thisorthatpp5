 import axios from "axios"
 axios.defaults.baseURL = 'https://thisorthatpp5-9e3adcfaf8e9.herokuapp.com/'
 axios.defaults.headers.post["Content-Type"] = "application/json";
 axios.defaults.withCredentials = true;
 
 // Get CSRF token from the csrftoken cookie
 function getCookie(name) {
   let cookieValue = null;
   if (document.cookie && document.cookie !== "") {
     const cookies = document.cookie.split(";");
     for (let i = 0; i < cookies.length; i++) {
       const cookie = cookies[i].trim();
       if (cookie.substring(0, name.length + 1) === name + "=") {
         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
         break;
       }
     }
   }
   return cookieValue;
 }
 
 // Login functionality
 export const login = async (username, password) => {
   const csrftoken = getCookie("csrftoken");
 
   // Set up axios to include the CSRF token in requests
   axios.defaults.headers.post["X-CSRFToken"] = csrftoken;
 
   try {
     const response = await axios.post(
       "/dj-rest-auth/login/",
       {
         username,
         password,
       },
       {
         withCredentials: true,
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
         withCredentials: true,
       }
     );
 
     console.log(response);
 
     return response;
   } catch (error) {
     console.log(error);
     return null;
   }
 };

 export const getAllPost = ()=>{

 }
 export const getOnePost = ()=>{

 }