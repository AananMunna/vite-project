import Agency from "../agency/Agency"
import HeroTemplate from "../HeroTemplate"
import Rotate from 'react-reveal/Rotate';
import Testimonials from '../testimonials/Testimonials'
import Zoom from 'react-reveal/Zoom';
import aboutImg from '../../assets/about_1.png (1).webp'
import team1 from '../../assets/person_1.jpg.webp'
import team2 from '../../assets/person_2.jpg.webp'
import team3 from '../../assets/person_3.jpg.webp'

const About = () => {
  return (
    <>
            <HeroTemplate
     subHeading="ABOUT"
     heading="About Us"
     text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
     button1="How we work"
     button2="Contact us"
     heroImg={aboutImg}
     /> 
     <Agency />
     <div className="container my-5 py-5">
     <Zoom cascade>
     <div className="featuresHead text-center mt-5 pt-5">
          <span className='sub-heading mb-2'>TEAM</span>
          <h1 className='heading'>Team</h1>
          <p className='p'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind <br /> texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        </div>
        </Zoom>
        <div className="row">
          <div className="col-lg-3 col-md-6">
          <Rotate bottom left>
            <div className="p-3 d-flex flex-column justify-content-center align-items-center">
              <img src={team1} alt="" className="my-2 rounded-2 img-fluid" />
              <div className="featuresH">James Watson</div>
              <div className="p">Co-Founder & CEO</div>
            </div>
            </Rotate>
          </div>
          <div className="col-lg-3 col-md-6">
          <Rotate top left>
            <div className="p-3 d-flex flex-column justify-content-center align-items-center">
              <img src={team2} alt="" className="my-2 rounded-2 img-fluid" />
              <div className="featuresH">Carl Anderson
</div>
              <div className="p">Co-Founder & CEO</div>
            </div>
            </Rotate>
          </div>
          <div className="col-lg-3 col-md-6">
          <Rotate bottom left>

            <div className="p-3 d-flex flex-column justify-content-center align-items-center">
              <img src={team3} alt="" className="my-2 rounded-2 img-fluid" />
              <div className="featuresH">Michelle Allison</div>
              <div className="p">Co-Founder & CEO</div>
            </div>
            </Rotate>
          </div>
          <div className="col-lg-3 col-md-6">
          <Rotate bottom right>
            <div className="p-3 d-flex flex-column justify-content-center align-items-center">
              <img src={team1} alt="" className="my-2 rounded-2 img-fluid" />
              <div className="featuresH">Drew Wood</div>
              <div className="p">Co-Founder & CEO</div>
            </div>
              </Rotate>
          </div>
           
        </div>
     </div>

     <Testimonials/>
    </>
  )
}

export default About