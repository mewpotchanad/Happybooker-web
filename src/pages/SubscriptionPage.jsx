import React from 'react'

export default function SubscriptionPage() {
  return (
    <nav className="px-10 py-2.5">
      <div className="container flex flex-wrap items-center justify-between mx-auto">

        <a href="/">
          <img src="HAPPY BOOKER.png" className="w-44" alt="happy booker Logo" />
        </a>




        {/* ---------------- เข้าสู่ระบบ ---------------- */}
        <div className="flex items-center">
          <img src="user.png" className="w-9" alt="user"  />
          <a href="#" className="block py-2 pl-3 pr-4 text-white hover:text-[#FEC601]" >เข้าสู่ระบบ</a>
        </div>

      </div>
    </nav>
  )
}
