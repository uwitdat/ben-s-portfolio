import React, { useState } from 'react';
import { SliderData } from './SliderData'
import { SliderDataTwo } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { DiGithubBadge, DiHeroku } from 'react-icons/di'
import { AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'

import Modal from './components/Modal'
import './App.css';

const App = () => {
  const length = SliderData.length;
  const lengthTwo = SliderDataTwo.length;

  const [isOpen, setIsOpen] = useState(false)
  const [isOpenTwo, setIsOpenTwo] = useState(false)
  const [isOpenThree, setIsOpenThree] = useState(false)
  const [isOpenFour, setIsOpenFour] = useState(false)

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

        <div className="cerf-row">

          <div
            onClick={() => setIsOpen(true)}>
            <img id="cerf" src="https://dzf8vqv24eqhg.cloudfront.net/userfiles/2086/3660/ckfinder/images/qu/Cert.jpg" />
          </div>
          <Modal open={isOpen} onClose={() => setIsOpen(!isOpen)}>
            <img id="expanded" src="https://dzf8vqv24eqhg.cloudfront.net/userfiles/2086/3660/ckfinder/images/qu/Cert.jpg" />
          </Modal>

          <div
            onClick={() => setIsOpenTwo(true)}>
            <img id="cerf" src="https://marketplace.canva.com/EADaoY5X9lc/1/0/800w/canva-dark-blue-and-gold-bordered-recognition-certificate-cQSPpNR7kyI.jpg" />
          </div>
          <Modal openTwo={isOpenTwo} onClose={() => setIsOpenTwo(!isOpenTwo)}>
            <img id="expanded" src="https://marketplace.canva.com/EADaoY5X9lc/1/0/800w/canva-dark-blue-and-gold-bordered-recognition-certificate-cQSPpNR7kyI.jpg" />
          </Modal>

          <div
            onClick={() => setIsOpenThree(true)}>
            <img id="cerf" src="https://i.pinimg.com/originals/86/a8/42/86a8426e58d625feb3d2e4f54468639d.jpg" />
          </div>
          <Modal openThree={isOpenThree} onClose={() => setIsOpenThree(!isOpenThree)}>
            <img id="expanded" src="https://i.pinimg.com/originals/86/a8/42/86a8426e58d625feb3d2e4f54468639d.jpg" />
          </Modal>

          <div
            onClick={() => setIsOpenFour(true)}>
            <img id="cerf" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blue-certificate-template-d7da5489aa80ee1dcfdcabac6ba086fa_screen.jpg?ts=1619510148https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blue-certificate-template-d7da5489aa80ee1dcfdcabac6ba086fa_screen.jpg?ts=1619510148" />
          </div>
          <Modal openFour={isOpenFour} onClose={() => setIsOpenFour(!isOpenFour)}>
            <img id="expanded" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blue-certificate-template-d7da5489aa80ee1dcfdcabac6ba086fa_screen.jpg?ts=1619510148" />
          </Modal>


        </div>






      </div>

      <div className="container-six">
        <h1 className="title" id="black">ABOUT</h1>

      </div>

      <div className="container-sev">
        <h1 className="title" id="black">CONTACT ME</h1>

        <div className="flx-row">

          <div className="flx-txt">
            <p id="top-shadow">Based in</p>
            <div className="more"><p className="pink" id="top-bold">benshekhtman</p></div>
          </div>

          <div className="flx-txt-two">
            <p id="top-shadow-two">Toronto, on</p>
            <div className="more-two"><p className="pink" id="top-bold-two">@hotmail.com</p></div>
          </div>

        </div>

        <div className="links">
          <a href='https://github.com/uwitdat'
            target='_blank'>
            <AiFillLinkedin id='link'
            />
          </a>
          <a href='https://www.facebook.com/ben.shekhtman/'
            target='_blank'>
            <AiFillFacebook id='link' />
          </a>
          <a href='https://www.linkedin.com/in/ben-shekhtman-751475178/'
            target='_blank'>
            <DiGithubBadge id='link' />
          </a>
        </div>
      </div>






    </>
  )
}

export default App;
