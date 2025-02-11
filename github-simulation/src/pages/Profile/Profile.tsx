import HeaderLayout from "../../components/layout/HeaderLayout";
import ProfileSideBar from "../../components/layout/ProfileSideBar";
import Overview from "../../components/overview/overview";

import { useState, useEffect } from "react";

const Profile = () => {

    const [userProfileData, setUserProfileData] = useState<any>(null);


    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.github.com/users/samiratalanchi")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setUserProfileData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-center mt-10">Loading...</div>;
    if (!userProfileData) return <div className="text-center mt-10">No user data found</div>;


    return (
        <HeaderLayout userProfileData={userProfileData}>
            <ProfileSideBar userProfileData={userProfileData}>
                <Overview />
            </ProfileSideBar>
        </HeaderLayout>
    )
}

export default Profile;