import React from 'react';
import { Link } from "react-router-dom";

export default function SelfhelpPage() {
  return (
    <>

      {/* ------------- content -------------------------- */}
      <div className='w-[1200px] ml-[300px] mt-[-120px]'>
        <div>
          <h1 className='p-6 text-[#FFFFFF] text-2xl'>พัฒนาตนเอง</h1>
        </div>

        {/* ------------- card -------------------------- */}
        <div className='bg-[#E3E3E4] w-56 m-4 flex md:inline-flex rounded'>
          <div>
            <img src="1.jpg" className="w-11/12 m-auto shadow-md mt-2" alt="Atomic Habits" />
            <div>
              <p className='text-black text-center text-sm m-3'>Atomic Habits เพราะชีวิตดีได้กว่าที่เป็น</p>
            </div>
            <div className='flex  justify-around'>
              <button className='bg-[#FEC601] text-white p-1 w-24 rounded m-2'>รายละเอียด</button>
              <button className='bg-[#FEC601] text-white p-1 w-24 rounded m-2'>เข้าชั้น</button>
            </div>
          </div>
        </div>





        <div className='bg-[#E3E3E4] w-56 m-4 flex md:inline-flex rounded'>
          <div>
            <img src="6.jpg" className="w-11/12 m-auto shadow-md mt-2" alt="donWorryBook" />
            <div>
              <p className='text-black text-center text-sm m-3'>Don't Worry About Small Things : แล้วชีวิตจะผ่านไปได้ด้วยดี</p>
            </div>
            <div className='flex  justify-around'>
              <button className='bg-[#FEC601] text-white p-1 w-24 rounded m-2'>รายละเอียด</button>
              <button className='bg-[#FEC601] text-white p-1 w-24 rounded m-2'>เข้าชั้น</button>
            </div>
          </div>
        </div>

        <div className='bg-[#E3E3E4] w-56 m-4 flex md:inline-flex rounded'>
          <div>
            <img src="7.jpg" className="w-11/12 m-auto shadow-md mt-2" alt="พูดดี พูดยังไง ให้ได้ใจคนทุกสถานการณ์" />
            <div>
              <p className='text-black text-center text-sm m-3'>พูดดี พูดยังไง ให้ได้ใจคนทุกสถานการณ์</p>
            </div>
            <div className='flex  justify-around'>
              <button className='bg-[#FEC601] text-white p-1 w-24 rounded m-2'>รายละเอียด</button>
              <button className='bg-[#FEC601] text-white p-1 w-24 rounded m-2'>เข้าชั้น</button>
            </div>
          </div>
        </div>



      </div>



    </>
  )
}
