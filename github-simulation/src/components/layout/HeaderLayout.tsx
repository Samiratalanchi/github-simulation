import logo from "../../images/logo.png"
import profilePic from "../../images/IMG_0080.jpg"
import { IoMdMenu } from "react-icons/io";
import { RiGitRepositoryLine } from "react-icons/ri";
import { VscGithubProject, VscIssues } from "react-icons/vsc";
import { GoPackage } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { BsBook } from "react-icons/bs";
import { FiInbox, FiPlus } from "react-icons/fi";
import { LuGitPullRequestArrow } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";

const HeaderLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="fixed inset-x-0 flex w-full flex-row">
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
                            <h1 className="ml-4 text-[13px] font-semibold">Samiratalanchi</h1>
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
                                    src={profilePic}
                                    alt="profile pic" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex h-10 shrink-0 items-center">
                        <ul className="list-none flex flex-row grow gap-x-4 text-[14px]">
                            <li className="hover:bg-gray-200 active:border-b-3 active:border-orange-300 rounded-md p-2">
                                <a className="flex items-center gap-x-2 ">
                                    <BsBook className="text-lg" />
                                    <span>Overview</span>
                                </a>
                            </li>
                            <li className="hover:bg-gray-200 active:border-b-3 active:border-orange-300 rounded-md p-2">
                                <a className="flex items-center gap-x-2">
                                    <RiGitRepositoryLine className="text-lg" />
                                    <span>Repositories</span>
                                    <span className="bg-gray-200 rounded-md px-1">20</span>
                                </a>
                            </li>
                            <li className="hover:bg-gray-200 active:border-b-3 active:border-orange-300 rounded-md p-2">
                                <a className="flex items-center gap-x-2">
                                    <VscGithubProject className="text-lg" />
                                    <span>Projects</span>
                                    <span className="bg-gray-200 rounded-md px-1">20</span>
                                </a>
                            </li>
                            <li className="hover:bg-gray-200 active:border-b-3 active:border-orange-300 rounded-md p-2">
                                <a className="flex items-center gap-x-2">
                                    <GoPackage className="text-lg" />
                                    <span>Packages</span>
                                    <span className="bg-gray-200 rounded-md px-1">20</span>
                                </a>
                            </li>
                            <li className="hover:bg-gray-200 active:border-b-3 active:border-orange-300 rounded-md p-2">
                                <a className="flex items-center gap-x-2">
                                    <CiStar className="text-lg" />
                                    <span>Stars</span>
                                    <span className="bg-gray-200 rounded-md px-1">20</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-row h-full">{children}</div>
        </>
        
    );
}

export default HeaderLayout;