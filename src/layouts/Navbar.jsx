import React from 'react'
import { Link, Outlet } from "react-router-dom"
import Brand from './Brand'
import Menu from './Menu'
import Searchbar from "./Searchbar"

export default function Navbar() {
    return (
        <>
            <nav className="px-10 py-5">
                <div className="container flex flex-wrap items-center justify-between mx-auto">

                    <Brand />

                    <div>
                        <Searchbar />
                    </div>

                    <div className="flex items-center">
                        <i class="fa-solid fa-circle-user w-3 mt-1 "></i>
                        <Link to="/login" className="block py-2 pl-3 pr-4 text-white hover:text-[#FEC601]" >เข้าสู่ระบบ</Link>
                    </div>

                </div>
            </nav>


            <div className='flex'>

                <Menu />

            </div>
            <Outlet />
        </>
    )
}
