import React from 'react'

export default function DropdownToggle() {
    return (
        <div>
            <i className="fa-solid fa-circle-user w-3 mt-1 "></i>
            <button className="text-white  hover:text-[#FEC601] font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center relative" type="button" data-dropdown-toggle="dropdown">เข้าสู่ระบบ<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
        </div>
    )
}
