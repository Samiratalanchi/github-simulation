import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { GoRepoForked } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiGitRepositoryLine } from "react-icons/ri";
import { RxDragHandleDots2 } from "react-icons/rx";
import colors from "../../colors/color.json"

const Repositories = ({ repoData }: { repoData: any }) => {

    const [searchQuery, setSearchQuery] = useState("");

    const latestRepos = [...repoData].sort((a, b) => b.updated_at - a.updated_at)

    const getLanguageColor = (language: string | undefined) => {
        if (!language || !(language in colors)) {
            return "#ccc";
        }
        return colors[language as keyof typeof colors].color || "#ccc"
    }
    
    return (
        <div className="w-full min-w-170 max-w-3xl mx-auto">
            <div className="flex w-full flex-row border-b gap-x-2 items-center border-gray-300 py-3">
                <input
                    type="text"
                    className="border flex-grow border-gray-400 p-1 rounded text-sm focus:border-blue-800"
                    placeholder="Find a repository..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="button" className="px-3 w-1/10 h-8 text-sm bg-gray-100 hover:bg-gray-200 rounded flex flex-row items-center justify-center">
                    <span>Type</span>
                    <IoMdArrowDropdown className="text-lg"/>
                </button>
                <button type="button" className="px-3 w-2/10 h-8 text-sm bg-gray-100 hover:bg-gray-200 rounded flex flex-row items-center justify-center">
                    <span>Language</span>
                    <IoMdArrowDropdown className="text-lg"/>
                </button>
                <button type="button" className="px-3 w-1/10 h-8 text-sm bg-gray-100 hover:bg-gray-200 rounded flex flex-row items-center justify-center">
                    <span>Sort</span>
                    <IoMdArrowDropdown className="text-lg"/>
                </button>
            </div>
            <div className="flex w-full flex-col items-center">
                {latestRepos.map((repo: any) => (
                    <div key={repo.name} className="flex flex-col w-full border-b justify-between rounded border-gray-300 p-4 gap-y-2 gap-x-2 h-30">
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row items-center gap-x-2">
                                <span className="flex text-gray-600 text-lg"><RiGitRepositoryLine /></span>
                                <a className="flex text-blue-700 text-lg font-bold hover:underline" href="">{repo.name}</a>
                                <span className="flex text-gray-400 rounded-xl border text-xs px-1">{repo.private ? "Private" : "Public"}</span>
                            </div>
                            <RxDragHandleDots2 className="flex items-center"/>
                        </div>
                        <div className="flex flex-row gap-x-5">
                            {repo.description && (
                                <span className="text-xs text-gray-400">{repo.description}</span>
                            )}
                            
                        </div>
                        <div className="flex flex-row gap-x-5">
                            <div className="flex flex-row items-center gap-x-2">
                                <span className="w-4 h-4 rounded-full" style={{ backgroundColor: getLanguageColor(repo.language) }}></span>
                                <span className="text-gray-600 text-sm">{repo.language}</span>
                            </div>
                            {repo.stargazers_count > 0 && (
                                <div className="flex flex-row items-center gap-x-1">
                                <CiStar className="flex text-lg" />
                                <span className="text-gray-600 text-sm">{repo.stargazers_count}</span>
                                </div>
                            )}
                            {repo.forks_count > 0 && (
                                <div className="flex flex-row items-center gap-x-1">
                                <GoRepoForked className="flex text-lg" />
                                <span className="text-gray-600 text-sm">{repo.forks_count}</span>
                                </div>
                            )}
                            {repo.forks_count > 0 && (
                                <div className="flex flex-row items-center gap-x-1">
                                <span className="text-gray-600 text-xs">Updated On {repo.updated_at}</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Repositories;