import './agency.css'

import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';
import { Link } from "react-router-dom"
import {MdDone} from 'react-icons/md';
import about from '../../assets/about_1.png.webp'

const Agency = () => {
  return (
    <div className="">
      <div className="main">
        <div className="container mt-5 pt-5 "> 
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="heroSection mb-5 mt-5">
              <Fade left>
                <img src={about} className='img-fluid' alt=""/>
                </Fade>
              </div>
            </div>
            <div className="col-lg-5">
            <Fade right cascade>
            <div>
            <Fade bottom cascade>
            <div>
              <span className='sub-heading mb-2'>ABOUT US</span>
              <h1 className='heading'>Why our
                <br/>
                agency?</h1>
              <p className='p mb-3'>Separated they live in Bookmarksgrove right at the
                <br/>
                coast of the Semantics, a large language ocean.
                <br/><br/>Far far away, behind the word mountains, far from
                <br/>
                the countries Vokalia and Consonantia, there live the
                <br/>
                blind texts. Separated they live in Bookmarksgrove
                <br/>
                right at the coast of the Semantics, a large language
                <br/>
                ocean.</p>
                </div>
                </Fade>
                </div>
              <div className="selectDivP d-flex mt-3">
                <MdDone className='mt-1'/>
                <div className="p ms-2">Behind the word mountains</div>
              </div>
              <div className="selectDivP d-flex mt-1">
                <MdDone className='mt-1'/>
                <div className="p ms-2">Bookmarksgrove right at the coast</div>
              </div>
              <div className="selectDivP d-flex mt-1">
                <MdDone className='mt-1'/>
                <div className="p ms-2">Semantics, a large language</div>
              </div>
              <HeadShake>
               <Link to="/about"> <button className='btn btn1 mt-4'>About Us</button></Link>
               </HeadShake>
            </Fade>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Agency