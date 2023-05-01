import React from 'react'
import styled from "@emotion/styled"
import { Text } from 'react-xnft'

const Container = styled.View`
display: flex;
justify-content: center;
height: 8px;
`
const Footer = () => {
  return (
    <Container>
      <Text>For demo purposes only, all rights reserved &copy; 2023 MTV</Text>
    </Container>
  )
}

export default Footer