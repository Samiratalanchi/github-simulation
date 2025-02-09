import { FaCaretDown } from "react-icons/fa";

const Overview = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    return (
        <>
            <div className="pinned flex flex-col mb-3">
                <span className="flex text-lg mb-3">Pinned</span>
                <div className="flex flex-col gap-y-4">
                    <div className="flex flex-row gap-x-4">
                        <div className="flex border rounded border-gray-300 w-1/2 h-25"></div>
                        <div className="flex border rounded border-gray-300 w-1/2 h-25"></div>
                    </div>
                    <div className="flex flex-row gap-x-4">
                        <div className="flex border rounded border-gray-300 w-1/2 h-25"></div>
                        <div className="flex border rounded border-gray-300 w-1/2 h-25"></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-x-3  justify-between">
                <div className="flex flex-col gap-y-3">
                    <div className="flex flex-row justify-between items-center">
                        <span className="flex text-lg">70 contributions in the last year</span>
                        <span className="flex text-sm text-gray-600 items-center">Contribution setting <FaCaretDown /></span>
                    </div>
                    <div className="flex flex-col border rounded border-gray-300 text-sm p-5">
                        <div className="flex flex-row ml-7  mb-1">
                            {[...Array(12)].map((_, i) => (
                                <span key={i} className="pr-7 text-xs">{months[i]}</span>
                            ))}
                        </div>
                        <table className="flex border-collapse border-spacing-0">
                            <tbody>
                                {[...Array(7)].map((_, j) => (
                                    <tr key={j}>
                                        {j % 2 === 1 ? <td className="text-xs pr-1">{day[j]}</td> : <td></td>}
                                        {[...Array(52)].map((_, i) => (
                                            <td key={i}>
                                                <div className="border border-gray-300 bg-gray-200 rounded-xs w-[10px] h-[10px] mx-px"></div>
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex flex-col gap-y-2 text-[12px] font-semibold">
                    <button type="button" className="flex p-2 rounded text-gray-600 active:text-white active:bg-blue-700">2025</button>
                    <button type="button" className="flex p-2 rounded text-gray-600 active:text-white active:bg-blue-700">2024</button>
                    <button type="button" className="flex p-2 rounded text-gray-600 active:text-white active:bg-blue-700">2023</button>
                    <button type="button" className="flex p-2 rounded text-gray-600 active:text-white active:bg-blue-700">2022</button>
                    <button type="button" className="flex p-2 rounded text-gray-600 active:text-white active:bg-blue-700">2021</button>
                </div>
            </div>
        </>
    )
}

export default Overview;