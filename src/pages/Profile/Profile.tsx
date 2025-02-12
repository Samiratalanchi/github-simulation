import HeaderLayout from "../../components/layout/HeaderLayout";
import ProfileSideBar from "../../components/layout/ProfileSideBar";
import Overview from "../../components/overview/Overview";
import useReposData from "../../services/api/repos";
import useUserProfileData from "../../services/api/users"
import { useState, useEffect } from "react";

const Profile = () => {

    const { userProfileData, userProfileDataLoading } = useUserProfileData();
    const { repoData, repoDataLoading } = useReposData();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    if (userProfileDataLoading || repoDataLoading) return <div className="text-center mt-10">Loading...</div>;
    if (!userProfileData) return <div className="text-center mt-10">No user data found</div>;
    

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