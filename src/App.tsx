import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import styled from "styled-components"
import UserContext from "./contexts/UserContext"
import Register from "./pages/RegisterUser"

export default function App() {
    const [token, setToken] = useState('')
    
    return (
      <UserContext.Provider value={token}>
        <AppBody>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Register/>}/>
                </Routes>
            </BrowserRouter>
        </AppBody>
      </UserContext.Provider>
    )
}

const AppBody = styled.main`
    display: flex;
    justify-content: center;
`