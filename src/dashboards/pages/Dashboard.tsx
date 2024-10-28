import { BiSolidUpArrowAlt } from "react-icons/bi";
import { GrFormView } from "react-icons/gr";
import { RiUserLine } from "react-icons/ri";
import { GrContactInfo } from "react-icons/gr";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Chart from "./Chart";

interface Expense {
  id: string;
  amount: number;
  category: string;
  date: string;
  description: string;
}

interface DashboardProps {
  expenses: Expense[];
}

const Dashboard: React.FC<DashboardProps> = ({ expenses }) => {
  const totalExpenses = expenses.length;
  const totalSpending = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );

  return (
    <div className="ml-0 md:ml-[14rem] pt-[4rem] md:pt-[6rem] px-[1rem] md:px-[3rem] mb-6">
      <div className="flex flex-col md:flex-row gap-[2rem]">
        {/* Big Card - Expenses */}
        <div className="shadow-lg w-full md:w-[20rem] lg:w-[27rem] h-[10rem] p-[1.8rem] rounded-lg bg-white">
          <div className="flex justify-between items-center">
            <div className="text-[1.6rem] font-medium text-[#636363]">
              Number Of Expenses
            </div>
            <div className="text-[#ea7b30] flex items-center">
              <BiSolidUpArrowAlt />
              <RiUserLine className="ml-1" />
            </div>
          </div>
          <div className="text-[1.2rem] font-semibold">{totalExpenses}</div>
          <div className="flex justify-between items-center">
            <div className="border-b-[1.3px] border-black text-[0.9rem] cursor-pointer">
              See all Expenses
            </div>
            <div className="bg-[#ffcccc] rounded-[3px] text-[#ea7b30] h-[1.3rem] w-[1.3rem] flex items-center justify-center">
              <GrFormView className="text-[0.9rem]" />
            </div>
          </div>
        </div>

        {/* Big Card - Total Spending */}
        <div className="shadow-lg w-full md:w-[20rem] lg:w-[23rem] h-[10rem] p-[1.8rem] rounded-lg bg-white">
          <div className="flex justify-between items-center">
            <div className="text-[1.6rem] font-medium text-[#636363]">
              Sum Of Expenses
            </div>
            <div className="text-[#ea7b30] flex items-center">
              <BiSolidUpArrowAlt />
              <GrContactInfo className="ml-1" />
            </div>
          </div>
          <div className="text-[1.2rem] font-semibold">
            ${totalSpending.toFixed(2)}
          </div>
          <div className="flex justify-between items-center">
            <div className="border-b-[1.3px] border-black text-[0.9rem] cursor-pointer">
              See all Spending
            </div>
            <div className="bg-[#ffcccc] rounded-[3px] text-[#ea7b30] h-[1.3rem] w-[1.3rem] flex items-center justify-center">
              <GrFormView className="text-[0.9rem]" />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[2.5rem] flex flex-col lg:flex-row gap-[4rem] lg:gap-[8rem]">
        <div>
          <div className="text-[1.2rem] font-medium text-[#636363]">
            Latest Transaction
          </div>
          <div className="pt-[2rem] flex flex-col justify-center items-center gap-[1.2rem]">
            <div className="w-[130px] h-[130px]">
              <CircularProgressbar
                value={(totalSpending / 100) * 75} // Adjust as needed
                text={`${((totalSpending / 100) * 75).toFixed(0)}%`}
                styles={buildStyles({
                  textColor: "#636363",
                  pathColor: "#93CAAB",
                  trailColor: "#e0e0e0",
                  textSize: "18px",
                  pathTransitionDuration: 0.5,
                })}
              />
            </div>
            <div className="text-[1.1rem] font-medium text-[#636363]">
              Sum Of All Expenses
            </div>
            <div className="text-[1.6rem] font-medium">
              ${totalSpending.toFixed(2)}
            </div>
          </div>
        </div>

        <div className="pl-0 lg:pl-16 w-full">
          <div className="text-[1.2rem] font-medium text-[#636363]">
            Total Amount
          </div>
          <Chart aspect={2} title="Transaction History" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
