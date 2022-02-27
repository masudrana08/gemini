import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './mynav.css'
import Logo from '../../images/logo.webp'
export default function MyNav() {
  return (
    <div className='navC'>
      <Navbar expand="lg">
        <Container>
          <div>
            <Navbar.Brand href="#home">
              <img src={Logo} alt="logo" />
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto align-items-center">
                <div className='nav-sign'>
                  <Nav.Link className='' href="https://exchange.gemini.com/register?referral=67k9yz9se#">Sign in</Nav.Link>
                  <span className='und'></span>
                </div>

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
