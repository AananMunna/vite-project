import "react-multi-carousel/lib/styles.css";
import 'react'
import './testimonials.css'

import Bounce from 'react-reveal/Bounce';
import Carousel from "react-multi-carousel";
import sliderImg1 from '../../assets/person_1.jpg.webp'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: {
      max: 4000,
      min: 3000
    },
    items: 5
  },
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 767
    },
    items: 2
  },
  mobile: {
    breakpoint: {
      max: 767,
      min: 0
    },
    items: 1
  }
};

const Testimonials = () => {
  return (
    <div className="testimonials pt-1">
    <div className="container position-relative">
      <div className="row mt-5">
        <div className="col">
        <Bounce bottom>
        <div className="text-center mt-5 pt-5 marginBottom">
          <span className='sub-heading mb-2'>TESTIMONIALS</span>
          <h1 className='heading'>Testimonials</h1>
          <div className="p">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind <br /> texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</div>
        </div>
        
          <Carousel responsive={responsive} showDots={true} infinite={true} autoPlay={true} dotListClass="custom-dot-list-style" className="my-5">
          <div className="sliderCard m-2">
            <p className="sliderText">“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.”</p>
            <div className="d-flex">
              <div className="sliderImg">
                <img src={sliderImg1} alt="sliderImg1" className="img-fluid rounded-5" />
              </div>
              <div className="sliderImgName">
                <span>Drew Wood</span>
                <p className="p">Director at Google</p>
              </div>
            </div>
          </div>
    <div className="sliderCard m-2">
            <p className="sliderText">“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.”</p>
            <div className="d-flex">
              <div className="sliderImg">
                <img src={sliderImg1} alt="sliderImg1" className="img-fluid rounded-5" />
              </div>
              <div className="sliderImgName">
                <span>Drew Wood</span>
                <p className="p">Director at Google</p>
              </div>
            </div>
          </div>
    <div className="sliderCard m-2">
            <p className="sliderText">“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.”</p>
            <div className="d-flex">
              <div className="sliderImg">
                <img src={sliderImg1} alt="sliderImg1" className="img-fluid rounded-5" />
              </div>
              <div className="sliderImgName">
                <span>Drew Wood</span>
                <p className="p">Director at Google</p>
              </div>
            </div>
          </div> 
          </Carousel>
          </Bounce>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Testimonials
