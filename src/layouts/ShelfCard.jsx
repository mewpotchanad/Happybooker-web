import React from 'react'

export default function ShelfCard({ ebook }) {
    return (
        <div className='bg-[#E3E3E4] w-52 m-4 flex md:inline-flex rounded'>
            <div>
                <img src={ebook.image} className="w-[190px] h-[275px] m-auto shadow-md mt-2 mb-2" alt={ebook.title} />
            </div>
        </div>
    )
}
