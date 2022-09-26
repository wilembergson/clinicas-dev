import styled from "styled-components"
import Modal from "react-modal"
import { colors } from "../utils/Colors"

export const Title = styled.h2`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 60px;
    font-size: 40px;
    color: ${colors.clearColor};
    font-family: 'Oxygen', sans-serif;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  margin-top: 20px;
  margin-bottom: 30px;
  @media (max-width:399px){
        align-items: center;
    }
`

export const Label = styled.label`
  font-family: 'Oxygen', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 15px;
  color: ${colors.clearColor};
  margin-top: 8px;
  margin-left: 5px;
  @media (max-width:399px){
        width: 100%;
        margin-left: 0;
    }
`

export const FieldLabel = styled.label`
  font-family: 'Oxygen', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 15px;
  color: ${colors.secondary};
  margin-top: 8px;
  margin-left: 5px;
  @media (max-width:399px){
        width: 80%;
    }
`

export const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  font-family: 'Lexend Deca', sans-serif;
  width: 100%;
  color: #FFF;
  background: rgba(255, 255, 255, 0.05);
  padding: 15px;
  margin: 5px;
  border: 1px solid #FFF;
  border-radius: 7px;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  transition: 0.7s ease;
  ::placeholder {
    color: #FFF;
    font-family: 'Lexend Deca', sans-serif;
  }
  :hover{
        box-shadow: 0px 2px 12px  ${colors.primary};
        transition: 0.7s ease;
    }
  @media (max-width:399px){
        width: 80%;
        margin:0;
    }
`

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  width: 60%;
  height: 50px;
  margin-top: 60px;
  margin-bottom: 40px;
  margin-right: 10px;
  font-family: 'Oxygen', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 15px;
  color: #FFFFFF;
  text-align: center;
  padding: 10px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.4px);
  -webkit-backdrop-filter: blur(8.4px);
  border: 1px solid rgba(255, 255, 255, 0.26);
  transition: 0.7s ease;
  :hover{
        background: rgba(255, 255, 255, 0.2);
        transition: 0.7s ease;
    }
    @media (max-width:430px){
        font-size: 20px;
    }
`

export const RegisterBody = styled.section`
    display: flex;
    width: 550px;
    justify-content: center;
    flex-direction: column;
    padding: 0 30px 0 20px;
    margin-top: 100px;
    margin-bottom: 50px;
    border-radius: 10px;
    background: ${colors.secondary};
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
    @media (max-width:490px){
        width: 88%;
        margin-top: 83px;
        align-items: center;
        border-radius: 0;
    }
`
export const ButtonsContainer = styled.div`
    display: flex;
    margin-top: 30px;
    @media (max-width:399px){
          width: 80%;
      }
`
export const Confirm = styled.button`
    box-sizing: border-box;
    cursor: pointer;
    width: 100%;
    margin-top: 20px;
    margin-left: 5px;
    font-family: 'Oxygen', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 15px;
    color: #FFFFFF;
    background: #539e4c;
    text-align: center;
    padding: 10px;
    border: none;
    border-radius: 8px;
    width: 100%;
    height: 50px;
    transition: 0.7s ease;
    :hover{
          background:#68b861;
          transition: 0.7s ease;
      }
      @media (max-width:399px){
          width: 100%;
      }
`
export const Cancel = styled.button`
    box-sizing: border-box;
    cursor: pointer;
    width: 100%;
    margin-top: 20px;
    margin-left: 5px;
    font-family: 'Oxygen', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 15px;
    color: #FFFFFF;
    background: #f7433d;
    text-align: center;
    padding: 10px;
    border: none;
    border-radius: 8px;
    width: 100%;
    height: 50px;
    transition: 0.7s ease;
    :hover{
          background:#e05d59;
          transition: 0.7s ease;
      }
      @media (max-width:399px){
          width: 100%;
      }
`
export const NoConsults = styled.label`
    font-family: 'Oxygen', sans-serif;
    font-weight: 800;
    font-size: 32px;
    margin: 85px;
    color: #c7c5c5;
`
export const ModalMessage = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 40px;
    font-weight: 800;
    @media (max-width:430px) {
        font-size: 25px;
    }
`