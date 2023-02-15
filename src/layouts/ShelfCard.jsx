import React from 'react'
import * as ebookApi from '../apis/ebook-api'
import { useState } from 'react';

export default function ShelfCard({ ebooks }) {
    const [ebook, setEbook] = useState(ebooks);

    const handleClickDelete = async (id) => {
        await ebookApi.deleteShowEbookFromShelf(id);
        setEbook(previous => previous.filter(el => el.id !== id));
        window.location.reload()
    };

    return (
        <>
            {ebooks.map(el => (
                <div className='bg-[#E3E3E4] w-52 m-4 flex md:inline-flex rounded relative'>
                    <i
                        className="fa-solid fa-grip absolute right-2 top-2 text-slate-500"
                        onClick={() => handleClickDelete(el.ebookId)}
                    />
                    <div>
                        <img src={el.Ebook.image} className="w-[190px] h-[275px] m-auto shadow-md mt-2 mb-2 ml-2" alt={el.Ebook.title} />
                    </div>
                </div>
            ))}
        </>
    )
}
