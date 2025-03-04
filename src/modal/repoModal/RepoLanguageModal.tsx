import { useEffect, useRef, useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

interface IRepoLanguageModalProps {
    isLanguageModalOpen: boolean;
    onLanguageCloseModal: () => void;
    modalTitle: string;
    language: string;
    setLanguage: (language: string) => void;
    buttonRef: React.RefObject<HTMLButtonElement>;
    repoData: any[];
}

const RepoLanguageModal = ({ isLanguageModalOpen,onLanguageCloseModal, modalTitle, language, setLanguage, buttonRef, repoData }: IRepoLanguageModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        if (buttonRef.current && isLanguageModalOpen) {
            const rect = buttonRef.current.getBoundingClientRect();
            setPosition({
                top: rect.bottom + window.scrollY + 5,
                left: rect.left + window.scrollX,
            });
        }
    }, [isLanguageModalOpen, buttonRef]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node) && 
                buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
                onLanguageCloseModal();
            }
        };

        if (isLanguageModalOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isLanguageModalOpen, onLanguageCloseModal]);

    if (!isLanguageModalOpen) return null;

    const languages = ["All", ...new Set(repoData.map((repo) => repo.language).filter(Boolean))];

    return (
        <div 
            ref={modalRef}
            className="absolute bg-white shadow-lg border border-gray-300 rounded-md p-4 z-50"
            style={{ top: `${position.top}px`, left: `${position.left}px` }}
        >
            <h2 className="text-sm font-bold mb-2">{modalTitle}</h2>
            {languages.map((lang) => (
                <div
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className="flex flex-row items-center gap-x-2 w-full border-t border-gray-300 py-2 hover:bg-gray-100 cursor-pointer"
                >
                    <IoCheckmarkOutline className={language === lang ? "inline" : "hidden"} />
                    <span className="text-xs">{lang}</span>
                </div>
            ))}
        </div>
    );
};

export default RepoLanguageModal;
