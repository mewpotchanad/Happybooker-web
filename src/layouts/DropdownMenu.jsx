import React from 'react';
import { Link } from "react-router-dom";

export default function DropdownMenu() {
    return (
        <div className="block absolute mt-10">
            <div className="bg-white w-40 border border-gray-300 rounded-lg flex flex-col text-sm py-2 px-1 text-gray-500 shadow-lg">
                <div className="flex hover:bg-gray-100 py-1 px-2 rounded">
                    <div className="w-full text-gray-600 text-center"><Link to="/account">บัญชีของฉัน</Link></div>
                </div>
                <div className="flex hover:bg-gray-100 py-1 px-2 rounded">
                    <div className="w-full text-gray-600 text-center"><Link to="/shelf">ชั้นหนังสือของฉัน</Link></div>
                </div>
                <div className="flex hover:bg-gray-100 py-1 px-2 rounded">
                    <div className="w-full text-gray-600 text-center"><Link to="/">ออกจากระบบ</Link></div>
                </div>
            </div>
        </div>
    )
}
