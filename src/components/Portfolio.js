import React from 'react'
import './css/Portfolio.css'
import { github, website } from './Icons'

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
    <div className="container">
      <div className="row">
          <div className="col-10 mx-auto col-sm-6 text-center">
            <h1 className="text-capitalize section-heading">Portfolio</h1>
          </div>
        </div>
        <div className="row">           
              <div className="col-11 mx-auto col-sm-6 col-lg-4 my-3 item-container">
                  <div className="item">
                    <img src="/images/1.jpg" alt="menu item" className="img-fluid item-image"/>
      
                      <div className="item-details">
                          <h3 className="text-center">Feathers Fashion</h3>
                          <div className="text-center icons">
                            <a href="https://github.com/chandimap/Feathers-Fashion-Store">{ github }</a>
                            <a href="https://chandimap.github.io/Feathers-Fashion-Store/">{ website }</a>
                          </div>
                      </div>
      
                  </div>
                </div>
              <div className="col-11 mx-auto col-sm-6 col-lg-4 my-3 item-container">
                  <div className="item">
                    <img src="/images/2.jpg" alt="menu item" className="img-fluid item-image"/>
      
                      <div className="item-details">
                          <h3 className="text-center">Online Restaurant</h3>
                          <div className="text-center icons">
                            <a href="https://github.com/chandimap/Online-Restaurant">{ github }</a>
                            <a href="https://chandimap.github.io/Online-Restaurant/">{ website }</a>
                          </div>
                      </div>
      
                  </div>
                </div>
              <div className="col-11 mx-auto col-sm-6 col-lg-4 my-3 item-container">
                  <div className="item">
                    <img src="/images/3.jpg" alt="menu item" className="img-fluid item-image"/>
      
                      <div className="item-details">
                          <h3 className="text-center">Color Mode Movie Search</h3>
                          <div className="text-center icons">
                            <a href="https://github.com/chandimap/Color-Mode-Movie-Search">{ github }</a>
                            <a href="https://chandimap.github.io/Color-Mode-Movie-Search/">{ website }</a>
                          </div>
                      </div>
      
                  </div>
                </div>
              <div className="col-11 mx-auto col-sm-6 col-lg-4 my-3 item-container">
                  <div className="item">
                    <img src="/images/4.jpg" alt="menu item" className="img-fluid item-image"/>
      
                      <div className="item-details">
                          <h3 className="text-center">MP3 Music Player</h3>
                          <div className="text-center icons">
                            <a href="https://github.com/chandimap/MP3-Music-Player">{ github }</a>
                            <a href="https://chandimap.github.io/MP3-Music-Player/">{ website }</a>
                          </div>
                      </div>
      
                  </div>
                </div>
              <div className="col-11 mx-auto col-sm-6 col-lg-4 my-3 item-container">
                  <div className="item">
                    <img src="/images/5.jpg" alt="menu item" className="img-fluid item-image"/>
      
                      <div className="item-details">
                          <h3 className="text-center">Imperial Resort</h3>
                          <div className="text-center icons">
                            <a href="https://github.com/chandimap/Imperial-Resort-Rooms">{ github }</a>
                            <a href="https://chandimap.github.io/Imperial-Resort-Rooms/">{ website }</a>
                          </div>
                      </div>
      
                  </div>
                </div>
              <div className="col-11 mx-auto col-sm-6 col-lg-4 my-3 item-container">
                  <div className="item">
                    <img src="/images/6.jpg" alt="menu item" className="img-fluid item-image"/>
      
                      <div className="item-details">
                          <h3 className="text-center">Movie Search</h3>
                          <div className="text-center icons">
                            <a href="https://github.com/chandimap/Movie-Search">{ github }</a>
                            <a href="https://chandimap.github.io/Movie-Search/">{ website }</a>
                          </div>
                      </div>
      
                  </div>
                </div>       
        </div>
    </div>
  </section>
  )
}

export default Portfolio