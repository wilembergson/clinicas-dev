import styled from "styled-components"
import Select from "react-select"

import { ButtonsContainer, Cancel, Confirm, Form, Input, Label } from "./SaredStyles"
import { useContext, useEffect, useState } from "react"
import api from "../api/ApiConections"
import UserContext from "../contexts/UserContext"

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
    const [specialtyList, setSpecialtylList] = useState<SelectItem[]>([])
    const [specialty, setSpecialty] = useState<string | undefined>('')
    const [date, setDate] = useState('')

    function toMountSpetialtiesList(list:SpecialtyItem[]){
        const mountList:any = []
        list.forEach(item => mountList.push({ value: item.name, label: item.name }))
        setSpecialtylList(mountList)
    }

    useEffect(() => {
        const promise =  api.listSpecialties()
        promise.then(response => toMountSpetialtiesList(response.data))
    },[])

    return(
        <ConsultBody>
            <Form>
                <Label>ESPECIALIDADE</Label>
                <Select
                    options={specialtyList}
                    onChange={(e)=> {
                        const value = e?.value
                        if(value) setSpecialty(value)
                        }
                    }
                />
                <Label>DATA</Label>
                <Input
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    name="Date"
                    required
                />
                <ButtonsContainer>
                    <Confirm type="submit">Salvar</Confirm>
                    <Cancel type="button" onClick={()=> setPrincipalContentTitle('início')}>Cancelar</Cancel>
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