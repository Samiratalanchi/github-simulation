import { useEffect, useRef, useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

interface IRepoModalProps {
    isTypeModalOpen: boolean;
    onTypeCloseModal: () => void;
    modalTitle: string;
    type: string;
    setType: (type: string) => void;
    buttonRef: React.RefObject<HTMLButtonElement>;
}

const RepoTypeModal = ({ isTypeModalOpen,onTypeCloseModal, modalTitle, type, setType, buttonRef }: IRepoModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        if (buttonRef.current && isTypeModalOpen) {
            const rect = buttonRef.current.getBoundingClientRect();
            setPosition({
                top: rect.bottom + window.scrollY + 5,
                left: rect.left + window.scrollX, 
            });
        }
    }, [isTypeModalOpen, buttonRef]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node) && 
                buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
                onTypeCloseModal();
            }
        };

        if (isTypeModalOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isTypeModalOpen, onTypeCloseModal]);

    if (!isTypeModalOpen) return null;

    return (
        <div 
            ref={modalRef}
            className="absolute bg-white shadow-lg border border-gray-300 rounded-md p-4 z-50"
            style={{ top: `${position.top}px`, left: `${position.left}px` }}
        >
            <h2 className="text-sm font-bold mb-2">{modalTitle}</h2>
            {["All", "Private", "Public"].map((item) => (
                <div
                    key={item}
                    onClick={() => setType(item)}
                    className="flex flex-row items-center gap-x-2 w-full border-t border-gray-300 py-2 hover:bg-gray-100 cursor-pointer"
                >
                    <IoCheckmarkOutline className={type === item ? "inline" : "hidden"} />
                    <span className="text-xs">{item}</span>
                </div>
            ))}
        </div>
    );
};

export default RepoTypeModal;
