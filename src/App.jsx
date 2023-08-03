import { BrowserRouter, Route, Routes } from "react-router-dom"

import About from "./components/about/About"
import Accordion from "./components/accordion/Accordion"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Service from "./components/service/Service"

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/> 

    <Routes>
        <Route exact path="/react-js-project-2/" element={ <Hero/> } /> 
        <Route exact path="/about" element={ <About/> } /> 
        <Route exact path="/services" element={ <Service/> } /> 
        <Route exact path="/faq" element={ <Accordion/> } /> 
        <Route exact path="/contact" element={ <Contact/> } /> 
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App