import "./ProjectsPage.css"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { DiGithubBadge, DiHeroku } from 'react-icons/di'

const ProjectsPage = ({ nextSlide,
  nextSlideTwo,
  prevSlide,
  prevSlideTwo,
  current,
  currentTwo,
  SliderData,
  SliderDataTwo
}) => {

  return (
    <section>
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
    </section>
  )
}

export default ProjectsPage;