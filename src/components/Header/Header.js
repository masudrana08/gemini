import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import './header.css'
import Mobile from '../../images/mobile.png'
export default function Header() {
  return (
    <div className='headerC'>
        <Row className='main'>
          <Col className='left' md={6}>
            <h1>Earn interest on crypto with Gemini Earn®</h1>
            <p>Put your crypto to work. With Gemini Earn, you can receive up to 8.05% APY on your cryptocurrency, including stablecoins.¹</p>
            <button>Start Earning</button>
            <button className='outline'>Calculate your earnings</button>
          </Col>
          <Col md={6} className='right'>
            <img src={Mobile} alt="" />
          </Col>
        </Row>
    </div>
  )
}
