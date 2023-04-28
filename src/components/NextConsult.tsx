import { useEffect, useState } from "react"
import styled from "styled-components"
import api from "../api/ApiConections"
import { colors } from "../utils/Colors"
import { LabelDays } from "./NewConsult"
import { NoConsults } from "./SaredStyles"

export default function NextConsult() {
    const [specialty, setSpecialty] = useState('')
    const [date, setDate] = useState('')

    useEffect(() => {
        const promise = api.nextConsult()
        promise.then(response => {
            if (response.data.date !== undefined) {
                const dateParts = response.data.date.split('-');
                setDate(`${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`)
                setSpecialty(response.data.specialty.name)
            }
        })
    }, [])
    return (
        <ConsultBody>
            {date !== '' ?
                <>
                    <Label>{specialty}</Label>
                    <Label>{date}</Label>
                    <LabelDays>Em caso de cancelamento, basta não comparecer no dia da consulta.</LabelDays>
                </>
                :
                <NoConsults>Não há consultas marcadas</NoConsults>
            }
        </ConsultBody>
    )
}

const ConsultBody = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 15px;
`

const Label = styled.label`
    font-family: 'Oxygen', sans-serif;
    font-weight: 800;
    font-size: 42px;
    margin: 15px;
    color: ${colors.secondary};
    @media (max-width: 430px){
        font-size: 32px;
    }
`
