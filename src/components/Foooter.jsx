import React from 'react'
import { MdCall } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

const Foooter = () => {
  return (
    <div className='flex flex-col'>
      
      <div className='flex justify-center items-center'>
            <p className=' font-bold tracking-tight'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
      </div>

        <div className='px-5 py-3 tracking-tight whitespace-pre-wrap'>
            <p className='flex justify-center flex-col items-center'>
            CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS | PHARMA SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE 
            <p>PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL</p>
            </p>
        </div>

        <div className='w-full flex mb-2 justify-center'>
            <div className=' flex justify-around items-center  w-[95vw] h-20 bg-reed-400 '>
                    <div  className='flex md:flex-row flex-col justify-center items-center gap-1'>
                <MdCall size={30} />
                <p className=' tracking-tight'>1234567890</p>
                    </div>
                    <div className='flex md:flex-row flex-col justify-center items-center gap-1'>
                <FaFacebook size={30}/>
                <p className=' tracking-tight'>www.facebook.con/cripumps</p>
                    </div>
                    <div className='flex md:flex-row flex-col justify-center items-center gap-1'>
                <TbWorld size={30}/>
                <p className=' tracking-tight'>www.crigroups.com</p>
                    </div>
                
                
            </div>
        </div>

    </div>
  )
}

export default Foooter
