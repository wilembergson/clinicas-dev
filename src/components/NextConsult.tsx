import { useEffect, useState } from "react"
import styled from "styled-components"
import api from "../api/ApiConections"
import { colors } from "../utils/Colors"
import { LabelDays } from "./NewConsult"
import { NoConsults } from "./SaredStyles"
import { sucessMessage } from "../utils/toasts"
import { ToastContainer } from "react-toastify"
import moment from "moment-timezone"

export default function NextConsult() {
    const [consultId, setConsultId] = useState('')
    const [specialty, setSpecialty] = useState('')
    const [date, setDate] = useState('')
    const [consultToday, setConsultToday] = useState(false)

    async function cancelConsult() {
        api.cancelConsult(consultId).then(response => {
            sucessMessage(response.data.message)
            setConsultId('')
        })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        const now = moment().tz('America/Sao_Paulo')
        const today = now.toDate()
        const dataIsoString = today.toISOString();
        const hoje = dataIsoString.substr(0, 10);
        const promise = api.nextConsult()
        promise.then(response => {
            if (response.data.date !== undefined) {
                console.log(response.data.date)
                console.log(hoje)
                if (response.data.date === hoje) {
                    setConsultToday(true)
                } else {
                    setConsultToday(false)
                }
                const dateParts = response.data.date.split('-');
                setDate(`${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`)
                setSpecialty(response.data.specialty.name)
                setConsultId(response.data.id._value)
            }
        })
    }, [consultId])

    return (
        <ConsultBody>
            <ToastContainer />
            {date !== '' ?
                <>
                    {consultToday ? <LabelToday>HOJE</LabelToday> : <></>}
                    <Label>{specialty}</Label>
                    <Label>{date}</Label>
                    <CancelButton onClick={() => cancelConsult()}>Cancelar</CancelButton>
                    <LabelDays>'Caso não puder comparercer, por favor, cancele a consulta.</LabelDays>
                </>
                :
                <NoConsults>Não há consultas marcadas</NoConsults>
            }
        </ConsultBody>
    )
}

const CancelButton = styled.button`
    color: #FFFFFF;
    background: #f7433d;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    height: 60px;
    margin-top: 10px;
    padding: 0 40px;
    font-family: 'Oxygen', sans-serif;
    font-size: 18px;
    font-weight: 400;
    transition: 0.7s ease;
    :hover{
        background:#e05d59;
        transition: 0.7s ease;
    }
    @media (max-width:399px){
        padding: 10px;
    }
`

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
const LabelToday = styled.div`
    color: #30a130;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Oxygen', sans-serif;
    font-weight: 800;
    font-size: 30px;
    width:95%;
    margin: -9px 0 0px 0;
    padding: 5px;
    border: solid 3px #30a130;
    border-radius: 15px;
    
    @media (max-width: 430px){
        font-size: 22px;
        border: solid 2px #30a130;
    }
`
