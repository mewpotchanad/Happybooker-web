import React from 'react'

export default function Input({type, placeholder, name, value,onChange, error}) {
    return (
        <>
            <input
                type={type || "text"}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={` bg-gray-50 border border-gray-300 sm:text-sm rounded-lg p-2.5 required="" w-full ${error ? 'peer border border-slate-400 p-2.5 rounded-lg' : ''} `}
            // className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-52 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Firstname" required="" "
            />
        {error && <div className='text-xs mt-1 text-red-600'>{error}</div>}
        </>
    )
}
