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
    <div className="ml-[14rem] pt-[6rem] pr-[2rem]">
      <div className="flex flex-col md:flex-row gap-[1.5rem]">
        {/* Big Card - Expenses */}
        <div className="shadow-lg w-full md:w-[14rem] h-[7.7rem] p-[1rem] rounded-lg bg-white">
          <div className="flex justify-between items-center">
            <div className="text-[1.4rem] font-medium text-[#636363]">
              Expenses
            </div>
            <div className="text-[#ea7b30] flex items-center">
              <BiSolidUpArrowAlt />
              <RiUserLine className="ml-1" />
            </div>
          </div>
          <div className="text-[1.4rem] font-medium">{totalExpenses}</div>
          <div className="flex justify-between items-center">
            <div className="border-b-[1.3px] border-black text-[0.8rem]">
              see all Expenses
            </div>
            <div className="bg-[#ffcccc] rounded-[2px] text-[#ea7b30] h-[1rem] w-[1.1rem] flex items-center justify-center">
              <GrFormView className="text-[0.8rem]" />
            </div>
          </div>
        </div>

        {/* Big Card - Total Spending */}
        <div className="shadow-lg w-full md:w-[14rem] h-[7.7rem] p-[1rem] rounded-lg bg-white">
          <div className="flex justify-between items-center">
            <div className="text-[1.4rem] font-medium text-[#636363]">
              Total Spending
            </div>
            <div className="text-[#ea7b30] flex items-center">
              <BiSolidUpArrowAlt />
              <GrContactInfo className="ml-1" />
            </div>
          </div>
          <div className="text-[1.4rem] font-medium">
            ${totalSpending.toFixed(2)}
          </div>
          <div className="flex justify-between items-center">
            <div className="border-b-[1.3px] border-black text-[0.8rem]">
              see all Spending
            </div>
            <div className="bg-[#ffcccc] rounded-[2px] text-[#ea7b30] h-[1rem] w-[1.1rem] flex items-center justify-center">
              <GrFormView className="text-[0.8rem]" />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[2rem] flex flex-col lg:flex-row gap-[7rem]">
        <div>
          <div className="text-[1rem] font-medium text-[#636363]">
            Latest Transaction
          </div>
          <div className="pt-[2rem] flex flex-col justify-center items-center gap-[0.9rem]">
            <div className="w-[100px] h-[100px]">
              <CircularProgressbar
                value={(totalSpending / 100) * 75} // This can be adjusted as needed
                text={`${((totalSpending / 100) * 75).toFixed(0)}%`}
                styles={buildStyles({
                  textColor: "#636363",
                  pathColor: "#93CAAB",
                  trailColor: "#e0e0e0",
                  textSize: "16px",
                  pathTransitionDuration: 0.5,
                })}
              />
            </div>
            <div className="text-[1rem] font-medium text-[#636363]">
              Available Amount
            </div>
            <div className="text-[1.4rem] font-medium">
              ${(100 - totalSpending).toFixed(2)}
            </div>
          </div>
        </div>

        <div className="pl-14">
          <div className="text-[1rem] font-medium text-[#636363]">
            Total Amount
          </div>
          <Chart aspect={2} title="Transaction History" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
