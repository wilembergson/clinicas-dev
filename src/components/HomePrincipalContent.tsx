import { useContext } from "react"
import styled from "styled-components"
import UserContext from "../contexts/UserContext"
import { colors } from "../utils/Colors"
import Historic from "./Historic"
import NewConsult from "./NewConsult"
import NextConsult from "./NextConsult"
import { titles } from "./OptionsContainer"



export default function HomePrincialContent(){
    const { principalContentTitle } = useContext(UserContext)

    return(
        <PrincialContent>
            <Title>{principalContentTitle}</Title>
            {(principalContentTitle===titles.nextConsult) ? <NextConsult/> : <></>}
            {(principalContentTitle===titles.newConsult) ? <NewConsult/> : <></>}
            {(principalContentTitle===titles.historic) ? <Historic/> : <></>}
        </PrincialContent>
    )
}

export const PrincialContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #fff;
    box-shadow: 0px 4px 24px rgba(25, 26, 25, 0.12);
    margin: 20px 0 40px 0;
    border-radius: 10px;
    overflow: hidden;
    width: 650px;
    padding-bottom: 15px;
    
    @media (max-width:430px){
        width: 92%;
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