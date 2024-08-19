import React from 'react'
import { Navbar } from '../components/Navbar'

export const RiLayout = ({ chidlren }) => {
  return (
    <>
        <Navbar/>

        {chidlren}

    </>
  )
}
