import styled from "styled-components";

export const Title = styled.h2`
    margin-top: 60px;
    font-size: 30px;
    color: #6470df;
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
`

export const Label = styled.label`
  font-family: 'Oxygen', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 15px;
  color: #6470df;
  margin-top: 8px;
  margin-left: 5px;
`

export const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  font-family: 'Lexend Deca', sans-serif;
  width: 100%;
  color: #000;
  background: #FFFFFF;
  padding: 15px;
  margin: 5px;
  border: 1px solid rgba(120, 177, 89, 0.25);
  border-radius: 7px;
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
  margin-top: 40px;
  margin-left: 10px;
  font-family: 'Oxygen', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 15px;

  color: #FFFFFF;
  text-align: center;
  padding: 10px;
  background: #6470df;
  border-radius: 8px;
  width: 100%;
  height: 60px;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
`