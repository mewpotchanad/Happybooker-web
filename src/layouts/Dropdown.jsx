import React from 'react'
import DropdownMenu from './DropdownMenu'
import DropdownToggle from './DropdownToggle'

export default function Dropdown() {
    return (
        <div className='flex justify-end'>
            <DropdownToggle />
            <DropdownMenu />
        </div>
    )
}
