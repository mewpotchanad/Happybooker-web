import React from 'react';
import { useState } from 'react';
// import { object, string, ref } from 'yup'
import * as Joi from 'joi'
import Input from '../../components/Input';
import validateRegister from "../../validators/validate-register"


const initialInput = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


export default function RegisterForm() {
    const [input, setInput] = useState(initialInput)
    const [error, setError] = useState({})

    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmitForm = e => {
        e.preventDefault()
        const result = validateRegister(input)
        if (result) {
            setError(result)
        } else {
            setError({})
        }
    }

    return (
        <>
            <h1 className="text-xl  leading-tight tracking-tight text-white md:text-2xl dark:text-white text-center">
                สมัครสมาชิก
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmitForm} action="#">
                <div>
                    <div className="flex justify-between">
                        <div className='w-52'>
                            <Input
                                placeholder="Firstname"
                                name="firstName"
                                value={input.firstName}
                                onChange={handleChangeInput}
                                error={error.firstName}
                            />
                        </div>
                        <div className='w-52 '>
                            <Input
                                placeholder="Lastname"
                                name="lastName"
                                value={input.lastName}
                                onChange={handleChangeInput}
                                error={error.lastName}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <Input
                        placeholder="Username"
                        name="userName"
                        value={input.userName}
                        onChange={handleChangeInput}
                        error={error.userName}
                    />
                </div>
                <div>
                    <Input
                        placeholder="Email"
                        name="email"
                        value={input.email}
                        type="email"
                        onChange={handleChangeInput}
                        error={error.email}
                    />
                </div>
                <div>
                    <Input
                        placeholder="New password"
                        name="password"
                        value={input.password}
                        type="password"
                        onChange={handleChangeInput}
                        error={error.password}
                    />
                </div>
                <div>
                    <Input
                        placeholder="Confirm password"
                        name="confirmPassword"
                        value={input.confirmPassword}
                        type="password"
                        onChange={handleChangeInput}
                        error={error.confirmPassword}
                    />
                </div>

                <div className="grid justify-items-center">
                    <button type="submit" className="w-1/3 text-white bg-[#FEC601] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">สมัครสมาชิก</button>
                </div>
            </form>
        </>
    )
}
