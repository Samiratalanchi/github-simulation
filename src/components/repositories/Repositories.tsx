import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { GoRepoForked } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import colors from "../../colors/color.json"

const Repositories = ({ repoData }: { repoData: any }) => {

    const [searchQuery, setSearchQuery] = useState("");

    const latestRepos = [...repoData].sort(
        (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    )

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(date);
    };
    
    const getRelativeTime = (dateString: string) => {
        const now = new Date();
        const past = new Date(dateString);
        const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);
        const diffInYears = now.getFullYear() - past.getFullYear()

        if (diffInYears >= 1) {
            return formatDate(dateString);
        }

        const units = [
            { label: "year", seconds: 31536000 },
            { label: "month", seconds: 2592000 },
            { label: "week", seconds: 604800 },
            { label: "day", seconds: 86400 },
            { label: "hour", seconds: 3600 },
            { label: "minute", seconds: 60 },
            { label: "second", seconds: 1 },
        ];
    
        for (const unit of units) {
            const interval = Math.floor(diffInSeconds / unit.seconds);
            if (interval >= 1) {
                if (unit.label === "second" && interval < 10) {
                    return "Just now";
                }
                return interval === 1 ? `1 ${unit.label} ago` : `${interval} ${unit.label}s ago`;
            }
        }
        return "Just now";
    };

    const getLanguageColor = (language: string | undefined) => {
        if (!language || !(language in colors)) {
            return "#ccc";
        }
        return colors[language as keyof typeof colors].color || "#ccc"
    }
    
    return (
        <>
            <div className="flex w-full max-w-3xl flex-row border-b gap-x-2 border-gray-300 py-3">
                <input
                    type="text"
                    className="border flex-grow border-gray-400 p-1 rounded text-sm focus:border-blue-800"
                    placeholder="Find a repository..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="button" className="px-3 h-8 text-sm bg-gray-100 hover:bg-gray-200 rounded flex flex-row items-center justify-center">
                    <span>Type</span>
                    <IoMdArrowDropdown className="text-lg"/>
                </button>
                <button type="button" className="px-3 h-8 text-sm bg-gray-100 hover:bg-gray-200 rounded flex flex-row items-center justify-center">
                    <span>Language</span>
                    <IoMdArrowDropdown className="text-lg"/>
                </button>
                <button type="button" className="px-3 h-8 text-sm bg-gray-100 hover:bg-gray-200 rounded flex flex-row items-center justify-center">
                    <span>Sort</span>
                    <IoMdArrowDropdown className="text-lg"/>
                </button>
            </div>
            <div className="flex w-full max-w-3xl mx-auto flex-col">
                {latestRepos.map((repo: any) => (
                    <div key={repo.name} className="flex flex-col border-b justify-between rounded border-gray-300 p-4 gap-y-2 gap-x-2">
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row items-center gap-x-2">
                                <a className="flex text-blue-700 text-lg font-bold hover:underline" href="">{repo.name}</a>
                                <span className="flex text-gray-400 rounded-xl border text-xs px-1">{repo.private ? "Private" : "Public"}</span>
                            </div>
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
                            <div className="flex flex-row items-center gap-x-1">
                                <span className="text-gray-600 text-xs">Updated On {getRelativeTime(repo.updated_at)}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Repositories;