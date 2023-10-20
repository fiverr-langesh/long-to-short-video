"use client"
import React, { useState } from 'react'
import InputComponent from './InputComponent'
import File from './File'
import VideoLoad from './VideoLoad'

function HomeSection() {
  const [fileChoosed, setFileChoosed] = useState(true)
  return (
    <div className=' flex flex-col justify-center items-center gap-14 my-52'>
        <div className="flex justify-center">
          <InputComponent />
        </div>
        {
          fileChoosed ?
          <VideoLoad /> :
          <File />
        }
    </div>
  )
}

export default HomeSection