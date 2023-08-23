import Img from "../../assets/images/measurements/men_size_1 (1).jpg";
import MeasurementBlock from "../../components/Customer/MeasurementBlock";

const CustomizeMeasurements = () => {
	return (
		<div className="flex w-full min-h-[calc(100vh-64px)] flex-wrap justify-center gap-4">
			<MeasurementBlock image={Img} header="Full Shoulder Width" />
			<MeasurementBlock image={Img} header="Sleeves" />
			<MeasurementBlock image={Img} header="Full Chest" />
			<MeasurementBlock image={Img} header="Waist" />
			<MeasurementBlock image={Img} header="Hips/Seat" />
			<MeasurementBlock image={Img} header="Front Shoulder Width" />
			<MeasurementBlock image={Img} header="Back Shoulder Width" />
			<MeasurementBlock image={Img} header="Neck" />
		</div>
	);
};

export default CustomizeMeasurements;
