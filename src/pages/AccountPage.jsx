import React from 'react';
import { Link } from "react-router-dom";
import Menu from '../layouts/Menu';
import useAuth from '../hooks/useAuth';

export default function AccountPage() {
  const { logout } = useAuth();
  return (
    <>
      <nav className="px-10 py-5">
        <div className="container flex flex-wrap items-center justify-between mx-auto">

          <Link to="/">
            <img src="HAPPY BOOKER.png" className="w-44" alt="happy booker Logo" />
          </Link>




          {/* ---------------- เข้าสู่ระบบ ---------------- */}
          <div className="flex items-center">
            <img src="user.png" className="w-9" alt="user" />
            <Link to="#" className="block py-2 pl-3 pr-4 text-white hover:text-[#FEC601]" >เข้าสู่ระบบ</Link>
          </div>

        </div>
      </nav>

      {/* ------------------------ menu ------------------------ */}
      <div className='flex'>

        <Menu />


        {/* ------------- content -------------------------- */}
        <div className='w-[1200px]'>
          <div>
            <h1 className='p-6 text-[#FFFFFF] text-2xl'>บัญชีของฉัน</h1>
          </div>

          {/* --------- box ------------ */}
          <div className='p-6 w-5/12 m-auto'>
          <img src="user.png" className="w-20 m-auto" alt="user" />
          <p className='text-center text-xl p-4 text-white'>Full name</p>
          <button className='w-full text-white bg-[#FEC601] rounded-md text-center p-5 mb-5'><Link to="/profile">ข้อมูลส่วนตัว</Link></button>
          <button className='w-full text-white bg-[#FEC601] rounded-md text-center p-5 mb-5' onClick={logout}><Link to="/">ออกจากระบบ</Link></button>
          </div>


        </div>

      </div >
    </>
  )
}
