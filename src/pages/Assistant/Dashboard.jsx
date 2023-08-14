import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { HiOutlineScissors } from "react-icons/hi2";
import { PiHandbag } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Chart, initTE } from "tw-elements";

import RecentOrders from "../../components/Assistant/RecentOrders";
import StateCard from "../../components/DashboardStateCard";

const Dashboard = () => {
	initTE({ Chart });

	// DATA
	const dataChartBarDoubleDatasetsExample = {
		type: "bar",
		data: {
			labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			datasets: [
				{
					label: "Last week",
					data: [22, 19, 23, 19, 25, 18, 23],
					backgroundColor: "#111111",
				},
				{
					label: "This week",
					data: [25, 21, 23, 24, 22, 20, 26],
					backgroundColor: "#D3D3D4",
				},
			],
		},
	};

	// OPTIONS
	const optionsChartBarDoubleDatasetsExample = {
		options: {
			scales: {
				y: {
					stacked: false,
					ticks: {
						beginAtZero: true,
					},
				},
				x: {
					stacked: false,
				},
			},
		},
	};

	const assistantStateBoxItems = [
		{
			cardtitle: "ORDERS",
			bigcount: "89",
			icon: <PiHandbag size={32} />,
			percentagevalue: "1.10%",
		},
		{
			cardtitle: "LOW STOCK MATERIALS",
			bigcount: "4",
			icon: <HiOutlineSquare3Stack3D size={32} />,
			percentagevalue: "2.49%",
		},
		{
			cardtitle: "PROCESSING",
			bigcount: "12",
			icon: <HiOutlineScissors size={32} />,
			percentagevalue: "0.66%",
		},
		{
			cardtitle: "INCOMES",
			bigcount: "Rs. 120,000",
			icon: <HiOutlineBanknotes size={32} />,
			percentagevalue: "1.03%",
		},
	];

	document.addEventListener("DOMContentLoaded", function () {
		new Chart(
			document.getElementById("chart-bar-double-datasets-example"),
			dataChartBarDoubleDatasetsExample,
			optionsChartBarDoubleDatasetsExample
		);
	});

	return (
		<div className=" flex flex-col justify-between m-9 gap-7">
			{/* DASHBOARD CARDS FOR STATUS VIEW */}
			<div className="grid grid-cols-4 justify-start flex-wrap gap-4">
				{assistantStateBoxItems.map((item, index) => (
					<StateCard
						BigCount={item.bigcount}
						CardTitle={item.cardtitle}
						Icon={item.icon}
						PercentageValue={item.percentagevalue}
						key={index}
					/>
				))}
			</div>

			<div className=" flex justify-between gap-5">
				<div className=" flex flex-col w-7/12 p-6 border border-solid border-zinc-950 border-opacity-20 rounded-lg bg-stone-50 gap-4">
					<div className=" text-sm font-semibold text-zinc-400">
						PERFORMANCE
					</div>
					<div className=" text-sm font-regular text-black text-center">
						Total Orders
					</div>
					<canvas id="chart-bar-double-datasets-example"></canvas>
				</div>
				<div className=" flex flex-col justify-between w-5/12 p-4 border border-solid border-zinc-950 border-opacity-20 rounded-lg bg-stone-50">
					<div className=" text-sm font-semibold text-zinc-400">
						RECENT ORDERS
					</div>
					<RecentOrders />
					<div className=" flex justify-center">
						<div className=" flex flex-col justify-center">
							<Link to="/assistant/orders">
								<button className=" text-sm font-semibold text-white bg-black py-1 px-4 rounded-lg">
									Read More
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
