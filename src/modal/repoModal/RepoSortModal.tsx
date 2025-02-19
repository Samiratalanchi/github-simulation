
import { IoCheckmarkOutline } from "react-icons/io5";
import Modal from "../Modal";

interface IRepoModalProps {
    isSortModalOpen: boolean;
    onSortCloseModal: () => void;
    modalTitle: string;
    sort: string;
    setSort: (sort: string) => void,
}

const RepoModal = ({isSortModalOpen, onSortCloseModal, modalTitle, sort, setSort}: IRepoModalProps) => {

    const sorts = ["Last updated","Name","Stars"]

    return (
        <Modal isModalOpen={isSortModalOpen} onCloseModal={onSortCloseModal} modalTitle={modalTitle} backModalClassName="bg-black/0" modalClassName="absolute w-50 ml-140 -mt-5 p-4" titleClassName="text-sm font-bold">
            {sorts.map((item) => (
                <div onClick={() => setSort(item)} className="flex flex-row items-center gap-x-2 w-full border-t border-gray-300 py-2 hover:bg-gray-100 cursor-pointer">
                    <IoCheckmarkOutline className={sort === item ? "inline" : "hidden"} />
                    <span className="text-xs">{item}</span>
                </div>
            ))}
        </Modal>
    );
};

export default RepoModal;