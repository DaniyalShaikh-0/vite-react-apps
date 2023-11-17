import axios from "axios";
import { BASE_URI } from "../constants/apiEndpoints";

const CLIENT = axios.create({ baseURL: BASE_URI });

axios.interceptors.request.use((requestPL) => {
  requestPL.headers["Content-Type"] = "application/json; charset=UTF-8";
  return requestPL;
});

export default CLIENT;
