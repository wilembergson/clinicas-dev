import axios from "axios";
import { LoginBody } from "../pages/Login";

import { userBody } from "../pages/RegisterUser";
import BASE_URL from "./BaseURL"
import { useState } from "react";

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
    return await axios.post(`${BASE_URL}/signup`, user)
}

async function login(data: LoginBody) {
    console.log(data)
    const result = await axios.post(`${BASE_URL}/login`, data)
    console.log(result)
    return result
}

function isAthenticated() {
    //let auth
    const result = axios.get(`${BASE_URL}/account-name`, {
        headers: {
            authorization: token
        }
    })
    //result.then(response => auth = true).catch()
    //console.log('API: '+auth)
    return result
}

function getUserName() {
    return axios.get(`${BASE_URL}/account-name`, {
        headers: {
            authorization: token
        }
    })
}

async function getAddress() {
    return await axios.get(`${BASE_URL}/address`, {
        headers: {
            authorization: token
        }
    })
}

function newAddress(data: AddressBody) {
    return axios.post(`${BASE_URL}/address`,
        data,
        {
            headers: {
                authorization: token
            }
        }
    )
}

function updateAddress(data: UpdateBody) {
    return axios.put(`${BASE_URL}/address`,
        data,
        {
            headers: {
                authorization: token
            }
        }
    )
}

function listSpecialties() {
    return axios.get(`${BASE_URL}/specialties`, {
        headers: {
            authorization: token
        }
    })
}

function newConsult(data: ConsultType) {
    return axios.post(`${BASE_URL}/consult`,
        data,
        {
            headers: {
                authorization: token
            }
        }
    )
}

function getAvailableDays(specialtyName: string | undefined) {
    return axios.get(`${BASE_URL}/specialty-days/${specialtyName}`)
}

function nextConsult() {
    return axios.get(`${BASE_URL}/next-consult`,
        {
            headers: {
                authorization: token
            }
        }
    )
}

function historic() {
    return axios.get(`${BASE_URL}/historic-consults`,
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