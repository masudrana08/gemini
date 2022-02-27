import React from 'react'
import './calculate.css'
import CalcImg from '../../images/calculate.png'
export default function Calculate() {
  return (
    <div>
      <div>
        <h2>Calculate your crypto earnings</h2>
        <p>Enter an amount, pick a cryptocurrency, and select a time frame to find out how much interest you can earn.</p>
      </div>
      <div>
        <img src={CalcImg} alt="" />
      </div>
    </div>
  )
}
