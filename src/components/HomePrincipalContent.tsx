import { useContext } from "react"
import styled from "styled-components"
import UserContext from "../contexts/UserContext"
import { colors } from "../utils/Colors"
import NewConsult from "./NewConsult"

export default function HomePrincialContent(){
    const { principalContentTitle } = useContext(UserContext)
    return(
        <PrincialContent>
            <Title>{principalContentTitle}</Title>
            {(principalContentTitle==='Nova consulta') ? <NewConsult/> : <></>}
            {(principalContentTitle==='???') ? <div>???</div> : <></>}
            {(principalContentTitle==='Implementar...') ? <div>Implementar...</div> : <></>}
        </PrincialContent>
    )
}

const PrincialContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #fff;
    box-shadow: 0px 4px 24px rgba(25, 26, 25, 0.12);
    margin: 20px 0;
    border-radius: 10px;
    overflow: hidden;
    width: 650px;
    
    @media (max-width:399px){
        width: auto;
    }
`
const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    color: ${colors.clearColor};
    background: ${colors.secondary};
    margin: 0;
`