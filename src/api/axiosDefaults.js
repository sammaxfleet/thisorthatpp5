 import axios from "axios"

 axios.defaults.baseURL = 'https://thisorthatpp5-9e3adcfaf8e9.herokuapp.com/'
 axios.defaults.headers.post['Content-Type']= 'multipart/form-data'
 axios.defaults.withCredentials = true 
