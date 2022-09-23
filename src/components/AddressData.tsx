import styled from "styled-components";
import { colors } from "../utils/Colors";
import { FaEdit } from "react-icons/fa"
import { useState } from "react";
import { Address, ButtonsContainer, Cancel, Ufs } from "../pages/RegisterAddress";
import Select from "react-select";
import api from "../api/ApiConections";

export default function AddressData(props:any){
    const { id, number, street, district, city, uf } = props.address
    const [edit, setEdit] = useState(false)
    const initialData:Address = {
        number,
        street,
        district,
        city,
        uf
    }
    const [formData, setFormData] = useState(initialData)

    function handleChange({ target }:any) {
        setFormData({ ...formData, [target.name]: target.value })
    }

    function updateAddress(){
        const promise = api.updateAddress(
            {
                id,
                street: formData.street,
                number: formData.number.toString(),
                district: formData.district,
                city: formData.city,
                uf: formData.uf
            }
        )
        promise.then(response => {
            alert(response.data.message)
        })
        .catch(error => alert(error.response.data.error))
    }
    return(
        <AddressBody>
            <AddressTitle>Endereço</AddressTitle>
            {edit ? 
                    <Form>
                        <Label>Número</Label>
                            <Input
                                placeholder="Número da sua residência"
                                type="number"
                                onChange={(e) => handleChange(e)}
                                name="number"
                                value={formData.number}
                                required
                            />
                            <Label>Rua</Label>
                            <Input
                                placeholder="Nome da rua ou avenida"
                                type="text"
                                onChange={(e) => handleChange(e)}
                                name="street"
                                value={formData.street}
                                required
                            />
                            <Label>Bairro</Label>
                            <Input
                                placeholder="Nome do seu bairro"
                                type="text"
                                onChange={(e) => handleChange(e)}
                                name="district"
                                value={formData.district}
                                required
                            />
                            <Label>CIDADE</Label>
                            <Input
                                placeholder="Nome da cidade"
                                type="select"
                                onChange={(e) => handleChange(e)}
                                name="city"
                                value={formData.city}
                                required
                            />
                            <Label>UF</Label>
                            <Select 
                                options={Ufs}
                                onChange={(e)=> {
                                    const value = e?.value
                                    if(value) setFormData({...formData, uf:value})
                                }}
                            />
                            <ButtonsContainer>
                                <Update onClick={() => updateAddress()}>Atualizar</Update>
                                <Cancel onClick={()=> setEdit(false)}>Cancelar</Cancel>
                            </ButtonsContainer>
                    </Form>
                :
                    <AddressInfo>
                        <DivBorder>
                            <Label>{street}, {number}, {district}, {city}-{uf}</Label>
                        </DivBorder>
                        <Button onClick={() => setEdit(true)}><FaEdit/>Editar</Button>
                    </AddressInfo>
            }
            
        </AddressBody>
    )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px 20px;
  @media (max-width:399px){
        align-items: center;
    }
`
const Input = styled.input`
  box-sizing: border-box;
  font-family: 'Lexend Deca', sans-serif;
  color: ${colors.primary};
  background: rgba(255, 255, 255, 0.05);
  padding: 15px;
  border: 1px solid ${colors.secondary};
  border-radius: 7px;
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
    }
`
const AddressInfo = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
`
const AddressTitle = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 40px;
    font-weight: 800;
    padding: 20px 0;
    color: ${colors.clearColor};
    background: ${colors.secondary};
    font-family: 'Oxygen', sans-serif;
`
const AddressBody = styled.section`
    display: flex;
    justify-content: center;
    width: 550px;
    justify-content: center;
    flex-direction: column;
    margin-top: 100px;
    margin-bottom: 50px;
    border-radius: 10px;
    background: ${colors.clearColor};
    overflow: hidden;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
    @media (max-width:490px){
        width: 90%;
        align-items: center;
    }
`
const DivBorder = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFF;
    border: 1px solid ${colors.secondary};
    border-radius: 15px;
    margin: 35px 25px 0px 29px;
    padding: 80px 39px;
`
const Label = styled.label`
  font-family: 'Oxygen', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  font-weight: 600;
  line-height: 55px;
  color: ${colors.secondary};
  margin-top: 8px;
  margin-left: 5px;
  @media (max-width:399px){
        width: 80%;
    }
`
const Update = styled.button`
    box-sizing: border-box;
    cursor: pointer;
    margin-top: 20px;
    margin-left: 5px;
    font-family: 'Oxygen', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 15px;
    color: #FFFFFF;
    background: #134f77;
    text-align: center;
    padding: 10px;
    border: none;
    border-radius: 8px;
    width: 100%;
    height: 50px;
    transition: 0.7s ease;
    :hover{
          background:#2471a5;
          transition: 0.7s ease;
      }
      @media (max-width:399px){
          width: 100%;
      }
`
const Button = styled.button`
width: 50%;
  box-sizing: border-box;
  cursor: pointer;
  margin-top: 60px;
  margin-bottom: 40px;
  font-family: 'Oxygen', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 15px;
  color: #FFFFFF;
  text-align: center;
  padding: 10px;
  background: ${colors.secondary};
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.4px);
  -webkit-backdrop-filter: blur(8.4px);
  border: 1px solid rgba(255, 255, 255, 0.26);

  height: 60px;
  transition: 0.7s ease;
  :hover{
        background: rgb(197, 61, 106);
        transition: 0.7s ease;
    }
    @media (max-width:399px){
        width: 80%;
    }
`