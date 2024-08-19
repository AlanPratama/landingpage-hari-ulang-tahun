import React from 'react'
import { Navbar } from '../components/Navbar'
import { Splash } from '../pages/Splash'

export const RiLayout = ({ children }) => {
  return (
    <>

        <Splash/>
        <Navbar/>

        {children}

    </>
  )
}
