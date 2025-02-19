import { FaCaretDown } from "react-icons/fa";
import contributionData from "../../data/contribution_data.json"
import { useState } from "react";

const Contribution = ({activeYearButton}: {activeYearButton:string}) => {

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

    
    const firstDate = new Date(Number(activeYearButton), 0, 1);
    const firstDayIndex = firstDate.getDay();

    interface ContributionData {
        [year: string]: {
            [day: string]: number;
        };
    }
    const [dayCounter, setDaycounter] = useState(1)

    const contributions = (contributionData as ContributionData)[activeYearButton];

    console.log(Object.entries(contributions).length)

    return (
        <>
            <div className="flex flex-row justify-between items-center">
                <span className="flex text-lg">70 contributions in the last year</span>
                <a className="flex text-xs text-gray-600 items-center hover:underline hover:text-blue-600">Contribution setting <FaCaretDown /></a>
            </div>
            <div className="flex flex-col border rounded border-gray-300 text-sm p-5 mb-5">
                <div className="flex flex-row mb-1">
                    {[...Array(12)].map((_, i) => (
                        <span key={i} className="pl-8 text-xs">{months[i]}</span>
                    ))}
                </div>
                <table className="flex border-collapse border-spacing-0 mb-2 overflow-ellipsis">
                    <tbody>
                        {[...Array(7)].map((_, j) => (
                            <tr key={j}>
                                {j % 2 === 1 ? <td className="text-xs pr-1">{day[j]}</td> : <td></td>}
                                {j < firstDayIndex && (
                                <td key={`empty-${j}`}>
                                    <div className="bg-white rounded-xs w-[10px] h-[10px] mx-px"></div>
                                </td> )}
                                {[...Array(52)].map((_, i) => (
                                    <td key={i}>
                                        <div className="bg-gray-200 rounded-xs w-[10px] h-[10px] mx-px"></div>
                                    </td>
                                ))}
                                {j === firstDayIndex && (
                                    <td key={`${j}`}>
                                        <div className="bg-gray-200 rounded-xs w-[10px] h-[10px] mx-px"></div>
                                    </td>
                                )}
                                {(Object.entries(contributions).length > 365 && j === firstDayIndex + 1 )  && (
                                    <td key={`${j}`}>
                                        <div className="bg-gray-200 rounded-xs w-[10px] h-[10px] mx-px"></div>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex flex-row justify-between text-gray-600 items-center px-8 text-xs">
                    <a href="" className="flex hover:text-blue-600">Learn how we count contributions</a>
                    <div className="flex flex-row items-center gap-x-1 ">
                        <span>Less</span>
                        <div className="bg-gray-200 rounded-xs w-[10px] h-[10px]"></div>
                        <div className="bg-green-200 rounded-xs w-[10px] h-[10px]"></div>
                        <div className="bg-green-400 rounded-xs w-[10px] h-[10px]"></div>
                        <div className="bg-green-700 rounded-xs w-[10px] h-[10px]"></div>
                        <div className="bg-green-950 rounded-xs w-[10px] h-[10px]"></div>
                        <span>More</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contribution