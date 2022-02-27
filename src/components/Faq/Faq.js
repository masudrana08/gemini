import React from 'react'
import { Accordion } from 'react-bootstrap'
import './faq.css'
export default function Faq() {
  return (
    <div className='faqC'>
      <h2 className='title'>Frequently asked questions</h2>
      <div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Gemini Earn?</Accordion.Header>
            <Accordion.Body>
              <p>Gemini Earn is a lending program through which you may choose to lend your crypto to certain institutional borrowers and earn interest on your crypto.</p>
              <p>On the Gemini platform, customers can view their combined trading balance and Earn balance, as well as the interest they’ve earned. Interest is paid daily and will start accruing at 4 p.m. ET on the next business day after funds are moved to Gemini Earn.</p>
              <p>Learn more</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What are the risks of Gemini Earn?</Accordion.Header>
            <Accordion.Body>
              <p>Gemini is partnering with accredited third party borrowers including Genesis, who are vetted through our risk management framework which reviews our partners’ collateralization management process. On a periodic basis we will conduct an analysis of our partners’ cash flow, balance sheet, and financial statements to ensure the appropriate risk ratios and healthy financial condition of our partners.</p>
              <p>Cryptocurrency, like many assets, can be volatile and subject to price swings. There is always a risk in investing, and each customer needs to assess their own risk tolerance before making any investment decisions. Our partners in Gemini Earn have an obligation to return funds according to the terms of their loan agreement. However, Gemini Earn customers (the lenders) always assume some level of risk when they decide to lend their funds. We believe Gemini Earn gives our retail investors another way to stay long-term in the asset class and have the option to invest and earn interest, all on the Gemini platform.</p>
              <p>Learn more</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How long does a redemption take?</Accordion.Header>
            <Accordion.Body>
              <p>Typically, Gemini can process your redemption quickly after you request your funds. If our partners receive a high volume of redemption requests during the same period, it may take longer for them to respond to each request. However, in all cases our partners are required to return your funds to you within five business days.</p>
              <p>You will need to redeem your crypto before you use that balance to trade. Redeeming from Earn moves your crypto from your Earn balance to your trading balance. You can easily view both your trading and Earn balances on the “My Portfolio” tab on the App and on the Web. ActiveTrader users can view balances on the Account tab.</p>
              <p>Learn more</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>How do I redeem my Earn balance?</Accordion.Header>
            <Accordion.Body>
            On the App

            <li>If you hold crypto in your Earn account, press “Redeem” on the crypto you would like to move.</li>
            <li>Enter the quantity of the crypto you would like to redeem and press “Continue.”</li>
            <li>After reviewing the confirmation screen, swipe the Gemini icon right at the bottom of the screen to “Confirm” your redemption. Once you press redeem, you will stop earning interest on the redeemed crypto.</li>
            <li>Your redeemed crypto will be available in your Gemini trading account as soon as it is processed. Please refer to "How long does a redemption take?" for more information.</li>

            On the Web

            <li>Click “Redeem” on the crypto you would like to move.</li>
            <li>Enter the quantity of the crypto you would like to redeem and press “Continue.”</li>
            <li>Review the confirmation page and click “Confirm.” Once you click redeem, you will stop earning interest on the redeemed crypto.</li>
            <li>Your redeemed crypto will be available in your Gemini trading account as soon as it is processed. Please refer to "How long does a redemption take?" for more information.</li>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Why would interest rates vary over time?</Accordion.Header>
            <Accordion.Body>
              <p>Rates vary based on the supply and demand for each cryptocurrency in crypto lending markets, similar to how interest rates vary for any type of currency.</p>
              <p>Learn more</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Are the crypto moved to Earn insured?</Accordion.Header>
            <Accordion.Body>
              <p>Your funds in Earn are not insured by Gemini but are held with our trusted partners. Our partners are vetted through our risk management framework and always disclosed to you, so you know which institution has borrowed your funds. Currently, Gemini is partnering with accredited third party borrower Genesis.</p>
              <p>Additionally, Gemini Earn is structured similarly to many non-deposit services offered by financial institutions and not insured by FDIC, SIPC, any other governmental program, or Gemini. All loans are open-term and callable, and the customer’s experience is seamless with Gemini’s platform, allowing quick access to earn interest and redeem funds.</p>
              <p>For GUSD in Earn, while the U.S. dollar reserves backing the GUSD tokens are eligible for FDIC insurance, the GUSD tokens themselves are not insured, whether or not in Earn.</p>
              <p>Learn more</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div>
          <h4>See all Earn FAQs</h4>
          <li className="small">
            APY may vary based on coin type 1.25% - 8.05%. Depending on availability. Gemini Earn is a lending program through which you may choose to lend your cryptocurrency to certain institutional borrowers. Gemini, as your custodian and agent, will offer you lending opportunities when, and if, available. While we expect sufficient borrower capacity for all interested Gemini customers, we cannot guarantee demand for particular cryptocurrencies or at particular rates. This content is for general informational purposes only and is not investment advice. Buying, selling, and trading cryptocurrency involves risk. You should consult a qualified, licensed advisor before engaging in any transaction. Past performance is not a guarantee of future results.
          </li>
          <li className="small">
            As of 05/20/2021
          </li>
          <li className="small">
            Loans you make through Gemini Earn may be called back by you at any time. Most withdrawal requests will be funded immediately after you call back your funds. Under some conditions, it may take up to five (5) business days from the date you call back a loan for your funds to be available for withdrawal.
          </li>
          <li className="small">
            Earn currently supports GUSD for U.S. and Hong Kong users only.
          </li>
        </div>
      </div>
    </div>
  )
}
