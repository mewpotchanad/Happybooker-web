// import React from "react";
// import LoginForm from "../features/auth/LoginForm";

// export default function AdminLogin() {
//   return (
//     <section>
//       <div className="font-bold text-2xl text-center bg-white p-4">Admin login</div>
//       <div className="w-[100vw] my-10 flex justify-center">
//         <div className="flex flex-col items-center justify-center">
//           <div className="w-96 border-2 rounded-lg ">
//             <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//               <LoginForm />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AdminLogin = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      await login(userName, password);
      const user = res.data.user;
      console.log(user);
      if (user.role !== "admin") {
        setError("Access denied: You do not have admin privileges.");
      } else {
        // localStorage.setItem("token", token);
        setAccessToken();
        navigate("/admin");
      }
    } catch (error) {
      setError("Login failed: Invalid username or password.");
    }
  };

  return (
    <>
      <div className="bg-white p-4">
        <h1 className="font-bold text-2xl text-center">Admin Login</h1>
      </div>
      <div className="flex my-10 m-auto border-2 border-white w-[30%] rounded-md p-10">
        <form onSubmit={handleLogin} className="w-full flex flex-col">
          <div className="mb-3 flex justify-between">
            <label>Username:</label>
            <input
              type="text"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
              className="text-black px-2 rounded-md w-[78%]"
            />
          </div>
          <div className="mb-3 flex justify-between">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="text-black px-2 rounded-md w-[78%]"
            />
          </div>
          {error && <div>{error}</div>}
          <div className="flex justify-center mt-3">
            <button type="submit" className="text-white bg-[#FEC601] px-4 rounded-md w-[20%]">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
