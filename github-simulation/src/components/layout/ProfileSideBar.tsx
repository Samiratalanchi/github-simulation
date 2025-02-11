import React from "react";
import { GoPeople } from "react-icons/go";
import { MdOutlineAccessTime, MdOutlineEmail } from "react-icons/md";
import { IoIosLink } from "react-icons/io";

const ProfileSideBar = ({ children, userProfileData}:{children: React.ReactNode, userProfileData:any[]}) => {
    
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
            <div className="flex mx-auto mt-35 w-auto h-full flex-row gap-x-5">
                <div className="flex items-center">
                    <div className="card flex-col items-center px-2 relative">
                        <button 
                            type="button" 
                            className="absolute flex flex-row items-center md:mt-60 md:ml-60 mt-48 ml-48 z-10 px-2 py-1 border border-gray-400 w-10 hover:w-25 h-10 rounded-full  bg-white  overflow-hidden transition-all duration-300 ease-in-out group "
                            >
                            <span className="flex text-[14px] transition-opacity duration-300 group-hover:opacity-100">
                                👋
                            </span>
                            <span className="flex text-[10px] ml-2 w-15 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Edit Status
                            </span>
                        </button>
                        <img src={userProfileData.avatar_url} className="flex md:w-75 md:h-75 w-60 h-60 mb-5 rounded-full border border-gray-400"/>
                        <span className="font-semibold flex text-2xl">{userProfileData.name}</span>
                        <span className="flex text-gray-400 mb-3 text-xl">{userProfileData.login} . she/her</span>
                        <span className="flex mb-4 text-md">{userProfileData.bio}</span>
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
                            <span className="text-gray-600 text-lg"><MdOutlineEmail /></span>
                            <span>Samira73talanchi@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-x-1 text-sm mb-2">
                            <span className="text-gray-600 text-lg"><IoIosLink /></span>
                            <a>{userProfileData.blog}</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3">
                    {children}
                </div>
            </div>
        </>
    )
}

export default ProfileSideBar;