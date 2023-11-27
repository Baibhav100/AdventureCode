import React, { useState } from 'react'
import { IoMdArrowRoundForward } from "react-icons/io";

const Trip = () => {
  const [trip,setTrip]=useState('');
  const handleTrip=(data)=>{
    setTrip(data.target.value);
  };
  return (
    <div className='bg-[#11172b] w-[100%] h-[580px] p-2 text-white'>
      <p className='text-red-600 my-3'>Find Your Trip</p>
      <div className='mt-10'>
      <select className='px-30 outline-0 bg-[#11172b] text-white text-md'id="dropdown" onChange={handleTrip} value={trip}>
        <option value="Confirmation Number">Airline Confirmation Number</option>
        <option value="Ticket Number">E-Ticket Number</option>
        {/* <option value="oneway">One-Way</option> */}
        
      </select>
      </div>
    <div className=''>
    <div className='mt-6 py-4 border-b'>
        <input className='w-[100%] bg-transparent  outline-none ' type="text" placeholder={trip}
          />
      </div>
    <div className='mt-6 py-4 border-b'>
        <input className='w-[100%] bg-transparent  outline-none ' type="text" placeholder='First Name' />
      </div>
      <div className='mt-6 py-4 border-b'>
        <input className='w-[100%] bg-transparent  outline-none'type="text" placeholder='Last Name' />
      </div>
   
    </div>
    <div className='w-[60px] h-[60px] bg-red-600 flex justify-center items-center rounded-[50%] float-right mt-9'><IoMdArrowRoundForward/></div>
    </div>
  )
}

export default Trip