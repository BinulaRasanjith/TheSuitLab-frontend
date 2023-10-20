import { useEffect, useState } from "react";

import { getReturns } from "../../api/returnAPI";
import ReturnRecord from "./ReturnRecord";

const ReturnedItems = () => {

	const [returns, setReturns] = useState([]);

	useEffect(() => {
		const fetchReturns = async () => {
			try {
				const response = await getReturns();
				setReturns(response.data.returns);
			} catch (error) {
				console.error(error);
			}
		};

		fetchReturns();
	}, []);

	return (
		<>
			<div className="flex flex-col gap-6">
				{returns.map((item, index) => (
					<ReturnRecord
						key={index}
						OrderId={item.referenceNo}
						ItemCount={item.itemCount}
						OrderedDate={new Date(item.orderedDate).toLocaleDateString()}
						ReturnedDate={new Date(item.returnedDate).toLocaleDateString()}
						Reason={item.reason}
					/>
				))}
			</div>
		</>
	);
	
};

export default ReturnedItems;
