import React from 'react'
import { Navbar } from '../components/Navbar'

export const RiLayout = ({ children }) => {
  return (
    <>
        <Navbar />

        <div className=''>
            {children}
        </div>

    </>
  )
}
