import React from 'react'
import './footer.css'
import FooterDesktop from './FooterDesktop'
import FooterMobile from './FooterMobile'
export default function Footer() {
  return (
    <div>
      <div>
        <h2>The most trusted crypto-native finance platform</h2>
        <p>Create a free Gemini account in minutes</p>
        <button>Get Started</button>
      </div>
      <div className="mobile">
        <FooterMobile />
      </div>
      <div className="desktop">
        <FooterDesktop />
      </div>
    </div>
  )
}
