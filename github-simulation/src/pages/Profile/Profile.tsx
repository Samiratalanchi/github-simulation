import HeaderLayout from "../../components/layout/HeaderLayout";
import ProfileSideBar from "../../components/layout/ProfileSideBar";
import Overview from "../../components/overview/overview";

import { useState, useEffect } from "react";

const Profile = () => {

    const [userProfileData, setUserProfileData] = useState<any>(null);
    const [userProfileDataLoading, setUserProfileDataLoading] = useState(true);

    const [repoData, setRepoData] = useState<any>(null);
    const [repoDataLoading, setRepoDataLoading] = useState(true);

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
                setUserProfileDataLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setUserProfileDataLoading(false);
            });
    }, []);

    useEffect(() => {
        fetch("https://api.github.com/users/Samiratalanchi/repos")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setRepoData(data);
                setRepoDataLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setRepoDataLoading(false);
            });
    }, []);

    if (userProfileDataLoading || repoDataLoading) return <div className="text-center mt-10">Loading...</div>;
    if (!userProfileData) return <div className="text-center mt-10">No user data found</div>;
    

    return (
        <HeaderLayout userProfileData={userProfileData} repoData={repoData} >
            <ProfileSideBar userProfileData={userProfileData}>
                <Overview />
            </ProfileSideBar>
        </HeaderLayout>
    )
}

export default Profile;