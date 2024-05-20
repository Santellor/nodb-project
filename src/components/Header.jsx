import React from 'react'
import thereforeLogo from '../assets/therefore.png'

const Header = () => {
  return (
  <>
    <nav className="navbar">
          <div className='nav-div'>
            <img src={thereforeLogo} className='logo'/> 
            <div className="a-div">
              <a className="nav-link-1" href="/">calendar</a>
              <a className="nav-link-2" href="/calendar">view data</a>
            </div>
          </div>
        </nav>

      <div className="date-buffer"></div>
  </>
  )
}

export default Header