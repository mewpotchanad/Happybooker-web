import React, { useState } from 'react';
import Brand from '../layouts/Brand'
import Dropdown from '../layouts/Dropdown'
import Menu from '../layouts/Menu'
import { Link, useNavigate } from "react-router-dom";
import * as userService from '../apis/user-api'



export default function EditProfilePage() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const navigate = useNavigate()
    


    const handleSubmitForm = async (e) => {
        e.preventDefault()
        await userService.updateProfile({ firstName, lastName, email, userName })
        navigate('/profile')
        window.location.reload()
    }



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

                <form onSubmit={handleSubmitForm
                } className='p-6'>
                    <div className='flex mb-5' id='firstname'>
                        <p className='w-32'>Firstname</p>
                        <input
                            type="text"
                            className="w-[400px] p-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className='flex mb-5' id='lastname'>
                        <p className='w-32'>Lastname</p>
                        <input
                            type="text"
                            className="w-[400px] p-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className='flex mb-5' id='email'>
                        <p className='w-32'>Email</p>
                        <input
                            type="text"
                            className="w-[400px] p-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='flex mb-5' id='username'>
                        <p className='w-32'>Username</p>
                        <input
                            type="text" className="w-[400px] p-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div className='flex gap-4'>
                        <button
                            className='bg-[#FEC601] w-20 text-white p-1 rounded mt-2'
                            type='submit'
                        >
                            ยืนยัน
                        </button>
                        <button
                            className='bg-[#FEC601] w-20 text-white p-1 rounded mt-2'
                        >
                            <Link to="/profile"> ยกเลิก </Link>
                        </button>
                    </div>
                </form>

            </div>

        </>
    )
}
