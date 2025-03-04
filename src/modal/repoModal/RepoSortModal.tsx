import { useEffect, useRef, useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

interface IRepoSortModalProps {
    isSortModalOpen: boolean;
    onSortCloseModal: () => void;
    modalTitle: string;
    sort: string;
    setSort: (sort: string) => void;
    buttonRef: React.RefObject<HTMLButtonElement>;
}

const RepoSortModal = ({ isSortModalOpen,onSortCloseModal, modalTitle, sort, setSort, buttonRef }: IRepoSortModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        if (buttonRef.current && isSortModalOpen) {
            const rect = buttonRef.current.getBoundingClientRect();
            setPosition({
                top: rect.bottom + window.scrollY + 5,
                left: rect.left + window.scrollX,
            });
        }
    }, [isSortModalOpen, buttonRef]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node) && 
                buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
                onSortCloseModal();
            }
        };

        if (isSortModalOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSortModalOpen, onSortCloseModal]);

    if (!isSortModalOpen) return null;

    const sortOptions = ["Last updated", "Name", "Stars"];

    return (
        <div 
            ref={modalRef}
            className="absolute bg-white shadow-lg border border-gray-300 rounded-md p-4 z-50"
            style={{ top: `${position.top}px`, left: `${position.left}px` }}
        >
            <h2 className="text-sm font-bold mb-2">{modalTitle}</h2>
            {sortOptions.map((option) => (
                <div
                    key={option}
                    onClick={() => setSort(option)}
                    className="flex flex-row items-center gap-x-2 w-full border-t border-gray-300 py-2 hover:bg-gray-100 cursor-pointer"
                >
                    <IoCheckmarkOutline className={sort === option ? "inline" : "hidden"} />
                    <span className="text-xs">{option}</span>
                </div>
            ))}
        </div>
    );
};

export default RepoSortModal;
