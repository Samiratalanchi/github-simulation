import { useEffect, useState } from "react";
import RepoModal from "../../modal/repoModal/RepoModal";
import PinnedReposDisplay from "./pinnedReposDisplay";
import Contribution from "./Contribution";

const Overview = ({ repoData }: { repoData: any }) => {

    const years = ["2025", "2024", "2023", "2022", "2021"];

    const [activeYearButton, setActiveYearButton] = useState("2025");

    const [isModalOpen, setModalOpen] = useState(false);
    const [repoItem, setRepoItem] = useState<string[]>([])


    const getPopularRepos = () => {
        return [...repoData]
            .sort((a, b) => b.stargazers_count - a.stargazers_count) // Sort by stars (descending)
            .slice(0, 6) // Take top 6
            .map((repo) => repo.name)
    }

    useEffect(() => {
        const savedRepos = JSON.parse(localStorage.getItem("favRepos") || "[]");
        if (savedRepos.length > 0) {
            setRepoItem(savedRepos);
        } else {
            const popuRepos = getPopularRepos();
            setRepoItem(popuRepos);
            localStorage.setItem("favRepos", JSON.stringify(popuRepos));
        }
    }, [repoData]);


    return (
        <>
            <div className="flex flex-col mb-3 w-full">
                <div className="flex flex-row justify-between items-center">
                    <span className="flex text-lg mb-3">Pinned</span>
                    <button type="button" onClick={() => setModalOpen(true)} className="text-xs text-blue-700 hover:underline">Customize your pins</button>
                </div>
                <RepoModal repoData={repoData} isModalOpen={isModalOpen} onCloseModal={()=> setModalOpen(false) } modalTitle="Edit pinned items" repoItem={repoItem} setRepoItem={setRepoItem} getPopularRepos={getPopularRepos} />
                <div className="flex flex-col gap-y-2">
                    <PinnedReposDisplay repoData={repoData} repoItem={repoItem} />
                </div>
            </div>
            <div className="flex md:flex-row flex-col gap-x-3 mb-3 justify-between">
                <div className="flex flex-col gap-y-1">
                    <Contribution activeYearButton={activeYearButton} />
                </div>
                <div className="flex md:flex-col gap-y-2 text-[12px] font-semibold justify-start flex-row-reverse">
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