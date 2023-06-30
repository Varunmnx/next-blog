"use client"
import { useRef } from "react";
import { useState , useEffect } from "react"
import {BsSearch} from "react-icons/bs"

interface Searchbar {
      value :string ,
      setValue : React.Dispatch<React.SetStateAction<string>>;
}


  const SearchBar = ({value , setValue} : Searchbar ) => {


  let [issearchInput , setSearchInput] = useState(false)
  let searchRef = useRef<HTMLInputElement>(null)

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (searchRef.current && !searchRef.current.contains(event.target as Node)) {                  
  //               if(!value){
  //                 setSearchInput(false)
  //               }
                   
  //     }
  //     console.log(value , issearchInput)
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //     if(value===""){
  //       setSearchInput(true)
  //     }else setSearchInput(false)
  //   };
  // }, []);

  useEffect(() => {
    if (value === '') {
      setSearchInput(false);
    } else {
      setSearchInput(true);
    }
  }, [value]);
  
  const handleInputChange =( e: any)=>{
                      setValue(e.target.value)
  }

  return (
    <div className="h-[40px] w-[420px] border border-black relative rounded-lg overflow-hidden" ref={searchRef} >
     { !issearchInput && <span className="absolute bottom-[7px] left-2 pointer-events-none z-1 font-[500] text-[#525252] font-sans text-[16px] ">Search...</span>}
       <input value={value} onChange={handleInputChange} className=" outline-none border-none h-[100%] w-[100%] pl-[8px] "/>

       <BsSearch size={"24px"} color="#262626" className="absolute right-2 top-2"/>
    </div>
  )
}

export default SearchBar