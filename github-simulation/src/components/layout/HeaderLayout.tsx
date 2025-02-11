import logo from "../../images/logo.png"

import { useState } from "react";

import { IoMdMenu } from "react-icons/io";
import { RiGitRepositoryLine } from "react-icons/ri";
import { VscGithubProject, VscIssues } from "react-icons/vsc";
import { GoPackage } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { BsBook } from "react-icons/bs";
import { FiInbox, FiPlus } from "react-icons/fi";
import { LuGitPullRequestArrow } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";

const HeaderLayout = ({ children, userProfileData}:{children: React.ReactNode, userProfileData:any}) => {

    const tabs = [
        { name: "Overview", icon: BsBook },
        { name: "Repositories", icon: RiGitRepositoryLine, count: userProfileData.public_repos },
        { name: "Projects", icon: VscGithubProject, count: 20 },
        { name: "Packages", icon: GoPackage, count: 20 },
        { name: "Stars", icon: CiStar, count: 20 },
    ];

    const [activeTab, setActiveTab] = useState("Overview");

    return (
        <>
            <div className="fixed inset-x-0 flex w-full flex-row border-b border-gray-300">
                <div className="flex flex-col grow gap-y-0 overflow-x-auto bg-gray-100 px-6">
                    <div className="flex h-14 shrink-0 items-center justify-between">
                        <div className="flex items-center">
                            <button type="button" className="-m-3 p-1 text-gray-400 border rounded-md">
                                <IoMdMenu className="text-xl"/>
                            </button>
                            <img
                                className="h-8 w-auto ml-6"
                                src={logo}
                                alt="Your Company" />
                            <h1 className="ml-4 text-[13px] font-semibold">{userProfileData.login}</h1>
                        </div>
                        <div className="flex items-center">
                            <ul className="list-none flex flex-row items-center gap-x-3 text-md">
                                <li>
                                    <button type="button" className="p-2 border border-gray-300 rounded-md flex items-center gap-x-1">
                                        <FiPlus />
                                        <FaCaretDown />
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="p-2 border border-gray-300 rounded-md">
                                        <VscIssues/>
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="p-2 border border-gray-300 rounded-md">
                                        <LuGitPullRequestArrow />
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="p-2 border border-gray-300 rounded-md">
                                        <FiInbox />
                                    </button>
                                </li>
                                <li>
                                    <img
                                    className="h-8 w-auto rounded-full"
                                    src={userProfileData.avatar_url}
                                    alt="profile pic" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex shrink-0 items-center">
                        <ul className="list-none flex flex-row grow gap-x-4 text-[14px]">
                            {tabs.map((tab) => (
                                <li
                                    key={tab.name}
                                    onClick={() => setActiveTab(tab.name)}
                                    className={`cursor-pointer hover:bg-gray-200 rounded-tl-md rounded-tr-md p-1 pb-2 ${
                                        activeTab === tab.name
                                            ? "text-black border-b-2 border-orange-400"
                                            : "text-gray-600"
                                    }`}
                                >
                                    <a className="flex items-center gap-x-2">
                                        <tab.icon className="text-lg" />
                                        <span>{tab.name}</span>
                                        {tab.count && (
                                            <span className="bg-gray-300 rounded-md px-1">
                                                {tab.count}
                                            </span>
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-row h-full">{children}</div>
        </>
        
    );
}

export default HeaderLayout;