import React from 'react';
import { Link } from "react-router-dom";
import Menu from '../layouts/Menu';

export default function SubscriptionPage() {
  return (
    <>
      <nav className="px-10 py-5">
        <div className="container flex flex-wrap items-center justify-between mx-auto">

          <Link to="/">
            <img src="HAPPY BOOKER.png" className="w-44" alt="happy booker Logo" />
          </Link>




          {/* ---------------- เข้าสู่ระบบ ---------------- */}
          <div className="flex items-center">
            <img src="user.png" className="w-9" alt="user" />
            <Link to="#" className="block py-2 pl-3 pr-4 text-white hover:text-[#FEC601]" >เข้าสู่ระบบ</Link>
          </div>

        </div>
      </nav>

      {/* ------------------------ menu ------------------------ */}
      <div className='flex'>

        <Menu />
        {/* ------------- content -------------------------- */}
        <div className='w-[1200px] '>
          <div>
            <h1 className='p-6 text-[#FFFFFF] text-2xl'>Subscription</h1>
          </div>

          {/* --------- box ------------ */}
          <div className='bg-[#252836] w-96 h-96 rounded-lg m-auto mt-4'>
            <div className='grid grid-cols-1 gap-12 place-items-stretch'>
              <h1 className='text-white text-2xl text-center mt-16'>Subscription</h1>

              <div className='flex justify-center'>
                <p className='text-white text-3xl'>199.00 ฿ </p>
                <p className='text-white self-end'>ต่อเดือน</p>
              </div>

              <div className='flex '>
                <button className='bg-[#FEC601] text-white rounded px-2 py-1 m-auto mb-10'>Subscription</button>
              </div>
            </div>

          </div>


        </div>
      </div>

    </>
  )
}
