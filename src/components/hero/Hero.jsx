import './hero.css'

import Agency from "../agency/Agency"
import Features from "../features/Features"
import HeroTemplate from '../HeroTemplate'
import Services from "../services/Services"
import Testimonials from "../testimonials/Testimonials"
import heroImg from '../../assets/hero_1.png.webp'

const Hero = () => {
  return (
    <>
    <HeroTemplate
     subHeading="WELCOME TO OUR SITE"
     heading="Expert SEO, SEM Services in London"
     text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
     button1="How we work"
     button2="Contact us"
     heroImg={heroImg}
     />  

    <Features/> 
    <Agency/> 
    <Services/> 
    <Testimonials/> 
    </>
  )
}

export default Hero