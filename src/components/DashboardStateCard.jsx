import React from "react";

const StateCard = ({ title, count, value }) => {
    return (
        <div className=" flex flex-col justify-between p-4 h-32 w-60 border-solid border-zinc-950 border-opacity-50 rounded-xl">
            <div  className=" flex justify-between">
                <div className=" flex flex-col justify-between">
                    <div>{title}</div>
                    <div>{count}</div>
                </div>
                <div>ICON</div>
            </div>

            <div className=" flex flex-col justify-between">
                <div>
                    ARROW
                    {value}
                </div>
                <div>
                    Since last week
                </div>
            </div>
        </div>
    );
};

export default StateCard;