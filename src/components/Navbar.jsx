import React, { useState } from 'react'
// import Image from 'next/image'
import { Link } from 'react-router-dom';
import { AiOutlineMenu,AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import{ FaGithub, FaLinkedinIn} from 'react-icons/fa'
import { AiOutlinePhone } from "react-icons/ai";


const Navbar = () => {
  const [nav,setNav]=useState(false)
  const handleNav=()=>{
    setNav(!nav)
  }
  return (
    <div className='w-full h-20 shadow-xl z-[100] bg-[#ecf0f3] 'id='1'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
       <h2 className='sm:text-2xl md:text-3xl text-xl'>Adventure Code</h2>
        <div>
          <ul className='hidden md:flex'>
            
              <li className='ml-10 text-small uppercase hover:border-b'>Home</li>
     
              <li className='ml-10 text-small uppercase hover:border-b'>About</li>
            
        
              <li className='ml-10 text-small uppercase hover:border-b'>Services</li>
          
            
              <li className='ml-9 text-small uppercase hover:border-b'><a href="tel:+919365163250">< AiOutlinePhone size={30}/></a></li>
            
            {/* <Link href='/'>
              <li className='ml-10 text-small uppercase hover:border-b'>Project</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-small uppercase hover:border-b'>Contacts</li>
            </Link> */}
          </ul>
          <div onClick={handleNav}className='md:hidden '>
            <AiOutlineMenu size={25} />
          </div>
        </div>

      </div>

      <div className={nav?'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70':''}>
        <div className={nav?'fixed left-0 top-0 w-[75%] sm:w-[45%] h-screen bg-[#ecf0f3] p-3 ease-in duration-500':
      'fixed left-[-100%] top-0 p-3 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              {/* <Image src='/logo.png' width={87} height={35}/> */}
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose/>
              </div>
            </div>
            <div className='border-b border-gray-400 my-3'>
              <p className='w-[85%] md:w-[90%] p-4'>Let's build something legendary together </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul>
         
              <li className='text-small uppercase hover:border-b p-4'>Home</li>
          
          
              <li className='text-small uppercase hover:border-b p-4'>About</li>
        
         
              <li className=' text-small uppercase hover:border-b p-4'>Services</li>
         
           <a href="">< AiOutlinePhone size={30}/> Call</a>
            {/* <Link href='/'>
              <li className='text-small uppercase hover:border-b p-4'>Project</li>
            </Link>
            <Link href='/'>
              <li className='text-small uppercase hover:border-b p-4'>Contacts</li>
            </Link> */}
            </ul>
            <div className='pl-4 pt-20 '>
              <p className='uppercase tracking-wide text-[#4d4dcd]'>Let's Connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-200'>
                <a href='https://www.linkedin.com/in/baibhav-rajkumar-3893a5240/'><FaLinkedinIn/></a> 
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-200'>
              <a href='https://github.com/'><FaGithub /></a>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-200'>
                <AiOutlineMail/>
                </div>
               
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Navbar