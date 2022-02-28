import React from 'react'
import './footer.css'
import FooterDesktop from './FooterDesktop'
import FooterMobile from './FooterMobile'
export default function Footer() {
  return (
    <div className='footerC'>
      <div className='first'>
        <h2>The most trusted crypto-native finance platform</h2>
        <p>Create a free Gemini account in minutes</p>
        <button className='myBtn'>Get Started</button>
      </div>
      <div className='subscribeSection'>
        <h4>Stay up to date</h4>
        <div className='subBtns'>
          <input type="text" placeholder='Email Address'/>
          <button>Subscribe</button>
        </div>
      </div>
      <div className="mobile second">
        <FooterMobile />
      </div>
      <div className="desktop second">
        <FooterDesktop />
      </div>
    </div>
  )
}
