import React from 'react'
import './footer.css'
import FooterDesktop from './FooterDesktop'
import FooterMobile from './FooterMobile'
import {FaTwitter, FaInstagram,FaLinkedinIn, FaFacebookF} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import AppStore from '../../images/appstore.svg'
import PlayStore from '../../images/playstore.svg'
import GalaxyStore from '../../images/galaxy.svg'
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
      <div className='footerLast'>
        <div className='left'>
          <div>
            <FaTwitter />
          </div>
          <div>
            <AiFillInstagram />
          </div>
          <div>
            <FaLinkedinIn />
          </div>
          <div>
            <FaFacebookF />
          </div>
          
          
          
          
        </div>
        <div className='right'>
          <img src={AppStore } alt="" />
          <img src={PlayStore} alt="" />
          <img src={GalaxyStore} alt="" />
        </div>
      </div>
      <div className="footer-foot">
        <p>© Copyright 2022 Gemini Trust Company, LLC.</p>
        <p>NMLS #1518126</p>
        <p>Legal Notice</p>
        <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
      </div>
    </div>
  )
}
