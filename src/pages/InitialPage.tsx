import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import ImgBaner from "../assets/initialBaner.jpg"
import { colors } from "../utils/Colors"

export default function InitialPage(){
    const navigate = useNavigate()
    return(
        <>
            <InitialBanner>
                <BannerTitle>Clínicas Dev</BannerTitle>
                <BannerContent/>
                <BannerImage src={ImgBaner}/>
            </InitialBanner>
            <ButtonsContainer>
                <button onClick={() => navigate('/login')}>Login</button>
                <button onClick={() => navigate('/register')}>Cadastre-se</button>
            </ButtonsContainer>
        </>
    )
}

const InitialBanner = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 65vh;
    color: #FFF;
    background: #000;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    position: relative;
`
const BannerImage = styled.img`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 1;
`
const BannerContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    z-index: 2;
    background: #000;
    opacity: 0.7;
`
const BannerTitle = styled.label`
    background: none;
    margin-top: 100px;
    position: absolute;
    z-index: 3;
    font-family: 'Oxygen', sans-serif;
    font-size: 80px;
`
const ButtonsContainer = styled.section`
    display: flex;
    z-index: 2;
    margin-top: -10px;
`