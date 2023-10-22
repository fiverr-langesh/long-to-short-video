import React, { useState } from 'react'
import { TiTick } from "react-icons/ti" 
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SubscribeButton from '../stripe/SubscribeButton';

function Pricing({ mostPopular, type, price, optionTitle, option, option1, option2, option3, include2, include3, include5, include6 }) {
  const [options, setOptions] = useState(option1);

  const handleChange = (event) => {
    setOptions(event.target.value);
  };

  return (
    <div className={`${mostPopular && "bg-slate-800"} flex flex-col justify-center gap-4 px-10 py-8 rounded`}>
      <div className={` ${mostPopular ? "block" : "hidden"} text-xs font-medium bg-slate-700 text-slate-50 rounded-full py-0.5 px-2 w-fit`}>Most popular</div>
      <h1 className=' font-semibold text-xl text-white mb-7'>{type}</h1>
      <h1 className=' font-bold text-4xl text-white'>$ {price}</h1>
      {/* <h1 className=' font-bold text-4xl text-white'>$ {Number(options * price).toFixed(2)}</h1> */}

      <SubscribeButton amount={price} plan={type} minutes={options} />

      <p className=' font-medium text-slate-100 -mb-3'>{optionTitle}</p>
      <div className={`${option ? "block" : "hidden"}`}>
        <FormControl sx={{ minWidth: 200, height:30, backgroundColor:"#1e293b" ,color:"white", borderRadius:1, }}>
          <Select
            value={options}
            onChange={handleChange}
            displayEmpty
            sx={{ height:30, color:"white", paddingTop:2, paddingBottom:2 }}
            inputProps={{ 'aria-label': 'Without label' }}
            >
            <MenuItem value={option1}>{option1} upload minutes/month</MenuItem>
            <MenuItem value={option2}>{option2} upload minutes/month</MenuItem>
            <MenuItem value={option3}>{option3} upload minutes/month</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className=' flex flex-col gap-2 text-slate-200 text-sm mt-7'>
        <h2 className=' font-medium'>This includes</h2>
        <p className='flex items-center gap-2'><span><TiTick /></span><span>Up to 1080p clips</span></p>
        <p className='flex items-center gap-2'><span><TiTick /></span><span>{include2}</span></p>
        <p className='flex items-center gap-2'><span><TiTick /></span><span>{include3}</span></p>
        <p className='flex items-center gap-2'><span><TiTick /></span><span>Auto reframe</span></p>
        <p className='flex items-center gap-2'><span><TiTick /></span><span>{include5}</span></p>
        <p className='flex items-center gap-2'><span><TiTick /></span><span>{include6}</span></p>
      </div>
    </div>
  )
}

export default Pricing