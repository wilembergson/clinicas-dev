import styled from "styled-components"
import { colors } from "../utils/Colors"

export default function HomePrincialContent(){
    return(
        <PrincialContent>
            <Title>Principal content</Title>
        </PrincialContent>
    )
}

const PrincialContent = styled.div`
    display: flex;
    background: #fff;
    box-shadow: 0px 4px 24px rgba(25, 26, 25, 0.12);
    margin: 20px 0;
    border-radius: 10px;
    overflow: hidden;
    width: 650px;
    height: 500px;
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