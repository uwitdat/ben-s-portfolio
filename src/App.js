import React, { useState } from 'react';
import { SliderData } from './SliderData'
import { SliderDataTwo } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import './App.css';

const App = () => {
  const length = SliderData.length
  const lengthTwo = SliderDataTwo.length

  const [current, setCurrent] = useState(0)
  const [currentTwo, setCurrentTwo] = useState(0)


  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };


  return (
    <>
      <div className="App-container">
        <video id="vid" src='myVid.mp4' loop="true" autoplay="autoplay" muted />
        <div className="header">
          <h1 className="title">BEN SHEKHTMAN </h1>
        </div>
        <div className="nav">
          <p>// Resume </p>
          <p>About</p>
          <p>// Projects </p>
        </div>
        <div className="flex-div">
          <div className="body">
            <h2>FULL STACK WEB DEVELOPER</h2>
            <p id='top'>creative, forward thinking, inspired</p>
            <p id='top'>With a passion for <span>UI/UX</span></p>
          </div>
        </div>
      </div>

      <div className="container-two">
        <h1 className="title">PLAYDOG</h1>
        <div className='col-2-pics'>
          {SliderData.map((slide, index) => {
            return (
              <div className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                {index === current && (<img id='playdog' src={slide.image}></img>)}
              </div>
            )
          })}
        </div>

        <div className="arrow">
          <FaArrowAltCircleLeft className='right-arr' onClick={prevSlide} />
          <FaArrowAltCircleRight className='right-arr' onClick={nextSlide} />
        </div>
      </div>




      <div className="container-three">
        <div className="content">
          <p id='lan'>// LANGUAGES</p>
          <hr />
          <p id="txt">JAVASCRIPT, PYTHON, RUBY</p>
          <p id="txt"> HTML, CSS, SASS</p>
        </div>
        <div className="content">
          <p id='lan'>// FRAMEWORKS</p>
          <hr />
          <p id="txt">REACT, EXPRESS, NODE, DJANGO</p>
          <p id="txt">RUBY ON RAILS, BOOTSTRAP, MATERIALIZE</p>
        </div>
        <div className="content">
          <p id='lan'>// DATABASES</p>
          <hr />
          <p id="txt">MONGODB, PSQL, SQLITE</p>
        </div>
        <div className="content">
          <p id='lan'>// DEV-OPS</p>
          <hr />
          <p id="txt">GITHUB, AWS, HEROKU</p>
        </div>
      </div>




    </>
  )
}

export default App;
