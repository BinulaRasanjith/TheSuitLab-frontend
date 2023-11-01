import { useEffect, useState } from "react"
import { HiOutlineScissors } from "react-icons/hi2"
import { HiOutlineSquare3Stack3D } from "react-icons/hi2"
import { HiOutlineBanknotes } from "react-icons/hi2"
import { PiHandbag } from "react-icons/pi"
import { Link } from "react-router-dom"
import { Chart, initTE } from "tw-elements"

import { dashboardData } from "../../api/assistantAPI";
import RecentOrders from "../../components/Assistant/RecentOrderSet"
import StateCard from "../../components/DashboardStateCard"

const Dashboard = () => {

	initTE({ Chart });
	const [canvas, setCanvas] = useState(null);

	const [dashboardContent, setDashboard] = useState([]); // TODO: FINAL DASHBOARD DATA FETCHING LOGIC
	const currentLocation = window.location.pathname;

	let chartInstance;


	// TODO: FINAL DASHBOARD DATA FETCHING LOGIC
	useEffect(() => {
		const fetchDashboardData = async () => {
			try {
				// GET DATA FROM LOCAL STORAGE
				const storedData = localStorage.getItem('dbData');
				console.log(storedData);
				if (storedData) {
					setDashboard(JSON.parse(storedData));
				} else {
					const response = await dashboardData();
					setDashboard(response.data);
					localStorage.setItem('dbData', JSON.stringify(response.data));
				}
			} catch (error) {
				console.error(error);
			}
		};
		fetchDashboardData();
	}, [currentLocation]);

	// CHART DATA
	var thisWeekOrderCounts;
	var lastWeekOrderCounts;
	
	if (dashboardContent.weeklyPerformance) {
		thisWeekOrderCounts = dashboardContent.weeklyPerformance.thisWeekPerformance.map((entry) => entry.orderCount);
		lastWeekOrderCounts = dashboardContent.weeklyPerformance.lastWeekPerformance.map((entry) => entry.orderCount);
	} else {
		console.error("Weekly performance data is not available in the JSON response.");
	}


	// CHART METRICS
	const dataChartBarDoubleDatasetsExample = {
		type: "bar",
		data: {
			labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			datasets: [
				{
					label: "Last week",
					data: lastWeekOrderCounts,
					backgroundColor: "#111111",
				},
				{
					label: "This week",
					data: thisWeekOrderCounts,
					backgroundColor: "#D3D3D4",
				},
			],
		},
	};


	// CHART OPTIONS
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

	// CHART RENDERING
	useEffect(() => {
		// DESTROY THE CANVAS WHEN THE COMPONENT UNMOUNTS
		if (canvas && chartInstance) {
			chartInstance.destroy(canvas);
			console.log("Chart destroyed");
		}

		// CREATE A NEW CHART INSTANCE
		// eslint-disable-next-line react-hooks/exhaustive-deps
		chartInstance = new Chart(
			document.getElementById("chart-bar-double-datasets-example"),
			dataChartBarDoubleDatasetsExample,
			optionsChartBarDoubleDatasetsExample
		);
		const canvasElement = document.getElementById("chart-bar-double-datasets-example");
		setCanvas(canvasElement);

		// ENSURE TO RETURN A CLEANUP FUNCTION TO DESTROY THE CHART WHEN THE COMPONENT UNMOUNTS
		return () => {
			if (canvas && chartInstance) {
				chartInstance.destroy(canvas);
				console.log("Chart destroyed");
			}
		};
	}, [currentLocation]);

	const assistantStateBoxItems = [
		{
			cardtitle: "ORDERS",
			bigcount: dashboardContent && dashboardContent.orderCount ? dashboardContent.orderCount.thisWeekOrderCount : 0,
			icon: <PiHandbag size={32} />,
			percentagevalue: dashboardContent && dashboardContent.orderCount ? dashboardContent.orderCount.orderPresentage : 0,
		},
		{
			cardtitle: "LOW STOCK MATERIALS",
			bigcount: dashboardContent && dashboardContent.lowStockMaterials ? dashboardContent.lowStockMaterials.lowStockMaterials : 0,
			icon: <HiOutlineSquare3Stack3D size={32} />,
			percentagevalue: dashboardContent && dashboardContent.lowStockMaterials ? dashboardContent.lowStockMaterials.lowerPresentage : 0,
		},
		{
			cardtitle: "PROCESSING",
			bigcount: dashboardContent && dashboardContent.processingOrders ? dashboardContent.processingOrders.processingCount : 0,
			icon: <HiOutlineScissors size={32} />,
			percentagevalue: dashboardContent && dashboardContent.processingOrders ? dashboardContent.processingOrders.percentageChange : 0,
		},
		{
			cardtitle: "INCOMES",
			bigcount: "Rs. " + (dashboardContent && dashboardContent.income && dashboardContent.income.thisWeekIncome ? dashboardContent.income.thisWeekIncome : "0.00"),
			icon: <HiOutlineBanknotes size={32} />,
			percentagevalue: dashboardContent && dashboardContent.income ? dashboardContent.income.incomePercentage : 0,
		},
		// {
		// 	cardtitle: "INCOMES",
		// 	bigcount: "Rs. " + (income && income.result && income.result.thisWeekIncome ? income.result.thisWeekIncome : "0.00"),
		// 	icon: <HiOutlineBanknotes size={32} />,
		// 	percentagevalue: income && income.result ? income.result.incomePercentage : 0,
		// },
	];
	console.log(dashboardContent);


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
					<RecentOrders orderData={dashboardContent.recentOrders} />
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