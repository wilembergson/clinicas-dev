import { TwinSpin } from "react-cssfx-loading"
import styled from "styled-components"
import { colors } from "../utils/Colors"

export default function Loading(){
    return(
        <Container>
            <TwinSpin color={colors.primary} width="150px" height="150px"/>
        </Container>
    )
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
`