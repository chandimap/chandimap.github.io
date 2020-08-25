import React from 'react'
import './css/Footer.css'
import { githubsm } from './Icons'

const Footer = () => {
  return (
    <footer className="footer text-center">
    <div className="container">
      <div className="main-footer">
        <a className="brand" href="https://chandimap.github.io/">C<span>R</span></a>
        <div className="icons">
        <a href="https://github.com/chandimap">{ githubsm }</a>
        </div>
      </div>
      <p className="copyright">Copyright © 2020 Chandima Ranasinghe.</p>
    </div>
  </footer>
  )
}

export default Footer