"use client"

import React, { useState } from 'react'
import { Button , CustomLink , SearchBar} from './'


const NavBar = () => {

  const  [value , setValue] = useState("")

  return (
    <nav className={`bg-[#ffff] h-[72px] w-full flex items-center lg:justify-center justify-between`}>
         <SearchBar value={value} setValue={setValue} />
         <div className='lg:ml-[546px]'>
             <CustomLink title='Log in' href='#' className='text-[#404040] font-sans font-[500] text-[16px]'/>
             <Button title='Create Account' className=' !border-[#3B49DF] h-[40px] w-[141px] border-2 rounded-md ml-[26px] text-[#3B49DF]' onClick={()=>null}/>
         </div>
    </nav>
  )
}

export default NavBar