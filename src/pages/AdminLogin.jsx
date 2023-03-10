import React from "react";
import LoginForm from "../features/auth/LoginForm";

export default function AdminLogin() {
  return (
    <section>
      <div className="font-bold text-2xl text-center bg-white p-4">Admin login</div>
      <div className="w-[100vw] my-10 flex justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="w-96 border-2 rounded-lg ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
