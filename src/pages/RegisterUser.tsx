import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import api from "../api/ApiConections"
import Header from "../components/Header"
import Loading from "../components/Loading"
import { Button, Form, Input, Label, RegisterBody, Title } from "../components/SaredStyles"
import { erroMessage, sucessMessage } from "../utils/toasts"
import { ButtonsContainer } from "./RegisterAddress"

export type userBody = {
    cpf: string,
    name: string,
    birthdate: string,
    phone: string,
    email: string,
    password: string,
}

export default function Register() {
    const navigation = useNavigate()
    const [loading, setLoading] = useState(false)

    const initialData: userBody = {
        cpf: '',
        name: '',
        birthdate: '',
        phone: '',
        email: '',
        password: '',
        // repeatPassword:''
    }
    const [formData, setFormData] = useState(initialData)

    function handleChange({ target }: any) {
        setFormData({ ...formData, [target.name]: target.value })
    }

    function normalizeCPFnumber(value: string) {
        if (value.length === 15 || !(/^([0-9.-]{1})$/).test(value[value.length - 1])) return
        if ((value.length === 3 || value.length === 7) && value.length > formData.cpf.length) {
            setFormData({ ...formData, cpf: `${value}.` })
        }
        else if ((value.length === 4 || value.length === 8) && value.length > formData.cpf.length) {
            const newValue = `${formData.cpf}.${value[value.length - 1]}`
            setFormData({ ...formData, cpf: newValue })
        }
        else if ((value.length === 3 || value.length === 7) && value.length < formData.cpf.length) {
            setFormData({ ...formData, cpf: value })
        }
        else if (value.length === 11 && value.length > formData.cpf.length) {
            setFormData({ ...formData, cpf: `${value}-` })
        }
        else if (value.length === 12 && value.length > formData.cpf.length) {
            const newValue = `${formData.cpf}-${value[value.length - 1]}`
            setFormData({ ...formData, cpf: newValue })
        }
        else if (value.length === 11 && value.length < formData.cpf.length) {
            setFormData({ ...formData, cpf: value })
        }
        else {
            setFormData({ ...formData, cpf: value })
        }
    }
    function handleKeyDown(event: any) {
        if (event.key === 'Backspace' && formData.cpf.length === 1) {
            setFormData({ ...formData, cpf: '' })
        }
    }

    async function handleSubmit(e: any) {
        e.preventDefault()
        setLoading(true)
        const user = { ...formData }
        try {
            const { data } = await api.createUser(user)
            sucessMessage(data.message)
            setTimeout(() => navigation('/'), 3000)
        } catch (error: any) {
            setLoading(false)
            const errorMessage: string = error.response.data.error
            erroMessage(errorMessage)
        }
    }

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigation("/home")
        }
    })

    return (
        <>
            <Header />
            <ToastContainer />
            {(loading === false) ?
                <RegisterBody>
                    <Title>Cadastre-se</Title>
                    <Form onSubmit={handleSubmit}>
                        <Label>CPF</Label>
                        <Input
                            placeholder="Ex: 999.999.999-99"
                            type="text"
                            onKeyDown={handleKeyDown}
                            onChange={(e) => normalizeCPFnumber(e.target.value)}
                            name="cpf"
                            value={formData.cpf}
                            required
                        />
                        <Label>NOME</Label>
                        <Input
                            placeholder="Nome completo"
                            type="nome"
                            onChange={(e) => handleChange(e)}
                            name="name"
                            value={formData.name}
                            required
                        />
                        <Label>DATA DE NACIMENTO</Label>
                        <Input
                            type="date"
                            onChange={(e) => handleChange(e)}
                            name="birthdate"
                            value={formData.birthdate}
                            required
                        />
                        <Label>TELEFONE</Label>
                        <Input
                            placeholder="Ex: 77988885555"
                            type="number"
                            onChange={(e) => handleChange(e)}
                            name="phone"
                            value={formData.phone}
                            required
                        />
                        <Label>EMAIL</Label>
                        <Input
                            placeholder="Email"
                            type="email"
                            onChange={(e) => handleChange(e)}
                            name="email"
                            value={formData.email}
                            required
                        />
                        <Label>SENHA</Label>
                        <Input
                            placeholder="No mínimo 8 dígitos"
                            type="password"
                            onChange={(e) => handleChange(e)}
                            name="password"
                            value={formData.password}
                            required
                        />
                        <ButtonsContainer>
                            <Button>Cadastrar</Button>
                        </ButtonsContainer>
                    </Form>
                </RegisterBody> : <Loading />
            }
        </>
    )
}

