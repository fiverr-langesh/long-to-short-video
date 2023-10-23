"use client"
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


function Processing() {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function valuetext(value) {
        return `${value}°C`;
    }

    const [buttonClicked, setButtonClicked] = useState(1)

  return (
    <div className="flex justify-center items-center">
        <div className=' flex flex-col gap-6 border border-stone-400 bg-gray-700 rounded py-12 px-5 sm:px-12 w-full sm:w-[700px]'>
            <div>
                <h1 className=' flex items-center gap-2 sm:gap-3 mb-4'>
                    <span className=' text-slate-50 text-lg font-bold'>processing timeframe</span>
                    <span className=' text-[#66FFA3] bg-slate-600 py-1 px-1.5 sm:px-3 rounded'>Credit saver</span>
                </h1>
                <Box sx={{ }}>
                    <Slider
                        getAriaLabel={() => 'Time duration'}
                        sx={{ color:"#FF165D", height: 8  }}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        min={0}
                        max={100}
                    />
                </Box>
            </div>
            <div>
                <h1 className=' text-slate-50 text-lg font-bold'>Preferred clip length</h1>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:flex items-center gap-4 justify-center mt-4'>
                    <button className={` ${buttonClicked==1 ? "bg-[#FF165D]" : "bg-slate-600"} hover:bg-[#FF165D] py-1 px-4 font-medium rounded text-slate-50`} onClick={()=>setButtonClicked(1)}>Auto</button>
                    <button className={` ${buttonClicked==2 ? "bg-[#FF165D]" : "bg-slate-600"} hover:bg-[#FF165D] py-1 px-4 font-medium rounded text-slate-50`} onClick={()=>setButtonClicked(2)}>&lt;30s</button>
                    <button className={` ${buttonClicked==3 ? "bg-[#FF165D]" : "bg-slate-600"} hover:bg-[#FF165D] py-1 px-4 font-medium rounded text-slate-50`} onClick={()=>setButtonClicked(3)}>30s ~ 60s</button>
                    <button className={` ${buttonClicked==4 ? "bg-[#FF165D]" : "bg-slate-600"} hover:bg-[#FF165D] py-1 px-4 font-medium rounded text-slate-50`} onClick={()=>setButtonClicked(4)}>60s ~ 90s</button>
                    <button className={` ${buttonClicked==5 ? "bg-[#FF165D]" : "bg-slate-600"} hover:bg-[#FF165D] py-1 px-4 font-medium rounded text-slate-50`} onClick={()=>setButtonClicked(5)}>90s ~ 3m</button>
                </div>
            </div>
            <div>
                <h1 className=' text-slate-50 text-lg font-bold'>Topic filter by keywords (optional)</h1>
                <input className=' mt-4 py-2 px-5 bg-slate-600 rounded w-full md:w-[500px] focus:outline-none text-slate-50' type="text" placeholder='Add keywords, comma-separated' />
            </div>
        </div>
    </div>
  )
}

export default Processing