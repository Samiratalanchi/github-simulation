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

const ProfileSideBar = ({ children, userProfileData, isLeftSideMenuOpen, isRightSideMenuOpen}: ProfileSidebarProps) => {
    
    const now = new Date();

    const time = new Intl.DateTimeFormat('en-GB', { 
        hour: '2-digit', 
        minute: '2-digit', 
        hourCycle: 'h23'
    }).format(now);

    const offsetMinutes = now.getTimezoneOffset();
    const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
    const offsetSign = offsetMinutes > 0 ? "-" : "+";
    const offsetFormatted = `UTC ${offsetSign}${String(offsetHours).padStart(2, '0')}:${String(Math.abs(offsetMinutes) % 60).padStart(2, '0')}`

    return (
        <>
            <div className="flex mx-auto mt-10 w-auto h-full flex-row gap-x-5">
                <div className="flex max-w-xl w-1/4">
                    <div className="card flex-col items-center px-2">
                        <button 
                            type="button" 
                            className={`${isLeftSideMenuOpen || isRightSideMenuOpen ? "-z-1" : "z-2"} absolute cursor-pointer flex flex-row items-center lg:mt-50 lg:ml-45 md:mt-50 md:ml-45 mt-42 ml-42 px-2 py-1 border border-gray-400 w-10 hover:w-25 h-10 rounded-full  bg-white  overflow-hidden transition-all duration-300 ease-in-out group `}
                            >
                            <span className="flex text-[14px] transition-opacity duration-300 group-hover:opacity-100">
                                👋
                            </span>
                            <span className="flex text-[10px] ml-2 w-15 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Edit Status
                            </span>
                        </button>
                        <img src={userProfileData.avatar_url} className={`${isLeftSideMenuOpen || isRightSideMenuOpen ? "-z-10" : "z-1"} relative flex md:w-70 w-55 h-auto mb-5 rounded-full border border-gray-400`}/>
                        <span className="font-semibold flex text-2xl">{userProfileData.name}</span>
                        <span className="flex text-gray-400 mb-3 text-xl">{userProfileData.login}</span>
                        <span className="flex mb-4 text-md text-wrap max-w-80">{userProfileData.bio}</span>
                        <button type="button" className="bg-gray-100 flex w-full mb-4 text-sm justify-center border border-gray-400 rounded py-1 font-semibold">Edit Profile</button>
                        <div className="flex items-center gap-x-1 text-sm mb-5">
                            <span className="text-gray-600 text-lg"><GoPeople /></span>
                            <span className="font-semibold">{userProfileData.followers}</span>
                            <span className="text-gray-600">followers .</span>
                            <span className="font-semibold">{userProfileData.following}</span>
                            <span className="text-gray-600">following</span>
                        </div>
                        <div className="flex items-center gap-x-1 text-sm mb-2">
                            <span className="text-gray-600 text-lg"><MdOutlineAccessTime /></span>
                            <span>{time}</span>
                            <span className="text-gray-600">({offsetFormatted})</span>
                        </div>
                        <div className="flex items-center gap-x-1 text-sm mb-2">
                            <span className="text-gray-600 text-lg"><IoIosLink /></span>
                            <a>{userProfileData.blog}</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3 max-w-3xl lg:min-w-190 mx-auto">
                    {children}
                </div>
            </div>
        </>
    )
}

export default ProfileSideBar;