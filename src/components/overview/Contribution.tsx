import { FaCaretDown } from "react-icons/fa";
import contributionData from "../../data/contribution_data.json";

const Contribution = ({ activeYearButton }: { activeYearButton: string }) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const firstDate = new Date(Number(activeYearButton), 0, 1);
    const firstDayIndex = firstDate.getDay();

    interface ContributionData {
        [year: string]: {
            [day: string]: number;
        };
    }

    const contributions = (contributionData as ContributionData)[activeYearButton] || {};

    // Track the day of the year (1 to 365 or 366)
    const isLeapYear = (year: number) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    const totalDaysInYear = isLeapYear(Number(activeYearButton)) ? 366 : 365;

    function getDateFromDayOfYear(day: number) {
        // Number of days in each month for a regular year (non-leap year)
        const monthsDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
        // If it's a leap year, update February's days
        if (totalDaysInYear === 366) {
            monthsDays[1] = 29; // February has 29 days in a leap year
        }
    
        let month = 0;
        while (day > monthsDays[month]) {
            day -= monthsDays[month];
            month++;
        }
    
        const dayOfMonth = day;
    
        return `${months[month]} ${dayOfMonth}`;
    }

    const oneYearContribution = Object.values(contributions).reduce((acc, count) => acc + count, 0);

    const generateTableCells = (row: number) => {
        
        const x = 7 - firstDayIndex + row + 1
        let dayOfYear;
        if (x > 7) {
            dayOfYear = x - 7
        } else {
            dayOfYear = x
        }
        
        const totalWeeks = Math.ceil((totalDaysInYear + firstDayIndex) / 7) + 1; // Total number of weeks (rows)

        const cells = [];
        for (let col = 0; col < totalWeeks; col++) {
            if (row < firstDayIndex && col === 0 ) {
                cells.push(<td key={`empty-${col}`}><div className={`bg-white rounded-xs w-[10px] h-[10px] mx-px`}></div></td>);
            } else if (dayOfYear <= totalDaysInYear) {
                const dateKey = `Day ${String(dayOfYear)}`;
                const contributionCount = contributions[dateKey] || 0;

                let bgColor = "bg-gray-200";
                if (contributionCount > 0) bgColor = "bg-green-200";
                if (contributionCount > 5) bgColor = "bg-green-400";
                if (contributionCount > 10) bgColor = "bg-green-700";
                if (contributionCount > 20) bgColor = "bg-green-950";

                const title = `${contributionCount > 0 ? `${contributionCount} Contributions` : "No Contribution"} On ${getDateFromDayOfYear(dayOfYear)}`
                cells.push(
                    <td key={`day-${dayOfYear}`} title={title}>
                        <div className={`${bgColor} rounded-xs w-[10px] h-[10px] mx-px`}></div>
                    </td>
                );
                dayOfYear += 7;
            } else if (dayOfYear <= totalDaysInYear) {
            
            
            } else {
                cells.push(<td key={`empty-${col}`}><div className={`bg-white rounded-xs w-[10px] h-[10px] mx-px`}></div></td>); // Empty cells after the last day of the year
            }
        }

        return cells;
    };

    return (
        <>
            <div className="flex flex-row justify-between items-center md:max-w-3xl w-screen">
                <span className="flex text-lg">{oneYearContribution} contributions in {activeYearButton}</span>
                <a className="flex text-xs text-gray-600 items-center hover:underline hover:text-blue-600">
                    Contribution setting <FaCaretDown />
                </a>
            </div>
            <div className="flex flex-col border rounded border-gray-300 text-sm p-5 mb-5 md:max-w-3xl w-screen">
                <div className="flex flex-col overflow-x-auto max-w-170">
                    <div className="flex flex-row mb-1">
                        {months.map((month, i) => (
                            <span key={i} className="pl-8 text-xs">{month}</span>
                        ))}
                    </div>
                    <table className="flex border-collapse border-spacing-0 mb-2 overflow-ellipsis">
                        <tbody>
                            {[...Array(7)].map((_, row) => (
                                <tr key={row}>
                                    {row % 2 === 1 ? <td className="text-xs pr-1">{daysOfWeek[row]}</td> : <td></td>}
                                    
                                    {generateTableCells(row)}
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
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
    );
};

export default Contribution;
