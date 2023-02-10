import { useState } from "react"
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';

export default function LoginForm() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useAuth();

    const handleSubmitForm = async e => {
        try {
          e.preventDefault();
          await login(userName, password);
          toast.success('success login');
        } catch (err) {
          console.log(err);
          toast.error('error');
        }
      };

    return (
        <>
            <h1 className="text-xl  leading-tight tracking-tight text-white md:text-2xl dark:text-white text-center">
                เข้าสู่ระบบ
            </h1>
            <form className="space-y-4 md:space-y-6" action="#" onSubmit={ handleSubmitForm }>
                <div>
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-white dark:text-white">Your username</label>
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter username"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        required=""
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                    />
                </div>
                <div className="grid justify-items-center">
                    <button type="submit" className="w-1/3 text-white bg-[#FEC601] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">เข้าสู่ระบบ</button>
                </div>
            </form>
        </>
    )
}
