import React from 'react'
import InputComponent from './InputComponent'
import File from './File'

function HomeSection() {
  return (
    <div className=' flex flex-col justify-center items-center gap-14 my-52'>
        <div className="flex justify-center">
          <InputComponent />
        </div>
        <File />
    </div>
  )
}

export default HomeSection