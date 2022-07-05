import axios from "axios";

if (localStorage.getItem("token")) {
  axios.defaults.headers.common["Authorization"] = `${localStorage.getItem(
    "token"
  )}`;
  axios.defaults.headers.post["Content-Type"] = "application/json";
}

export default axios.create({
  baseURL: `https://peshawa.tech/`,
});
