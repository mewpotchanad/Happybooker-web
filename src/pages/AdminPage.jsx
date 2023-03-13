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

  return (
    <>
      <div className="bg-white w-full p-4 fixed top-0">
        <div className="font-bold text-xl">Admin page</div>
      </div>
      <div className="flex justify-center">
        <div className="m-auto w-[70%] mt-[60px]">
          <div className="fixed w-[70%] bg-[#1F1D2B]">
            <div className="flex gap-5 my-4">
              <div className="text-xl">Ebook list</div>
              <Link to="/admin-add" className="bg-[#FEC601] text-white font-bold px-4 rounded-md">
                เพิ่ม
              </Link>
            </div>
            <hr className="border-2" />
          </div>
          <div className="w-[100%] mt-[60px]">
            <CardAdmin ebooks={ebooks} setEbooks={setEbooks} />
          </div>
        </div>
      </div>
    </>
  );
}
