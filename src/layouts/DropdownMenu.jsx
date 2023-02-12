import React from 'react';
import { Link } from "react-router-dom";
import useAuth from '../hooks/useAuth';

export default function DropdownMenu({open}) {
    const { logout } = useAuth();
    return (
        <div className={`absolute mt-10 ${open ? 'd-block' : ''}`}>
            <div className="bg-white w-40 border border-gray-300 rounded-lg flex flex-col text-sm py-2 px-2 text-gray-500 shadow-lg">
                <div className="flex hover:bg-gray-100 py-1 px-1 rounded">
                    <div className="w-full text-gray-600 text-center"><Link to="/profile" >บัญชีของฉัน</Link></div>
                </div>
                <hr className='p-1' />
                <div className="flex hover:bg-gray-100 py-1 px-1 rounded">
                    <div className="w-full text-gray-600 text-center"><Link to="/shelf">ชั้นหนังสือของฉัน</Link></div>
                </div>
                <hr className='p-1' />
                <div className="flex hover:bg-gray-100 py-1 px-1 rounded">
                    <div className="w-full text-gray-600 text-center" onClick={logout} ><Link to="/">ออกจากระบบ</Link></div>
                </div>
            </div>
        </div>
    )
}
