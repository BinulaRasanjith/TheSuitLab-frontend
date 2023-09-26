import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { selectComponentHide } from "../../store/slices/componentHideSlice";
import CamControl from "../utilComp/CamControl";
import ControlPanel from "../utilComp/ControlPanel";
// import BackNext from "./BackNext";
import { NewPant } from "./NewPant";

const PantModel = () => {

	const hide = useSelector(selectComponentHide);
	const location = useLocation();
	const navigate = useNavigate()
	const locations = ['/fabric/solid', '/fabric/pattern', '/style/pant-style', '/style/back-pocket', '/color-contrast/back-pocket-color', '/color-contrast/back-button-color', '/measurements'];
	// const currentLocation = 'Current Location';

	const handleBack = () => {
		const pathSegments = location.pathname.split('/').filter(i => i);

		const lastSegment = pathSegments.pop();
		const secondLastSegment = pathSegments.pop();

		const lastPart = `/${secondLastSegment}/${lastSegment}`;
		const currentIndex = locations.indexOf(lastPart);

		if (currentIndex > 0) {
			const previousLocation = locations[currentIndex - 1];
			// console.log(previousLocation);
			navigate(`/customer/customize-suit/pant${previousLocation}`)
			// window.history.pushState(null, '', previousLocation);
		}



	};

	const handleNext = () => {
		const pathSegments = location.pathname.split('/').filter(i => i);
		// console.log(pathSegments);

		const lastSegment = pathSegments.pop();
		const secondLastSegment = pathSegments.pop();
		const thirdLastSegment = pathSegments.pop();


		const lastPart = `/${secondLastSegment}/${lastSegment}`;

		const currentIndex = locations.indexOf(lastPart);
		if (currentIndex < locations.length - 2) {
			const nextLocation = locations[currentIndex + 1];
			navigate(`/customer/customize-suit/pant${nextLocation}`)

		} else if (currentIndex === locations.length - 2 && thirdLastSegment === 'pant') {
			navigate(`/customer/customize-suit/pant/measurements`)
		}
	};


	const [control, setControl] = useState({
		x: 0,
		y: hide.OnlyTrouserInitialPosition,
		z: 0,
	});
	const [camCont, setCamCont] = useState({
		scale: 3,
	});

	return (
		<div className="w-1/2 h-[calc(100vh-4rem)] flex items-center relative">
			<ControlPanel control={control} setControl={setControl} />
			<CamControl camCont={camCont} setCamCont={setCamCont} />
			<Canvas camera={{ position: [0, 0, 10], fov: 30 }}>
				<Suspense fallback={false}>
					<NewPant camCont={camCont} control={control} />
				</Suspense>
				<OrbitControls
					enableZoom={true}
					makeDefault
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Environment preset="city" />
				{/* <ContactShadows rotation-x={Math.PI / 2} position={[0, -4.5, 0]} opacity={0.25} width={10} height={10} blur={1} far={4.5} /> */}
			</Canvas>

			<div className="flex justify-around  absolute bottom-20 left-[50%] right-[50%] gap-x-36">
				<div>
					<button
						onClick={handleBack}
						className="bg-black text-white rounded-2xl py-3 px-5 m-2 lg:m-0"
					>
						Back
					</button>
				</div>
				<div>
					<button
						onClick={handleNext}
						className="bg-black text-white rounded-2xl py-3 px-5 m-2 lg:m-0">
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default PantModel;
