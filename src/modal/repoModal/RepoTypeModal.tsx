
import Modal from "../Modal";
import { IoCheckmarkOutline } from "react-icons/io5";

interface IRepoModalProps {
    isTypeModalOpen: boolean;
    onTypeCloseModal: () => void;
    modalTitle: string;
    type: string,
    setType: (type: string) => void,
}

const RepoModal = ({isTypeModalOpen, onTypeCloseModal, modalTitle, type, setType}: IRepoModalProps) => {

    const types = ["All","Private","Public"]

    return (
        <Modal isModalOpen={isTypeModalOpen} onCloseModal={onTypeCloseModal} modalTitle={modalTitle} backModalClassName="bg-black/0" modalClassName="absolute w-50 ml-95 -mt-5 p-4" titleClassName="text-sm font-bold">
            {types.map((item) => (
                <div onClick={() => setType(item)} className="flex flex-row items-center gap-x-2 w-full border-t border-gray-300 py-2 hover:bg-gray-100 cursor-pointer">
                    <IoCheckmarkOutline className={type === item ? "inline" : "hidden"} />
                    <span className="text-xs">{item}</span>
                </div>
            ))}
        </Modal>
    );
};

export default RepoModal;