import Modal from "../Modal";

interface IRepoModalProps {
    isModalOpen: boolean;
    onCloseModal: () => void;
    modalTitle: string;
}

const RepoModal = ({ isModalOpen, onCloseModal, modalTitle}: IRepoModalProps) => {
    
    if (!isModalOpen) return null;

    return (
        <Modal isModalOpen={isModalOpen} onCloseModal={onCloseModal} modalTitle={modalTitle} >
            <p>test</p>
        </Modal>
    );
};

export default RepoModal;