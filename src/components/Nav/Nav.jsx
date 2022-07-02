import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import './Nav.css'

const Nav = ({ isNav, isVisibleTwo, isVisibleThree, isVisibleFour }) => {
  return (
    <nav className={isNav ? 'bubbs bubbs-enter' : 'bubbs'}>
      <GiHamburgerMenu />
      <a href="#projects-title">
        <div className={isVisibleFour ? 'bubble bubble-active' : 'bubble'}>
          <p>{`//`} P</p>
        </div>
      </a>

      <a href="#resume-title">
        <div className={isVisibleTwo ? 'bubble bubble-active' : 'bubble'}>
          <p>{`//`} R</p>
        </div>
      </a>

      <a href="#contact-me">
        <div className={isVisibleThree ? 'bubble bubble-active' : 'bubble'}>
          <p>{`//`} C</p>
        </div>
      </a>
    </nav>
  )
}

export default Nav