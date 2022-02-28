import React from 'react'
import './started.css'
import StartedImg from '../../images/started.svg'
import { Col, Row } from 'react-bootstrap'
export default function Started() {
  return (
    <div className='startedC'>
      <div className="inner">
        <div className='top'>
            <h2>Get started</h2>
            <p>Signing up is fast, easy, and secure.</p>
          </div>
        <Row>
        <Col xs={12} md={6}>
          <div>
            <img src={StartedImg} alt="" />
          </div>
        </Col>
        <Col xs={12} md={6} className='secondPart right'>
          <div>
            <p>Download the Gemini Mobile App or log into the Gemini Exchange in your web browser. Click the “Earn” tab.</p>
          </div>
          <div>
            <p>Select a crypto to earn interest on and press “Earn.”</p>
          </div>
          <div>
            <p>Select how much and how often you’d like to move funds to Gemini Earn.</p>
          </div>
          <div>
            <p>Confirm the transfer and start earning interest!</p>
          </div>
        </Col>
        </Row>
      </div>
    </div>
  )
}
