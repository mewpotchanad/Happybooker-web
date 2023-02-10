import React from 'react'
import { Link } from "react-router-dom"

export default function Menu() {
    return (
        <div className='w-[300px]'>
            <h1 className='text-[#808191] text-center p-5 text-xl'>เมนู</h1>
            <div className='text-center'>
                <ul>
                    <div className='p-2.5'>
                        <li>
                            <i className="fa-solid fa-house p-2"></i>
                            <Link to="/" className='text-[#808191] hover:text-[#FEC601]'>หน้าแรก</Link>
                        </li>
                    </div>
                    <div className='p-2.5'>
                        <li>
                            <i class="fa-sharp fa-solid fa-cube p-2"></i>
                            <Link to="/" className='text-[#808191] hover:text-[#FEC601]'>หมวดหมู่</Link>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    )
}