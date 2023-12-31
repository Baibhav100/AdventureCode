
import React from 'react'
import { useState,useEffect } from 'react'

import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlinePhone } from "react-icons/ai";
import Card from './Cards';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calendar from './Calendar';

const Blackscreen = () => {
    const [showBlackScreen, setShowBlackScreen]=useState(false);
    const[closeScreen,setCloseScreen]=useState(false)

    const handle=()=>{
        setCloseScreen(true);
    }
    useEffect(()=>{
       const timeoutId=setTimeout(()=>{
        setShowBlackScreen(true);
       },0);

       return()=>clearTimeout(timeoutId);
    },[]);
  return (
    
   <div className={closeScreen?'hidden':'block'}>
     <div className={showBlackScreen?'md:hidden bg-[#fcfcfc] h-[100vh] w-[100vw] z-999 fixed ':'hidden'}>
            {/* <div className='flex justify-between w-[98%] p-6'>
             <div className='flex  justify-center items-center gap-2'>
             <div className=' font-bold w-[40px] h-[40px] rounded-[50%] flex justify-center items-center bg-[#71de46] cursor-pointer text-white'><a href="tel:+918011294860">< AiOutlinePhone size={20}/></a></div>
             <p className='text-white text-2xl md:text-3xl'>Call Us!</p>
             </div>
            <div onClick={handle} className='font-bold w-[30px] h-[30px] text-gray-500 rounded-[50%] flex justify-center items-center bg-white cursor-pointer'><AiOutlineClose size={20}/></div>
            </div>
             */}
             
     {/* <div className='flex  justify-center items-center text-center h-screen'>
 <div className='mt-[-15%]'>
  <Image width={64} height={64} src='/airliner.png'/>
 <h1>Adventure Code!</h1>
      <div className={showBlackScreen?'text-white text-center':'hidden'}>
        <p className='text-xl text-center py-2'>Flight Bookings | IT and Web Development and many more...</p> 

      </div>

 </div>
     </div> */}
     <div className='w-[100%] h-[40px] bg-[#44587b] flex items-center justify-center'>
      <div className='w-[80%] h-[40px] flex justify-between items-center'>
          <div>
          <div onClick={handle} className='font-bold w-[30px] h-[30px] text-gray-500 rounded-[50%] flex justify-center items-center bg-white cursor-pointer'><AiOutlineClose size={20}/></div>
          </div>
          <div className='flex gap-2 justify-center items-center'>
            <p className='text-white text-sm '>Customer Support </p>
            <div className='bg-[#44587b] w-[100px] flex justify-center items-center gap-1'>
            <a  className='text-white'href="tel:+918011294860">< AiOutlinePhone size={20}/></a>
              <p className='text-white'>call</p>
            </div>
          </div>
      </div>
     </div>
     
      <div className='w-[100%] h-screen bg-[#11172b] flex justify-center items-center'>
        <div className='flex justify-between items-center'>
          <div className='bg-white w-[400px] h-screen flex justify-center'>
            <Card/>
          </div>
        </div>
      </div>
   

    </div>
   </div>

  )
}

export default Blackscreen
