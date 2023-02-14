import React from 'react'
import { useState, useEffect } from 'react';
import Card from '../layouts/Card'
import * as ebookApi from '../apis/ebook-api'

export default function HomePage() {
  const [ebooks, setEbooks] = useState([]);

  useEffect(() => {
    const fetchEbook = async () => {
      const res = await ebookApi.getAllEbook();
      console.log(res.data)
      setEbooks(res.data);
    };
    fetchEbook();
  }, []);

  return (
    <>
      {/* ------------- content -------------------------- */}
      <div className='w-[1200px] ml-[300px] mt-[-190px]'>
        <div>
          <h1 className='p-6 text-[#FFFFFF] text-2xl'>หน้าแรก</h1>
        </div>

        {/* ------------- card -------------------------- */}
        {ebooks.map(el => (
          <Card key={el.id} ebook={el}  />
        ))}




      </div>



    </>

  )
}
