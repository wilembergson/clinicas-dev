import axios from "axios";
import { LoginBody } from "../pages/Login";

import { userBody } from "../pages/RegisterUser";
import API_URL from "./ApiURL"

export type AddressBody = {
    number: string
    street: string
    district: string
    city: string
    uf: string
}

export type UpdateBody = {
    id: number,
    number: string
    street: string
    district: string
    city: string
    uf: string
}

export type ConsultType = {
    specialty: string | undefined
    date: string
}

const token: any = localStorage.getItem("token")

async function createUser(user: userBody) {
    return await axios.post(`${API_URL}/signup`, user)
}

async function login(data: LoginBody) {
    console.log(data)
    const result = await axios.post(`${API_URL}/login`, data)
    console.log(result)
    return result
}

function isAthenticated() {
    const result = axios.get(`${API_URL}/account-name`, {
        headers: {
            authorization: token
        }
    })
    return result
}

function getUserName() {
    return axios.get(`${API_URL}/account-name`, {
        headers: {
            authorization: token
        }
    })
}

async function getAddress() {
    return await axios.get(`${API_URL}/address`, {
        headers: {
            authorization: token
        }
    })
}

function newAddress(data: AddressBody) {
    return axios.post(`${API_URL}/address`,
        data,
        {
            headers: {
                authorization: token
            }
        }
    )
}

function updateAddress(data: UpdateBody) {
    return axios.put(`${API_URL}/address`,
        data,
        {
            headers: {
                authorization: token
            }
        }
    )
}

function listSpecialties() {
    return axios.get(`${API_URL}/specialties`, {
        headers: {
            authorization: token
        }
    })
}

function newConsult(data: ConsultType) {
    return axios.post(`${API_URL}/consult`,
        data,
        {
            headers: {
                authorization: token
            }
        }
    )
}

function getAvailableDays(specialtyName: string | undefined) {
    return axios.get(`${API_URL}/specialty-days/${specialtyName}`)
}

function nextConsult() {
    return axios.get(`${API_URL}/next-consult`,
        {
            headers: {
                authorization: token
            }
        }
    )
}

function historic() {
    return axios.get(`${API_URL}/historic-consults`,
        {
            headers: {
                authorization: token
            }
        }
    )
}

const api = {
    isAthenticated,
    createUser,
    login,
    getUserName,
    getAddress,
    newAddress,
    updateAddress,
    listSpecialties,
    newConsult,
    getAvailableDays,
    nextConsult,
    historic
}
export default api