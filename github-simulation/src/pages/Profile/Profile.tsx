import HeaderLayout from "../../components/layout/HeaderLayout";
import ProfileSideBar from "../../components/layout/ProfileSideBar";
import Overview from "../../components/overview/overview";

const Profile = () => {
    return (
        <HeaderLayout>
            <ProfileSideBar>
                <Overview />
            </ProfileSideBar>
        </HeaderLayout>
    )
}

export default Profile;