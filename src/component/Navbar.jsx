import React, { useState } from 'react'
import olxlogo from '../assets/olxlogo.png'
import search from '../assets/search.png'
import arrow from '../assets/arrow.png'
import searchblack from '../assets/searchblack.png'
import Login from './Login'


const Navbar = (props) => {

    const [loginPop, setLoginPop] = useState(false);

  return (
    <>
        <div className='flex p-4 bg-slate-100 shadow-md justify-center'>
            <img src={olxlogo} alt="" className='w-11 h-9'/>
            <div className='flex border-2 border-spacing-1 w-64 p-2 border-black ml-5 bg-white'>
                <img src={search} alt="" className='w-6 h-5 mt-1'/>
                <input placeholder="Location" className='ml-3 outline-none'/>
                <img src={arrow} alt="" className='w-8 h-7'/>
            </div>
            <div className='flex h-12 ml-4 border-2 border-black bg-white'>
                <input onChange={(e)=>{props.setSearch(e.target.value)}} placeholder='Find Cars, Mobile phones and more' className='ml-3 w-96 outline-none'/>
                <img src={searchblack} alt="" />
            </div>
            <div className='flex h-12 p-3 ml-10 cursor-pointer'> 
                <h1 className='font-semibold'>ENGLISH</h1>
                <img src={arrow} alt="" className='w-8 h-7' />
            </div>
            <div onClick={()=> setLoginPop(!loginPop)} className='flex h-12 p-3 ml-10 cursor-pointer underline hover:no-underline'> 
                <h1 className='font-bold text-lg'>Login</h1>
            </div>
            <div className='w-28 flex h-12 p-3 ml-10 cursor-pointer rounded-full border border-yellow-500'> 
                <h1 className='font-bold text-lg ml-3'>+ SELL</h1>
            </div>
        </div>
        {loginPop && <Login setLoginPop={setLoginPop}/>}

    </>
  )
}

export default Navbar;
