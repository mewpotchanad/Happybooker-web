import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminAddEbook() {
  const [ebookList, setEbookList] = useState([]);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [publisher, setPublisher] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const addEbooks = () => {
    axios
      .post("/admin", {
        title: title,
        image: image,
        publisher: publisher,
        author: author,
        category: category,
        description: description
      })
      .then((response) => {
        const newEbook = {
          title: response.data.title,
          image: response.data.image,
          publisher: response.data.publisher,
          author: response.data.author,
          category: response.data.category,
          description: response.data.description
        };
        setEbookList([...ebookList, newEbook]);
      })
      .catch((error) => {
        console.error("Error adding ebook: ", error);
      });
  };

  return (
    <>
      <div className="bg-white w-full p-4">
        <div className="font-bold text-xl">Add ebook</div>
      </div>
      <form>
        <div className="m-auto w-[70%] mt-10">
          <div className="border-2 border-white p-10 rounded-md flex justify-center">
            <div className="flex flex-col gap-4 w-[95%]">
              <div className="pb-4 font-bold text-xl">รายละเอียดหนังสือ</div>
              <div className="flex gap-2">
                <div className="w-20">ชื่อหนังสือ</div>
                <div className="w-[80%]">
                  <input
                    className="rounded-md text-black px-2 w-full"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-20">หน้าปก</div>
                <div className="w-[80%] flex justify-between">
                  <input
                    className="rounded-md text-black px-2 w-[87%]"
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                  />
                  <button className="bg-[#FEC601] text-white rounded-md px-2 ml-2">อัพโหลด</button>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-20">นักเขียน</div>
                <div className="w-[80%]">
                  <input
                    className="rounded-md text-black px-2 w-full"
                    onChange={(e) => {
                      setAuthor(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-20">สำนักพิมพ์</div>
                <div className="w-[80%]">
                  <input
                    className="rounded-md text-black px-2 w-full"
                    onChange={(e) => {
                      setPublisher(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-20">หมวดหมู่</div>
                <div className="w-[80%]">
                  <input
                    className="rounded-md text-black px-2 w-full"
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-20">เรื่องย่อ</div>
                <div className="w-[80%]">
                  <textarea
                    className="rounded-md text-black px-2 w-full"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-center gap-3">
                <Link to="/admin" className="bg-[#FEC601] text-white rounded-md px-4">
                  ยกเลิก
                </Link>
                <button className="bg-[#FEC601] text-white rounded-md px-4" onClick={addEbooks}>
                  บันทึก
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
