import React from 'react'
import { Link } from "react-router-dom"

function Login() {
  return (
    <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
        <li>
          <Link to="/" className="block px-4 py-2 text-[#808191] hover:text-[#FEC601]">หน้าแรก</Link>
        </li>
        <li>
          <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 text-[#808191] hover:text-[#FEC601]">หมวดหมู่<svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></button>
          <div id="doubleDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
              <li>
                <Link to="#" className="block px-4 py-2 text-[#808191] hover:text-[#FEC601]">นิยาย</Link>
              </li>
              <li>
                <Link to="#" className="block px-4 py-2 text-[#808191] hover:text-[#FEC601]">การ์ตูน</Link>
              </li>
              <li>
                <Link to="#" className="block px-4 py-2 text-[#808191] hover:text-[#FEC601]">พัฒนาตนเอง</Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

  )
}

export default Login