import { RiGitRepositoryLine } from "react-icons/ri";
import Modal from "../Modal";
import { CiStar } from "react-icons/ci";
import { useEffect, useState } from "react";

interface IRepoModalProps {
    isModalOpen: boolean;
    onCloseModal: () => void;
    modalTitle: string;
    repoItem: string[];
    setRepoItem: React.Dispatch<React.SetStateAction<string[]>>;
}

const RepoModal = ({ isModalOpen, onCloseModal, modalTitle, repoItem, setRepoItem}: IRepoModalProps) => {

    const repoData = JSON.parse(localStorage.getItem("repos") || "[]")

    const [searchQuery, setSearchQuery] = useState("");

    const [selectedRepos, setSelectedRepos] = useState<string[]>([]);

    useEffect(() => {
        if (isModalOpen) {
            setSelectedRepos(repoItem);
        }
    }, [isModalOpen, repoItem]);

    const filteredRepos = searchQuery.trim()
        ? repoData.filter((repo: { name: string }) =>
            repo.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : repoData;

    const handleSelection = (repoName: string, checked: boolean) => {
        setSelectedRepos((prev) => {
            if (checked) return prev.length < 6 ? [...prev, repoName] : prev;
            return prev.filter((name) => name !== repoName);
        });
    };

    const submitRepos = (selectedRepos: string[]) => {
        if(selectedRepos.length > 0) {
            setRepoItem(selectedRepos)
            onCloseModal()
        }
        
    }

    return (
        <Modal isModalOpen={isModalOpen} onCloseModal={onCloseModal} modalTitle={modalTitle}>
            <p className="text-sm text-gray-400">Select up to six public repositories you'd like to show to anyone.</p>
            <input
                type="text"
                className="w-full border border-gray-400 p-1 rounded mt-1 text-sm"
                placeholder="Search repositories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}/>
            <span className={`text-xs ${selectedRepos.length === 6 ? "text-red-600" : "text-gray-500"}`}>
                {6 - selectedRepos.length} remaining
            </span>
            <div className="flex flex-col items-center border-t border-gray-300  my-3 py-2 pr-2 w-full overflow-y-auto max-h-100">
                {filteredRepos.length > 0 ? (
                    filteredRepos.map((repo: { id: number; name: string; stargazers_count: number }) => {
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
            <div className="flex justify-end border-t py-3 p-5 border-gray-300 absolute bottom-0 left-0 w-full">
                <button type="submit" onClick={() => submitRepos(selectedRepos)} className="bg-green-700 py-1 px-2 rounded cursor-pointer text-white">Save pins</button>
            </div>
        </Modal>
    );
};

export default RepoModal;