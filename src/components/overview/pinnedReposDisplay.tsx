import { CiStar } from "react-icons/ci";
import { GoRepoForked } from "react-icons/go";
import { RiGitRepositoryLine } from "react-icons/ri";
import { RxDragHandleDots2 } from "react-icons/rx";
import colors from "../../data/color.json"

const getLanguageColor = (language: string | undefined) => {
    if (!language || !(language in colors)) {
        return "#ccc";
    }
    return colors[language as keyof typeof colors].color || "#ccc"
}

const PinnedReposDisplay = ({repoData, repoItem} : {repoData: any; repoItem: string[]}) => {

    const repoSelection = repoData.filter((repo:any) => repoItem.includes(repo.name))
    const repoRows = Math.ceil(repoSelection.length / 2);

    return (
        <>
            {[...Array(repoRows)].map((_, i) => (
                <div key={i} className="flex md:flex-row flex-col gap-y-2 items-center justify-start w-full">
                    {repoSelection.slice(i * 2, i * 2 + 2).map((repo:any) => (
                        <div key={repo.name} className="flex flex-col border justify-between rounded border-gray-300 md:w-1/2 w-full mx-2 p-4 md:gap-y-2 gap-x-2 min-h-30 h-auto">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row items-center gap-x-2">
                                    <span className="flex text-gray-600 text-lg"><RiGitRepositoryLine /></span>
                                    <a className="flex text-blue-700 text-md hover:underline" href="">{repo.name}</a>
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
                            </div>
                        </div>
                    ))}
                    {repoSelection.length % 2 !== 0 && i === repoRows - 1 && (
                        <div className="w-1/2 mx-2 invisible"></div>
                    )}
                </div>
            ))}
        </>
    );
}

export default PinnedReposDisplay;