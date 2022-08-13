import { useContext, useState } from "react"
import styled from "styled-components"
import Header from "../components/Header"
import HomeBanner from "../components/HomeBanner"
import HomePrincialContent from "../components/HomePrincipalContent"
import OptionsContainer from "../components/OptionsContainer"

export default function Home(){

    return(
        <>
            <Header/>
            <HomeBody>
                <HomeBanner/>
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
