import React, { useState } from 'react';

import { SliderData } from "./SliderData"
import { SliderDataTwo } from "./SliderData"

import HomePage from './components/HomePage/HomePage'
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import ResumePage from './components/ResumePage/ResumePage';
import ContactPage from './components/ContactPage/ContactPage';
import WorkExp from './components/WorkExperience/WorkExp';

import { useIntersectionObserver } from './hooks/index';

const App = () => {
  const length = SliderData.length;
  const lengthTwo = SliderDataTwo.length;

  const [isOpen, setIsOpen] = useState(false)
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

  const [isMobile] = useState(window.innerWidth <= 350)

  const options = {
    root: null,
    rootMargin: '-20px',
    threshold: isMobile ? 0 : 0.3
  }

  const [container, isVisible] = useIntersectionObserver(options)
  const [containerTwo, isVisibleTwo] = useIntersectionObserver(options)
  const [containerThree, isVisibleThree] = useIntersectionObserver(options)

  return (
    <main>
      <HomePage />
      <div ref={container}>
        <WorkExp isVisible={isVisible} />
      </div>

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

      <div ref={containerTwo}>
        <ResumePage
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          isVisible={isVisibleTwo}
        />
      </div>

      <div ref={containerThree}>
        <ContactPage isVisible={isVisibleThree} />
      </div>
    </main>
  )
}


export default App;
