import React from 'react'
import styled from "@emotion/styled"

const Container = styled.div`
display: flex;
justify-content: center;
height: 8px;
`
const Footer = () => {
  return (
    <Container>
      <i>For demo purposes only, all rights reserved &copy; 2023 MTV</i>
    </Container>
  )
}

export default Footer