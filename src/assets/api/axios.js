import axios from "axios";
const instance = axios.create({
  baseURL: "https://communutibackok.fly.dev/",
  //baseURL: "http://localhost:8080/",
});
export default instance;