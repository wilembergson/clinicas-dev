import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Header(){
    const navigate = useNavigate()
    return(
        <HeaderBody>
            <ContainerButtons>
                <Button onClick={()=>navigate('/login')}>Login</Button>
                <Button onClick={()=>navigate('/')}>Cadastre-se</Button>
            </ContainerButtons>
        </HeaderBody>
    )
}

const HeaderBody = styled.header`
    width: 100%;
    height: 80px;
    background: linear-gradient(90deg, #6470df 35%, rgba(149,180,186,1) 100%);
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
        color: #fff;
        background: rgb(37, 133, 189);
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