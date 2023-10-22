import React from 'react'
import {  FaLessThan } from "react-icons/fa"
import { BsYoutube } from "react-icons/bs"
import Blog from './Blog'

function BlogContainer() {
  return (
    <div className='bg-slate-900 py-20 pl-40 pr-56'>
        <div className=' flex items-center gap-12'>
            <span><FaLessThan color='white' /></span>
            <p className=' flex items-center gap-2 text-sm text-slate-100 font-medium'><span><BsYoutube color='white' /></span><span>0:07:12 (0:00:00 - 0:07:12) how i reversed balding</span></p>
        </div>
        <div className=' flex flex-col gap-8 my-14'>
            <Blog />
            <Blog />
        </div>
    </div>
  )
}

export default BlogContainer