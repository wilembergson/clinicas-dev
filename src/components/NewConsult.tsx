import styled from "styled-components"
import Select from "react-select"

import { ButtonsContainer, Cancel, Confirm, Form, Input, Label } from "./SaredStyles"
import { useContext, useEffect, useState } from "react"
import UserContext from "../contexts/UserContext"
import { erroMessage, sucessMessage } from "../utils/toasts"
import api from "../api/ApiConections"
import { ToastContainer } from "react-toastify"
import { titles } from "./OptionsContainer"

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
    const [ days, setDays] = useState([])

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
                setPrincipalContentTitle(titles.nextConsult)
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
        const promise2 =  api.getAvailableDays(specialtyName)
        promise2.then(response => setDays(response.data))
        .catch(error => {console.log(error)})
    },[specialtyName])

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
                <LabelDays>Dias disponívéis: {days.join(', ')}</LabelDays>
                <ButtonsContainer>
                    <Confirm type="submit" disabled={loading}>Salvar</Confirm>
                    <Cancel type="button" disabled={loading} onClick={()=> setPrincipalContentTitle(titles.nextConsult)}>Cancelar</Cancel>
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

const LabelDays = styled.label`
    font-family: 'Oxygen', sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    color: grey;
    margin-top: 8px;
    margin-left: 5px;
    @media (max-width:399px){
          width: 80%;
      }
`