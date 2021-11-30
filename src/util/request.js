import Axios from "axios";

const req = Axios.create({
  // baseURL: " http://localhost:3004/",
  baseURL: "https://fernway-travel.herokuapp.com/api",
});
export default req;
