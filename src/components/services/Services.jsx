import './services.css'

import {BiBookmarks} from 'react-icons/bi';
import {BsTrophy} from 'react-icons/bs';
import {GoLink} from 'react-icons/go';
import {GoShieldCheck} from 'react-icons/go';
import {HiSpeakerphone} from 'react-icons/hi';
import {RxRocket} from 'react-icons/rx';
import ServicesData from './ServicesData'
import Zoom from 'react-reveal/Zoom';

const Services = () => {
  return (
    <Zoom cascade>
    <div className="container my-5 py-5">
      <div className="row mt-5 pt-5 justify-content-center">
        <div className="text-center mb-5">
          <span className='sub-heading mb-2'>SERVICES</span>
          <h1 className='heading'>Our Services</h1>
        </div>
        <div className="col-lg-8"> 
          <div className="row justify-content-between">
            <ServicesData
              icon={< GoShieldCheck />}
              heading="Design Marketing"
              text="Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts."/>  
            <ServicesData
              icon={< RxRocket />}
              heading="SEO Marketing"
              text="Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts."/>
            <ServicesData
              icon={< HiSpeakerphone />}
              heading="Internet Marketing"
              text="Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts."/>
            <ServicesData
              icon={< GoLink />}
              heading="BackLinks Marketing"
              text="Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts."/>
            <ServicesData
              icon={< BiBookmarks />}
              heading="Social Marketing"
              text="Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts."/>
            <ServicesData
              icon={< BsTrophy />}
              heading="Design Marketing"
              text="Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts."/>
          </div> 
        </div>
      </div>
    </div>
        </Zoom>
  )
}

export default Services