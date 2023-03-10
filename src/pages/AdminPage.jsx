import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as ebookApi from "../apis/ebook-api";
import CardAdmin from "../layouts/CardAdmin";

export default function AdminPage() {
  const [ebooks, setEbooks] = useState([]);

  useEffect(() => {
    const fetchEbook = async () => {
      const res = await ebookApi.getAllEbook();
      setEbooks(res.data);
    };
    fetchEbook();
  }, []);

  return (
    <>
      <div className="bg-white w-full p-4">
        <div className="font-bold text-xl">Admin page</div>
      </div>
      <div className="m-auto w-[70%] mt-10">
        <div className="flex gap-5 my-4">
          <div className="text-xl">Ebook list</div>
          <Link to="/adminedit" className="bg-[#FEC601] text-white font-bold px-4 rounded-md">
            เพิ่ม
          </Link>
        </div>
        <hr className="border-2" />
        <div className="w-[95%] m-auto">
          <div className="flex gap-5 p-4">
            <div className="w-[100px] h-[150px] bg-[#E3E3E4]"></div>
            <div className="flex flex-col justify-around">
              <div className="flex flex-col gap-2">
                <div className="text-2xl">ไม่รู้ภาษีธุรกิจออนไลน์ไปไม่รอด</div>
                <div className="text-sm">โดย ธนเดช บุญสันทิยะ</div>
              </div>
              <div className="flex gap-4">
                <button className="bg-[#FEC601] text-white font-bold px-4 rounded-md">แก้ไข</button>
                <button className="bg-[#FEC601] text-white font-bold px-4 rounded-md">ลบ</button>
              </div>
            </div>
          </div>
          <hr />
          {/* <CardAdmin /> */}
        </div>
      </div>
    </>
  );
}
