import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as adminApi from "../apis/admin-api";

const intialInput = {
  title: "",
  image: "",
  publisher: "",
  author: "",
  category: "",
  description: ""
};

export default function AdminAddEbook() {
  const [ebookList, setEbookList] = useState(intialInput);
  const navigate = useNavigate();

  const handleChangeIuput = (e) => {
    setEbookList({ ...ebookList, [e.target.name]: e.target.value });
  };

  const handleSubmitInput = async (e) => {
    e.preventDefault();
    try {
      await adminApi.createEbook(ebookList);
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-white w-full p-4">
        <div className="font-bold text-xl">Add ebook</div>
      </div>
      <form onSubmit={handleSubmitInput}>
        <div className="m-auto w-[70%] mt-10">
          <div className="border-2 border-white p-10 rounded-md flex justify-center">
            <div className="flex flex-col gap-4 w-[95%]">
              <div className="pb-4 font-bold text-xl">รายละเอียดหนังสือ</div>
              <div className="flex gap-2">
                <div className="w-20">ชื่อหนังสือ</div>
                <div className="w-[80%]">
                  <input
                    className="rounded-md text-black px-2 w-full"
                    id="title"
                    type="text"
                    name="title"
                    value={ebookList.title}
                    onChange={handleChangeIuput}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-20">หน้าปก</div>
                <div className="w-[80%] flex justify-between">
                  <input
                    className="rounded-md text-black px-2 w-[87%]"
                    type="text"
                    id="image"
                    name="image"
                    value={ebookList.image}
                    onChange={handleChangeIuput}
                  />
                  <button className="bg-[#FEC601] text-white rounded-md px-2 ml-2">อัพโหลด</button>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-20">นักเขียน</div>
                <div className="w-[80%]">
                  <input
                    className="rounded-md text-black px-2 w-full"
                    name="author"
                    type="text"
                    id="author"
                    value={ebookList.author}
                    onChange={handleChangeIuput}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-20">สำนักพิมพ์</div>
                <div className="w-[80%]">
                  <input
                    className="rounded-md text-black px-2 w-full"
                    type="text"
                    name="publisher"
                    id="publisher"
                    value={ebookList.publisher}
                    onChange={handleChangeIuput}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-20">หมวดหมู่</div>
                <div className="w-[80%]">
                  <input
                    className="rounded-md text-black px-2 w-full"
                    name="category"
                    id="category"
                    type="text"
                    value={ebookList.category}
                    onChange={handleChangeIuput}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-20">เรื่องย่อ</div>
                <div className="w-[80%]">
                  <textarea
                    className="rounded-md text-black px-2 w-full"
                    name="description"
                    id="description"
                    type="text"
                    value={ebookList.description}
                    onChange={handleChangeIuput}
                  />
                </div>
              </div>
              <div className="flex justify-center gap-3">
                <Link to="/admin" className="bg-[#FEC601] text-white rounded-md px-4">
                  ยกเลิก
                </Link>
                <button className="bg-[#FEC601] text-white rounded-md px-4">บันทึก</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
