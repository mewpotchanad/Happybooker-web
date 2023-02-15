import React from 'react';
import Brand from '../layouts/Brand';
import Dropdown from '../layouts/Dropdown';
import Menu from '../layouts/Menu';
import ShelfCard from '../layouts/ShelfCard';
import { useState, useEffect } from 'react'
import * as ebookApi from '../apis/ebook-api'
import useAuth from '../hooks/useAuth';

export default function ShelfPage() {
  const [ebooks, setEbooks] = useState([]);
  const { authenticatedUser } = useAuth()

  useEffect(() => {
    const fetchEbook = async () => {
      const res = await ebookApi.getShowEbookFromShelf(authenticatedUser.id);
      setEbooks(res.data.user);
    };
    fetchEbook();
  }, [authenticatedUser.id]);

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
      <div className='w-[1100px] ml-[300px] mt-[-190px]'>
        <div>
          <h1 className='p-6 text-[#FFFFFF] text-2xl'>ชั้นหนังสือของฉัน</h1>
        </div>

        {/* ------------- card -------------------------- */}
        <ShelfCard ebooks={ebooks} />
      </div>
    </>
  )
}
