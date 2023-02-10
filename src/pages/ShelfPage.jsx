import React from 'react';

export default function ShelfPage() {
  return (
    <>

      {/* ------------- content -------------------------- */}
      <div className='w-[1200px] ml-[300px] mt-[-170px]'>
        <div>
          <h1 className='p-6 text-[#FFFFFF] text-2xl'>ชั้นหนังสือของฉัน</h1>
        </div>

        {/* ------------- card -------------------------- */}
        <div className='bg-[#E3E3E4] w-52 m-4 flex md:inline-flex rounded'>
          <div>
            <img src="1.jpg" className="w-11/12 m-auto shadow-md mt-2 mb-2" alt="Atomic Habits" />
          </div>
        </div>



      </div>



    </>
  )
}
