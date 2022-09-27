import styled from "styled-components"
import { colors } from "../utils/Colors"
import { IoLogoLinkedin } from "react-icons/io"
import { GoMarkGithub } from "react-icons/go"

export default function Footer(){
    return (
        <FooterContainer>
            <p>&copy; Desenvolvido por Wilembergson</p>
            <div>
                <Icon href="https://www.linkedin.com/in/wilembergson/" target='blank'>
                    <IoLogoLinkedin size={'45px'}/>
                </Icon>
                <Icon href="https://github.com/wilembergson" target='blank'>
                    <GoMarkGithub size={'40px'}/>
                </Icon>
            </div>

        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: ${colors.clearColor};
    background: ${colors.secondary};
    margin-top: 80px;
    position: relative;
    bottom: 0;
    right: 0;
    padding: 30px 0;
    font-style: italic;
    @media (max-width:430px){
        font-size: 14px;
    }
`
const Icon = styled.a`
    color: #fff;
    margin-right: 15px;
    transition: 0.7s ease;
    :hover{
        color: ${colors.primary};
        transition: 0.7s ease;
    }
`