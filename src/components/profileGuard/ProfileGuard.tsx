import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfileGuard = ({ children }: { children: JSX.Element }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (!user) {
            navigate("/login");
        }
    }, [navigate]);

    return <>{children}</>;
};

export default ProfileGuard;
