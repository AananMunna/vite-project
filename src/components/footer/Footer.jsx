import './footer.css'

import {BiLogoFacebook, BiLogoInstagram, BiLogoTwitter} from 'react-icons/bi';
import {MdCall, MdEmail, MdLocationPin} from 'react-icons/md';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='container my-5 pt-5'>
      <div className="row mt-3">
        
      <div className="col-lg-4 col-md-6">
          <div className="footerH">About Cololib</div>
          <div className="p">Far far away, behind the word mountains, far from <br /> the
            countries Vokalia and Consonantia, there live the <br /> blind texts.</div>
          <div className="d-flex footerIcon">
            <li><BiLogoTwitter/></li>
            <li><BiLogoInstagram/></li>
            <li><BiLogoFacebook/></li>
          </div>
        </div>
      <div className="col-lg-2 col-md-6">
          <div className="footerH footerMarginLeft">Pages</div>  
          <ul className='footerNav'>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      <div className="col-lg-2 col-md-6">
          <div className="footerH footerMarginLeft">Resources</div>  
          <ul className='footerNav'>
          <li><Link to="/">Blog</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      <div className="col-lg-4 col-md-6">
          <div className="footerH footerMarginLeft">Contact</div>  
          <ul className='footerNav footerNavLast'>
            <li><MdEmail/><a href="#">info@Cololib</a></li>
            <li><MdCall/><a href="#">+1 222 212 3819</a></li>
            <li><MdLocationPin/><a href="#">43 Raymouth Rd. Baltemoer, London 3910</a></li>
          </ul>
        </div>
<div className="p text-center my-5 pt-2">Copyright ©2023 All rights reserved | This template is made with  by Colorlib</div>
      </div>
    </div>
  )
}

export default Footer