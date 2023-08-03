import './accordion.css'

import Bounce from 'react-reveal/Bounce';
import HeroTemplate from '../HeroTemplate'
import aboutImg from '../../assets/about_1.png (1).webp'

const Accordion = () => {
  return (
    <>
                            <HeroTemplate
     subHeading="FAQ"
     heading="Frequently Asked Questions"
     text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
     button1="How we work"
     button2="Contact us"
     heroImg={aboutImg}
     /> 
     <div className="pt-5">
        <div className="my-5 py-5 testimonials">
            <div className="container">
            <div className="featuresHead text-center mt-5 pt-5">
          <span className='sub-heading mb-2'><Bounce cascade>FAQ</Bounce></span>
          <h1 className='heading'><Bounce bottom cascade>Frequently Asked Questions</Bounce></h1>
          <Bounce><p className='p'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind <br /> texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p></Bounce>
        </div>

        <div className="accordion my-5 pt-5" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        How Can I download
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body p-4">
        <div className="p my-2">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
        <div className="p">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</div>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        is it free?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
      <div className="accordion-body">
      <div className="p my-2">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
        <div className="p">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</div>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Where can i get a support?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
      <div className="accordion-body">
      <div className="p my-2">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
        <div className="p">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</div>
      </div>
    </div>
  </div>
</div>

            </div>
        </div>
        </div>
    </>
  )
}

export default Accordion