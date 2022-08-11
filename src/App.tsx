import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import styled from "styled-components"
import UserContext from "./contexts/UserContext"
import Home from "./pages/Home"
import Login from "./pages/Login"
import RegisterAddress from "./pages/RegisterAddress"
import Register from "./pages/RegisterUser"

export default function App() {
    const [userName, setUserName] = useState('')
    
    return (
      <UserContext.Provider value={{userName, setUserName}}>
        <AppBody>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/address/register" element={<RegisterAddress/>}/>
                </Routes>
            </BrowserRouter>
        </AppBody>
      </UserContext.Provider>
    )
}

const AppBody = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
`