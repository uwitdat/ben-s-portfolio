import React, { useState, useEffect } from 'react'
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiGraphql, SiTypescript, SiTailwindcss } from 'react-icons/si';
import './WorkExp.css';
import PYTHON from '../../assets/svgs/python-svgrepo-com.svg';
import NEXT from '../../assets/svgs/next-js.svg';
import AWS from '../../assets/svgs/aws.svg';
import POSTGRES from '../../assets/svgs/pgsql.svg';


const WorkExp = ({ isVisible }) => {
  const [animIn, setAnimIn] = useState(false);

  useEffect(() => {
    if (isVisible) setAnimIn(true)
  }, [isVisible])

  return (
    <div className='WorkExp'>
      <div className="header">
        <h1 className="title">Work Experience </h1>
      </div>
      <section className='WorkExpDetails'>
        <div className='WorkExpDetailsDetail'>
          <div className={animIn ? 'WorkExpDetailsTitle trans-in first' : 'WorkExpDetailsTitle'}>
            <h3>Myplanet <span> 2022 - Present</span></h3>
            <h5>&bull; Software Developer</h5>
          </div>
          <div className={animIn ? 'WorkExpDetailsLans trans-in first' : 'WorkExpDetailsLans'}>
            <div>
              <FaReact style={{ color: 'rgb(135, 197, 255)' }} />
            </div>
            <div>
              <SiJavascript style={{ color: 'rgb(253, 250, 82)' }} />
            </div>
            <div>
              <FaNodeJs style={{ color: 'rgb(131, 254, 147)' }} />
            </div>
            <div>
              <SiMongodb style={{ color: 'rgb(166, 252, 168)' }} />
            </div>
          </div>
        </div>

        <div className='WorkExpDetailsDetail'>
          <div className={animIn ? 'WorkExpDetailsTitle trans-in second' : 'WorkExpDetailsTitle'}>
            <h3>Sedin Technologies <span> 2022</span></h3>
            <h5>&bull; Full-Stack Developer</h5>
          </div>
          <div className={animIn ? 'WorkExpDetailsLans trans-in second' : 'WorkExpDetailsLans'}>
            <div style={{ position: 'relative' }}>
              <span style={nextStyle} />
              <img style={svgStyle} src={NEXT} alt='' />
            </div>
            <div>
              <SiGraphql style={{ color: 'rgb(174, 62, 199)' }} />
            </div>
            <div>
              <SiTypescript style={{ color: 'rgb(42, 83, 142)' }} />
            </div>
            <div>
              <SiTailwindcss style={{ color: 'rgb(56,189,248)' }} />
            </div>
          </div>
        </div>

        <div className='WorkExpDetailsDetail'>
          <div className={animIn ? 'WorkExpDetailsTitle trans-in third' : 'WorkExpDetailsTitle'}>
            <h3>ServUs Health <span> 2021 - 2022</span></h3>
            <h5>&bull; Full-Stack Developer</h5>
          </div>
          <div className={animIn ? 'WorkExpDetailsLans trans-in third' : 'WorkExpDetailsLans'}>
            <div>
              <FaReact style={{ color: 'rgb(135, 197, 255)' }} />
            </div>
            <div>
              <img style={svgStyle} src={PYTHON} alt='' />
            </div>
            <div>

              <img style={svgStyle} src={AWS} alt='' />
            </div>
            <div>
              <img style={svgStyle} src={POSTGRES} alt='' />
            </div>
          </div>
        </div>


      </section>
    </div>
  )
}
const nextStyle = {
  position: 'absolute',
  aspectRatio: '1',
  width: '3rem',
  borderRadius: '50%',
  zIndex: '-1',
  border: 'none',
  backgroundColor: 'white',

  marginLeft: 'auto',
  marginRight: 'auto',
  left: '0',
  right: '0',
  textAlign: 'center',
  transform: 'translateY(7px)'

}
const svgStyle = {
  aspectRatio: '1',
  height: '3.5rem',
}

export default WorkExp