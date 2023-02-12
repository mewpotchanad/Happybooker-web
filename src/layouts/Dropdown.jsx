import React, { useState, useRef, useEffect } from 'react'
import DropdownMenu from './DropdownMenu'
import DropdownToggle from './DropdownToggle'

export default function Dropdown() {
    const [open, setOpen] = useState(false)
    const dropdownEl = useRef()

    useEffect(() => {
        const handleClickOutside = e => {
            if(!dropdownEl.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener(`mousedown`, handleClickOutside)
        return () => document.removeEventListener(`mousedown`, handleClickOutside)
    }, [])

    return (
        <div className='flex justify-end'>
            <DropdownToggle onClick={() => setOpen(!open)} />
            <DropdownMenu open={open} onClose={() => setOpen(false)} />
        </div>
    )
}






