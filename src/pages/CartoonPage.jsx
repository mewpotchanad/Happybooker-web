import React, { useState, useEffect } from 'react'
import Card from '../layouts/Card'
import * as ebookApi from '../apis/ebook-api'

export default function CartoonPage() {
  const [ebooks, setEbooks] = useState([]);
  console.log(ebooks);

  useEffect(() => {
    const fetchEbook = async () => {
      const res = await ebookApi.getAllEbook();
      const cartoon = res.data.filter(el => el.category === 'การ์ตูน')
      // console.log(res.data)
      setEbooks(cartoon);
    };
    fetchEbook();
  }, []);

  return (
    <>

      {/* ------------- content -------------------------- */}
      <div className='w-[1200px] ml-[300px] mt-[-190px]'>
        <div>
          <h1 className='p-6 text-[#FFFFFF] text-2xl'>การ์ตูน</h1>
        </div>

        {/* ------------- card -------------------------- */}

        {/* {ebooks.map(el => ( */}
          <Card ebooks={ebooks} />
        {/* ))} */}
      </div>
    </>
  )
}

