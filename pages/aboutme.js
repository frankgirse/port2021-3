import React from 'react'
import { Divider } from 'rsuite'
import {  } from 'react-icons/bs'
import Fancybox from "../components/fancybox";

const aboutme = () => {
  return (
    <>
   
   <div className="flex flex-col justify-center items-center text-center md:flex flex-row lg:p-5 lg:text-7xl text-gray-700 font-sans">
        <p className="text-8xl sm:text-7xl md:text-8xl lg:text-8xl"> Persönliches</p>
        <Divider style={{ borderWidth: 1, width: 1100, borderColor: 'darkgray' }} />
      </div>  <div className="App">
      
    <div className="mx-auto w-12/12 grid grid-col-2 justify-start items-start xl:flex flex-row">
    <div className="ml-20">
    <Fancybox>
        <p>
          <a data-fancybox="gallery" href="https://lipsum.app/id/33/1024x768">
            <img className="w-11/12 h-6/6" alt="Portrait" src="../portrait633.png" />
          </a>
        </p>
    </Fancybox>
      </div>
      <div className="w-12/12 xl:w-11/12 h-auto bg-yellow-600 lg:p-3 lg:mr-5 lg:mt-12">
         <p className="text-aligne-left text-white text-3xl   lg:text-2xl  font-semibold  overflow-hidden xl:text-4xl">
         <i class="bi bi-caret-right"></i> geboren am 10.August 1963
         </p>
         <p  className="text-aligne-left text-white text-3xl   lg:text-2xl  font-semibold  overflow-hidden xl:text-4xl">in Manneim</p>
         <p  className="text-aligne-left text-white text-3xl   lg:text-2xl  font-semibold  overflow-hidden xl:text-4xl"><i class="bi bi-caret-right"></i> Studium der Humanmedizin </p>
         <p  className="text-aligne-left text-white text-3xl   lg:text-2xl  font-semibold  overflow-hidden xl:text-4xl">in Giessen, Feibug und Basel</p>
         <p className="ext-aligne-left text-white text-3xl   lg:text-2xl  font-semibold  overflow-hidden xl:text-4xl">
         <i class="bi bi-caret-right"></i> Lebensmittelpunkt Basel</p>
     </div> 




   </div>
     
    </div>
    </>
  );
  
}

export default aboutme


