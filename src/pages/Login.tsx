import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import styled from "styled-components"
import api from "../api/ApiConections"
import Header from "../components/Header"
import Loading from "../components/Loading"
import { Button, Form, Input, Label, Title } from "../components/SaredStyles"
import { erroMessage } from "../utils/toasts"

export type LoginBody = {
    email:string,
    password:string
}

export default function Login(){
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
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
        setLoading(true)
        const login = {...formData}
        try{
            const {data} = await api.login(login)
            localStorage.setItem("token", data.token)
            navigate("/home")
            window.location.reload()
        }catch(error:any){
            setLoading(false)
            erroMessage(error.response.data.error)
        }
    }

    useEffect(()=>{
        if(localStorage.getItem("token")){
            navigate("/home")
        }
    },[])

    return(
        <>
            <Header/>
            <LoginForm>
            <ToastContainer/>
            {!loading ? 
                <>
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
                </> : <Loading/>}   
            </LoginForm>
        </>
    )
}

const LoginForm = styled.section`
    display: flex;
    width: 400px;
    justify-content: center;
    flex-direction: column;
    position: relative;
    @media (max-width:399px){
        align-items: center;
    }
`