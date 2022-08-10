import styled from "styled-components"
import { colors } from "../utils/Colors"

export default function OptionsContainer(){
    return(
        <Options>
            <ItemRegister>Cadastrar endereço</ItemRegister>
        </Options>
    )
}

const Options = styled.div`
    display: flex;
    box-shadow: 0px 4px 24px rgba(25, 26, 25, 0.12);
    margin-top: 20px;
    border-radius: 10px;
    overflow: hidden;
    width: auto;
    @media (max-width:399px){
        width: auto;
    }
`
const ItemRegister = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 190px;
    height: 110px;
    cursor: pointer;
    color: ${colors.primary};
    padding: 0 12px;
    background: #FFF;

    font-size: 20px;
    font-weight: 800;

    transition: 0.7s ease;
    :hover{
        color: #fff;
        background: rgb(143, 174, 189);
        transition: 0.7s ease;
    }
    @media (max-width:399px){
        font-size: medium;
        height: 90px;
    }
`