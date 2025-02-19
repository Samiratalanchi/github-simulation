import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { GoRepoForked } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import colors from "../../data/color.json"
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import RepoTypeModal from "../../modal/repoModal/RepoTypeModal";
import RepoLanguageModal from "../../modal/repoModal/RepoLanguageModal";
import RepoSortModal from "../../modal/repoModal/RepoSortModal";
import { IoCloseSharp } from "react-icons/io5";

const Repositories = ({ repoData }: { repoData: any }) => {

    const [searchQuery, setSearchQuery] = useState("");

    const filterAndSortRepos = () => {
        let filteredRepos = [...(repoData || [])];
    
        // Filter by type (All, Public, Private)
        if (type !== "All") {
            if (type === "Private") {
                filteredRepos = filteredRepos.filter((repo) => repo.private === true);
            } else if (type === "Public") {
                filteredRepos = filteredRepos.filter((repo) => repo.private !== true); // Public if not private
            }
        }
    
        // Filter by language
        if (language !== "All") {
            filteredRepos = filteredRepos.filter((repo) => repo.language === language);
        }
    
        // Filter by search query
        if (searchQuery.trim()) {
            filteredRepos = filteredRepos.filter((repo) =>
                repo.name?.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
    
        // Sort function
        filteredRepos.sort((a, b) => {
            if (sort === "Last updated") {
                return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
            } else if (sort === "Name") {
                return a.name.localeCompare(b.name);
            } else if (sort === "Stars") {
                return b.stargazers_count - a.stargazers_count;
            }
            return 0;
        });
    
        return filteredRepos;
    };
    

    const [isTypeModalOpen, setTypeModalOpen] = useState(false);
    const [isLanguageModalOpen, setLanguageModalOpen] = useState(false);
    const [isSortModalOpen, setSortModalOpen] = useState(false);

    const [type, setType] = useState("All");
    const [language, setLanguage] = useState("All");
    const [sort, setSort] = useState("Last updated");

    const finalRepos = filterAndSortRepos();
    
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(date);
    };

    const clearFilter = () => {
        setType("All");
        setLanguage("All");
        setSort("Last updated")
    }

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
    
    const [startPosition, setStartPosition] = useState(0)

    useEffect(() => {
        if (isTypeModalOpen) {
            setLanguageModalOpen(false);
            setSortModalOpen(false);
        }
        if (isLanguageModalOpen) {
            setTypeModalOpen(false);
            setSortModalOpen(false);
        }
        if (isSortModalOpen) {
            setTypeModalOpen(false);
            setLanguageModalOpen(false);
        }
    }, [isTypeModalOpen,isLanguageModalOpen, isSortModalOpen]);

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
                <button type="button" onClick={() => setTypeModalOpen(!isTypeModalOpen)} className="px-3 h-8 text-sm bg-gray-100 hover:bg-gray-200 rounded flex flex-row items-center justify-center">
                    <span>Type</span>
                    <IoMdArrowDropdown className="text-lg"/>
                </button>
                <button type="button" onClick={() => setLanguageModalOpen(!isLanguageModalOpen)} className="px-3 h-8 text-sm bg-gray-100 hover:bg-gray-200 rounded flex flex-row items-center justify-center">
                    <span>Language</span>
                    <IoMdArrowDropdown className="text-lg"/>
                </button>
                <button type="button" onClick={() => setSortModalOpen(!isSortModalOpen)} className="px-3 h-8 text-sm bg-gray-100 hover:bg-gray-200 rounded flex flex-row items-center justify-center">
                    <span>Sort</span>
                    <IoMdArrowDropdown className="text-lg"/>
                </button>
            </div>
            <RepoTypeModal type={type} setType={setType} isTypeModalOpen={isTypeModalOpen} onTypeCloseModal={()=> setTypeModalOpen(false) } modalTitle="Select type" />
            <RepoLanguageModal repoData={repoData} language={language} setLanguage={setLanguage} isLanguageModalOpen={isLanguageModalOpen} onLanguageCloseModal={()=> setLanguageModalOpen(false) } modalTitle="Select language" />
            <RepoSortModal sort={sort} setSort={setSort} isSortModalOpen={isSortModalOpen} onSortCloseModal={()=> setSortModalOpen(false) } modalTitle="Select order" />
            {(language !== "All" || type !== "All" || sort !== "Last updated") && (
                <div className="flex w-full max-w-3xl mx-auto items-center justify-between flex-row border-b border-gray-300 p-4">
                    <span><span className={finalRepos.length > 0 ? "text-green-600" : "text-red-600"}>{finalRepos.length}</span> results that have {language} language, in {type} type, sorted by {sort}</span>
                    <button type="button" onClick={() => clearFilter()} className="px-3 h-8 text-sm hover:text-blue-600 gap-x-2 rounded flex flex-row items-center justify-center cursor-pointer">
                        <IoCloseSharp className="text-xl p-1 bg-gray-200 rounded font-bold"/>
                        <span className="">Clear filter</span>
                    </button>
                </div>
            )}
            <div className="flex w-full max-w-3xl mx-auto flex-col">
                {finalRepos.slice(startPosition, startPosition + 20).map((repo: any) => (
                    <div key={repo.id} className="flex flex-col border-b justify-between rounded border-gray-300 p-4 gap-y-2 gap-x-2">
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
                            {repo.language && (
                                <div className="flex flex-row items-center gap-x-2">
                                    <span className="w-4 h-4 rounded-full" style={{ backgroundColor: getLanguageColor(repo.language) }}></span>
                                    <span className="text-gray-600 text-sm">{repo.language}</span>
                                </div>
                            )}
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
            {finalRepos.length > 20 && (
                <div className="flex w-full max-w-3xl mx-auto flex-row justify-center mb-10">
                    <button type="button" onClick={() => setStartPosition(startPosition - 20)} disabled={startPosition - 20 < 0 } className="px-3 h-8 text-sm rounded flex flex-row items-center justify-center cursor-pointer text-blue-600 hover:border hover:border-gray-200 disabled:text-gray-300 disabled:cursor-not-allowed">
                        <GrFormPrevious className="text-lg"/>
                        <span>Previous</span>
                    </button>
                    <button type="button" onClick={() => setStartPosition(startPosition + 20)} disabled={startPosition + 20 >= finalRepos.length} className="px-3 h-8 text-sm rounded flex flex-row items-center justify-center cursor-pointer text-blue-600 hover:border hover:border-gray-200 disabled:text-gray-300 disabled:cursor-not-allowed">
                        <span>Next</span>
                        <GrFormNext className="text-lg"/>
                    </button>
                </div>
            )}
        </>
    )
}

export default Repositories;