import './ResumePage.css';
import { FaDownload } from 'react-icons/fa'
import Modal from '../Modal/Modal'
import { useEffect, useState } from 'react';

const ResumePage = ({ setIsOpen, isOpen, isVisible }) => {
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    if (isVisible) setAnim(true);
  }, [isVisible])

  return (
    <div className={anim ? "container-five slide-in-elliptic" : 'container-five'} id='resume-title'>

      <h1 className={anim ? "title res title-fade" : 'title res'} id="black">Resume & Cerf</h1>

      <div className="resume-col">
        <p id="top">Download My Resume</p>
        <a href="Resume (1).pdf" download >
          <FaDownload id="resume" />
        </a>
      </div>

      <div className="cerf-row">
        <div
          onClick={() => setIsOpen(true)}>
          <img id="cerf" src="cerf.png" alt='' />
        </div>
        <Modal open={isOpen} onClose={() => setIsOpen(!isOpen)}>
          <img id="expanded" src="cerf.png" alt='' />
        </Modal>

      </div>
    </div>
  )
}

export default ResumePage;