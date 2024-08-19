import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import ScrollToTop from "../components/ScrollToTop";
import MusicButton from '../components/MusicButton';


export const RiLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <MusicButton />
      <ScrollToTop />
      <div style={{ height: "2000px" }}>
        <h1>Scroll down to see the button</h1>
      </div>
      <Footer />
    </>
  )
}
