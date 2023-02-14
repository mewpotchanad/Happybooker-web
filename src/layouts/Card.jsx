import { Link } from "react-router-dom"

export default function Card({ebook}) {

    return (
        <div className='bg-[#E3E3E4] w-56 m-4 flex md:inline-flex rounded'>
            <div>
                <img src={ebook.image} className="w-[205px] h-[300px] m-auto shadow-md mt-2" alt={ebook.title} />
                <div>
                    <p className='text-black text-center text-sm m-3'>{ebook.title}</p>
                </div>
                <div className='flex justify-around'>
                    <button className='bg-[#FEC601] text-white p-1 w-24 rounded m-2'><Link to="/ebook">รายละเอียด</Link></button>
                    <button className='bg-[#FEC601] text-white p-1 w-24 rounded m-2'>เข้าชั้น</button>
                </div>
            </div>
        </div>
    )
}
