import { useContext, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { colors } from "../utils/Colors";
import { Button } from "./SaredStyles";

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
        <Modal isOpen={show} onRequestClose={() => setShow(false)} style={modalStyle}>
            <ModalMessage>Tem certeza que deseja</ModalMessage>
            <ModalMessage>sair?</ModalMessage>
            <ButtonsContainer>
                <Button onClick={() => logout()}>Sim</Button>
                <Button onClick={() => setShow(false)}>Não</Button>
            </ButtonsContainer>
        </Modal>
    )   
}

const ModalMessage = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 40px;
    font-weight: 800;
`
const ButtonsContainer = styled.div`
    display: flex;
`

const modalStyle: Modal.Styles = {
    overlay: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 3,
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',

    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: 497,
        height: 200,
        color: colors.clearColor,
        backgroundColor: colors.secondary,
        border: `2px solid ${colors.secondary}`,
        borderRadius: '25px',
        position: 'absolute',
        top: '25%',
        left: '34.5%',
        padding: '78px 38px 28px 38px',
        overflow: 'hidden',
    }
}