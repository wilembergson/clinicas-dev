import jwt_decode from "jwt-decode"
import { useContext, useEffect, useState } from "react"
import api from "../api/ApiConections"
import Header from "../components/Header"
import UserContext from "../contexts/UserContext"
import { erroMessage } from "../utils/toasts"



export default function Home(){
    const token:any = localStorage.getItem("token")
    const {userName, setUserName} = useContext(UserContext)
    useEffect(() => {
        const promise = api.getUserName(token)
        promise.then(response =>{
            setUserName(response.data)
        }).catch(error=> erroMessage(error.response.data))
    },[])
    return(
        <>
            <Header/>
            <div>{userName}</div>
        </>
        
    )
}