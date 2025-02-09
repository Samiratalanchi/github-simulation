import { CiStar } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { RiGitRepositoryLine } from "react-icons/ri";
import { RxDragHandleDots2 } from "react-icons/rx";

import { useState } from "react";

const Overview = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    const years = ["2025", "2024", "2023", "2022", "2021"];

    const [activeButton, setActiveButton] = useState("2025");

    return (
        <>
            <div className="pinned flex flex-col mb-3">
                <div className="flex flex-row justify-between items-center">
                    <span className="flex text-lg mb-3">Pinned</span>
                    <a href="" className="text-xs text-blue-700 hover:underline">Customize your pins</a>
                </div>
                <div className="flex flex-col gap-y-4">
                    <div className="flex flex-row gap-x-4 items-center">
                        <div className="flex flex-col border rounded border-gray-300 w-1/2 p-4 gap-y-4">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row items-center gap-x-2">
                                    <span className="flex text-gray-600 text-lg"><RiGitRepositoryLine /></span>
                                    <a className="flex text-blue-700 text-md hover:underline" href="">github-simulation</a>
                                    <span className="flex text-gray-400 rounded-xl border text-xs px-1">Public</span>
                                </div>
                                <RxDragHandleDots2 className="flex items-center"/>
                            </div>
                            <div className="flex flex-row gap-x-5">
                                <div className="flex flex-row items-center gap-x-2">
                                    <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                                    <span className="text-gray-600 text-sm">TypeScript</span>
                                </div>
                                <div className="flex flex-row items-center gap-x-1">
                                    <CiStar className="flex text-lg" />
                                    <span className="text-gray-600 text-sm">1</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col border rounded border-gray-300 w-1/2 p-4 gap-y-4">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row items-center gap-x-2">
                                    <span className="flex text-gray-600 text-lg"><RiGitRepositoryLine /></span>
                                    <a className="flex text-blue-700 text-md hover:underline" href="">Employe-Management</a>
                                    <span className="flex text-gray-400 rounded-xl border text-xs px-1">Public</span>
                                </div>
                                <span className="flex items-center"><RxDragHandleDots2 /></span>
                            </div>
                            <div className="flex flex-row gap-x-5">
                                <div className="flex flex-row items-center gap-x-2">
                                    <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                                    <span className="text-gray-600 text-sm">TypeScript</span>
                                </div>
                                <div className="flex flex-row items-center gap-x-1">
                                    <CiStar className="flex text-lg" />
                                    <span className="text-gray-600 text-sm">1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-x-4">
                    <div className="flex flex-col border rounded border-gray-300 w-1/2 p-4 gap-y-4">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row items-center gap-x-2">
                                    <span className="flex text-gray-600 text-lg"><RiGitRepositoryLine /></span>
                                    <a className="flex text-blue-700 text-md hover:underline" href="">todo_list</a>
                                    <span className="flex text-gray-400 rounded-xl border text-xs px-1">Public</span>
                                </div>
                                <span className="flex items-center"><RxDragHandleDots2 /></span>
                            </div>
                            <div className="flex flex-row gap-x-5">
                                <div className="flex flex-row items-center gap-x-2">
                                    <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                                    <span className="text-gray-600 text-sm">TypeScript</span>
                                </div>
                                <div className="flex flex-row items-center gap-x-1">
                                    <CiStar className="flex text-lg" />
                                    <span className="text-gray-600 text-sm">1</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col border rounded border-gray-300 w-1/2 p-4 gap-y-4">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row items-center gap-x-2">
                                    <span className="flex text-gray-600 text-lg"><RiGitRepositoryLine /></span>
                                    <a className="flex text-blue-700 text-md hover:underline" href="">tic-tac-toe</a>
                                    <span className="flex text-gray-400 rounded-xl border text-xs px-1">Public</span>
                                </div>
                                <span className="flex items-center"><RxDragHandleDots2 /></span>
                            </div>
                            <div className="flex flex-row gap-x-5">
                                <div className="flex flex-row items-center gap-x-2">
                                    <span className="w-4 h-4 rounded-full bg-yellow-200"></span>
                                    <span className="text-gray-600 text-sm">JavaScript</span>
                                </div>
                                <div className="flex flex-row items-center gap-x-1">
                                    <CiStar className="flex text-lg" />
                                    <span className="text-gray-600 text-sm">1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-x-3  justify-between">
                <div className="flex flex-col gap-y-1">
                    <div className="flex flex-row justify-between items-center">
                        <span className="flex text-lg">70 contributions in the last year</span>
                        <a className="flex text-xs text-gray-600 items-center hover:underline hover:text-blue-600">Contribution setting <FaCaretDown /></a>
                    </div>
                    <div className="flex flex-col border rounded border-gray-300 text-sm p-5">
                        <div className="flex flex-row ml-  mb-1">
                            {[...Array(12)].map((_, i) => (
                                <span key={i} className="pl-8 text-xs">{months[i]}</span>
                            ))}
                        </div>
                        <table className="flex border-collapse border-spacing-0 mb-2">
                            <tbody>
                                {[...Array(7)].map((_, j) => (
                                    <tr key={j}>
                                        {j % 2 === 1 ? <td className="text-xs pr-1">{day[j]}</td> : <td></td>}
                                        {[...Array(52)].map((_, i) => (
                                            <td key={i}>
                                                <div className="border border-gray-300 bg-gray-200 rounded-xs w-[10px] h-[10px] mx-px"></div>
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex flex-row justify-between text-gray-600 items-center px-8 text-xs">
                            <a href="" className="flex hover:text-blue-600">Learn how we count contributions</a>
                            <div className="flex flex-row items-center gap-x-1 ">
                                <span>Less</span>
                                <div className="border border-gray-300 bg-gray-200 rounded-xs w-[10px] h-[10px]"></div>
                                <div className="border border-green-200 bg-green-200 rounded-xs w-[10px] h-[10px]"></div>
                                <div className="border border-green-400 bg-green-400 rounded-xs w-[10px] h-[10px]"></div>
                                <div className="border border-green-700 bg-green-700 rounded-xs w-[10px] h-[10px]"></div>
                                <div className="border border-green-950 bg-green-950 rounded-xs w-[10px] h-[10px]"></div>
                                <span>More</span>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="flex flex-col gap-y-2 text-[12px] font-semibold">
                    {years.map((year) => (
                        <button
                            key={year}
                            type="button"
                            className={`flex p-2 rounded text-gray-400 ${
                                activeButton === year
                                    ? "bg-blue-700 text-white"
                                    : "hover:bg-gray-200"
                            }`}
                            onClick={() => setActiveButton(year)}
                        >
                            {year}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Overview;