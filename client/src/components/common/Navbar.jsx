import React from 'react'

function Navbar() {
  return (
    <div className=' flex items-center justify-between'>
        <h1 className=' text-4xl font-bold text-stone-50'>LOGO</h1>
        <div className=' flex items-center justify-center'>
            <span className=' mt-1'><ion-icon name="log-in-outline" size="large"></ion-icon></span>
            <p className=' text-lg font-medium text-stone-50'>Sign in</p>
        </div>
    </div>
  )
}

export default Navbar