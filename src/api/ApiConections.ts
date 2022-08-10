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

function getUserName(token:string){
    return axios.get(`${BASE_URL}/get-user-name`, {
        headers:{
            authorization:`Bearer ${token}`
        }
    })
}

function getAddress(token:string){
    return axios.get(`${BASE_URL}/address`, {
        headers:{
            authorization:`Bearer ${token}`
        }
    })
}

const api = {
    createUser,
    login,
    getUserName,
    getAddress
}
export default api