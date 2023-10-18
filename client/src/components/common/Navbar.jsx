"use client"
import React, { useState } from 'react'
import Popup from './Popup'

function Navbar() {
  const [showPopup, setShowPopup] = useState(false)
  return (
    <>
      <div className=' flex items-center justify-between'>
          <h1 className=' text-4xl font-bold text-stone-50'>LOGO</h1>
          <div className=' flex items-center justify-center cursor-pointer' onClick={()=>setShowPopup(true)}>
              <span className=' mt-1'><ion-icon name="log-in-outline" size="large"></ion-icon></span>
              <p className=' text-lg font-medium text-stone-50'>Sign in</p>
          </div>
      </div>

      <Popup 
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />
    </>
  )
}

export default Navbar