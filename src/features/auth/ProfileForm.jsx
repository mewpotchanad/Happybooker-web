import React from 'react'


export default function ProfileForm() {
  return (
    <div className='p-6'>
            <div className='flex mb-5' id='firstname'>
              <p className='w-32'>Firstname</p>
              <p className='text-white w-32'>Shake</p>
            </div>
            <div className='flex mb-5' id='lastname'>
              <p className='w-32'>Lastname</p>
              <p className='text-white w-32'>Hand</p>
            </div>
            <div className='flex mb-5' id='email'>
              <p className='w-32'>Email</p>
              <p className='text-white w-32'>a@gmail.com</p>
            </div>
            <div className='flex mb-5' id='username'>
              <p className='w-32'>Username</p>
              <p className='text-white w-32'>mewmew</p>
            </div>
            <div>
              <button className='bg-[#FEC601] w-28 text-white p-1 rounded mt-2'>แก้ไขข้อมูล</button>
            </div>
          </div>
  )
}
