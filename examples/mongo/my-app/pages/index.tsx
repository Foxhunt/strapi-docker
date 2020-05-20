import styled from 'styled-components'

import Notebooks from "../components/notebooks"

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default function Home() {
  return <>
    <Title>Hello</Title>
    <Notebooks />
  </>
}
