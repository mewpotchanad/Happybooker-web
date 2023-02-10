import React from 'react';
import Brand from '../layouts/Brand';
import Dropdown from '../layouts/Dropdown';
import Menu from '../layouts/Menu';

export default function EbookPage() {
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
          <h1 className='p-6 text-[#FFFFFF] text-2xl'>ข้อมูลหนังสือ</h1>
        </div>

        {/* --------- box ------------ */}
        {/* ---------- title ------------- */}
        <h1 className='text-xl pl-6 mt-5'>น้องชายจอมห้าวปะทะพี่สาวโอตาคุ เล่ม 4 (ฉบับการ์ตูน)</h1>
        <div className='flex justify-start mt-10'>
          <div className='w-[250px] h-[340px] bg-white rounded-md grid justify-items-center ml-10'>
            <img src="4.jpg" className="w-62 shadow-md m-auto" alt="happy booker Logo" />
          </div>


          <div className=' ml-20'>
            <div className='flex mb-5' id='author'>
              <p className='w-32 text-white'>โดย</p>
              <p className='w-32'>ยูมิ โฮชิมิ</p>
            </div>
            <div className='flex mb-5' id='publisher'>
              <p className='w-32 text-white'>สำนักพิมพ์</p>
              <p className=' w-32'>PHOENIX</p>
            </div>
            <div className='flex mb-5' id='category'>
              <p className='w-32 text-white'>หมวดหมู่</p>
              <p className=' w-32'>การ์ตูนทั่วไป</p>
            </div>
            <div className=' mb-5' id='story'>
              <p className='text-white w-32 mb-2'>เรื่องย่อ</p>
              <p className='text-white w-96 text-xs'>ชีวิตโอตะอันแสนสดใสเรียบง่ายที่ถูกบีบคั้นผ่านไปหลายเล่มอย่างรวดเร็ว
                และเวลาที่เริ่มรู้สึกคุ้นชินกับชีวิตแบบนั้นขึ้นมานิดหน่อยแล้วนี้เอง
                ได้เกิดความเปลี่ยนแปลงกับกางเกงขาสั้นของริวโอขึ้นกะทันหัน!!
                แถมยังมีตำรวจหมาเข้ามาโจมตี ทำลายความสัมพันธ์ที่ก็ไม่ได้คบกันอยู่ของทั้ง 2 คนอีก!?
                สุดท้ายแล้วความรู้สึกของริวโอจะส่งไปถึงหรือไม่!?
                พลังโชตะกับคุณพี่สาวแผ่กระจายขั้นสุด!
                เลิฟคอเมดี้ใสๆของน้องโชตะกับคุณพี่สาว มาเอาใจช่วยโชตะตัวน้อยที่กำลังอินเลิฟแบบสุดติ่งกระดิ่งแมวกัน!</p>
            </div>
            <div>
              <button className='bg-[#FEC601] w-20 text-white p-1 rounded'>เข้าชั้น</button>
            </div>
          </div>
        </div>


      </div>

    </>
  )
}
