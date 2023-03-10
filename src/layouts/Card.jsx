import { Link, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import * as ebookApi from "../apis/ebook-api";

export default function Card({ ebooks }) {
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
