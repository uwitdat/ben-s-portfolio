import React, { useState } from 'react';
import { SliderData } from './SliderData'
import { SliderDataTwo } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { DiGithubBadge, DiHeroku } from 'react-icons/di'
import { AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'
import './App.css';

const App = () => {
  const length = SliderData.length;
  const lengthTwo = SliderDataTwo.length;

  const [current, setCurrent] = useState(0);
  const [currentTwo, setCurrentTwo] = useState(0);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlideTwo = () => {
    setCurrentTwo(currentTwo === lengthTwo - 1 ? 0 : currentTwo + 1)
  };

  const prevSlideTwo = () => {
    setCurrentTwo(currentTwo === 0 ? lengthTwo - 1 : currentTwo - 1);
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
        <div className="links">
          <a href='https://github.com/uwitdat/playdog-project3'
            target='_blank'>
            <DiGithubBadge
              id='link' />
          </a>
          <a href='https://playdog-playdate.herokuapp.com'
            target='_blank'>
            <DiHeroku
              id='link' />
          </a>
        </div>
      </div>
      <div className="container-three">
        <h1 className="title" id="black">TRADE / ER</h1>
        <div className='col-2-pics'>
          {SliderDataTwo.map((slide, index) => {
            return (
              <div className={index === currentTwo ? 'slide active' : 'slide'}
                key={index}
              >
                {index === currentTwo && (<img id='playdog' src={slide.image}></img>)}
              </div>
            )
          })}
        </div>
        <div className="arrow">
          <FaArrowAltCircleLeft className='right-arr' onClick={prevSlideTwo} />
          <FaArrowAltCircleRight className='right-arr' onClick={nextSlideTwo} />
        </div>
        <div className="links">
          <a href='https://github.com/uwitdat/trader-among-us'
            target='_blank'>
            <DiGithubBadge
              id='link' />
          </a>
          <a href='https://trader-among-us.herokuapp.com/login'
            target='_blank'>
            <DiHeroku
              id='link' />
          </a>
        </div>
      </div>

      <div className="container-four">
        <h1 className="title" id="black">MORE PROJECTS</h1>
        <div className="repos-container">
          <div className="repos">
            <DiGithubBadge id='link' /><p>Gear-Guru</p>
          </div>

          <div className="repos">
            <DiGithubBadge id='link' /><p>Finance Tracker</p>
          </div>

          <div className="repos">
            <DiGithubBadge id='link' /><p>Guitar Blog</p>
          </div>

          <div className="repos">
            <DiGithubBadge id='link' /><p>Message-Me app</p>
          </div>

          <div className="repos">
            <DiGithubBadge id='link' /><p>Pokemon collector</p>
          </div>

        </div>

      </div>

      <div className="container-five">
        <h1 className="title" id="black">RESUME</h1>
      </div>

      <div className="container-six">
        <h1 className="title" id="black">ABOUT</h1>
        <div className="flex-mega">
          <div className="flex-par">
            <img id="me" src="IMG_9861 2.jpeg"></img>
          </div>

        </div>
      </div>

      <div className="container-sev">
        <h1 className="title" id="black">CONTACT ME</h1>

        <div className="flx-row">

          <div className="flx-txt">
            <p id="top">Based in</p>
            <p className="pink" id="top-bold">benshekhtman</p>
          </div>

          <div className="flx-txt-two">
            <p id="top">Toronto, on</p>
            <p className="pink" id="top-bold">@hotmail.com</p>
          </div>

        </div>

        <div className="links">
          <AiFillLinkedin id='link' />
          <AiFillFacebook id='link' />
          <DiGithubBadge id='link' />
        </div>
      </div>






    </>
  )
}

export default App;
