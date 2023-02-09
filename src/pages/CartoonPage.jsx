import React from 'react'

export default function CartoonPage() {
  return (
    <>

      {/* ------------- content -------------------------- */}
      <div className='w-[1200px] ml-[300px] mt-[-120px]'>
        <div>
          <h1 className='p-6 text-[#FFFFFF] text-2xl'>การ์ตูน</h1>
        </div>

        {/* ------------- card -------------------------- */}

        <div className='bg-[#E3E3E4] w-56 m-4 flex md:inline-flex rounded'>
          <div>
            <img src="4.jpg" className="w-11/12 m-auto shadow-md mt-2" alt="น้องชายจอมห้าวปะทะพี่สาวโอตาคุ" />
            <div>
              <p className='text-black text-center text-sm m-3'>น้องชายจอมห้าวปะทะพี่สาวโอตาคุ เล่ม 4 (ฉบับการ์ตูน)</p>
            </div>
            <div className='flex  justify-around'>
              <button className='bg-[#FEC601] text-white p-1 w-24 rounded m-2'>รายละเอียด</button>
              <button className='bg-[#FEC601] text-white p-1 w-24 rounded m-2'>เข้าชั้น</button>
            </div>
          </div>
        </div>

        <div className='bg-[#E3E3E4] w-56 m-4 flex md:inline-flex rounded'>
          <div>
            <img src="5.jpg" className="w-11/12 m-auto shadow-md mt-2" alt="บันทึกสงครามดาบวิเศษ เวิร์นดิโอ" />
            <div>
              <p className='text-black text-center text-sm m-3'>บันทึกสงครามดาบวิเศษ เวิร์นดิโอ เล่ม 1 (ฉบับการ์ตูน)</p>
            </div>
            <div className='flex  justify-around'>
              <button className='bg-[#FEC601] text-white p-1 w-24 rounded m-2'>รายละเอียด</button>
              <button className='bg-[#FEC601] text-white p-1 w-24 rounded m-2'>เข้าชั้น</button>
            </div>
          </div>
        </div>





      </div>



    </>
  )
}
