import React from "react";

export default function AdminPage() {
  return (
    <>
      <div className="bg-white w-full p-4">
        <div className="font-bold text-xl">Admin page</div>
      </div>
      <div className="m-auto w-[70%] mt-10">
        <div className="border-2 border-white p-10 rounded-md flex justify-center">
          <div className="flex flex-col gap-4">
            <div className="pb-4 font-bold text-xl">รายละเอียดหนังสือ</div>
            <div className="flex gap-2">
              <div className="w-20">ชื่อหนังสือ</div>
              <div>
                <input className="rounded-md w-[800px]" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-20">หน้าปก</div>
              <div>
                <input className="rounded-md w-[800px]" />
              </div>
              <button className="bg-[#FEC601] text-white rounded-md px-2 ml-1">อัพโหลด</button>
            </div>
            <div className="flex gap-2">
              <div className="w-20">นักเขียน</div>
              <div>
                <input className="rounded-md w-[800px]" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-20">สำนักพิมพ์</div>
              <div>
                <input className="rounded-md w-[800px]" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-20">หมวดหมู่</div>
              <div>
                <input className="rounded-md w-[800px]" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-20">เรื่องย่อ</div>
              <div>
                <textarea className="rounded-md w-[800px]" />
              </div>
            </div>
            <div className="flex justify-center gap-3">
              <button className="bg-[#FEC601] text-white rounded-md px-4">ยกเลิก</button>
              <button className="bg-[#FEC601] text-white rounded-md px-4">บันทึก</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
