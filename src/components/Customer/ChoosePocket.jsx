import PKOne from "../../assets/images/pocket_styles/PK-1 1.png";
import PKTwo from "../../assets/images/pocket_styles/PK-2 1.png";
// import PKThree from "../../assets/images/pocket_styles/PK-3 1.png";
// import PKFour from "../../assets/images/pocket_styles/PK-4 1.png";
import PKFive from "../../assets/images/pocket_styles/PK-5 1.png";
import PKSix from "../../assets/images/pocket_styles/PK-6 1.png";
// import PKSeven from "../../assets/images/pocket_styles/PK-7 1.png";

import { useDispatch } from "react-redux";

import { setJacket } from "../../store/slices/jacketCustomizationSlice";

const ChoosePocket = () => {
	const dispatch = useDispatch();
	return (
		<div className="flex flex-col gap-10 my-5 px-3">
			<div>
				<span className="ml-5 text-xl sm:text-2xl font-bold">
					Choose Your Pocket
				</span>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5">
					<div onClick={() => dispatch(setJacket({ pocket: "2-straight-flaps" }))}
						className="flex p-2 flex-col justify-center items-center cursor-pointer rounded-lg border border-black-2  shadow"
					>
						<img alt="" className="pb-2" src={PKOne} />
						<label className="text-sm">
							2 STRAIGHT <br /> POCKETS
						</label>
					</div>
					<div onClick={() => dispatch(setJacket({ pocket: "2-straight-flaps-1-ticket" }))} className="flex p-2 flex-col justify-center items-center cursor-pointer rounded-lg border border-black-2  shadow">
						<img alt="" className="pb-2" src={PKTwo} />
						<label className="text-sm">
							2 STRAIGHT POCKETS & <br /> 1 TICKET POCKET
						</label>
					</div>

					<div onClick={() => dispatch(setJacket({ pocket: "2-straight" }))}
						className="flex p-2 flex-col justify-center items-center cursor-pointer rounded-lg border border-black-2  shadow"
					>
						<img alt="" className="pb-2" src={PKFive} />
						<label className="text-sm">
							2 STRAIGHT POCKETS
							<br />
							(NO FLAPS)
						</label>
					</div>
					<div onClick={() => dispatch(setJacket({ pocket: "2-straight-1-ticket" }))} className="flex p-2 flex-col justify-center items-center cursor-pointer rounded-lg border border-black-2  shadow">
						<img alt="" className="pb-2" src={PKSix} />
						<label className="text-sm">
							2 STRAIGHT POCKETS
							<br />
							(NO FLAPS) & 1 TICKET
							<br /> POCKET
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChoosePocket;
