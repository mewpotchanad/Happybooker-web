import React from 'react'
import MenuItem from './MenuItem'
import { useLocation } from "react-router-dom";

const menuList = [
    {
        icon: <i className="fa-solid fa-house" />,
        pathname: '/'
    }, {
        icon: <i className="fa-sharp fa-solid fa-cube" />,
        pathname: '/category'
    }
]

export default function Menu() {
    const location = useLocation()
    return (
        <div className='w-[300px]'>
            <h1 className='text-[#808191] text-center p-5 text-xl'>เมนู</h1>
            <div className='text-center'>
                <div className="flex flex-col p-5">
                    {menuList.map(el => (
                        <MenuItem
                            key={el.pathname}
                            to={el.pathname}
                            active={location.pathname === el.pathname}
                        >
                            {el.icon}
                        </MenuItem>
                    ))}
                </div>
            </div>
        </div>
    )
}