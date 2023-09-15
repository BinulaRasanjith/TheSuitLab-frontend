import { useEffect, useState } from "react"
import { HiOutlineScissors } from "react-icons/hi2"
import { HiOutlineSquare3Stack3D } from "react-icons/hi2"
import { HiOutlineBanknotes } from "react-icons/hi2"
import { PiHandbag } from "react-icons/pi"
import { Link } from "react-router-dom"
import { Chart, initTE } from "tw-elements"

import { cit, clmc, coc, cpoc } from "../../api/assistantAPI";
import RecentOrders from "../../components/Assistant/RecentOrderSet"
import StateCard from "../../components/DashboardStateCard"

const Dashboard = () => {

	// const [chartdata, setChartData] = useState([]);
	const [lowstockmaterials, setLowStocks] = useState([]);
	const [orders, setOrders] = useState([]);
	const [processingorders, setProcessingOrders] = useState([]);
	const [income, setIncome] = useState([]);


	// useEffect(() => {
	// 	const fetchChartData = async () => {
	// 		try {
	// 			const response = await gwp();
	// 			console.log(response.data);
	// 			setChartData(response.data);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	};

	// 	fetchChartData();
	// }, []);

	useEffect(() => {
		const fetchLowStocks = async () => {
			try {
				const response = await clmc();
				console.log(response.data);
				setLowStocks(response.data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchLowStocks();
	}, []);

	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const response = await coc();
				console.log(response.data);
				setOrders(response.data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchOrders();
	}, []);

	useEffect(() => {
		const fetchProcessingOrders = async () => {
			try {
				const response = await cpoc();
				console.log(response.data);
				setProcessingOrders(response.data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchProcessingOrders();
	}, []);

	useEffect(() => {
		const fetchIncome = async () => {
			try {
				const response = await cit();
				console.log(response.data);
				setIncome(response.data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchIncome();
	}, []);

	initTE({ Chart });
	const [canvas, setCanvas] = useState(null);

	window.onload = function () {
		new Chart(
			document.getElementById("chart-bar-double-datasets-example"),
			dataChartBarDoubleDatasetsExample,
			optionsChartBarDoubleDatasetsExample,
		);
	};

	useEffect(() => {
		const canvasElement = document.getElementById("chart-bar-double-datasets-example");
		setCanvas(canvasElement);

		// Destroy the canvas when the component unmounts
		return () => {
			if (canvas) {
				Chart.destroy(canvas);
			}
		};
	}, [canvas]);

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
			bigcount: orders && orders.result ? orders.result.thisWeekOrderCount : 0,
			icon: <PiHandbag size={32} />,
			percentagevalue: orders && orders.result ? orders.result.orderPresentage + "%" : 0 + "%",
		},
		{
			cardtitle: "LOW STOCK MATERIALS",
			bigcount: lowstockmaterials && lowstockmaterials.result ? lowstockmaterials.result.lowStockMaterials : 0,
			icon: <HiOutlineSquare3Stack3D size={32} />,
			percentagevalue: lowstockmaterials && lowstockmaterials.result ? lowstockmaterials.result.lowerPresentage + "%" : 0 + "%",
		},
		{
			cardtitle: "PROCESSING",
			bigcount: processingorders && processingorders.result ? processingorders.result.processingCount : 0,
			icon: <HiOutlineScissors size={32} />,
			percentagevalue: processingorders && processingorders.result ? processingorders.result.percentageChange + "%" : 0 + "%",
		},
		{
			cardtitle: "INCOMES",
			bigcount: "Rs. " + (income && income.result && income.result.thisWeekIncome ? income.result.thisWeekIncome : "0.00"),
			icon: <HiOutlineBanknotes size={32} />,
			percentagevalue: income && income.result ? income.result.incomePercentage + "%" : 0 + "%",
		},
	];


	// document.addEventListener("DOMContentLoaded", function () {
	// 	new Chart(
	// 		document.getElementById("chart-bar-double-datasets-example"),
	// 		dataChartBarDoubleDatasetsExample,
	// 		optionsChartBarDoubleDatasetsExample,
	// 	);

	// });

	return (
		<div className=" flex flex-col justify-between mx-10 my-8 gap-7">
			{/* DASHBOARD CARDS FOR STATUS VIEW */}
			{/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7"> */}
			<div className="flex justify-between flex-wrap gap-2 md:gap-7">
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
