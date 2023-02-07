import React from 'react';
import { Link } from "react-router-dom";

export default function AccountPage() {
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

        <div className='w-[300px]'>
          <h1 className='text-[#808191] text-center p-5 text-xl'>เมนู</h1>
          <div className='text-center'>
            <ul>
              <div>
                <li>
                  <Link to="/" className='text-[#808191] hover:text-[#FEC601]'>หน้าแรก</Link>
                </li>
              </div>
              <div>
                <li>
                  <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-center w-full px-4 py-2 text-[#808191] hover:text-[#FEC601]">หมวดหมู่<svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></button>
                  <div id="doubleDropdown" className="z-100 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm">
                      <li>
                        <Link to="#" className="block px-4 py-2 text-[#808191] hover:text-[#FEC601]">นิยาย</Link>
                      </li>
                      <li>
                        <Link to="#" className="block px-4 py-2 text-[#808191] hover:text-[#FEC601]">การ์ตูน</Link>
                      </li>
                      <li>
                        <Link to="#" className="block px-4 py-2 text-[#808191] hover:text-[#FEC601]">พัฒนาตนเอง</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>


        {/* ------------- content -------------------------- */}
        <div className='w-full'>
          <div>
            <h1 className='p-6 text-[#FFFFFF] text-2xl'>บัญชีของฉัน</h1>
          </div>

          {/* --------- box ------------ */}
          <div className='p-6 w-5/12 m-auto'>
          <img src="user.png" className="w-20 m-auto" alt="user" />
          <p className='text-center text-xl p-4 text-white'>Full name</p>
          <button className='w-full text-white bg-[#FEC601] rounded-md text-center p-5 mb-5'>สมัคร subscription</button>
          <button className='w-full text-white bg-[#FEC601] rounded-md text-center p-5 mb-5'>ข้อมูลส่วนตัว</button>
          <button className='w-full text-white bg-[#FEC601] rounded-md text-center p-5 mb-5'>ออกจากระบบ</button>
          </div>


        </div>

      </div >
    </>
  )
}
