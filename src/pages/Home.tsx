import { useEffect, useState } from "react"

import styled from "styled-components"
import api from "../api/ApiConections"
import Header from "../components/Header"
import HomeBanner from "../components/HomeBanner"
import HomePrincialContent from "../components/HomePrincipalContent"
import OptionsContainer from "../components/OptionsContainer"

export default function Home() {
    const [address, setAddress] = useState(null)

    useEffect(() => {
        const promise = api.getAddress()
        promise.then(response => setAddress(response.data))
            .catch(error => console.log(error.response.data.error))

    }, [])

    return (
        <>
            <Header />
            <HomeBody>
                <HomeBanner />
                <OptionsContainer />
                {address ? <HomePrincialContent /> : <></>}
            </HomeBody>
        </>

    )
}

const HomeBody = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 80px;
`
