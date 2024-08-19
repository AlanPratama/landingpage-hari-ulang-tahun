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
      <Footer />
    </>
  )
}
