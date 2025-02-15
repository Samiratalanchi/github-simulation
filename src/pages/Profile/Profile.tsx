import HeaderLayout from "../../components/layout/HeaderLayout";
import ProfileSideBar from "../../components/layout/ProfileSideBar";
import Overview from "../../components/overview/Overview";
import { useState } from "react";

const Profile = () => {

    const userProfileData = JSON.parse(localStorage.getItem("user") || "null")
    const repoData = JSON.parse(localStorage.getItem("repos") || "null")

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    if (!userProfileData) return <div className="text-center mt-10">No user data found / Please login first</div>;
    
    return (
        <HeaderLayout
            userProfileData={userProfileData}
            repoData={repoData}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
        >
            <ProfileSideBar userProfileData={userProfileData} isMenuOpen={isMenuOpen}>
                <Overview />
            </ProfileSideBar>
        </HeaderLayout>
    )
}

export default Profile;