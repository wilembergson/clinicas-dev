import axios from "axios";

import { userBody } from "../pages/RegisterUser";
import BASE_URL from "./BaseURL"

async function createUser(user:userBody){
    const result = await axios.post(`${BASE_URL}/user`, user)
    return result
}

const api = {
    createUser
}
export default api