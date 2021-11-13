import Axios from "axios";

const req = Axios.create({
  baseURL: " http://localhost:3004/",
});
export default req;
