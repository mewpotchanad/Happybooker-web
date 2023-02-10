import React from 'react';
import Brand from '../layouts/Brand';
import Dropdown from '../layouts/Dropdown';
import Menu from '../layouts/Menu';
import { Link } from "react-router-dom";

export default function CategoryPage() {
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
                    <h1 className='p-6 text-[#FFFFFF] text-2xl'>หมวดหมู่</h1>
                </div>

                {/* --------- box ------------ */}
                <div className='flex justify-around w-full mt-10 h-96'>
                    <div>
                        <Link to="/novel" ><h1 className='text-3xl text-white p-10 bg-[#FEC601] rounded-lg'>นิยาย</h1></Link>
                    </div>
                    <div>
                        <Link to="/cartoon"><h1 className='text-3xl text-white p-10 bg-[#FEC601] rounded-lg'>การ์ตูน</h1></Link>
                    </div>
                    <div>
                        <Link to="/selfhelp"><h1 className='text-3xl text-white p-10 bg-[#FEC601] rounded-lg'>พัฒนาตนเอง</h1></Link>
                    </div>
                </div>

            </div>

        </>
    )
}
