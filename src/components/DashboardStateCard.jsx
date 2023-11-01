import PropTypes from "prop-types";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const StateCard = ({ CardTitle, BigCount, Icon, PercentageValue }) => {
	return (
		<div className=" flex flex-col justify-between w-64 h-32 p-4 border border-solid border-zinc-950 border-opacity-20 rounded-lg bg-stone-50">
			<div className=" flex justify-between">
				<div className=" flex flex-col justify-between">
					<div className=" text-sm font-semibold text-zinc-400">
						{CardTitle}
					</div>
					<div className=" text-xl font-semibold text-black">{BigCount}</div>
				</div>
				<div className="">{Icon}</div>
			</div>

			<div className="flex justify-between">
				<div className={`flex flex-row gap-1 ${PercentageValue > 0 ? 'text-green-500' : PercentageValue < 0 ? 'text-orange-500' : 'text-gray-500'}`}>
					<div className="flex flex-col justify-center">
						{PercentageValue > 0 ? <FaArrowUp className="text-green-500" /> : PercentageValue < 0 ? <FaArrowDown className="text-orange-500" /> : ""}
					</div>
					<div>{PercentageValue}%</div>
				</div>
				<div className="text-sm font-regular text-zinc-400">
					Since last week
				</div>
			</div>
		</div>
	);
};

StateCard.propTypes = {
	CardTitle: PropTypes.string.isRequired,
	BigCount: PropTypes.number.isRequired,
	Icon: PropTypes.object.isRequired,
	PercentageValue: PropTypes.number.isRequired,
};

export default StateCard;
