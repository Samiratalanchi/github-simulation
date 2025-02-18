
import HeaderLayout from "../../components/layout/HeaderLayout";
import ProfileSideBar from "../../components/layout/ProfileSideBar";
import Overview from "../../components/overview/Overview";
import { useState } from "react";
import Repositories from "../../components/repositories/Repositories";

const Profile = () => {

    const userProfileData = JSON.parse(localStorage.getItem("user") || "null")
    const repoData = JSON.parse(localStorage.getItem("repos") || "null")

    const [activeTab, setActiveTab] = useState("Overview");

    const [isLeftSideMenuOpen, setIsLeftSideMenuOpen] = useState(false);
    const [isRightSideMenuOpen, setIsRightSideMenuOpen] = useState(false);

    if (!userProfileData) return <div className="text-center mt-10">No user data found / Please login first</div>;

    console.log("Profile",isLeftSideMenuOpen,isRightSideMenuOpen);
    
    return (
        <HeaderLayout
            userProfileData={userProfileData}
            repoData={repoData}
            isLeftSideMenuOpen={isLeftSideMenuOpen}
            setIsLeftSideMenuOpen={setIsLeftSideMenuOpen}
            isRightSideMenuOpen={isRightSideMenuOpen}
            setIsRightSideMenuOpen={setIsRightSideMenuOpen}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        >
            <ProfileSideBar userProfileData={userProfileData} isLeftSideMenuOpen={isLeftSideMenuOpen} isRightSideMenuOpen={isRightSideMenuOpen} >
                {activeTab === "Repositories" ?
                <Repositories /> :
                <Overview />
                }
            </ProfileSideBar>
        </HeaderLayout>
    )
}

export default Profile;