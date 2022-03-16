import React from 'react'
import { Container } from 'react-bootstrap'
import Login from './Login'
import TextLogin from './TextLogin'

export default function LoginAndText() {
  return (
    <Container className="d-md-flex my-lg-5 my-sm-4">
      <TextLogin />
      <Login />
    </Container>
  )
}
