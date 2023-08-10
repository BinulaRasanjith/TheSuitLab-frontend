import React from "react";

const StateCard = ({ cardtitle, bigcount, percentagevalue }) => {
    return (
        <div className=" w-64 h-32 p-4 border border-solid border-zinc-950 border-opacity-20 rounded-lg bg-stone-50">
        {/* <div className=" flex flex-col justify-between p-4 h-32 w-60 border-solid border-zinc-950 border-opacity-50 rounded-xl"> */}
            <div  className=" flex justify-between">
                <div className=" flex flex-col justify-between">
                    <div>{cardtitle}</div>
                    <div>{bigcount}</div>
                </div>
                <div>ICON</div>
            </div>

            <div className=" flex flex-col justify-between">
                <div>
                    ARROW
                    {percentagevalue}
                </div>
                <div>
                    Since last week
                </div>
            </div>
        </div>
    );
};

export default StateCard;