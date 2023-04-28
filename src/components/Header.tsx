import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import api from "../api/ApiConections"
import UserContext from "../contexts/UserContext"
import { colors } from "../utils/Colors"
import { erroMessage } from "../utils/toasts"
import Logo from "../assets/logo-small.png"
import ResponsiveLogo from "../assets/logo.png"
import { MdKeyboardArrowDown } from "react-icons/md"
import ModalLogout from "./ModalLogout"

export default function Header() {
    const navigate = useNavigate()
    const { userName, setUserName } = useContext(UserContext)
    const [showModal, setShowModal] = useState(false)

    const token: any = localStorage.getItem("token")
    useEffect(() => {
        const promise = api.getUserName()
        promise.then(response => setUserName(response.data.name))
            .catch(error => {
                erroMessage(error.response.data)
            })
    }, [])

    function checkLogin() {
        const isValid = api.isAthenticated().then(response => response.data)
        if (isValid === undefined) {
            navigate("/login")
        } else {
            navigate("/home")
        }
    }

    return (
        <HeaderBody>
            <LogoImg src={Logo} onClick={() => token ? navigate('/home') : navigate('/')} />
            <LogoImgResponsive src={ResponsiveLogo} onClick={() => token ? navigate('/home') : navigate('/')} />
            <ContainerButtons>
                {token ?
                    <>
                        <Dropdown>
                            <ButtonDropdown>
                                {userName}
                                <MdKeyboardArrowDown size={'20px'} />
                            </ButtonDropdown>
                            <ContentDropdown>
                                <ItemDropdown onClick={() => navigate('/home')}>Home</ItemDropdown>
                                <ItemDropdown onClick={() => navigate('/address/register')}>Endereço</ItemDropdown>
                            </ContentDropdown>
                        </Dropdown>
                        <Button onClick={() => setShowModal(true)}>Sair</Button>
                        <ModalLogout show={showModal} setShow={setShowModal} />
                    </>
                    :
                    <>
                        <Button onClick={() => checkLogin()}>Login</Button>
                        <Button onClick={() => navigate('/register')}>Cadastre-se</Button>
                    </>
                }
            </ContainerButtons>
        </HeaderBody>
    )
}

const ItemDropdown = styled.button`
    color: ${colors.secondary};
    background: none;
    border: none;
    cursor: pointer;
    width: 100%;
    height: 80px;
    padding: 3px;
    font-family: 'Oxygen', sans-serif;
    font-size: 18px;
    font-weight: 400;
    transition: 0.7s ease;
    :hover{
        color: ${colors.clearColor};
        background: ${colors.secondary};
        transition: 0.7s ease;
    }
    @media (max-width:399px){
        padding: 10px;
    }
`
const LogoImg = styled.img`
    width: 270px;
    height: 70px;
    margin-top: 5px;
    cursor: pointer;
    @media (max-width:485px){
        display: none;
      }
`
const LogoImgResponsive = styled.img`
    display: none;
    width: 80px;
    height: 70px;
    margin-top: 5px;
    cursor: pointer;
    @media (max-width:485px){
        display: block;
      }
`
const HeaderBody = styled.header`
    display: flex;
    width: 100%;
    height: 80px;
    position: fixed;
    z-index: 2;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.4px);
    -webkit-backdrop-filter: blur(8.4px);
    border: 1px solid rgba(255, 255, 255, 0.26);
    @media (max-width:399px){
        
    }
`
const Button = styled.button`
    color: ${colors.secondary};
    background: none;
    border: none;
    cursor: pointer;
    height: 80px;
    padding: 25px;
    font-family: 'Oxygen', sans-serif;
    font-size: 18px;
    font-weight: 400;
    transition: 0.7s ease;
    :hover{
        color: ${colors.clearColor};
        background: ${colors.secondary};
        transition: 0.7s ease;
    }
    @media (max-width:399px){
        padding: 10px;
    }
`
const ContentDropdown = styled.div`
    display: none;
    position: absolute;
    background: #fff;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    :hover{
        display: block;
    }
`
const Dropdown = styled.div`
    position: relative;
    display: inline-block;
    :hover ${ContentDropdown}{
        display: flex;
        flex-direction: column;
        transition: 0.7s ease;
    }
`
const ButtonDropdown = styled.button`
    color: ${colors.secondary};
    background: none;
    border: none;
    cursor: pointer;
    height: 80px;
    padding: 25px;
    font-family: 'Oxygen', sans-serif;
    font-size: 18px;
    font-weight: 400;
    transition: 0.7s ease;
    :hover{
        color: ${colors.clearColor};
        background: ${colors.secondary};
        transition: 0.7s ease;
    }
    @media (max-width:399px){
        padding: 10px;
    }
`
const ContainerButtons = styled.div`
    height: 80px;
    position: absolute;
    right: 0;
    @media (max-width:399px){
        align-items: center;
    }
`