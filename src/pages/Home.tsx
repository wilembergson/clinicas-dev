import { useContext, useState } from "react"
import styled from "styled-components"
import Header from "../components/Header"
import HomeBanner from "../components/HomeBanner"
import HomePrincialContent from "../components/HomePrincipalContent"
import OptionsContainer from "../components/OptionsContainer"
import UserContext from "../contexts/UserContext"

export default function Home(){
    
    const { userName } = useContext(UserContext)

    return(
        <>
            <Header/>
            <HomeBody>
                <HomeBanner userName={userName}/>
                <OptionsContainer/>
                <HomePrincialContent/>
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
