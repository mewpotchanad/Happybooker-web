import { Link } from "react-router-dom"
import LoginForm from "../features/auth/LoginForm";
import RegisterContainer from "../features/auth/RegisterContainer";


export default function LoginPage() {
  return (
    <section>
      <div className="w-[100vw] h-screen flex justify-center items-center justify-around">
        <Link to="/">
          <img className="mt-[20px]" src="HAPPY BOOKER_LOGIN.png" alt="logo" />
        </Link>

        <div className="flex flex-col items-center justify-center">
          <div className="w-96 border-2 rounded-lg ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <LoginForm />
            </div>
            <RegisterContainer />
          </div>
        </div>
      </div>
    </section>
  );
}