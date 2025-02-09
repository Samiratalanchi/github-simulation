//import profilePic from "../../images/IMG_0080.jpg"
import React from "react";
import ProfilePic from "../../images/IMG_0080.jpg"
import { PiHandWavingBold } from "react-icons/pi";
import { GoPeople } from "react-icons/go";

const ProfileSideBar = ({ children }:{children: React.ReactNode}) => {
    return (
        <>
            <div className="flex mx-auto mt-35 w-auto h-full flex-row gap-x-5">
                <div className="flex items-center">
                    <div className="card flex-col items-center px-2 relative">
                        <button type="button" className="absolute md:w-9 md:h-9 md:mt-60 md:ml-60 w-6 h-6 mt-48 ml-48 z-5 border rounded-full bg-white pl-2 text-lg"><PiHandWavingBold /></button>
                        <img src={ProfilePic} className="flex md:w-75 md:h-75 w-60 h-60 mb-5 rounded-full border border-gray-400"/>
                        <span className="font-semibold flex text-2xl">Samira Talanchi</span>
                        <span className="flex text-gray-400 mb-3 text-xl">Samiratalanchi</span>
                        <span className="flex mb-4 text-md">Who loves developing...</span>
                        <button type="button" className="bg-gray-100 flex w-full mb-4 text-sm justify-center border border-gray-400 rounded py-1 font-semibold">Edit Profile</button>
                        <div className="flex items-center gap-x-1 text-sm">
                            <span className="text-gray-600 font-semibold"><GoPeople /></span>
                            <span className="font-semibold">6</span>
                            <span className="text-gray-600">followers .</span>
                            <span className="font-semibold">4</span>
                            <span className="text-gray-600">following</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    {children}
                </div>
            </div>
        </>
    )
}

export default ProfileSideBar;