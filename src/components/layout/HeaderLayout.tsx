import logo from "../../images/logo.png"
import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { RiGitRepositoryLine } from "react-icons/ri";
import { VscGithubProject, VscIssues } from "react-icons/vsc";
import { GoArrowSwitch, GoCodespaces, GoCommentDiscussion, GoHome, GoPackage, GoTelescope } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { BsBook } from "react-icons/bs";
import { FiInbox, FiPlus } from "react-icons/fi";
import { LuGitPullRequestArrow } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";
import { IoGiftOutline } from "react-icons/io5";
import { MdOutlineExitToApp } from "react-icons/md";
import ProfileGuard from "../profileGuard/ProfileGuard";

interface HeaderLayoutProps {
    children: React.ReactNode;
    userProfileData: any;
    repoData: any;
    isLeftSideMenuOpen: boolean;
    setIsLeftSideMenuOpen: (state: boolean) => void;
    isRightSideMenuOpen: boolean;
    setIsRightSideMenuOpen: (state: boolean) => void;
    activeTab: string
    setActiveTab: (state: string) => void;
}

const HeaderLayout = ({ children, userProfileData, repoData, isLeftSideMenuOpen, setIsLeftSideMenuOpen, isRightSideMenuOpen, setIsRightSideMenuOpen, activeTab, setActiveTab} : HeaderLayoutProps ) => {
    
    const tabs = [
        { name: "Overview", icon: BsBook },
        { name: "Repositories", icon: RiGitRepositoryLine, count: userProfileData.public_repos },
        { name: "Projects", icon: VscGithubProject },
        { name: "Packages", icon: GoPackage },
        { name: "Stars", icon: CiStar },
    ];

    const navbarItems = {
        part1: [
            { name: "Home", icon: GoHome },
            { name: "Issues", icon: VscIssues },
            { name: "Pull requests", icon: LuGitPullRequestArrow },
            { name: "Projects", icon: VscGithubProject },
            { name: "Discussions", icon: GoCommentDiscussion },
            { name: "Codespaces", icon: GoCodespaces },
        ],
        part2: [
            { name: "Explore", icon: GoTelescope },
            { name: "Marketplace", icon: IoGiftOutline },
        ],
    };


    const [repoShowCounter, setRepoShowCounter] = useState(5);

    const repoCounter = () => {
        if (repoData.length > 5) {
            setRepoShowCounter(repoShowCounter + 5)
        } else {
            setRepoShowCounter(repoData.length);
        }
    }

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/login";
    };

    return (
        <ProfileGuard>
            <>
                <div className="inset-x-0 flex w-full flex-row border-b border-gray-300">
                    <div className="flex flex-col grow gap-y-0 overflow-x-auto bg-gray-100 px-6">
                        <div className="flex h-14 shrink-0 items-center justify-between">
                            <div className="flex items-center">
                                <button
                                    type="button"
                                    className="-m-3 p-1 text-gray-400 border rounded-md"
                                    data-collapse-toggle="leftSideMenu"
                                    aria-controls="leftSideMenu"
                                    aria-expanded={isLeftSideMenuOpen}
                                    onClick={() => {
                                        setIsLeftSideMenuOpen(true);
                                        if (isRightSideMenuOpen) setIsRightSideMenuOpen(false); // Only close if open
                                    }}
                                >
                                    <IoMdMenu className="text-xl"/>
                                </button>
                                {(isLeftSideMenuOpen || isRightSideMenuOpen) && (
                                    <div
                                        className="fixed inset-0 bg-black opacity-30 z-[999]"
                                        onClick={() => {
                                            if (isLeftSideMenuOpen) {
                                                setIsLeftSideMenuOpen(false);
                                                setRepoShowCounter(5)
                                            } else {
                                                setIsRightSideMenuOpen(false);
                                            }
                                        }} 
                                    ></div>
                                )}
                                <div className={`fixed inset-y-0 left-0 top-0 z-1000 w-80 bg-white p-4 rounded-lg shadow-md transition-transform duration-300 ${
                                        isLeftSideMenuOpen ? "translate-x-0" : "-translate-x-full"
                                    }`} id="leftSideMenu">
                                    <div className="flex flex-col grow gap-y-0 overflow-y-auto max-h-screen">
                                        <div className="flex flex-row justify-between mb-3 items-center w-full p-3">
                                            <img
                                                className="h-8 w-auto"
                                                src={logo}
                                                alt="logo" />
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setIsLeftSideMenuOpen(false);
                                                    setRepoShowCounter(5)
                                                }} 
                                                className="hover:bg-gray-200 rounded-md p-2 text-gray-600">
                                                <IoMdClose />
                                            </button>
                                        </div>
                                        <div className="flex flex-col items-center gap-y-0 px-3 pb-3 border-b border-gray-200">
                                            {navbarItems.part1.map((item) => (
                                                <div className="flex flex-row cursor-pointer text-gray-900 gap-x-2 p-1 w-full hover:bg-gray-100 items-center rounded">
                                                    <span className="flex text-lg"><item.icon /></span>
                                                    <span className="flex text-sm">{item.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex flex-col items-center cursor-pointer gap-y-0 px-3 py-3 border-b border-gray-200">
                                            {navbarItems.part2.map((item) => (
                                                <div className="flex flex-row text-gray-900 gap-x-2 p-1 w-full hover:bg-gray-100 items-center rounded">
                                                    <span className="flex text-lg"><item.icon /></span>
                                                    <span className="flex text-sm">{item.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex flex-col gap-y-1 px-3 py-3 mb-7">
                                            <span className="flex text-xs text-gray-400 mb-2">Repositories</span>
                                            {repoData && repoData.length > 0 ? (
                                                repoData.slice(0, repoShowCounter).map((repo:any, i:number) => (
                                                    <div
                                                    key={i} 
                                                    className="flex flex-row gap-y-0 cursor-pointer text-gray-900 gap-x-2 p-1 w-full hover:bg-gray-100 items-center rounded"
                                                    >
                                                        <img
                                                            className="h-6 w-auto rounded-full"
                                                            src={userProfileData.avatar_url}
                                                            alt="profile pic"
                                                        />
                                                        <span className="flex text-xs">{repo.full_name}</span>
                                                    </div>
                                                ))
                                                ) : (
                                                    <p>No repositories available</p>
                                                )
                                            }
                                            <button
                                                className={`flex text-xs text-gray-400 mt-1 cursor-pointer py-2 px-1 hover:bg-gray-100 rounded ${repoShowCounter === repoData.length ? "hidden" : "block"}`}
                                                onClick={() => repoCounter()} 
                                            >
                                                Show more
                                            </button>
                                        </div>
                                    </div>
                                </div> 
                                <div className={`fixed inset-y-0 right-0 top-0 z-1001 w-80 bg-white p-4 rounded-lg shadow-md transition-transform duration-300 ${
                                        isRightSideMenuOpen ? "translate-x-0" : "translate-x-full"
                                    }`} id="rightSideMenu">
                                    <div className="flex flex-col grow gap-y-0 overflow-y-auto max-h-screen">
                                        <div className="flex flex-row justify-between mb-3 items-center w-full p-3">
                                            <div className="flex flex-row items-center gap-x-2">
                                                <img
                                                className="flex h-9 w-auto rounded-full"
                                                src={userProfileData.avatar_url}
                                                alt="profile pic"
                                                />
                                                <div className="flex flex-col gap-y-0">
                                                    <span className="text-sm">{userProfileData.login}</span>
                                                    <span className="text-sm text-gray-400">{userProfileData.name}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-row">
                                                <button
                                                    className="hover:bg-gray-200 rounded-md p-2 text-gray-600">
                                                    <GoArrowSwitch />
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setIsRightSideMenuOpen(false);
                                                    }} 
                                                    className="hover:bg-gray-200 rounded-md p-2 text-gray-600">
                                                    <IoMdClose />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center gap-y-0 p-3 border-t border-gray-200">
                                            <div onClick={() => handleLogout()} className="flex flex-row cursor-pointer text-gray-900 gap-x-2 p-1 w-full hover:bg-gray-100 items-center rounded">
                                                <span className="flex text-lg"><MdOutlineExitToApp /></span>
                                                <span className="flex text-sm">Log out</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                <img
                                    className="h-8 w-auto ml-6"
                                    src={logo}
                                    alt="logo" />
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
                                        <button
                                            type="button"
                                            className="items-center pt-2"
                                            data-collapse-toggle="rightSideMenu"
                                            aria-controls="rightSideMenu"
                                            aria-expanded={isRightSideMenuOpen}
                                            onClick={() => {
                                                setIsRightSideMenuOpen(true);
                                                if (isLeftSideMenuOpen) setIsLeftSideMenuOpen(false);
                                            }}
                                            >
                                                <img
                                                    className="h-8 w-auto rounded-full"
                                                    src={userProfileData.avatar_url}
                                                    alt="profile pic" />
                                        </button>
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
        </ProfileGuard>
    );
}

export default HeaderLayout;