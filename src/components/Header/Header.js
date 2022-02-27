import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './header.css'
import Mobile from '../../images/mobile.png'
export default function Header() {
  return (
    <div>
      <Row>
        <Col>
          <h1>Earn interest on crypto with Gemini Earn®</h1>
          <p>Put your crypto to work. With Gemini Earn, you can receive up to 8.05% APY on your cryptocurrency, including stablecoins.¹</p>
          <button>Start Earning</button>
          <button>Calculate your earnings</button>
        </Col>
        <Col>
          <img style={{width: '70%'}} src={Mobile} alt="" />
        </Col>
      </Row>
    </div>
  )
}
