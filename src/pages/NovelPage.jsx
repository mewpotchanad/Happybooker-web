import React from 'react'
import { Link } from "react-router-dom"

export default function NovelPage() {
  return (
    <>
      {/* ------------- content -------------------------- */}
      <div className='w-[1200px] ml-[300px] mt-[-120px]'>
        <div>
          <h1 className='p-6 text-[#FFFFFF] text-2xl'>นิยาย</h1>
        </div>

        {/* ------------- card -------------------------- */}

        <div className='bg-[#E3E3E4] w-56 m-4 flex md:inline-flex rounded'>
          <div>
            <img src="2.jpg" className="w-11/12 m-auto shadow-md mt-2" alt="ป่วนนิยายก่อนตายจริง" />
            <div>
              <p className='text-black text-center text-sm m-3'>ป่วนนิยายก่อนตายจริง</p>
            </div>
            <div className='flex  justify-around'>
              <button className='bg-[#FEC601] text-white p-1 w-24 rounded m-2'>รายละเอียด</button>
              <button className='bg-[#FEC601] text-white p-1 w-24 rounded m-2'>เข้าชั้น</button>
            </div>
          </div>
        </div>

        <div className='bg-[#E3E3E4] w-56 m-4 flex md:inline-flex rounded'>
          <div>
            <img src="3.jpg" className="w-11/12 m-auto shadow-md mt-2" alt="เสี่ยวเยี่ยนจือจอมใจจักรพรรดิ" />
            <div>
              <p className='text-black text-center text-sm m-3'>เสี่ยวเยี่ยนจือจอมใจจักรพรรดิ</p>
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
