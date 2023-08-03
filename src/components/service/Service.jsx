import React, { useState } from 'react';

import CountUp from 'react-countup';
import HeroTemplate from '../HeroTemplate'
import ScrollTrigger from 'react-scroll-trigger'
import Services from '../services/Services'
import Zoom from 'react-reveal/Zoom';
import aboutImg from '../../assets/about_1.png (1).webp'

const Service = () => {
    const [counterOn, setCounterOn]=useState(false)
  return (
    <>
                    <HeroTemplate
     subHeading="SERVICES"
     heading="Services"
     text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
     button1="How we work"
     button2="Contact us"
     heroImg={aboutImg}
     />  
     <Services/>
     <div className="testimonials my-5 py-5">
     <div className="container ">
     <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
     <div className="featuresHead text-center mt-5 pt-5">
          <span className='sub-heading mb-2'><Zoom cascade>STATS</Zoom></span>
          <h1 className='heading'><Zoom cascade>Stats</Zoom></h1>
          <Zoom><p className='p'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there <br /> live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a <br /> large language ocean.</p></Zoom>
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-6">
                <div className="p-3 d-flex flex-column justify-content-center align-items-center"><h1 className='heading'>{counterOn && <CountUp start={0} end={3923} duration={2} delay={0}/>}</h1></div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="p-3 d-flex flex-column justify-content-center align-items-center"><h1 className='heading'>{counterOn && <CountUp start={0} end={131} duration={2} delay={0}/>}</h1></div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="p-3 d-flex flex-column justify-content-center align-items-center"><h1 className='heading'>{counterOn && <CountUp start={0} end={962} duration={2} delay={0}/>}</h1></div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="p-3 d-flex flex-column justify-content-center align-items-center"><h1 className='heading'>{counterOn && <CountUp start={0} end={5949} duration={2} delay={0}/>}</h1></div>
            </div>
        </div>
        </ScrollTrigger>
     </div>
     </div>
    </>
  )
}

export default Service