import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as ebookApi from "../apis/ebook-api";
import CardAdmin from "../layouts/CardAdmin";
import axios from "axios";

export default function AdminPage() {
  const [ebooks, setEbooks] = useState([]);

  useEffect(() => {
    const fetchEbook = async () => {
      const res = await ebookApi.getAllEbook();
      setEbooks(res.data);
    };
    fetchEbook();
  }, []);

  // const handleAddEbook = async (e) => {
  //   e.preventDefault()
  //   await axios.post('/admin-edit', input)
  //   navigate('/admin')
  // }

  return (
    <>
      <div className="bg-white w-full p-4">
        <div className="font-bold text-xl">Admin page</div>
      </div>
      <div className="m-auto w-[70%] mt-10">
        <div className="flex gap-5 my-4">
          <div className="text-xl">Ebook list</div>
          <button
            to="/admin-add"
            className="bg-[#FEC601] text-white font-bold px-4 rounded-md"
            // onClick={handleAddEbook}
          >
            เพิ่ม
          </button>
        </div>
        <hr className="border-2" />
        <div className="w-[95%] m-auto">
          <CardAdmin ebooks={ebooks} />
        </div>
      </div>
    </>
  );
}
