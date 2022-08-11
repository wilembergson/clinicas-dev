import { useEffect, useState } from "react"
import styled from "styled-components"
import api from "../api/ApiConections"
import { colors } from "../utils/Colors"

export default function HomeBanner(props:any){
    const { userName, token } = props
    const [address, setAddress] = useState(null)

    useEffect(() => {
        const promise = api.getAddress(token)
        promise.then(response => setAddress(response.data))
        .catch(error => console.log(error))
    },[])

    return(
        <Banner>
            <UserName>Olá, {userName}!</UserName>
            {address ? 
                <Message>Seja bem-vindo.</Message> :
                <Message>Você precisa cadastrar seu endereço agora.</Message>
            }
            
        </Banner>
    )   
}

const Banner = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    background: linear-gradient(90deg, #e16d80 35%, ${colors.tertiary} 100%);
    box-shadow: 0px 4px 24px rgba(25, 26, 25, 0.12);
    padding: 25px;
    margin-top: 25px;
    border-radius: 10px;
    @media (max-width:599px){
        width: 80%;
    }
    @media (max-width:399px){
        width: 80%;
    }

`
const UserName = styled.h1`
    color: #FFF;
    @media (max-width:399px){
        font-size: larger;
    }
`
const Message = styled.h3`
    color: #FFF;
    font-style: italic;
    font-weight: 400;
    @media (max-width:399px){
        font-size: medium;
    }
`