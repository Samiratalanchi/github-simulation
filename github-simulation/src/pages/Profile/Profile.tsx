import HeaderLayout from "../../components/layout/HeaderLayout";
import ProfileSideBar from "../../components/layout/ProfileSideBar";
import Overview from "../../components/overview/overview";

import { useState, useEffect } from "react";

const Profile = () => {

    const [userProfileData, setuserProfileData] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/samiratalanchi")
        .then((response) => {
            if (!response.ok) {
            throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            setuserProfileData(data);
        })
    }, []);

    return (
        <HeaderLayout userProfileData={userProfileData}>
            <ProfileSideBar userProfileData={userProfileData}>
                <Overview />
            </ProfileSideBar>
        </HeaderLayout>
    )
}

export default Profile;