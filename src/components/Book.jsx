import React, { useState } from 'react'
import { BsDashLg } from "react-icons/bs";
import { FaArrowsAltH } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Book = ({startDate,endDate,handleStartChange,selectedTrip,handleTrip,Passenger,handlePassenger}) => {
    // const [selectedTrip, setSelectedTrip] = useState('');
    // const handleTrip = (event) => {
    //     setSelectedTrip(event.target.value);
    //   };
    //   const [Passenger, setPassenger] = useState('');
    //   const handlePassenger = (event) => {
    //     setPassenger(event.target.value);
    //     };
  return (
    <div className='bg-[#11172b] w-[100%] h-screen justify-center '>
     
   <div className=' flex flex-col mt-3 '>
        <div className='flex justify-between p-7 text-white'>
            <h1 className='text-center text-3xl text-red-600'>GAU</h1>
            < FaArrowsAltH size={40}/>
            <h1 className='text-center text-3xl text-red-600'>JFK</h1>
          </div>
      <div className='mt-8'>
      <select className='px-32 outline-0 bg-[#11172b] text-white'id="dropdown" value={selectedTrip} onChange={handleTrip}>
        <option value="oneway">One-Way</option>
        <option value="roundtrip">Round Trip</option>
        {/* <option value="oneway">One-Way</option> */}
        
      </select>
      </div>
      <Link to='/calendar'>
      <div className='flex  mt-9 justify-between text-white'>
      <div>
        {startDate ?<p>{startDate.toDateString()}</p>:<p>Depart</p>}
      </div>
        <BsDashLg/>
       <div className={selectedTrip==='roundtrip'?'block':'hidden'}>
       {endDate ?<p>{endDate.toDateString()}</p>:<p>Return</p>}
       </div>
      </div>
      </Link>

     <div className='mt-8'>
     <select className='px-32 outline-0 bg-[#11172b] text-white'id="dropdown" value={Passenger} onChange={handlePassenger}>
        <option value="">Passenger 1</option>
        <option value="option1">Passenger 1</option>
        <option value="option2">Passenger 2 </option>
        <option value="option3">Passenger 3 </option>
        <option value="option3">Passenger 4 </option>
        <option value="option3">Passenger 5</option>
        <option value="option3">Passenger 6</option>
        <option value="option3">Passenger 7</option>
        <option value="option3">Passenger 8</option>
        <option value="option3">Passenger 9</option>

      </select>

     </div>
   </div>
      
           

    
    </div>
   
  
  )
}

export default Book
