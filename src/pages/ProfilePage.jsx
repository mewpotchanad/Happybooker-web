import React from 'react';
import ProfileForm from '../features/auth/ProfileForm'
import Brand from '../layouts/Brand'
import Dropdown from '../layouts/Dropdown'
import Menu from '../layouts/Menu'

export default function ProfilePage() {
  return (
    <>
      <nav className="px-10 py-5">
        <div className="container flex flex-wrap items-center justify-between mx-auto">

          <Brand />

          <div className="flex items-center">
            <Dropdown />
          </div>

        </div>
      </nav>


      <div className='flex'>

        <Menu />

      </div>


      {/* ------------- content -------------------------- */}
      <div className='w-[1200px] ml-[300px] mt-[-190px]'>
        <div>
          <h1 className='p-6 text-[#FFFFFF] text-2xl'>ข้อมูลส่วนตัว</h1>
        </div>

        {/* --------- box ------------ */}
        <ProfileForm />

      </div>

    </>
  )
}
