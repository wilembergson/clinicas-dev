import { useState } from "react"
import DatePicker from "react-modern-calendar-datepicker"
import styled from "styled-components"

import { Button, Form, Input } from "../components/SaredStyles"

export type userBody = {
    cpf:string,
    name:string,
    birthDate:string,
    phone:string,
    email:string,
    password:string,
    repeatPassword:string
}

export default function Register(){
    const initalData:userBody = {
        cpf:'',
        name:'',
        birthDate:'',
        phone:'',
        email:'',
        password:'',
        repeatPassword:''
    }
    const [formData, setFormData] = useState(initalData)

    function handleChange({ target }:any) {
        setFormData({ ...formData, [target.name]: target.value })
    }

    function normalizeCPFnumber(value:string){
        if(value.length===15 || !(/^([0-9.-]{1})$/).test(value[value.length-1])) return
        if((value.length === 3 || value.length === 7) && value.length>formData.cpf.length){
            setFormData({ ...formData, cpf: `${value}.` })
        }
        else if((value.length === 4 || value.length === 8) && value.length>formData.cpf.length){
            const newValue = `${formData.cpf}.${value[value.length-1]}`
            setFormData({ ...formData, cpf: newValue })
        }
        else if((value.length === 3 || value.length === 7) && value.length<formData.cpf.length){    
            setFormData({...formData, cpf:value})
        }
        else if(value.length === 11 && value.length > formData.cpf.length){
            setFormData({ ...formData, cpf: `${value}-` })
        }
        else if(value.length===12 && value.length>formData.cpf.length ){
            const newValue = `${formData.cpf}-${value[value.length-1]}`
            setFormData({ ...formData, cpf: newValue })
        }
        else if(value.length === 11 && value.length < formData.cpf.length){
            setFormData({ ...formData, cpf: value })
        }
        else{
            setFormData({ ...formData, cpf: value })
        }   
    }
    function handleKeyDown(event:any){
        if (event.key === 'Backspace' && formData.cpf.length===1) {
            setFormData({ ...formData, cpf: '' })
          console.log('Backspace key pressed OK');
        }
    }
    return(
        <RegisterBody>
            <div>Cadastro de Usuário - {formData.cpf}</div>
            <Form>
                <Input
                    placeholder="CPF"
                    type="text"
                    onKeyDown={handleKeyDown}
                    onChange={(e) => normalizeCPFnumber(e.target.value)}
                    name="cpf"
                    value={formData.cpf}
                    required
                />
                <Input
                    placeholder="Nome"
                    type="nome"
                    onChange={(e) => handleChange(e)}
                    name="name"
                    value={formData.name}
                    required
                />
                <Input
                    placeholder="DD/MMM/YYYY"
                    type="date"
                    onChange={(e) => handleChange(e)}
                    name="birthDate"
                    value={formData.birthDate}
                    required
                />
                <Input
                    placeholder="Telefone"
                    type="number"
                    onChange={(e) => handleChange(e)}
                    name="phone"
                    value={formData.phone}
                    required
                />
                <Input
                    placeholder="Email"
                    type="email"
                    onChange={(e) => handleChange(e)}
                    name="email"
                    value={formData.email}
                    required
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    onChange={(e) => handleChange(e)}
                    name="password"
                    value={formData.password}
                    required
                />
                <Input
                    placeholder="Repita a senha"
                    type="password"
                    onChange={(e) => handleChange(e)}
                    name="repeatPassword"
                    value={formData.repeatPassword}
                    required
                />
                <Button>Cadastrar</Button>
            </Form>

        </RegisterBody>
    )
}

const RegisterBody = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
`