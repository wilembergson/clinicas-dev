import { useEffect, useState } from "react"
import styled from "styled-components"
import api from "../api/ApiConections"
import { colors } from "../utils/Colors"
import { FieldLabel, Label, NoConsults } from "./SaredStyles"

export default function Historic(){
    const [historic, setHistoric] = useState<any[]>([])
    
    function adjustData(list:any[]){
        const result:any[] = []
        list.forEach(item => {
            const newDate = new Date(item.date)
            const d = newDate.getDate()
            const m = newDate.getMonth()+1
            const day = (d<10) ? `0${d}` : `${d}`
            const month = (m<10) ? `0${m}` : `${m}`
            const date = `${day}/${month}/${newDate.getFullYear()}`
            const specialty = item.specialty.name
            result.push({date, specialty})
        })
        setHistoric(result)
    }

    useEffect(() => {
        const promise = api.historic()
        promise.then(response => adjustData(response.data))
    })

    return(
        <>
            {(historic.length !==0) ? 
                <>
                    {historic.map(item => <Item>
                        <FieldLabel>{item.date}</FieldLabel>
                        <FieldLabel>{item.specialty}</FieldLabel>
                    </Item>)}
                </>
            :   
                <NoConsults>Hitórico de consultas vazío</NoConsults>
            }
        </>
    )
}

const Item = styled.section`
    display: flex;
    justify-content: space-around;
    border: 1px solid ${colors.secondary};
    width: 90%;
    margin: 10px;
    padding: 10px;
    padding-bottom: 15px;
    box-shadow: 0px 2px 12px rgba(120, 177, 89, 0.12);
    border-radius: 8px;
    cursor: pointer;
    transition: 0.7s ease;
    :hover{
        transition: 0.7s ease;
        transform: scale(1.04);
    }
    @media (max-width:399px){
        width: 85%;
    }
`