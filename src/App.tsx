import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import styled from "styled-components"
import UserContext from "./contexts/UserContext"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/RegisterUser"

export default function App() {
    const [token, setToken] = useState('')
    
    return (
      <UserContext.Provider value={token}>
        <AppBody>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/home" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </AppBody>
      </UserContext.Provider>
    )
}

const AppBody = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Header = styled.header`
    width: 100%;
    height: 80px;
    background: linear-gradient(90deg, #6470df 35%, rgba(149,180,186,1) 100%);
`