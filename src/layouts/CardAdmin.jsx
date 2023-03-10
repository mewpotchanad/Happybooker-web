import { Link, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import * as ebookApi from "../apis/ebook-api";

export default function CardAdmin() {
  const { ebookId } = useParams();
  const { authenticatedUser } = useAuth();

  return (
    <>
      {ebooks.map((el) => (
        <div className="bg-[#E3E3E4] w-56 m-4 flex md:inline-flex rounded">
          <div>
            <img
              src={el.image}
              className="w-[205px] h-[300px] m-auto shadow-md mt-2"
              key={el.id}
              alt={el.title}
            />
            console.log(el)
            <div>
              <p className="text-black text-center text-sm m-3">{el.title}</p>
            </div>
            <div className="flex justify-around">
              <button className="bg-[#FEC601] text-white p-1 w-24 rounded m-2">
                <Link to={`/ebook/${el.id}`}>รายละเอียด</Link>
              </button>
              <button
                className="bg-[#FEC601] text-white p-1 w-24 rounded m-2"
                onClick={async () => await ebookApi.postEbookById(el.id)}
              >
                เข้าชั้น
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

/* <div className="flex gap-5 p-4">
            <img
              src={el.image}
              className="w-[205px] h-[300px] m-auto shadow-md mt-2"
              key={el.id}
              alt={el.title}
            />
            <div className="flex flex-col justify-around">
              <div className="flex flex-col gap-2">
                <div className="text-2xl">{el.title}</div>
                <div className="text-sm">โดย ธนเดช บุญสันทิยะ</div>
              </div>
              <div className="flex gap-4">
                <button className="bg-[#FEC601] text-white font-bold px-4 rounded-md">แก้ไข</button>
                <button className="bg-[#FEC601] text-white font-bold px-4 rounded-md">ลบ</button>
              </div>
            </div>
          </div>
          <hr /> */
