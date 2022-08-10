import { useContext, useEffect } from "react"
import styled from "styled-components"
import api from "../api/ApiConections"
import Header from "../components/Header"
import HomeBanner from "../components/HomeBanner"
import OptionsContainer from "../components/OptionsContainer"
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
            <HomeBody>
                <HomeBanner userName={userName} token={token}/>
                <OptionsContainer/>
            </HomeBody>
        </>
        
    )
}

const HomeBody = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background: #f1f1f1;
`
