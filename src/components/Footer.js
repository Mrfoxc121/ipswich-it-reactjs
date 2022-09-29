import React from 'react'
import { FaCopyright } from "react-icons/fa";
import logo from '../images/logo.jpeg'

export default function Footer() {
  return (
    <div className='mt-[100px] mb-[50px]'>
      <div className="flex justify-center gap-2 items-center uppercase">
      <h4 className='text-sm font-bold uppercase '>Ipswich</h4>
        <img src={logo} className="w-[40px]" alt="" />
        <h4 className='text-sm font-bold uppercase '>- all rights reserved </h4>
        <h4 className='text-sm font-bold uppercase '>- Copyright 2022</h4>

        <FaCopyright />
        
      </div>
    </div>
  )
}
