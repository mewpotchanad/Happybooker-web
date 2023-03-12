import { Link, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import * as ebookApi from "../apis/ebook-api";

export default function CardAdmin({ ebooks }) {
  // const ebooks = () => {
  //   getAllEbook().then((res) => {
  //     setEbookList(res.data);
  //   });
  // };

  const handleEdit = (id) => {
    // Implement logic for editing an ebook
    console.log(`Editing ebook with id ${id}`);
  };

  const handleDelete = (id) => {
    // Implement logic for deleting an ebook
    const updatedEbooks = ebooks.filter((ebook) => ebook.id !== id);
    setEbooks(updatedEbooks);
  };

  return (
    <>
      {ebooks.map((el) => (
        <div className="flex gap-5 p-4 border-b-2 border-white" key={el.id}>
          <div>
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
              <button
                className="bg-[#FEC601] text-white font-bold px-4 rounded-md"
                // onClick={() => handleEdit(el.id)}
              >
                แก้ไข
              </button>
              <button
                className="bg-[#FEC601] text-white font-bold px-4 rounded-md"
                // onClick={() => handleDelete(el.id)}
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
