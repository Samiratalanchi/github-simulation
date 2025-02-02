import logo from "../../images/logo.png"
import LoginForm from "./LoginForm";

const LoginHolder = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full py-12 sm:px-3 lg:px-6">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    className="mx-auto h-10 w-auto"
                    src={logo}
                    alt="Your Company"
                />
                <h2 className="mt-6 text-center text-2xl leading-9 tracking-tight text-gray-900">
                    Sign in to GitHub
                </h2>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[360px]">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default LoginHolder;