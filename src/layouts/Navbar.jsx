import React from 'react'
import { Link, Outlet } from "react-router-dom"
import Searchbar from "./Searchbar"

export default function Navbar() {
    return (
        <>
            <nav className="px-10 py-5">
                <div className="container flex flex-wrap items-center justify-between mx-auto">

                    <Link to="#">
                        <img src="HAPPY BOOKER.png" className="w-44" alt="happy booker Logo" />
                    </Link>


                    <div>
                        <Searchbar />
                    </div>


                    <div className="flex items-center">
                        <img src="user.png" className="w-9" alt="user" />
                        <Link to="/login" className="block py-2 pl-3 pr-4 text-white hover:text-[#FEC601]" >เข้าสู่ระบบ</Link>
                    </div>

                </div>
            </nav>


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
                                    <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-center w-full px-4 py-2 text-[#808191] hover:text-[#FEC601]">หมวดหมู่<svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" ></path></svg></button>
                                    <div id="doubleDropdown" className="z-100 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-sm">
                                            <li>
                                                <Link to="/novel" className="block px-4 py-2 text-[#808191] hover:text-[#FEC601]">นิยาย</Link>
                                            </li>
                                            <li>
                                                <Link to="/cartoon" className="block px-4 py-2 text-[#808191] hover:text-[#FEC601]">การ์ตูน</Link>
                                            </li>
                                            <li>
                                                <Link to="/selfhelp" className="block px-4 py-2 text-[#808191] hover:text-[#FEC601]">พัฒนาตนเอง</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}
