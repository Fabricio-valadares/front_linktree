import axios from "axios";

const api = axios.create({
  baseURL: "https://favaco.herokuapp.com/api/",
});

export { api };
