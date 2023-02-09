import React from 'react';
import { Link } from "react-router-dom";

export default function RegisterContainer() {
    return (
        <p className="text-sm font-light text-center mb-5">
            <Link to="/register" 
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
                สมัครสมาชิก
            </Link>
        </p>
        
    )
}



