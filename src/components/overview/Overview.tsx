
import { FaCaretDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import RepoModal from "../../modal/repoModal/RepoModal";
import PinnedReposDisplay from "./pinnedReposDisplay";

const Overview = ({ repoData }: { repoData: any }) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    const years = ["2025", "2024", "2023", "2022", "2021"];

    const [activeYearButton, setActiveYearButton] = useState("2025");

    const [isModalOpen, setModalOpen] = useState(false);
    const [repoItem, setRepoItem] = useState<string[]>([])


    useEffect(() => {
        const savedRepos = JSON.parse(localStorage.getItem("favRepos") || "[]");
        if (savedRepos.length > 0) {
            setRepoItem(savedRepos);
        } else {
            const popuRepo = [...repoData]
                .sort((a, b) => b.stargazers_count - a.stargazers_count)
                .slice(0, 6)
                .map((repo) => repo.name);
            setRepoItem(popuRepo);
            localStorage.setItem("favRepos", JSON.stringify(popuRepo));
        }
    },[repoData]);

    return (
        <>
            <div className="pinned flex flex-col mb-3 w-full max-w-3xl mx-auto">
                <div className="flex flex-row justify-between items-center">
                    <span className="flex text-lg mb-3">Pinned</span>
                    <button type="button" onClick={() => setModalOpen(true)} className="text-xs text-blue-700 hover:underline">Customize your pins</button>
                </div>
                <RepoModal repoData={repoData} isModalOpen={isModalOpen} onCloseModal={()=> setModalOpen(false) } modalTitle="Edit pinned items" repoItem={repoItem} setRepoItem={setRepoItem} />
                <div className="flex flex-col gap-y-4">
                    <PinnedReposDisplay repoData={repoData} repoItem={repoItem} />
                </div>
            </div>
            <div className="flex flex-row gap-x-3 mb-3 justify-between">
                <div className="flex flex-col gap-y-1">
                    <div className="flex flex-row justify-between items-center">
                        <span className="flex text-lg">70 contributions in the last year</span>
                        <a className="flex text-xs text-gray-600 items-center hover:underline hover:text-blue-600">Contribution setting <FaCaretDown /></a>
                    </div>
                    <div className="flex flex-col border rounded border-gray-300 text-sm p-5 mb-5">
                        <div className="flex flex-row mb-1">
                            {[...Array(12)].map((_, i) => (
                                <span key={i} className="pl-8 text-xs">{months[i]}</span>
                            ))}
                        </div>
                        <table className="flex border-collapse border-spacing-0 mb-2 overflow-ellipsis">
                            <tbody>
                                {[...Array(7)].map((_, j) => (
                                    <tr key={j}>
                                        {j % 2 === 1 ? <td className="text-xs pr-1">{day[j]}</td> : <td></td>}
                                        {[...Array(52)].map((_, i) => (
                                            <td key={i}>
                                                <div className="bg-gray-200 rounded-xs w-[10px] h-[10px] mx-px"></div>
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
                                <div className="bg-gray-200 rounded-xs w-[10px] h-[10px]"></div>
                                <div className="bg-green-200 rounded-xs w-[10px] h-[10px]"></div>
                                <div className="bg-green-400 rounded-xs w-[10px] h-[10px]"></div>
                                <div className="bg-green-700 rounded-xs w-[10px] h-[10px]"></div>
                                <div className="bg-green-950 rounded-xs w-[10px] h-[10px]"></div>
                                <span>More</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="flex text-lg">Contribution activity</span>
                    </div>
                </div>
                <div className="flex flex-col gap-y-2 text-[12px] font-semibold">
                    {years.map((year) => (
                        <button
                            key={year}
                            type="button"
                            className={`flex p-2 rounded text-gray-400 ${
                                activeYearButton === year
                                    ? "bg-blue-700 text-white"
                                    : "hover:bg-gray-200"
                            }`}
                            onClick={() => setActiveYearButton(year)}
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