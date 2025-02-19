
import { IoCheckmarkOutline } from "react-icons/io5";
import Modal from "../Modal";

interface IRepoModalProps {
    repoData: any;
    isLanguageModalOpen: boolean;
    onLanguageCloseModal: () => void;
    modalTitle: string;
    language: string;
    setLanguage: (language: string) => void,
}

const RepoModal = ({repoData, isLanguageModalOpen, onLanguageCloseModal, modalTitle, language, setLanguage }: IRepoModalProps) => {

    
    const languages = ["All"]

    repoData.forEach((repo: { language: string }) => {
        if (repo.language && !languages.includes(repo.language)) {
            languages.push(repo.language);
        }
    });

    return (
        <Modal isModalOpen={isLanguageModalOpen} onCloseModal={onLanguageCloseModal} modalTitle={modalTitle} modalClassName="absolute w-50 ml-178 -mt-68 p-4" titleClassName="text-sm font-bold">
            {languages.map((item) => (
                <div onClick={() => setLanguage(item)} className="flex flex-row items-center gap-x-2 w-full border-t border-gray-300 py-2 hover:bg-gray-100 cursor-pointer">
                    <IoCheckmarkOutline className={language === item ? "inline" : "hidden"} />
                    <span className="text-xs">{item}</span>
                </div>
            ))}
        </Modal>
    );
};

export default RepoModal;