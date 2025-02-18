
import Modal from "../Modal";

interface IRepoModalProps {
    finalRepos: any;
    isSortModalOpen: boolean;
    onSortCloseModal: () => void;
    modalTitle: string;
}

const RepoModal = ({finalRepos, isSortModalOpen, onSortCloseModal, modalTitle}: IRepoModalProps) => {

    return (
        <Modal isModalOpen={isSortModalOpen} onCloseModal={onSortCloseModal} modalTitle={modalTitle} backModalClassName="justify-center items-center" modalClassName="w-120 h-160" titleClassName="text-lg">
            Hello            
        </Modal>
    );
};

export default RepoModal;