import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import styled from "styled-components"
import api from "../api/ApiConections"
import { Button, Form, Input, Label, Title } from "../components/SaredStyles"
import UserContext from "../contexts/UserContext"
import { erroMessage } from "../utils/toasts"

export type LoginBody = {
    email:string,
    password:string
}

export default function Login(){
    const {setToken} = useContext(UserContext)
    const navigate = useNavigate()
    const initialData:LoginBody = {
        email:'',
        password:''
    }
    const [formData, setFormData] = useState(initialData)

    function handleChange({ target }:any) {
        setFormData({ ...formData, [target.name]: target.value })
    }

    async function handleSubmit(e:any){
        e.preventDefault()
        const login = {...formData}
        try{
            const {data} = await api.login(login)
            setToken(data)
            localStorage.setItem("token", data.token)
            navigate("/home")
        }catch(error:any){
            const errorMessage:string = error.response.data.error
            erroMessage(error.response.data.error)
        }
    }
    return(
        <LoginBody>
            <ToastContainer/>
            <Title>Login</Title>
            <Form onSubmit={handleSubmit}>
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
                    <Button>Entrar</Button>
            </Form>
        </LoginBody>
    )
}

const LoginBody = styled.section`
    display: flex;
    width: 400px;
    justify-content: center;
    flex-direction: column;
    position: relative;
`