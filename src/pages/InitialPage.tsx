import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import ImgBaner from "../assets/initialBaner.jpg"
import Logo  from "../assets/logo-small.png"
import { colors } from "../utils/Colors"

export default function InitialPage(){
    const navigate = useNavigate()
    return(
        <>
            <InitialBanner>
                <BannerImage src={Logo}/>
                <BannerTitle>Agende suas consultas</BannerTitle>
                <BannerTitle>sem sair de casa</BannerTitle>
            </InitialBanner>
            <ButtonsContainer>
                <BannerButton onClick={() => navigate('/login')}>Login</BannerButton>
                <BannerButton onClick={() => navigate('/register')}>Cadastre-se</BannerButton>
            </ButtonsContainer>
        </>
    )
}

const InitialBanner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 65vh;
    overflow: hidden;
    position: relative;
    color: ${colors.secondary};
    background: rgba(228, 107, 107, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
`
const BannerImage = styled.img`
    width: 300px;
    height: 80px;
    margin-top: 25px;
    margin-bottom: 100px;
`
const BannerButton = styled.button`
    width: 200px;
    height: 70px;
    color: #FFF;
    background: ${colors.primary};
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    border: none;
    border-radius: 40px;
    font-size: 20px;
    transition: 0.7s ease;
    :hover{
        background: ${colors.secondary};
        transition: 0.7s ease;
        transform: translateY(-10px);
        transform: scale(1.1);
    }
`
const BannerTitle = styled.label`
    background: none;
    z-index: 3;
    font-family: 'Oxygen', sans-serif;
    font-size: 80px;
    font-weight: 800;
`
const ButtonsContainer = styled.section`
    display: flex;
    justify-content: space-around;
    width: 100%;
    z-index: 2;
    margin-top: -35px;
`