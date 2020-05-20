import styled from "styled-components"

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 100px);
`

export type notebook = {
    innovoInventory: number
    serialnumber: string
    leasingStart: string
    leasingEnde: string
    notebook_user?: {
      userName: string
    }
}

export default function Notebook({
    innovoInventory,
    serialnumber,
    leasingStart,
    leasingEnde,
    notebook_user
}: notebook) {
    return <Container>
        <div>{innovoInventory}</div>
        <div>{serialnumber}</div>
        <div>{new Date(leasingStart).toLocaleDateString()}</div>
        <div>{new Date(leasingEnde).toLocaleDateString()}</div>
        <div>{notebook_user?.userName}</div>
    </Container>
}
