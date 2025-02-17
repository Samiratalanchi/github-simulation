import { RiGitRepositoryLine } from "react-icons/ri";
import Modal from "../Modal";
import { CiStar } from "react-icons/ci";

interface IRepoModalProps {
    isModalOpen: boolean;
    onCloseModal: () => void;
    modalTitle: string;
    selectedRepos: string[];
    setSelectedRepos: React.Dispatch<React.SetStateAction<string[]>>;
}

const RepoModal = ({ isModalOpen, onCloseModal, modalTitle, selectedRepos, setSelectedRepos}: IRepoModalProps) => {

    const repoData = JSON.parse(localStorage.getItem("repos") || "[]")

    const handleSelection = (repoName: string, checked: boolean) => {
        setSelectedRepos((prev) => {
            if (checked) {
                if (prev.length < 6) {
                    return [...prev, repoName];
                }
            } else {
                return prev.filter((name) => name !== repoName);
            }
            return prev;
        });
    };

    console.log(selectedRepos);

    return (
        <Modal isModalOpen={isModalOpen} onCloseModal={onCloseModal} modalTitle={modalTitle} >
            <p className="text-sm text-gray-400">Select up to six public repositories or gists you'd like to show to anyone.</p>
            <input type="text" className="w-full border border-gray-400 p-1 rounded mt-1" name="repoFilter" id="repoFilter"/>
            <span className={`text-xs ${selectedRepos.length === 6 ? "text-red-600" : "text-gray-500"}`}>
                {6 - selectedRepos.length} remaining
            </span>
            <div className="flex flex-col items-center border-y my-3 py-2 w-full">
                {repoData.length > 0 ? (
                    repoData.map((repo: { id: number; name: string; stargazers_count: number }) => {
                        const isChecked = selectedRepos.includes(repo.name);
                        return (
                            <div 
                                className={`flex flex-row justify-between w-full p-1 text-sm ${
                                            isChecked ? "text-black" : "text-gray-400"
                                        }`}
                                key={repo.id}
                            >
                                <div className="flex flex-row items-center gap-2">
                                    <input
                                        type="checkbox"
                                        value={repo.name}
                                        className="peer"
                                        id={`repo-${repo.id}`}
                                        checked={isChecked}
                                        onChange={(e) => handleSelection(repo.name, e.target.checked)}
                                        disabled={!isChecked && selectedRepos.length >= 6}
                                    />                                    <label 
                                        htmlFor={`repo-${repo.id}`} 
                                        className={`flex items-center gap-2 cursor-pointer `}
                                    >
                                        <RiGitRepositoryLine />
                                        <span>{repo.name}</span>
                                    </label>
                                </div>
                                <div className="flex flex-row items-center gap-1">
                                    <span>{repo.stargazers_count}</span>
                                    <CiStar />
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className="text-gray-500 text-sm">No repositories available.</p>
                )}
            </div>
        </Modal>
    );
};

export default RepoModal;