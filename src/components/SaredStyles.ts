import styled from "styled-components";
import InputMa from "react-input-mask"

export const Form = styled.form`
  width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 30px;
`

export const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  font-family: 'Lexend Deca', sans-serif;
  width: 100%;
  color: #000;
  background: #FFFFFF;
  padding: 20px;
  border: 1px solid rgba(120, 177, 89, 0.25);
  border-radius: 12px;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);

  ::placeholder {
    color: #9C9C9C;
    font-family: 'Lexend Deca', sans-serif;
  }
`

export const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  width: 100%;
  margin-top: 30px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 15px;

  color: #FFFFFF;
  text-align: center;
  padding: 10px;
  background: #135713;
  border-radius: 12px;
  width: 207px;
  height: 60px;

`