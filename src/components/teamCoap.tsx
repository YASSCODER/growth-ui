import React from 'react'

interface MyComponentProps {
    frame1: string; 
    frame2: string; 
    frame3: string; 
  }


const TeamCoap: React.FC<MyComponentProps> = ({frame1, frame2, frame3}) => {
  return (
    <div className="w-full flex sm:flex-row flex-col justify-evenly sm:justify-around items-center">

      <img src={frame1} alt="" className="aspect-[343/152] sm:aspect-[612/272] sm:w-[50%]"/>
      
      <div className='ml-[-15%] sm:ml-[-9%] sm:mt-[-5%] flex justify-between sm:h-[100%] sm:w-[47%] '>
          <img src={frame2} alt="" className="sm:aspect-[400/413] aspect-[218/231] sm:w-[50%]"/>
          <div className='flex flex-col justify-between sm:h-[100%]'>
            <img src={frame3} alt="" className="sm:aspect-[190/257] aspect-[106/144] sm:w-[50%]"/>
            <div className='bg-[#DAF4FE] rounded-xl flex flex-col font-poppins justify-between items-center'>
              <h1 className='sm:text-base text-[9px] font-semibold leading-[10px] text-center'>Team call</h1>
              <p className='sm:text-[10px] text-[5px] font-normal text-center'>You’ve been invited to a virtual meeting by John</p>
              <h1 className='sm:text-xs text-[6px] font-semibold leading-[10px] text-center'>Jan 17 at 9AM</h1>
              <button className='rounded-md text-white font-medium px-7 py-3 bg-[#4891FF]'>Join</button>
            </div>
          </div>
      </div>
      
    </div>
  )
}

export default TeamCoap;