import React, { useState, useEffect } from 'react'
import Card from '../layouts/Card'
import * as ebookApi from '../apis/ebook-api'

export default function NovelPage() {
  const [ebooks, setEbooks] = useState([]);

  useEffect(() => {
    const fetchEbook = async () => {
      const res = await ebookApi.getAllEbook();
      const novel = res.data.filter(el => el.category === 'นิยาย')
      console.log(res.data)
      setEbooks(novel);
    };
    fetchEbook();
  }, []);

  return (
    <>
      {/* ------------- content -------------------------- */}
      <div className='w-[1200px] ml-[300px] mt-[-190px]'>
        <div>
          <h1 className='p-6 text-[#FFFFFF] text-2xl'>นิยาย</h1>
        </div>

        {/* ------------- card -------------------------- */}

        <Card ebooks={ebooks} />


      </div>
    </>
  )
}
