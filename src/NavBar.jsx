import React from 'react';
import { Container, Navbar, Form, Button } from 'react-bootstrap';
import { LinkNav } from './assets/style';

export default function NavBar() {
  return (
    <Navbar variant="dark" expand="lg" className="mt-2">
      <Container>
        <Navbar.Brand href="#">World Explorer</Navbar.Brand>

        <Navbar.Collapse className="justify-content-end">
          <Form className="d-flex">
            {/* <FormControl
              type="text"
              placeholder="Email or Username"
              className="me-2"
              aria-label="email-username"
            /> */}

            <Form.Group className="me-2" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email or Username" />
            </Form.Group>


            <Form.Group className="me-2" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
              <LinkNav variant="a">
                Forgot password?
              </LinkNav>
            </Form.Group>


            {/* <FormControl
              type="password"
              placeholder="Password"
              className="me-2"
              aria-label="Password"
            /> */}
            <Form.Group>
              <Button variant="primary" type="submit" className="me-2">Log in</Button>
            </Form.Group>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
