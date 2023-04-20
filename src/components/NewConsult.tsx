import styled from "styled-components"
import Select from "react-select"

import { ButtonsContainer, Cancel, Confirm, FieldLabel, Form } from "./SaredStyles"
import { useContext, useEffect, useState } from "react"
import UserContext from "../contexts/UserContext"
import { erroMessage, sucessMessage } from "../utils/toasts"
import api from "../api/ApiConections"
import { ToastContainer } from "react-toastify"
import { titles } from "./OptionsContainer"

type SpecialtyItem = {
    id: number
    name: string
    days: string[]
}

type SelectItem = {
    value: string
    label: string
    days: string[]
}

export default function NewConsult() {
    const { setPrincipalContentTitle } = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const [specialtyList, setSpecialtylList] = useState<SelectItem[]>([])
    const [specialty, setSpecialty] = useState<string | undefined>('')
    const [date, setDate] = useState('')
    const [days, setDays] = useState<string | undefined>('')

    function toMountSpetialtiesList(list: SpecialtyItem[]) {
        const mountList: any = []
        list.forEach(item => mountList.push({ value: item.name, label: item.name, days: item.days }))
        setSpecialtylList(mountList)
    }

    async function handleSubmit(e: any) {
        e.preventDefault()
        setLoading(true)
        const promise = api.newConsult({ specialty, date })
        promise.then(response => {
            sucessMessage(response.data.message)
            setTimeout(() => {
                setPrincipalContentTitle(titles.nextConsult)
            }, 3000)

        })
            .catch(error => {
                setLoading(false)
                erroMessage(error.response.data.error)
            })
    }

    useEffect(() => {
        const promise = api.listSpecialties()
        promise.then(response => {
            toMountSpetialtiesList(response.data)
        }).catch(error => { console.log(error) })
    }, [specialty])

    function getDays(array: string[] | undefined){
        if(array) return array.join(', ')
    }

    return (
        <ConsultBody>
            <ToastContainer />
            <Form onSubmit={handleSubmit}>
                <FieldLabel>ESPECIALIDADE</FieldLabel>
                <Select
                    isDisabled={loading}
                    options={specialtyList}
                    onChange={(e) => {
                        const value = e?.value
                        const days = getDays(e?.days)
                        if (value) {
                            setSpecialty(value)
                            setDays(days)
                        }
                    }
                    }
                />
                <FieldLabel>DATA</FieldLabel>
                <DateInput
                    disabled={loading}
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    name="Date"
                    required
                />
                <LabelDays>Dias disponívéis: {days}</LabelDays>
                <ButtonsContainer>
                    <Confirm type="submit" disabled={loading}>Salvar</Confirm>
                    <Cancel type="button" disabled={loading} onClick={() => setPrincipalContentTitle(titles.nextConsult)}>Cancelar</Cancel>
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

export const LabelDays = styled.label`
    font-family: 'Oxygen', sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    color: grey;
    margin-top: 8px;
    margin-left: 5px;
    @media (max-width:399px){
        margin-left: 30px;
        width: 80%;
      }
`
const DateInput = styled.input`
  all: unset;
  box-sizing: border-box;
  font-family: 'Lexend Deca', sans-serif;
  width: 100%;
  color: grey;
  padding: 15px;
  margin: 5px;
  border: 1px solid grey;
  border-radius: 7px;
  transition: 0.7s ease;
  ::placeholder {
    color: gray;
    font-family: 'Lexend Deca', sans-serif;
  }
  :hover{
        transition: 0.7s ease;
    }
  @media (max-width:399px){
        width: 80%;
    }
`