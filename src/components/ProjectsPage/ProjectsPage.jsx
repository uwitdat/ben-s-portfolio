import "./ProjectsPage.css"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { DiGithubBadge } from 'react-icons/di'

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
      <div className="container-two" id="projects-title">
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

        <a href='https://github.com/uwitdat/playdog-project3'
          target='_blank' rel="noreferrer">
          <div className="repo-badge">
            <DiGithubBadge />
            <p>Github</p>
          </div>
        </a>

      </div>
      <div className="container-three">
        <h1 className="title margin-less" id="black">IMMIGROW</h1>
        <div className='col-2-pics'>
          {SliderDataTwo.map((slide, index) => {
            return (
              <div className={index === currentTwo ? 'slide active' : 'slide'}
                key={index}
              >
                {index === currentTwo && (<img style={{ transform: 'translateX(10px)' }} id='playdog' src={slide.image}></img>)}
              </div>
            )
          })}
        </div>
        <div className="arrow">
          <FaArrowAltCircleLeft className='right-arr' onClick={prevSlideTwo} />
          <FaArrowAltCircleRight className='right-arr' onClick={nextSlideTwo} />
        </div>

        <a href='https://github.com/uwitdat/IMMIGROW_CLIENT'
          target='_blank' rel="noreferrer">
          <div className="repo-badge">
            <DiGithubBadge />
            <p>Github</p>
          </div>
        </a>

      </div>
    </section>
  )
}

export default ProjectsPage;