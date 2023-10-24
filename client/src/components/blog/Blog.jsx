import React from 'react'
import {  FaLessThan } from "react-icons/fa"
import loginImg from "../../../public/login-img.jpg";
import Image from 'next/image';

function Blog() {
  return (
    <div className=' my-2'>
        <h1 className=' flex items-start gap-3'>
            <span className=' font-semibold text-3xl text-[#FF165D]'>1.</span>
            <span className=' text-slate-50 font-bold text-2xl w-[550px]'>From Thinning Crown to Thick and Luscious Hair: My Game-Changing Journey</span>
        </h1>
        <div className=' grid grid-cols-5 gap-8 items-center justify-center my-5'>
          <div className=' col-span-2 flex flex-col justify-center items-center gap-5'>
            <div><Image className=' rounded-xl h-[22rem]' src={loginImg} alt="Picture of the author" /></div>
            <button className=' text-slate-50 font-medium text-xl bg-[#FF165D] py-2 px-2 rounded w-full'>Download</button>
          </div>
          <div className=' col-span-3 grid grid-rows-2 gap-4'>
            <div className=' relative bg-slate-600 py-7 pl-6 pr-12 rounded-md h-fit'>
            <p className=' text-slate-50'>{"The video effectively captures the viewer's attention with an engaging hook and maintains coherence by staying focused on the topic throughout. It provides valuable personal experiences and recommendations, creating a connection with the viewers. While it touches on a popular trend, it could benefit from further exploration and a call to action."}</p>
              <div className=' absolute -top-7 -right-5 bg-stone-800 py-3 px-3 rounded-full'><h1 className=' text-[#66FFA3] text-xl font-medium text-center'>99</h1><h1 className=' text-[#66FFA3]'>SCORE</h1></div>
            </div>
            <div className=' relative bg-stone-700 py-7 px-6 rounded-md h-fit'>
            <p className=' text-slate-50'>{"In this vlog I'm going to share with you how I got my hair from this to this A thinning crown to a nice beautiful luscious head of thick hair Baby I'm going to share the products that I use and made the most difference Things that I tried and didn't really work so that you don't have to waste your time And this is a vlog so sit back relax grab a cup of coffee..."}</p>
              <div className=' mt-3 flex justify-center items-center -rotate-90'><FaLessThan color='white' /></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Blog