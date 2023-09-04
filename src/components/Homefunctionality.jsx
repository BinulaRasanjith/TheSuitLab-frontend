import { Button } from "@chakra-ui/button";
import { useNavigate } from "react-router-dom";

import Accessories1 from "../assets/images/Accessories1.png";
import Accessories2 from "../assets/images/Accessories2.png";
import Accessories3 from "../assets/images/Accessories3.png";
import Accessories4 from "../assets/images/Accessories4.png";

// TODO: set the navigation routes
const HomeFunctionality = () => {
	const navigate = useNavigate();

	return (
		<div className="grid grid-col-1 lg:grid-cols-2 md:grid-rows-1 gap-0 pb-10 w-full">
			<div className="flex pt-5 px-5 md:pl-5 md:pr-5">
				<div className="flex items-start justify-start relative">
					<img
						alt=""
						className="w-screen h-[calc(100vh-128px)]"
						src={Accessories1}
					/>
				</div>
				<div className="flex flex-col items-start absolute pt-10 pl-3 sm:pl-10">
					<div className="pb-3">
						<h1 className="text-white font-bold text-2xl sm:text-4xl">
							Customize Your
						</h1>
						<h2 className="text-white font-bold text-2xl sm:text-4xl">Suit</h2>
					</div>
					<div className="pb-3">
						<p className="text-white">Custom-made Coats, Shirts and</p>
						<p className="text-white">Trousers with your favorite designs</p>
					</div>
					{/* Navigate to suit customization */}
					<Button onClick={() => navigate("/customer/customize-suit")}>
						Customize Now
					</Button>
				</div>
			</div>
			<div className="flex flex-col flex-wrap gap-4 pt-5">
				<div className="flex px-5 md:pr-5 lg:pl-0 md:pl-5 ">
					<div className="flex items-start justify-start relative">
						<img
							alt=""
							className="max-w-full w-screen min-h-64 h-80"
							src={Accessories2}
						/>
					</div>
					<div className="flex flex-col flex-wrap items-start absolute pt-10 pl-3 sm:pl-10">
						<div className="pb-3 flex flex-col flex-wrap">
							<h1 className="text-white font-bold text-2xl sm:text-4xl">
								Purchase from our
							</h1>
							<h2 className="text-white font-bold text-2xl sm:text-4xl">
								collection
							</h2>
						</div>
						<div className="pb-3 flex flex-col flex-wrap">
							<p className="text-white">
								Select Coats, Shirts and Trousers with{" "}
							</p>
							<p className="text-white">from the pre-made collections</p>
						</div>
						<Button onClick={() => navigate("/customer/	")}>Purchase Now</Button>
					</div>
				</div>
				<div className="flex flex-col md:flex-row">
					<div className="flex rounded-4xl">
						<div className="flex items-start justify-start relative">
							<img
								alt=""
								className="max-w-full w-screen min-h-64 h-80 bg-cover rounded-2xl"
								src={Accessories3}
							/>
						</div>
						<div className="flex flex-col items-start absolute pt-10 pl-7 sm:pl-10">
							<div className="pb-3">
								<h1 className="text-white font-bold text-2xl sm:text-4xl">
									Pick Your
								</h1>
								<h2 className="text-white font-bold text-2xl sm:text-4xl">
									Suit Now
								</h2>
							</div>
							<div className="pb-3">
								<p className="text-white">Find your dream suit</p>
								<p className="text-white">from 50+ designs</p>
							</div>
							<Button onClick={() => navigate("/customer/hire-suit")}>Hire Now</Button>
						</div>
					</div>

					<div className="flex rounded-4xl px-5 pt-5 md:pt-0 md:pr-5 ">
						<div className="flex items-start justify-start relative">
							<img
								alt=""
								className="max-w-full w-screen h-80 "
								src={Accessories4}
							/>
						</div>
						<div className="flex flex-col flex-wrap items-start absolute pt-10 pl-10 sm:pl-10">
							<div className="pb-3">
								<h1 className="text-white font-bold text-2xl sm:text-4xl">
									Explore
								</h1>
								<h2 className="text-white font-bold text-2xl sm:text-4xl">
									Accessories
								</h2>
							</div>
							<div className="pb-3">
								<p className="text-white">Belts, Shoes, Bow</p>
								<p className="text-white">Ties and Neck Ties</p>
							</div>
							<Button onClick={() => navigate("/customer/accessories/shoes")}>
								Place Now
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeFunctionality;
