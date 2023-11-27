import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Head from './Head'
import Book from './Book'
import Trip from './Trip'
import Calendar from './Calendar'

const Cards = () => {
  const[startDate,setStartDate]=useState(new Date());
  const[endDate,setEndDate]=useState(new Date());

  const [selectedTrip, setSelectedTrip] = useState('');
    const handleTrip = (event) => {
        setSelectedTrip(event.target.value);
      };
      const [Passenger, setPassenger] = useState('');
      const handlePassenger = (event) => {
        setPassenger(event.target.value);
        };

  const handleStartChange = (date) => {
   setStartDate(date);
  
  };
  const handleEndChange = (date) => {
    setEndDate(date);
   
   };
//trips
const [trip,setTrip]=useState('');
const handleTrips=(data)=>{
  setTrip(data.target.value);
};
  return (
    <BrowserRouter>
<div className=' w-[100%] h-screen  bg-[#11172b] p-6'>
        <Head/>
        <Routes>
            <Route path='/' element={<Book startDate={startDate}  endDate={endDate}  handleStartChange={handleStartChange} handleEndChange={handleEndChange} selectedTrip={selectedTrip} handleTrip={handleTrip}/>}/>
            <Route path='/trip' element={<Trip trip={trip}  handleTrips={ handleTrips}/>}/>
            <Route path='/calendar' element={<Calendar startDate={startDate} endDate={endDate} handleStartChange={handleStartChange} handleEndChange={handleEndChange} selectedTrip={selectedTrip} handleTrip={handleTrip} />}/>
           
        </Routes>
      
 </div>
    </BrowserRouter>
  )
}

export default Cards
