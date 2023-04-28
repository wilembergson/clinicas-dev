import { useNavigate } from "react-router-dom"
import styled from "styled-components"

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
    @media (max-width:430px){
        height: 55vh;
    }
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
    cursor: pointer;
    border: 3px solid ${colors.secondary};
    border-radius: 40px;
    font-size: 20px;
    font-weight: 800;
    transition: 0.7s ease;
    color: #FFF;
    background: ${colors.secondary};
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    :hover{
        color: ${colors.secondary};
        background: rgba(255, 255, 255, 0.2);
        border: 3px solid ${colors.secondary};
        transition: 0.7s ease;
        transform: scale(1.2);
    }
    @media (max-width:430px){
        width: 150px;
        height: 60px;
        font-size: 17px;
      }
`
const BannerTitle = styled.label`
    background: none;
    z-index: 3;
    font-family: 'Oxygen', sans-serif;
    font-size: 80px;
    font-weight: 800;
    @media (max-width:430px){
        font-size: 30px;
    }
`
const ButtonsContainer = styled.section`
    display: flex;
    justify-content: space-around;
    width: 50%;
    z-index: 2;
    margin-top: -35px;
    @media (max-width:430px){
          width: 100%;
      }
`