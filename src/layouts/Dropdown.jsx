import React, { useState } from 'react'
import useAuth from '../hooks/useAuth'
import DropdownMenu from './DropdownMenu'

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false)
    const { authenticatedUser } = useAuth()


    return (
        <div className='relative flex flex-col items-center '>
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className=' text-white hover:text-[#FEC601] active:text-white text-lg px-4 py-2.5 text-center flex items-center justify-between font-medium '
            >
                <i className="fa-solid fa-circle-user mt-1 text-[#FEC601] mr-2 " />
                {authenticatedUser.userName}
                <i className="fa-solid fa-angle-down mt-2 ml-2 text-sm" />
            </button>

            {isOpen && (
                <DropdownMenu />
            )}
        </div>
    )
}






