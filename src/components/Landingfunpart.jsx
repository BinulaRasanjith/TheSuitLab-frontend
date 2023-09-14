import { Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import Bg1 from "../assets/images/Bg1.png";
import Bg2 from "../assets/images/Bg2.png";
import Bg3 from "../assets/images/Bg3.png";

const LandingFunPart = () => {
	const navigate = useNavigate();
	const toast = useToast();

	const handleClick = () => {
		toast({
			title: "You must login first",
			status: "info",
			duration: 3000,
			isClosable: true,
		});
		navigate("/login");
	};

	return (
		<div className="flex flex-col items-center bg-white">
			<div className="flex flex-col items-start justify-start">
				<div className="flex  pt-5 px-5 relative">
					<img
						className="max-h-72 w-screen max-w-full h-screen bg-cover"
						src={Bg1}
						alt=""
					/>
				</div>
				<div className="flex flex-col absolute pt-11 pl-7 sm:pl-20">
					<div className="pb-3">
						<h1 className="text-white font-bold text-4xl">Customize Your</h1>
						<h2 className="text-white font-bold text-4xl">Suit</h2>
					</div>
					<div className="pb-3">
						<p className="text-white">Custom-made Coats, Shirts and</p>
						<p className="text-white">Trousers with</p>
					</div>
					<Button onClick={handleClick}>Customize Now</Button>
				</div>
			</div>
			<div className="flex flex-col md:justify-around md:flex-row py-5 ">
				<div className="flex flex-col items-start justify-start">
					<div className="px-5 pb-5 md:pb-0 relative">
						<img
							className="max-h-72 w-screen max-w-full h-screen bg-cover"
							src={Bg2}
							alt=""
						/>
					</div>

					<div className="flex flex-col absolute p-10 ml-10">
						<div className="pb-3">
							<h1 className="text-white font-bold text-4xl">Pick Your Suit</h1>
							<h2 className="text-white font-bold text-4xl">Now</h2>
						</div>
						<div className="pb-3">
							<p className="text-white">Find your choice from 50+</p>
							<p className="text-white">designs</p>
						</div>
						<Button onClick={handleClick}>Hire Now</Button>
					</div>
				</div>
				<div className="flex flex-col items-start justify-start">
					<div className="md:pr-5 md:pl-0 px-5">
						<img
							className="max-h-72 w-screen max-w-full h-screen bg-cover"
							src={Bg3}
							alt=""
						/>
					</div>

					<div className="flex flex-col absolute p-10">
						<div className="pb-3">
							<h1 className="text-white font-bold text-4xl">Explore</h1>
							<h2 className="text-white font-bold text-4xl">Accessories</h2>
						</div>
						<div className="pb-3">
							<p className="text-white">Belts, Shoes, Bow Ties and</p>
							<p className="text-white"> Neck Ties</p>
						</div>
						<Button onClick={handleClick}>Place Now</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingFunPart;
