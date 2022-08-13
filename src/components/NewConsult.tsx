import styled from "styled-components"
import Select from "react-select"

import { ButtonsContainer, Cancel, Confirm, Form, Input, Label } from "./SaredStyles"
import { useContext, useEffect, useState } from "react"
import UserContext from "../contexts/UserContext"
import { erroMessage, sucessMessage } from "../utils/toasts"
import api from "../api/ApiConections"
import { ToastContainer } from "react-toastify"
import Loading from "./Loading"

type SpecialtyItem = {
    id:number,
    name:string   
}

type SelectItem = {
    value:string
    label:string   
}

export default function NewConsult(){
    const { setPrincipalContentTitle } = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const [specialtyList, setSpecialtylList] = useState<SelectItem[]>([])
    const [specialtyName, setSpecialtyName] = useState<string | undefined>('')
    const [date, setDate] = useState('')

    function toMountSpetialtiesList(list:SpecialtyItem[]){
        const mountList:any = []
        list.forEach(item => mountList.push({ value: item.name, label: item.name }))
        setSpecialtylList(mountList)
    }

    async function handleSubmit(e:any){
        e.preventDefault()
        setLoading(true)
        const promise = api.newConsult({specialtyName, date})
        promise.then(response => {
            sucessMessage(response.data.message)
            setTimeout(()=> {
                setPrincipalContentTitle('início')
            }, 3000)
            
        })
        .catch(error => {
            setLoading(false)
            erroMessage(error.response.data.error)
        })
    }

    useEffect(() => {
        const promise =  api.listSpecialties()
        promise.then(response => toMountSpetialtiesList(response.data))
    },[])

    return(
        <ConsultBody>
            <ToastContainer/>
            <Form onSubmit={handleSubmit}>
                <Label>ESPECIALIDADE</Label>
                <Select
                    isDisabled={loading}
                    options={specialtyList}
                    onChange={(e)=> {
                        const value = e?.value
                        if(value) setSpecialtyName(value)
                        }
                    }
                />
                <Label>DATA</Label>
                <Input
                    disabled={loading}
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    name="Date"
                    required
                />
                <ButtonsContainer>
                    <Confirm type="submit" disabled={loading}>Salvar</Confirm>
                    <Cancel type="button" disabled={loading} onClick={()=> setPrincipalContentTitle('início')}>Cancelar</Cancel>
                </ButtonsContainer>
            </Form>
        </ConsultBody>
    )
}

const ConsultBody = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 90%;
`