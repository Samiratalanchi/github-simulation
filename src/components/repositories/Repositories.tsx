import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";


const Repositories = ({ repoData }: { repoData: any }) => {

    const [searchQuery, setSearchQuery] = useState("");
    
    return (
        <>
            <div className="flex w-full flex-row border-b gap-x-2  items-center border-gray-300 py-3">
                <input
                type="text"
                className="border w-30/36 border-gray-400 p-2 rounded text-sm focus:border-blue-800"
                placeholder="Find a repository..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}/>
                <button type="button" className="px-3 w-1/12 h-10 text-sm bg-gray-200 hover:bg-gray-300 rounded flex flex-row items-center justify-center">
                    <span>Type</span>
                    <IoMdArrowDropdown className="text-lg"/>
                </button>
                <button type="button" className="px-3 w-1/12 h-10 text-sm bg-gray-200 hover:bg-gray-300 rounded flex flex-row items-center justify-center">
                    <span>Language</span>
                    <IoMdArrowDropdown className="text-lg"/>
                </button>
                <button type="button" className="px-3 w-1/12 h-10 text-sm bg-gray-200 hover:bg-gray-300 rounded flex flex-row items-center justify-center">
                    <span>Sort</span>
                    <IoMdArrowDropdown className="text-lg"/>
                </button>
            </div>
        </>
    )
}

export default Repositories;