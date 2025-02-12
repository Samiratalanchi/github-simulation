import logo from "../../images/logo.png"
import LoginForm from "./LoginForm";
import useUserProfileData from "../../services/api/users"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginHolder = () => {

    const [userName, setUserName] = useState<string>("");
    const [triggerUserName, setTriggerUserName] = useState<string>("");
    const [success, setSuccess] = useState<boolean | null >(null);

    const navigate = useNavigate();

    const { userProfileData, status } = useUserProfileData(
        triggerUserName
    );

    const submitForm = () => {
        if (!userName) {
            alert("Please enter a username");
            return;
        }
        setTriggerUserName(userName);
    };
    
    useEffect(() => {
        if (status) {
            console.log("User data fetched successfully:", userProfileData);
            setSuccess(true);
            navigate("/profile")
        } else if (!status && triggerUserName) {
            setSuccess(false); // If user not found
        }
    }, [status, userProfileData, triggerUserName, navigate]);

    return (
        <div className="flex flex-col justify-center items-center h-full py-12 sm:px-3 lg:px-6">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    className="mx-auto h-10 w-auto"
                    src={logo}
                    alt="Your Company"
                />
                <h2 className="mt-6 text-center text-2xl leading-9 tracking-tight text-gray-900">
                    Login to GitHub
                </h2>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[360px]">
                    <LoginForm setUserName={setUserName} submitForm={submitForm} />
                </div>
            </div>
        </div>
    )
}

export default LoginHolder;