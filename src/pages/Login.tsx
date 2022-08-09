import { useState } from "react"
import styled from "styled-components"
import { Button, Form, Input, Label, Title } from "../components/SaredStyles"

type LoginBody = {
    email:string,
    password:string
}

export default function Login(){
    const initialData:LoginBody = {
        email:'',
        password:''
    }
    const [formData, setFormData] = useState(initialData)
    function handleChange({ target }:any) {
        setFormData({ ...formData, [target.name]: target.value })
    }
    return(
        <LoginBody>
            <Title>Login</Title>
            <Form>
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