import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Header(){
    const navigate = useNavigate()
    return(
        <HeaderBody>
            <button onClick={()=>navigate('/')}>Cadastro</button>
            <button onClick={()=>navigate('/login')}>Login</button>
        </HeaderBody>
    )
}

const HeaderBody = styled.header`
    width: 100%;
    height: 80px;
    background: linear-gradient(90deg, #6470df 35%, rgba(149,180,186,1) 100%);
`