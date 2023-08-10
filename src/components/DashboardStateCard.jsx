import React from "react";
import { BsFillQuestionSquareFill } from "react-icons/bs"
import { FaArrowUp } from "react-icons/fa"


const StateCard = ({ cardtitle, bigcount, percentagevalue }) => {
    return (
        <div className=" flex flex-col justify-between w-64 h-32 p-4 border border-solid border-zinc-950 border-opacity-20 rounded-lg bg-stone-50">
        {/* <div className=" flex flex-col justify-between p-4 h-32 w-60 border-solid border-zinc-950 border-opacity-50 rounded-xl"> */}
            <div  className=" flex justify-between">
                <div className=" flex flex-col justify-between">
                    <div className=" text-sm font-semibold text-zinc-400">{cardtitle}</div>
                    <div className=" text-xl font-semibold text-black">{bigcount}</div>
                </div>
                <div className=""><BsFillQuestionSquareFill  size={32} /></div>
            </div>

            <div className=" flex justify-between">
                <div className="flex flex-row gap-1 text-green-500">
                    <div className=" flex flex-col justify-center"><FaArrowUp /></div>
                    <div>{percentagevalue}</div>
                </div>
                <div className=" text-sm font-regular text-zinc-400">
                    Since last week
                </div>
            </div>
        </div>
    );
};

export default StateCard;