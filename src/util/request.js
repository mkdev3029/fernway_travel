import Axios from "axios";

const req = Axios.create({
  // baseURL: " http://localhost:3004/api",
  baseURL: "https://fernway-travel.herokuapp.com/",
});
export default req;
