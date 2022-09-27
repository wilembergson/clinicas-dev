import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import styled from "styled-components"
import { titles } from "./components/OptionsContainer"
import UserContext from "./contexts/UserContext"
import Home from "./pages/Home"
import Login from "./pages/Login"
import RegisterAddress from "./pages/RegisterAddress"
import Register from "./pages/RegisterUser"
import InitialPage from "./pages/InitialPage"
import Footer from "./components/Footer"

export default function App(){
    const [userName, setUserName] = useState('')
    const [principalContentTitle, setPrincipalContentTitle] = useState(titles.nextConsult)
    const contextValues = {userName, setUserName, principalContentTitle, setPrincipalContentTitle}
    
    return (
      <UserContext.Provider value={contextValues}>
        <AppAll>
            <AppBody>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<InitialPage/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/address/register" element={<RegisterAddress/>}/>
                    </Routes>
                </BrowserRouter>
            </AppBody>
            <Footer/>
        </AppAll>
      </UserContext.Provider>
    )
}
const AppAll = styled.main`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;    
    display: flex;
    justify-content: space-between;

    flex-direction: column;
`
const AppBody = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    
`