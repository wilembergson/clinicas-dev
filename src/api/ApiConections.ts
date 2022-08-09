import axios from "axios";
import { LoginBody } from "../pages/Login";

import { userBody } from "../pages/RegisterUser";
import BASE_URL from "./BaseURL"

async function createUser(user:userBody){
    const result = await axios.post(`${BASE_URL}/user`, user)
    return result
}

async function login(data:LoginBody){
    return await axios.post(`${BASE_URL}/login`, data)
}

const api = {
    createUser,
    login
}
export default api