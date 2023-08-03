import '../components/hero/hero.css'

import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom"
import RubberBand from 'react-reveal/RubberBand';
import Zoom from 'react-reveal/Zoom';

const HeroTemplate = (props) => {
  return (
    <div className="">
    <div className="main">
      <div className="container mt-5 pt-5 ">
        <div className="row justify-content-between">
        
          <div className="col-lg-5 mt-3">
          <RubberBand>
            <span className='sub-heading mb-2'>{props.subHeading}</span>
            </RubberBand>
            <Fade bottom cascade>
            <div>
            <h1 className='heading'>{props.heading}</h1>
            </div>
            </Fade>
            <Fade left>

            <p className='p mb-5'>{props.text}</p>
            </Fade>
            <Bounce bottom>
            <div className="d-flex">
              <button className='btn btn1'>{props.button1}</button>
              <Link to="/contact"><button className='btn btn2'>{props.button2}</button></Link>
            </div>
            </Bounce>
          </div> 
          <div className="col-lg-6">
            <div className="heroSection">
            <Zoom>
            <img src={props.heroImg} className='img-fluid sliding-div' alt=""/>
            </Zoom>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeroTemplate