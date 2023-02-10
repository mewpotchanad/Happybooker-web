import React from 'react'
import {  Outlet } from "react-router-dom"
import Brand from './Brand'
import Dropdown from './Dropdown'
import Menu from './Menu'
import Searchbar from "./Searchbar"

export default function Navbar() {
    return (
        <>
            <nav className="px-10 py-5">
                <div className="container flex flex-wrap items-center justify-between mx-auto">

                    <Brand />

                    <div className='flex justify-center'>
                        <Searchbar />
                    </div>

                    <div className="flex items-center">
                        <Dropdown />
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
