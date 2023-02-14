import React, { useState, useEffect } from 'react'
import Card from '../layouts/Card'
import * as ebookApi from '../apis/ebook-api'

export default function SelfhelpPage() {
  const [ebooks, setEbooks] = useState([]);

  useEffect(() => {
    const fetchEbook = async () => {
      const res = await ebookApi.getAllEbook();
      const selfhelp = res.data.filter(el => el.category === 'พัฒนาตนเอง')
      console.log(res.data)
      setEbooks(selfhelp);
    };
    fetchEbook();
  }, []);

  return (
    <>

      {/* ------------- content -------------------------- */}
      <div className='w-[1200px] ml-[300px] mt-[-190px]'>
        <div>
          <h1 className='p-6 text-[#FFFFFF] text-2xl'>พัฒนาตนเอง</h1>
        </div>

        {/* ------------- card -------------------------- */}
        {ebooks.map(el => (
          <Card key={el.id} ebook={el} />
        ))}
      </div>
    </>
  )
}
