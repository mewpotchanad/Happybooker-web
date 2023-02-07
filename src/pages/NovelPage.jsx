import React from 'react'
import { Link } from "react-router-dom"

export default function NovelPage() {
  return (
    <>
      <nav className="px-10 py-5">
        <div className="container flex flex-wrap items-center justify-between mx-auto">

          <Link to="#">
            <img src="HAPPY BOOKER.png" className="w-44" alt="happy booker Logo" />
          </Link>


          {/* ---------------- search bar ---------------- */}
          <div>
            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Search</span>
            </button>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input type="text" id="search-navbar" className="w-[700px] p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="ค้นหา" />
            </div>
            <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>


          {/* ---------------- เข้าสู่ระบบ ---------------- */}
          <div className="flex items-center">
            <img src="user.png" className="w-9" alt="user" />
            <Link to="/login" className="block py-2 pl-3 pr-4 text-white hover:text-[#FEC601]" >เข้าสู่ระบบ</Link>
          </div>

        </div>
      </nav>

      {/* ------------- menu -------------------------- */}
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
      </div>



    </>

  )
}
