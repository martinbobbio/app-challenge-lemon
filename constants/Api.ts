import axios from "axios";
import Config from "./Config";

const apiBackend = axios.create({
  baseURL: Config?.apiUrl,
});

export default apiBackend;
