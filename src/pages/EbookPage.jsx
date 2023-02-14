import React from 'react';
import Brand from '../layouts/Brand';
import Dropdown from '../layouts/Dropdown';
import Menu from '../layouts/Menu';
import * as ebookApi from '../apis/ebook-api'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function EbookPage({ ebook }) {
  const [ebooks, setEbooks] = useState([]);
  const { ebookId } = useParams()

  useEffect(() => {
    const fetchEbook = async () => {
      const res = await ebookApi.getEbookById(ebookId);
      setEbooks(res.data);
    };
    fetchEbook();
  }, []);

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
        <h1 className='text-xl pl-6 mt-5'>{ebooks.title}</h1>
        <div className='flex justify-start mt-10'>
          <div className='w-[250px] h-[340px] bg-white rounded-md grid justify-items-center ml-10'>
            <img src={ebooks.image} className="w-62 shadow-md m-auto" alt={ebooks.title} />
          </div>


          <div className=' ml-20'>
            <div className='flex mb-5' id='author'>
              <p className='w-32 text-white'>โดย</p>
              <p className='w-32'>{ebooks.author}</p>
            </div>
            <div className='flex mb-5' id='publisher'>
              <p className='w-32 text-white'>สำนักพิมพ์</p>
              <p className=' w-32'>{ebooks.publisher}</p>
            </div>
            <div className='flex mb-5' id='category'>
              <p className='w-32 text-white'>หมวดหมู่</p>
              <p className=' w-32'>{ebooks.category}</p>
            </div>
            <div className=' mb-5' id='story'>
              <p className='text-white w-32 mb-2'>เรื่องย่อ</p>
              <p className='text-white w-96 text-xs'>{ebooks.description}</p>
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
