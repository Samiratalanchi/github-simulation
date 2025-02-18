
import Modal from "../Modal";

interface IRepoModalProps {
    finalRepos: any;
    isTypeModalOpen: boolean;
    onTypeCloseModal: () => void;
    modalTitle: string;
}

const RepoModal = ({finalRepos, isTypeModalOpen, onTypeCloseModal, modalTitle}: IRepoModalProps) => {



    return (
        <Modal isModalOpen={isTypeModalOpen} onCloseModal={onTypeCloseModal} modalTitle={modalTitle} backModalClassName="justify-center items-center" modalClassName="w-120 h-160" titleClassName="text-lg">
            Hello
        </Modal>
    );
};

export default RepoModal;