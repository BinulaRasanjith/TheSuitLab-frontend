const ChooseMeasurements = () => {
	const standards = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"];

	return (
		<div className="p-3 flex flex-col items-start overflow-y-auto">
			<span className="text-2xl font-bold ml-5 my-5">Your Body Size</span>
			<div className="my-2">
				<span className="text-xl font-bold ml-5 ">Select Unit</span>
				<div className="flex justify-around p-2">
					<button className="bg-gray-200 rounded-xl py-1 px-3 m-1">cm</button>
					<button className="bg-gray-200 rounded-xl py-1 px-3 m-1">inch</button>
				</div>
			</div>
			<div className="my-2">
				<span className="text-xl font-bold ml-5">Select Type</span>
				<div className="flex justify-around p-2">
					<button className="bg-gray-200 rounded-xl py-1 px-3 m-1">
						Jacket
					</button>
					<button className="bg-gray-200 rounded-xl py-1 px-3 m-1">Pant</button>
				</div>
			</div>
			<div className="my-2">
				<span className="text-xl font-bold ml-5">Select Your Fit</span>
				<div className="flex justify-around p-2">
					<button className="bg-gray-200 rounded-xl py-1 px-3 m-1">
						Signature Standard Fit
					</button>
					<button className="bg-gray-200 rounded-xl py-1 px-3 m-1">
						Euro Slim Fit
					</button>
					<button className="bg-gray-200 rounded-xl py-1 px-3 m-1">
						Custom
					</button>
				</div>
			</div>
			<div className="flex-col my-2">
				<span className="text-xl font-bold ml-5">Jacket</span>
				<div className="flex justify-between p-2">
					<div className="flex flex-col rounded-lg items-center justify-center px-4 py-1 bg-gray-200 w-20 m-1">
						<label className="text-black p-1">Chest</label>
						<input
							className="bg-white py-0.5 px-4  rounded-lg w-16 mx-2 my-1"
							placeholder="inch"
							type="number"
						/>
					</div>
					<div className="flex flex-col rounded-lg items-center justify-center px-4 py-1 bg-gray-200 w-20 m-1">
						<label className="text-black p-1">Stomach</label>
						<input
							className="bg-white py-0.5 px-4  rounded-lg w-16 mx-2 my-1"
							placeholder="inch"
							type="number"
						/>
					</div>
					<div className="flex flex-col rounded-lg items-center justify-center px-4 py-1 bg-gray-200 w-20 m-1">
						<label className="text-black p-1">Hip</label>
						<input
							className="bg-white py-0.5 px-4  rounded-lg w-16 mx-2 my-1"
							placeholder="inch"
							type="number"
						/>
					</div>
					<div className="flex flex-col rounded-lg items-center justify-center px-4 py-1 bg-gray-200 w-20 m-1">
						<label className="text-black p-1">Shoulders</label>
						<input
							className="bg-white py-0.5 px-4  rounded-lg w-16 mx-2 my-1"
							placeholder="inch"
							type="number"
						/>
					</div>
					<div className="flex flex-col rounded-lg items-center justify-center px-4 py-1 bg-gray-200 w-20 m-1">
						<label className="text-black p-1">Sleeve</label>
						<input
							className="bg-white py-0.5 px-4  rounded-lg w-16 mx-2 my-1"
							placeholder="inch"
							type="number"
						/>
					</div>
					<div className="flex flex-col rounded-lg items-center justify-center px-4 py-1 bg-gray-200 w-20 m-1">
						<label className="text-black p-1">Length</label>
						<input
							className="bg-white py-0.5 px-4  rounded-lg w-16 mx-2 my-1"
							placeholder="inch"
							type="number"
						/>
					</div>
				</div>
				<div className="flex justify-around p-2">
					{standards &&
						standards.map((item, index) => (
							<div
								className="flex items-center justify-center bg-gray-200 rounded-full m-2"
								key={index}
							>
								<label className="text-black p-3">{item}</label>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default ChooseMeasurements;
