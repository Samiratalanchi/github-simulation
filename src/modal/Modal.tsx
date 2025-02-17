import React from "react";

interface IRepoModalProps {
    isModalOpen: boolean;
    onCloseModal: () => void;
    modalTitle: string;
    children: React.ReactNode;
}

const Modal = ({ isModalOpen, onCloseModal, modalTitle, children}: IRepoModalProps) => {
    if (!isModalOpen) return null;

    return (
        <div onClick={onCloseModal} className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
            <div onClick={(e) => e.stopPropagation()}  className="bg-white rounded-lg shadow-lg w-120 h-160 p-6 relative">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">{modalTitle}</h2>
                    <button
                        onClick={onCloseModal}
                        className="text-gray-400 hover:text-gray-600 focus:outline-none"
                    >
                        ✕
                    </button>
                </div>
                <div className="mt-4">{children}</div>
            </div>
        </div>
    );
};

export default Modal;