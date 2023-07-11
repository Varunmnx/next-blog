"use client"

import React, { useState } from 'react'
import { Button , CustomLink , SearchBar} from './'
import {RxHamburgerMenu , RxCross1} from "react-icons/rx"
import { useRouter } from 'next/navigation'


const NavBar = () => {

  const  [value , setValue] = useState("")
  const  [isOpened , setOpened] = useState(false)
  const router = useRouter()

  const handleHamburgerToggle = ()=>{
                      setOpened(prev=>!prev)
  }
 
  const handleSearchBarNavigation = ()=>{
        router.push("/search")
  }

  return (
    <nav className={`bg-[#ffff] h-[72px] w-full flex items-center md:justify-around justify-end`}>
         <SearchBar value={value} setValue={setValue} handleSearchBarNavigation={handleSearchBarNavigation} />
         { isOpened ? <RxHamburgerMenu className='md:hidden block absolute left-[10px]' size={"26px"} onClick={handleHamburgerToggle}/> : <RxCross1 className='md:hidden block absolute left-[10px]' size={"26px"} onClick={handleHamburgerToggle}/> }
         <div className='lg:ml-[546px] md:p-0 pr-[10px] flex'>
             <CustomLink title='Log in' href='#' className='text-[#404040] font-sans font-[400] text-[16px] h-[40px] w-[75px] rounded-lg md:flex md:justify-center md:items-center hidden whitespace-nowrap hover:bg-slate-100 hover:text-[#3B49DF] hover:underline'/>
             <Button title='Create Account' className=' !border-[#3B49DF] h-[40px] w-[141px] border-2 rounded-md md:ml-[10px] md:pl-0 ml-[5px] text-[#3B49DF]' onClick={()=>null}/>
         </div>
    </nav>
  )
}

export default NavBar