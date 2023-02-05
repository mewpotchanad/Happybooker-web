import { Link } from "react-router-dom"


export default function RegisterPage() {
    return (
        <section>
            <div className="w-[100vw] h-screen flex justify-center items-center justify-around">
                <Link to="#">
                    <img className="mt-[20px]" src="HAPPY BOOKER_LOGIN.png" alt="logo" />
                </Link>

                <div className="flex flex-col items-center justify-center">
                    <div className="w-[500px] border-2 rounded-lg ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl  leading-tight tracking-tight text-white md:text-2xl dark:text-white text-center">
                                สมัครสมาชิก
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-white dark:text-white">Full name</label>
                                    <div className="flex flex-col justify-around">
                                        <input type="text" name="firstname" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Firstname" required="" />
                                        <input type="text" name="lastname" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Lastname" required="" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-white dark:text-white">Your username</label>
                                    <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter username" required="" />
                                </div>
                                <div>
                                    <label htmlFor="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="Enter password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <button type="submit" className="w-1/2 text-white bg-[#FEC601] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">สมัครสมาชิก</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}