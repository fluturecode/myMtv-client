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
      <i>This is for demo purposes only, all rights reserved &copy; MTV.</i>
    </Container>
  )
}

export default Footer