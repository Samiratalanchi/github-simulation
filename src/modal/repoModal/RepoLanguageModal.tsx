
import Modal from "../Modal";

interface IRepoModalProps {
    finalRepos: any;
    isLanguageModalOpen: boolean;
    onLanguageCloseModal: () => void;
    modalTitle: string;
}

const RepoModal = ({finalRepos, isLanguageModalOpen, onLanguageCloseModal, modalTitle}: IRepoModalProps) => {

    
    return (
        <Modal isModalOpen={isLanguageModalOpen} onCloseModal={onLanguageCloseModal} modalTitle={modalTitle} backModalClassName="justify-center items-center" modalClassName="w-120 h-160" titleClassName="text-lg">
            Hello
        </Modal>
    );
};

export default RepoModal;