import { Link, useParams } from "react-router-dom"

export default function Card({ ebooks }) {
    const { ebookId } = useParams()
    console.log(ebooks)

    return <>
        {ebooks.map(el => (
            <div className='bg-[#E3E3E4] w-56 m-4 flex md:inline-flex rounded'>
                <div>
                    <img src={el.image} className="w-[205px] h-[300px] m-auto shadow-md mt-2" alt={el.title} />
                    <div>
                        <p className='text-black text-center text-sm m-3'>{el.title}</p>
                    </div>
                    <div className='flex justify-around'>
                        <button className='bg-[#FEC601] text-white p-1 w-24 rounded m-2'>
                            <Link to={`/ebook/${el.id}`} >รายละเอียด</Link></button>
                        <button className='bg-[#FEC601] text-white p-1 w-24 rounded m-2'>เข้าชั้น</button>
                    </div>
                </div>
            </div>
        ))}
    </>





}
