import axios from "axios"

const user = JSON.parse(localStorage.getItem("user"))
const token = user?.access_token
export const axiosInstance = axios.create({
    baseURL: "https://thisorthatapi-56bb400a2b0e.herokuapp.com/",
    timeout: 5000,
    headers: {
        authorization: localStorage.getItem("user") ? "Bearer" + " " + token : null,
        "Content-Type": "application/json",
        accept: "application/json"
    }
})