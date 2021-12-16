import React, { useState } from 'react';

import { SliderData } from "./SliderData"
import { SliderDataTwo } from "./SliderData"

import HomePage from './components/HomePage/HomePage'
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import ReposPage from './components/ReposPage/ReposPage';
import ResumePage from './components/ResumePage/ResumePage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage/ContactPage';
import NumConverter from './components/NumConverter/NumConverter'

const App = () => {
  const length = SliderData.length;
  const lengthTwo = SliderDataTwo.length;

  const [isOpen, setIsOpen] = useState(false)
  const [isOpenTwo, setIsOpenTwo] = useState(false)
  const [isOpenThree, setIsOpenThree] = useState(false)
  const [isOpenFour, setIsOpenFour] = useState(false)
  const [isOpenFive, setIsOpenFive] = useState(false)
  const [isOpenSix, setIsOpenSix] = useState(false)
  const [isOpenSev, setIsOpenSev] = useState(false)
  const [isOpenEight, setIsOpenEight] = useState(false)
  const [isOpenNine, setIsOpenNine] = useState(false)

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

    <main>
      <HomePage />

      <ProjectsPage
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        nextSlideTwo={nextSlideTwo}
        prevSlideTwo={prevSlideTwo}
        current={current}
        currentTwo={currentTwo}
        length={length}
        lengthTwo={lengthTwo}
        SliderData={SliderData}
        SliderDataTwo={SliderDataTwo}
      />
      <NumConverter />
      <ReposPage />

      <ResumePage
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        setIsOpenTwo={setIsOpenTwo}
        isOpenTwo={isOpenTwo}
        setIsOpenThree={setIsOpenThree}
        isOpenThree={isOpenThree}
        setIsOpenFour={setIsOpenFour}
        isOpenFour={isOpenFour}
        setIsOpenFive={setIsOpenFive}
        isOpenFive={isOpenFive}
        setIsOpenSix={setIsOpenSix}
        isOpenSix={isOpenSix}
        setIsOpenSev={setIsOpenSev}
        isOpenSev={isOpenSev}
        setIsOpenEight={setIsOpenEight}
        isOpenEight={isOpenEight}
        isOpenNine={isOpenNine}
        setIsOpenNine={setIsOpenNine}
      />

      <AboutPage />

      <ContactPage />

    </main>

  )
}


export default App;
