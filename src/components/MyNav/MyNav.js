import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './mynav.css'
export default function MyNav() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <div>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className='' href="https://exchange.gemini.com/register?referral=67k9yz9se#">Sign in</Nav.Link>
                <Nav.Link href="https://exchange.gemini.com/register?referral=67k9yz9se#">
                  <button>Get Started</button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}
