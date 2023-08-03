import './contact.css'

import HeroTemplate from '../HeroTemplate'
import Pulse from 'react-reveal/Pulse';
import aboutImg from '../../assets/about_1.png (1).webp'

const Contact = () => {
    const formData =()=>{
        let firstName = document.getElementById("firstName");
        let lastName = document.getElementById("lastName");
        let email = document.getElementById("email");
        let message = document.getElementById("message");
        
        let data = `YOUR NAME: ${firstName.value} ${lastName.value} 
YOUR EMAIL: ${email.value}
YOUR MESSAGE: ${message.value}
        `;
        console.log(data)
        firstName.value=""
        lastName.value=""
        email.value=""
        message.value=""
    }
  return (
    <>
        <HeroTemplate
     subHeading="CONTACT"
     heading="Get In Touch"
     text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
     button1="How we work"
     button2="Contact us"
     heroImg={aboutImg}
     />

     <div className="container my-5 py-5">
        <div className="row justify-content-center mt-5">
            <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0">
                <div className="section-title mb-5">
                    <span>Contact Us</span>
                    <div className="heading">Lets have a talk</div>
                </div>
                <form action='#'>
                    <div className="row">
                        <div className="col-6">
                        <div className="form-group">
                        <label htmlFor="" className='p d-block'>First Name</label>
                        <input type="text" name="" id="firstName" className='input' required/>
                        </div>
                        </div> 
                        <div className="col-6">
                        <div className="form-group">
                        <label htmlFor="" className='p d-block'>Last Name</label>
                        <input type="text" name="" id="lastName" className='input' required/>
                        </div>
                        </div> 
                        <div className="form-group my-3">
                        <label htmlFor="" className='p d-block'>Email Address</label>
                        <input type="email" name="" id="email" className='input' required/>
                        </div>
                        <div className="form-group my-3">
                        <label htmlFor="" className='p d-block'>Message</label>
                        <textarea name="" id="message" cols="30" rows="5" className='input' style={{height:"184px",resize: "none"}} required></textarea>
                        </div>
                        <div>
                        <Pulse><button className='btn btn1' type='submit' onClick={formData}>Send Message</button></Pulse>
                        </div>
                    </div>
                </form>
            </div>
        </div>
     </div>
     
    </>
  )
}

export default Contact