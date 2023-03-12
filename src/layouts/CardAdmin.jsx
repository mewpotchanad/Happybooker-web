import { Link, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import * as ebookApi from "../apis/ebook-api";
import { useState } from "react";

export default function CardAdmin() {
  const [ebookList, setEbookList] = useState([]);
  // console.log(ebooks);

  const ebooks = () => {
    getAllEbook().then((res) => {
      setEbookList(res.data);
    });
  };

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
      {ebookList.map((el) => (
        <div className="flex gap-5 p-4" key={el.id}>
          <img
            src={el.image}
            className="w-[205px] h-[300px] m-auto shadow-md mt-2"
            alt={el.title}
          />
          <div className="flex flex-col justify-around">
            <div className="flex flex-col gap-2">
              <div className="text-2xl">{el.title}</div>
              <div className="text-sm">{el.author}</div>
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
                <div className="text-sm">{el.author}</div>
              </div>
              <div className="flex gap-4">
                <button className="bg-[#FEC601] text-white font-bold px-4 rounded-md">แก้ไข</button>
                <button className="bg-[#FEC601] text-white font-bold px-4 rounded-md">ลบ</button>
              </div>
            </div>
          </div>
          <hr /> */
