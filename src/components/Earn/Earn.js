import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './earn.css'
import Dollar from '../../images/dollar.svg'
import Shield from '../../images/shield.svg'
import Network from '../../images/network.svg'
import Award from '../../images/award.webp'
export default function Earn() {
  return (
    <div>
      <div>
        <h2>How Earn Works</h2>
        <p>Buy, sell, store, spend, and earn cryptocurrency all through one platform.</p>
      </div>
      <Row>
        <Col>
          <div>
            <img src={Dollar} alt="" />
            <p>On the Gemini platform, customers can view their combined trading balance and Earn balance, as well as the interest they’ve earned. Interest is paid daily at 4p.m. ET, on the following business day that funds are moved to Gemini Earn.</p>
          </div>
        </Col>
        <Col>
          <div>
            <img src={Shield} alt="" />
            <p>Gemini partners with accredited third-party borrowers like Genesis, who are vetted through a risk management framework that reviews our partners’ collateralization management process. Additionally, on a periodic basis we conduct analyse of our partners’ cash flow, balance sheet, and financial statements to ensure the appropriate risk ratios and healthy financial condition of our partners.</p>
          </div>
        </Col>
        <Col>
          <div>
            <img src={Network} alt="" />
            <p>Gemini notifies customers when interest payments hit their accounts and users can check balances in real time. Gemini will continue to add high-quality partners in order to ensure competitive rates and allow users to diversify borrowers.</p>
          </div>
        </Col>
      </Row>
      <div>
        <div>
          <img src={Award} alt="" />
        </div>
        <div>
          <h4>We are proud to have been awarded The Ascent’s Best-Of 2022:</h4>
          <li>Best Cryptocurrency Exchange Overall</li>
          <li>Best Cryptocurrency App for Earning Interest</li>
          <li>Best Cryptocurrency App for Beginners</li>
        </div>
      </div>
    </div>
  )
}
