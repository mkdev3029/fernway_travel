
import Axios from "axios";

const data1 = Axios.create({
    baseURL:" http://localhost:3001/data"
})
export {data1};