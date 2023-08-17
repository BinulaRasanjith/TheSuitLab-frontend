// import React from "react";
import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";

const ReturnRecord = ({
	OrderId,
	ItemCount,
	OrderedDate,
	ReturnedDate,
	Reason,
}) => {
	return (
		<>
			<div className="grid grid-cols-6 items-center w-full">
				<div className=" w-40 text-sm font-medium text-black">{OrderId}</div>
				<div className=" text-sm font-medium text-black">{ItemCount}</div>
				<div className=" text-sm font-medium text-black">{OrderedDate}</div>
				<div className=" text-sm font-medium text-black">{ReturnedDate}</div>
				<div className="relative mb-3" data-te-input-wrapper-init>
					<textarea
						className=" peer block w-56 h-24 p-2 resize-none text-sm border border-solid border-gray-300 rounded bg-transparent "
						id="exampleFormControlTextarea1"
						placeholder="Reason for return"
						rows="3"
						value={Reason}
					></textarea>
				</div>
				<div className=" w-24 text-sm font-medium text-gray-500">
					<Button
						_hover={{
							bg: "gray",
							textColor: "white",
						}}
						bg={"black"}
						border={"1px"}
						height={"2rem"}
						ml={20}
						// onClick={handleLoginClick}
						textColor={"white"}
						width={"5.5rem"}
					>
						Edit
					</Button>
				</div>
			</div>
			<div className=" w-full border border-gray-200"></div>
		</>
	);
};

ReturnRecord.propTypes = {
	OrderId: PropTypes.string.isRequired,
	ItemCount: PropTypes.number.isRequired,
	OrderedDate: PropTypes.object.isRequired,
	ReturnedDate: PropTypes.object.isRequired,
	Reason: PropTypes.number.isRequired,
};

export default ReturnRecord;
