import axios from "axios";
import { LoginBody } from "../pages/Login";

import { userBody } from "../pages/RegisterUser";
import BASE_URL from "./BaseURL"

export type AddressBody = {
    number:string
    street:string
    district:string
    city:string
    uf:string
}

export type UpdateBody = {
    id:number,
    number:string
    street:string
    district:string
    city:string
    uf:string
}

export type ConsultType = {
    specialtyName:string | undefined
    date:string
}

const token:any = localStorage.getItem("token")

async function createUser(user:userBody){
    return await axios.post(`${BASE_URL}/user`, user)
}

async function login(data:LoginBody){
    return await axios.post(`${BASE_URL}/login`, data)
}

function getUserName(){
    return axios.get(`${BASE_URL}/get-user-name`, {
        headers:{
            authorization:`Bearer ${token}`
        }
    })
}

async function getAddress(){
    return await axios.get(`${BASE_URL}/address`, {
        headers:{
            authorization:`Bearer ${token}`
        }
    })
}

function newAddress(data:AddressBody){
    return axios.post(`${BASE_URL}/address`, 
        data,
        {
            headers:{
                authorization:`Bearer ${token}`
            }
        }
    )
}

function updateAddress(data:UpdateBody){
    return axios.put(`${BASE_URL}/address`, 
        data,
        {
            headers:{
                authorization:`Bearer ${token}`
            }
        }
    )
}

function listSpecialties(){
    return axios.get(`${BASE_URL}/specialties`, {
        headers:{
            authorization:`Bearer ${token}`
        }
    })
}

function newConsult(data:ConsultType){
    return axios.post(`${BASE_URL}/consult`, 
        data,
        {
            headers:{
                authorization:`Bearer ${token}`
            }
        }
    )
}

function getAvailableDays(specialtyName:string | undefined){
    return axios.get(`${BASE_URL}/specialty-days/${specialtyName}`)
}

function nextConsult(){
    return axios.get(`${BASE_URL}/next-consults`,
        {
            headers:{
                authorization:`Bearer ${token}`
            }
        }
    )
}

function historic(){
    return axios.get(`${BASE_URL}/historic`,
        {
            headers:{
                authorization:`Bearer ${token}`
            }
        }
    )
}

const api = {
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