import './features.css'

import Fade from 'react-reveal/Fade';
import {RxRocket} from 'react-icons/rx';
import Zoom from 'react-reveal/Zoom';

const Features = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center">
      <Fade bottom cascade>
        <div className="featuresHead">
          <span className='sub-heading mb-2'>FEATURES</span>
          <h1 className='heading'>Our Features</h1>
          <p className='p mb-5 pb-5'>Far far away, behind the word mountains, far from the countries
            <br/>
            Vokalia and Consonantia, there live the blind texts. Separated they
            <br/>
            live in Bookmarksgrove right at the coast of the Semantics, a large
            <br/>
            language ocean.</p>
        </div>

        </Fade>
        <Zoom cascade>
        <div
          className="col-lg-4 position-relative text-center  my-5">
          <span className="icon">
          <RxRocket className='featuresIcon'/>
          </span>
          <div className='featuresH mt-2 mb-2'>Marketing Analysis</div>
          <p className='p'>Far far away, behind the word
            <br/>
            mountains, far from the countries
            <br/>
            Vokalia and Consonantia, there live
            <br/>
            the blind texts.</p>
        </div>
        <div
          className="col-lg-4 position-relative text-center  my-5">
          <span className="icon">
          <RxRocket className='featuresIcon'/>
          </span>
          <div className='featuresH mt-2 mb-2'>Marketing Analysis</div>
          <p className='p'>Far far away, behind the word
            <br/>
            mountains, far from the countries
            <br/>
            Vokalia and Consonantia, there live
            <br/>
            the blind texts.</p>
        </div>
        <div
          className="col-lg-4 position-relative text-center  my-5">
          <span className="icon">
          <RxRocket className='featuresIcon'/>
          </span>
          <div className='featuresH mt-2 mb-2'>Marketing Analysis</div>
          <p className='p'>Far far away, behind the word
            <br/>
            mountains, far from the countries
            <br/>
            Vokalia and Consonantia, there live
            <br/>
            the blind texts.</p>
        </div>
        </Zoom>
      </div>
    </div>
  )
}

export default Features