import React from 'react';
import ProfileEditForm from '../components/ProfileEditForm';
import Brand from '../layouts/Brand'
import Dropdown from '../layouts/Dropdown'
import Menu from '../layouts/Menu'
import { Link } from "react-router-dom";


export default function EditProfilePage() {
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
                    <h1 className='p-6 text-[#FFFFFF] text-2xl'>แก้ไขข้อมูลส่วนตัว</h1>
                </div>

                {/* --------- box ------------ */}
                <div className='p-6'>
                    <div className='flex mb-5' id='firstname'>
                        <p className='w-32'>Firstname</p>
                        <ProfileEditForm />
                    </div>
                    <div className='flex mb-5' id='lastname'>
                        <p className='w-32'>Lastname</p>
                        <ProfileEditForm />
                    </div>
                    <div className='flex mb-5' id='email'>
                        <p className='w-32'>Email</p>
                        <ProfileEditForm />
                    </div>
                    <div className='flex mb-5' id='username'>
                        <p className='w-32'>Username</p>
                        <ProfileEditForm />
                    </div>
                    <div className='flex gap-4'>
                        <button
                            className='bg-[#FEC601] w-20 text-white p-1 rounded mt-2'
                        >
                            ยืนยัน
                        </button>
                        <button
                            className='bg-[#FEC601] w-20 text-white p-1 rounded mt-2'
                        >
                            <Link to="/profile"> ยกเลิก </Link>
                        </button>
                    </div>
                </div>

            </div>

        </>
    )
}
