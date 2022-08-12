import { useState } from "react";
import Select from "react-select"
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";

import Header from "../components/Header";
import Loading from "../components/Loading";
import { Form, Input, Label, RegisterBody, Title } from "../components/SaredStyles";
import { erroMessage, sucessMessage } from "../utils/toasts";
import api, { AddressBody } from "../api/ApiConections";

const Ufs = [
    { value: 'AC', label: 'AC' },
    { value: 'AL', label: 'AL' },
    { value: 'AP', label: 'AP' },
    { value: 'AM', label: 'AM' },
    { value: 'BA', label: 'BA' },
    { value: 'CE', label: 'CE' },
    { value: 'DF', label: 'DF' },
    { value: 'ES', label: 'ES' },
    { value: 'GO', label: 'GO' },
    { value: 'MA', label: 'MA' },
    { value: 'MS', label: 'MS' },
    { value: 'MT', label: 'MT' },
    { value: 'MG', label: 'MG' },
    { value: 'PA', label: 'PA' },
    { value: 'PB', label: 'PB' },
    { value: 'PR', label: 'PR' },
    { value: 'PE', label: 'PE' },
    { value: 'PI', label: 'PI' },
    { value: 'RJ', label: 'RJ' },
    { value: 'RN', label: 'RN' },
    { value: 'RS', label: 'RS' },
    { value: 'RO', label: 'RO' },
    { value: 'RR', label: 'RR' },
    { value: 'SC', label: 'SC' },
    { value: 'SP', label: 'SP' },
    { value: 'SE', label: 'SE' },
    { value: 'TO', label: 'TO' }
]

export default function RegisterAddress(){
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const initialData:AddressBody = {
        number:'',
        street:'',
        district:'',
        city:'',
        uf:''
    }
    const [formData, setFormData] = useState(initialData)

    function handleChange({ target }:any) {
        setFormData({ ...formData, [target.name]: target.value })
    }
    
    async function handleSubmit(e:any){
        e.preventDefault()
        setLoading(true)
        const newAddress = {...formData}
        
        const promise = api.newAddress(newAddress)
        promise.then(response =>{
            sucessMessage(response.data)
            navigate("/home")
        })
        .catch(error => {
            setLoading(false)
            erroMessage(error.response.data.error)
        })
    }

    return(
        <>
            <Header/>
            <RegisterBody>
            <ToastContainer/>
            {!loading ? 
                <>
                   <Title>Cadastro de endereço</Title>
                    <Form onSubmit={handleSubmit}>
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
                                <Confirm>Salvar</Confirm>
                                <Cancel onClick={()=> navigate('/home')}>Cancelar</Cancel>
                            </ButtonsContainer>
                    </Form> 
                </> : <Loading/>}   
            </RegisterBody>
        </>
    )
}
const ButtonsContainer = styled.div`
    display: flex;
    margin-top: 30px;
    @media (max-width:399px){
          width: 80%;
      }
`
const Confirm = styled.button`
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
const Cancel = styled.button`
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