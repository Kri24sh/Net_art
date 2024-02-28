import React from 'react'

const body = () => {
    return (
        <div className=''>

            <div className='flex '>

            <div className='flex justify-center'><img src="src/assets/1.png" alt="award" className='md:block hidden object-contain aspect-[4/5]  lg:aspect-4/3'/></div>
            
            <div className='flex flex-col p-7 justify-start'>

                <p className=' text-lg  md:text-lg  font-extrabold pb-2'>
                    C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time
                </p>

                <ul className='flex flex-col gap-3 list-disc'>
                    <li> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>

                    <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                </ul>



                <div className='  justify-center items-center my-4  '>
                <img src="src/assets/2.png" alt="pic" className=' object-contain  md:aspect-[3/1]  ' />
                </div>


            <div className='flex py-2'>
                <p>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>

            </div>
            </div>

            <div className='flex flex-col justify-center items-center my-2'>


                <div className=' p-3 w-full flex justify-center items-center font-semibold'>

                <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
                </div>



                <div>
                    <img src="src/assets/3.png" alt="product" className=' object-contain aspect-[3/1] w-[90vw] z-10' /> 
                </div>

                <p className=' text-[9px]  sm:text-xs md:text-lg font-semibold tracking-tighter md:tracking-normal py-2'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>

            </div>

            <div className='flex justify-center items-center'>
                <hr className=' bg-reed-400 h-[2px] w-[90vw]'/>
            </div>

        </div>

    )
}

export default body