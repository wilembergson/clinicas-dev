import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import api from "../api/ApiConections"
import UserContext from "../contexts/UserContext"
import { colors } from "../utils/Colors"
import { erroMessage } from "../utils/toasts"

export default function Header(){
    const navigate = useNavigate()
    const {userName, setUserName} = useContext(UserContext)
    const [logged, setLogged] = useState(false)

    const token:any = localStorage.getItem("token")
    useEffect(() => {
        const promise = api.getUserName()
        promise.then(response =>{
            setUserName(response.data)
        }).catch(error=> erroMessage(error.response.data))
    },[])

    function checkLogin(){
        if(localStorage.getItem("token")){
            navigate("/home")
        }else{
            navigate("/")
        }
    }

    function logout(){
        setUserName('')
        localStorage.clear()
        navigate("/")
    }

    return(
        <HeaderBody>
            <ContainerButtons>
                {token ? 
                    <>
                        <Button onClick={()=>navigate('/home')}>{userName}</Button>
                        <Button onClick={() => logout()}>Sair</Button> 
                    </>
                :
                    <>
                        <Button onClick={()=>checkLogin()}>Login</Button>
                        <Button onClick={()=>navigate('/register')}>Cadastre-se</Button>    
                    </>
                }
            </ContainerButtons>
        </HeaderBody>
    )
}

const HeaderBody = styled.header`
    width: 100%;
    height: 80px;
    background: ${colors.primary};
    @media (max-width:399px){
        width: 399px;
    }
`
const Button = styled.button`
    color: #fff;
    background: none;
    border: none;
    cursor: pointer;
    height: 80px;
    padding: 25px;
    font-family: 'Oxygen', sans-serif;
    font-size: 18px;
    transition: 0.7s ease;
    :hover{
        color: ${colors.primary};
        background: ${colors.tertiary};
        transition: 0.7s ease;
    }
    @media (max-width:399px){
        padding: 10px;
    }
`
const ContainerButtons = styled.div`
    height: 80px;
    position: absolute;
    right: 0;
    @media (max-width:399px){
        align-items: center;
    }
`