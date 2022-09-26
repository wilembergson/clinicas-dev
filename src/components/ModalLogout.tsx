import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { colors } from "../utils/Colors";
import { Button, ModalMessage} from "./SaredStyles";

interface Logout {
    isOpen:string;
}
export default function ModalLogout(props:any){
    const {show, setShow} = props
    const navigate = useNavigate()
    const {setUserName} = useContext(UserContext)

    function logout(){
        setUserName('')
        localStorage.clear()
        navigate("/login")
    }
    
    return (
        <LogoutModal isOpen={show} onClick={() => setShow(false)}>
            <ModalContent>
                <ModalMessage>Tem certeza que deseja</ModalMessage>
                <ModalMessage>sair?</ModalMessage>
                <ButtonsContainer>
                    <Button onClick={() => logout()}>Sim</Button>
                    <Button onClick={() => setShow(false)}>Não</Button>
                </ButtonsContainer>
            </ModalContent>
        </LogoutModal>
    )   
}

const ButtonsContainer = styled.div`
    display: flex;
`
const LogoutModal = styled.div<Logout>`
    display: ${(props) => props.isOpen ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 4;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    height: 100vh;
`
const ModalContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 497px;
    height: 200px;
    color: ${colors.clearColor};
    background: ${colors.secondary};
    border: 2px solid ${colors.secondary};
    border-radius: 25px;
    position: absolute;
    padding: 78px 38px 28px 38px;
    overflow: hidden;
    @media (max-width:430px) {
        width: 70%;
        height: 140px;
    }
`