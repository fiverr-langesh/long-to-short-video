"use client"
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import loginImg from "../../../public/login-img.jpg";
import Image from 'next/image';

function VideoLoad() {
  const [language, setLanguage] = useState('');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div>
        <span className=' flex items-center gap-16'>
          <span className=' flex items-center gap-4'>
            <h1 className=' text-stone-400 mt-4 font-semibold text-lg'>Caption: </h1>
            <FormControl variant="standard" className=' text-slate-50' sx={{ minWidth: 120, }}>
              <InputLabel className=' text-slate-50' id="demo-simple-select-standard-label">Language</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={language}
                onChange={handleChange}
                label="Language"
                className=' text-slate-50'
              >
                <MenuItem value={"english"}>English</MenuItem>
                <MenuItem value={"french"}>French</MenuItem>
                <MenuItem value={"japanese"}>Japanese</MenuItem>
              </Select>
            </FormControl>
          </span>
          <span className=' flex items-center gap-2'>
            <h1 className=' text-stone-400 mt-4 font-semibold text-lg'>Credit usage: </h1>
            <p className=' ml-1 mt-4 text-stone-200 font-medium'>~ 6m</p>
          </span>
        </span>
        <div className='flex items-center justify-center mt-7'>
          <div className=" relative h-fit w-fit">
            <Image src={loginImg} className=" h-44 w-80 rounded-lg " alt="" />
            <div className=" absolute top-1 left-2 text-xs font-semibold bg-gray-800 py-1 px-2 rounded-xl text-[#66FFA3]">
              720p
            </div>
          </div>
        </div>
    </div>
  )
}

export default VideoLoad