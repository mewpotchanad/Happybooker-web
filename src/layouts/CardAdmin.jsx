import { Link } from "react-router-dom";
import * as adminService from "../apis/admin-api";

export default function CardAdmin({ ebooks, setEbooks }) {
  const handleDelete = async (ebookId) => {
    await adminService.deleteEbook(ebookId);
    setEbooks(ebooks.filter((el) => el.id !== ebookId));
  };

  return (
    <>
      {ebooks.map((el) => (
        <div className="flex gap-8 p-4 border-b-2 border-white" key={el.id}>
          <div className="px-6">
            <img
              src={el.image}
              className="w-[100px] h-[150px] m-auto shadow-md mt-2"
              alt={el.title}
            />
          </div>
          <div className="flex flex-col justify-around w-[90%]">
            <div className="flex flex-col gap-2">
              <div className="text-2xl">{el.title}</div>
              <div className="text-sm text-white">{`โดย ${el.author}`}</div>
            </div>
            <div className="flex gap-4">
              <button className="bg-[#FEC601] text-white font-bold px-4 rounded-md">
                <Link to={`/admin-edit/${el.id}`}>แก้ไข</Link>
              </button>
              <button
                className="bg-[#FEC601] text-white font-bold px-4 rounded-md"
                onClick={() => handleDelete(el.id)}
              >
                ลบ
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
