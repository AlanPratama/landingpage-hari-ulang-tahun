import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import ScrollToTop from "../components/ScrollToTop";
import { Splash } from '../pages/Splash';


export const RiLayout = ({ children }) => {
  return (
    <>
      <Splash />
      <Navbar />
      {children}
      <ScrollToTop />
      <div style={{ height: "2000px" }}>
        <h1>Scroll down to see the button</h1>
      </div>
      <Footer />

        <div className=''>
            {children}
        </div>
    </>
  )
}
