import './ResumePage.css';
import { FaDownload } from 'react-icons/fa'
import Modal from '../Modal/Modal'

const ResumePage = ({
  setIsOpen, isOpen,
  setIsOpenTwo, isOpenTwo,
  setIsOpenThree, isOpenThree,
  setIsOpenFour, isOpenFour,
  setIsOpenFive, isOpenFive,
  setIsOpenSix, isOpenSix,
  setIsOpenSev, isOpenSev
}) => {


  return (
    <div className="container-five" id='resume-title'>

      <h1 className="title" id="black">RESUME</h1>

      <div className="resume-col">
        <p id="top">Download My Resume</p>
        <a href="Ben's Resume.pdf" download >
          <FaDownload id="resume" />
        </a>
      </div>

      <div className="cerf-row">
        <div
          onClick={() => setIsOpen(true)}>
          <img id="cerf" src="cerf.png" />
        </div>
        <Modal open={isOpen} onClose={() => setIsOpen(!isOpen)}>
          <img id="expanded" src="cerf.png" />
        </Modal>

        <div
          onClick={() => setIsOpenTwo(true)}>
          <img id="cerf" src="udemy-javascript.png" />
        </div>
        <Modal openTwo={isOpenTwo} onClose={() => setIsOpenTwo(!isOpenTwo)}>
          <img id="expanded" src="udemy-javascript.png" />
        </Modal>

        <div
          onClick={() => setIsOpenThree(true)}>
          <img id="cerf" src="udemy-css.png" />
        </div>
        <Modal openThree={isOpenThree} onClose={() => setIsOpenThree(!isOpenThree)}>
          <img id="expanded" src="udemy-css.png" />
        </Modal>

        <div
          onClick={() => setIsOpenFour(true)}>
          <img id="cerf" src="udemy-react.png" />
        </div>
        <Modal openFour={isOpenFour} onClose={() => setIsOpenFour(!isOpenFour)}>
          <img id="expanded" src="udemy-react.png" />
        </Modal>


        <div
          onClick={() => setIsOpenFive(true)}>
          <img id="cerf" src="udemy-mern.png" />
        </div>
        <Modal openFive={isOpenFive} onClose={() => setIsOpenFive(!isOpenFive)}>
          <img id="expanded" src="udemy-mern.png" />
        </Modal>

        <div
          onClick={() => setIsOpenSix(true)}>
          <img id="cerf" src="udemy-rails-cerf.png" />
        </div>
        <Modal openSix={isOpenSix} onClose={() => setIsOpenSix(!isOpenSix)}>
          <img id="expanded" src="udemy-rails-cerf.png" />
        </Modal>

        <div
          onClick={() => setIsOpenSev(true)}>
          <img id="cerf" src="hackathon-winners.png" />
        </div>
        <Modal openSev={isOpenSev} onClose={() => setIsOpenSev(!isOpenSev)}>
          <img id="expanded" src="hackathon-winners.png" />
        </Modal>



      </div>
    </div>
  )
}

export default ResumePage;