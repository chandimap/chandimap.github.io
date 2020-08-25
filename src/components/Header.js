import React from 'react'
import './css/Header.css'
import { githubsm } from './Icons'

const Header = () => {
  return (
    <header id="header">
    <div className="container">
            <div className="row hero-box align-items-center justify-content-center">
              <div className="col">
                <div className="banner text-center">
                    <h1 className="greeting">Hi! I'm Chandima Ranasinghe.</h1>
                    <h2 className="profession">Front End Developer & Machine Learning Engineer</h2>
                    <div className="icons">
                    <a href="https://github.com/chandimap">{ githubsm }</a>
                    </div>
                </div>
              </div>
            </div>
      </div>
</header>
  )
}

export default Header