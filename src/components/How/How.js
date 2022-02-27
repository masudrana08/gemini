import React from 'react'
import './how.css'
import HowImg from '../../images/how.svg'
import { Col, Row } from 'react-bootstrap'
export default function How() {
  return (
    <div>
      <Row>
        <Col>
          <div>
            <img src={HowImg} alt="" />
          </div>
          <div>
            <h2>How to earn interest on crypto</h2>
            <p>
              It’s simple. Once you open a Gemini account, you can purchase any amount of cryptocurrency and immediately transfer it to Gemini Earn to start earning interest on your holdings. Click here to calculate your interest.
            </p>
            <p>
              Unlike other opportunities to earn interest on your crypto holdings, you can redeem and move your cryptocurrency back to your trading account (plus interest) at any time, with no minimums, and no transfer or redemption fees
            </p>
          </div>
          <div>
            <h2>Why choose Gemini?</h2>
            <p>Gemini is one of the safest cryptocurrency exchanges where you can buy, sell, store, and earn interest on bitcoin and other cryptocurrencies.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <h3>Industry-leading security</h3>
            <p>Gemini is a New York trust company regulated by the New York State Department of Financial Services (NYSDFS). We are subject to the capital reserve requirements, cybersecurity requirements, and banking compliance standards set forth by the NYSDFS and the New York Banking Law—on par with traditional financial institutions.
            Learn more about our commitment to security</p>
          </div>

        </Col>
        <Col>
          <div>
            <div>
              <h4>Crypto Security</h4>
              <p>The majority of your crypto is held in our offline, air-gapped Cold Storage system. Only a small portion is held in our online Hot Wallet, which is insured against certain types of losses.</p>
            </div>
            <div>
              <h4>Account Security</h4>
              <p>Two-Factor Authentication (2FA) is required when you log in to your account or make crypto withdrawals.</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <h3>Competitive features and rates</h3>
            <p>Interest compounds daily. Deposit and receive more than 110x the average national interest rate2, with high-yield crypto returns.
            See our interest rates here.</p>
          </div>

        </Col>
        <Col>
          <div>
            <div>
              <h4>Redeem your assets at any time. No hidden fees.</h4>
              <p>Withdraw your assets instantly3. Gemini offers more flexibility than other high-yield cryptocurrency investments, with no minimums and no transfer or withdrawal fees.</p>
            </div>
            <div>
              <h4>Available in every U.S. state, Singapore, and Hong Kong.</h4>
              <p>No other cryptocurrency exchange or financial institution offers the opportunity for users to earn interest on crypto in every U.S. state, including New York. Gemini Earn is also available in Singapore and Hong Kong.</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <h3>Earn on stablecoins</h3>
            <p>Stablecoins are digital assets that are tied to traditional fiat currencies and are designed to minimize crypto price volatility, while maintaining the mobility and utility of cryptocurrency. Gemini Earn supports stablecoins like Gemini dollar (GUSD) and Dai.4
            Learn more about stablecoins</p>
          </div>

        </Col>
        <Col>
          <div>
            <div>
              <h4>Gemini dollar (GUSD)</h4>
              <p>Gemini dollar™ is a stablecoin redeemable at any time for $1 USD at Gemini, anytime.</p>
            </div>
            <div>
              <h4>Beat inflation</h4>
              <p>Gemini Earn allows users to outpace inflation rates by receiving returns through stablecoins.</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
