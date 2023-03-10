import React from 'react'
import { Link } from "react-router-dom"
import logo from "../asset/happy.png"

export default function Brand() {
    return (
        <Link to="/">
            <img src={logo} className="w-44" alt="happy booker Logo" />
        </Link>
    )
}
