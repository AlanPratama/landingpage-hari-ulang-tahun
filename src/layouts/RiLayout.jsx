import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const RiLayout = ({ children }) => {
  return (
    <>
        <Navbar/>

        {children}

        <Footer/>

    </>
  )
}
