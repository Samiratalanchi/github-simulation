import React from "react";

interface IRepoModalProps {
    isModalOpen: boolean;
    onCloseModal: () => void;
    modalTitle: string;
    children: React.ReactNode;
    backModalClassName: string;
    modalClassName: string;
    titleClassName: string;
}


const Modal = ({ isModalOpen, onCloseModal, modalTitle, children, backModalClassName, modalClassName, titleClassName}: IRepoModalProps) => {
    if (!isModalOpen) return null;

    return (
        <div onClick={onCloseModal} className={`fixed inset-0 bg-black/30 flex z-50 ${backModalClassName}`}>
            <div onClick={(e) => e.stopPropagation()}  className={`bg-white rounded-lg shadow-lg p-6 relative ${modalClassName}`}>
                <div className={`flex justify-between items-center ${titleClassName}`}>
                    <h2 className=" font-semibold">{modalTitle}</h2>
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