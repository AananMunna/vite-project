import './navbar.css'
import 'animate.css';

import {AiOutlineRight} from 'react-icons/ai';
import { Link } from "react-router-dom"
import {RiArrowDropDownLine} from 'react-icons/ri';
import {RxHamburgerMenu} from 'react-icons/rx';
import Slide from 'react-reveal/Slide';
import logo from '../../assets/logo.png.webp'

const Navbar = () => {
  return (
    <>
<Slide top>
    <nav className="navbar navbar-expand-lg mt-4">
      <div className="container">
        <Link className="navbar-brand" to="/react-js-project-2/">
          <img src={logo}/>
        </Link>
        <span
          id='hamburger'
          className="navbar-toggler"
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions">
          <RxHamburgerMenu/>
        </span>
        <div
          className="offcanvas offcanvas-end"
          data-bs-scroll="true"
          tabIndex="-1"
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel">
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>
          <div className="navbar-nav ms-lg-auto">
            <Link className="nav-link active" aria-current="page" to="/react-js-project-2/">Home</Link>
            <a className="nav-link navbarLink position-relative">Dropdown
              <RiArrowDropDownLine className='ms-1 dropIcon'/>

              <ul className='dropdownMenu animate__animated animate__slideInUp'>
                <li>
                  <a href="#">Menu One</a>
                </li>
                <li className='position-relative'>
                  <a href="#" className='subMenuD'>Menu Two <AiOutlineRight className='ms-5'/>
                    <ul className='dropdownSubMenu animate__animated animate__fadeInUp'>
                      <li>
                        <a href="#">Sub Menu One</a>
                      </li>
                      <li>
                        <a href="#">Sub Menu Two</a>
                      </li>
                      <li>
                        <a href="#">Sub Menu Three</a>
                      </li>
                    </ul>

                  </a>
                </li>
                <li>
                  <a href="#">Menu Three</a>
                </li>
              </ul>

            </a>
            <Link className="nav-link"  to="/about">About</Link>
            <Link className="nav-link " to="/services">Services</Link>
            <Link className="nav-link " to="/faq">FAQ</Link>
            <Link className="nav-link " to="/contact">Contact Us</Link>
            <button className='downloadBtn nav-link'>Download Now</button>
          </div>
        </div>
      </div>
    </nav>
    </Slide>
    </>
  )
}

export default Navbar