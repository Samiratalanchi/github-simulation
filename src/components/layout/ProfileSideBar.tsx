import React from "react";
import { GoPeople } from "react-icons/go";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoIosLink } from "react-icons/io";

interface ProfileSidebarProps {
    children: React.ReactNode;
    userProfileData: any;
    isLeftSideMenuOpen: boolean;
    isRightSideMenuOpen: boolean;
}

const ProfileSideBar = ({ children, userProfileData, isLeftSideMenuOpen, isRightSideMenuOpen }: ProfileSidebarProps) => {

    const now = new Date();

    const time = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23'
    }).format(now);

    const offsetMinutes = now.getTimezoneOffset();
    const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
    const offsetSign = offsetMinutes > 0 ? "-" : "+";
    const offsetFormatted = `UTC ${offsetSign}${String(offsetHours).padStart(2, '0')}:${String(Math.abs(offsetMinutes) % 60).padStart(2, '0')}`;

    return (
        <>
            <div className="flex mx-auto mt-10 h-full md:flex-row gap-x-5 flex-col">
                <div className="flex md:w-1/4 w-screen">
                    <div className="card flex-col items-center px-2 w-full">
                        <div className="flex flex-row md:flex-col items-center md:items-start w-full">
                            <img 
                                src={userProfileData.avatar_url} 
                                className={`${isLeftSideMenuOpen || isRightSideMenuOpen ? "-z-10" : "z-1"} relative flex w-20 h-20 md:w-70 md:h-auto mb-5 rounded-full border border-gray-400`}
                            />
                            <div className="flex flex-col ml-4 md:ml-0">
                                <span className="font-semibold flex text-lg md:text-2xl">{userProfileData.name}</span>
                                <span className="flex text-gray-400 text-sm md:text-xl">{userProfileData.login}</span>
                            </div>
                        </div>
                        <button 
                            type="button" 
                            className={`${isLeftSideMenuOpen || isRightSideMenuOpen ? "-z-1" : "z-2"} md:absolute cursor-pointer flex flex-row items-center lg:-mt-30 lg:ml-45 md:-mt-30 md:ml-40 px-2 py-1 border border-gray-400 md:w-10 w-full hover:text-blue-700 md:hover:w-25 md:h-10 md:rounded-full rounded-md mb-2 bg-white md:overflow-hidden md:transition-all md:duration-300 md:ease-in-out group `}
                        >
                            <span className="flex text-[14px] md:transition-opacity md:duration-300 md:group-hover:opacity-100">
                                👋
                            </span>
                            <span className="flex text-[10px] ml-2 md:w-15 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300">
                                Edit Status
                            </span>
                        </button>
                        <span className="flex mb-4 text-md md:text-wrap md:max-w-80">{userProfileData.bio}</span>
                        <button type="button" className="bg-gray-100 flex w-full mb-4 text-sm justify-center border border-gray-400 rounded py-1 font-semibold">Edit Profile</button>
                        <div className="flex items-center gap-x-1 text-sm mb-5">
                            <span className="text-gray-600 text-lg"><GoPeople /></span>
                            <span className="font-semibold">{userProfileData.followers}</span>
                            <span className="text-gray-600">followers .</span>
                            <span className="font-semibold">{userProfileData.following}</span>
                            <span className="text-gray-600">following</span>
                        </div>
                        <div className="md:flex items-center gap-x-1 text-sm mb-2 hidden">
                            <span className="text-gray-600 text-lg"><MdOutlineAccessTime /></span>
                            <span>{time}</span>
                            <span className="text-gray-600">({offsetFormatted})</span>
                        </div>
                        <div className="md:flex items-center gap-x-1 text-sm mb-2 hidden">
                            <span className="text-gray-600 text-lg"><IoIosLink /></span>
                            <a>{userProfileData.blog}</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3 w-screen md:w-screen lg:min-w-190 md:max-w-2xl px-2">
                    {children}
                </div>
            </div>
        </>
    )
}

export default ProfileSideBar;
