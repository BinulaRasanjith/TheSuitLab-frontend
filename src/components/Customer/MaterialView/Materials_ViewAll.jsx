import blue_texture_1 from "../../../assets/images/materials/blue texture 1.png";
import brown_suit_1 from "../../../assets/images/materials/brown suit 1.png";
import brown_texture_1 from "../../../assets/images/materials/brown texture 1.png";
import brown_texture_2 from "../../../assets/images/materials/brown texture 2.png";
import charcol_texture_1 from "../../../assets/images/materials/charcol texture 1.png";
import dark_blue_2 from "../../../assets/images/materials/dark blue 2.png";
import dark_chocolate_1 from "../../../assets/images/materials/dark chocolate 1.png";
import dark_khaki_texture_1 from "../../../assets/images/materials/dark khaki texture 1.png";
import green_texture_1 from "../../../assets/images/materials/green texture 1.png";
import grey_texture_1 from "../../../assets/images/materials/grey texture 1.png";
import khaki_texture_1 from "../../../assets/images/materials/khaki texture 1.png";
import light_khaki_texture_1 from "../../../assets/images/materials/light khaki texture 1.png";
import light_olive_1 from "../../../assets/images/materials/light olive 1.png";
import midnight_gray_1 from "../../../assets/images/materials/midnight grey 1.png";
import navy_suit_1 from "../../../assets/images/materials/navy suit 1.png";
import purple_texture_1 from "../../../assets/images/materials/purple texture 1.png";
import wool_navy_1 from "../../../assets/images/materials/wool navy 1.png";
import { useCustomization } from "../../../contexts/Controller";
import solid_pink from "../../../assets/images/fabrics/solid/solid-pink suit.jpg";
import solid_off_white from "../../../assets/images/fabrics/solid/solid- off white.jpg";
import Container from "./Container";

const Materials_ViewAll = () => {
	const { setMaterial } = useCustomization();

	return (
		<Container>
			<button onClick={() => setMaterial("Fabric_Polyester_002_SD")}>
				<img alt="" className="h-20 w-24" src={blue_texture_1} />
			</button>
			<button onClick={() => setMaterial("Leather_Perforated_001")}>
				<img alt="" className="h-20 w-24" src={brown_texture_1} />
			</button>
			<button onClick={() => setMaterial("Fabric_Silk_001")}>
				<img alt="" className="h-20 w-24" src={solid_off_white} />
			</button>
			<button onClick={() => setMaterial("Fabric_Lace_004")}>
				<img alt="" className="h-20 w-24" src={dark_blue_2} />
			</button>
			<button onClick={() => setMaterial("Fabric_019a")}>
				<img alt="" className="h-20 w-24" src={solid_pink} />
			</button>
			<button>
				<img alt="" className="h-20 w-24" src={dark_chocolate_1} />
			</button>
			<button>
				<img alt="" className="h-20 w-24" src={brown_texture_2} />
			</button>
			<button onClick={() => setMaterial("grey")}>
				<img alt="" className="h-20 w-24" src={grey_texture_1} />
			</button>
			<button onClick={() => setMaterial("Fabric_026")}>
				<img alt="" className="h-20 w-24" src={midnight_gray_1} />
			</button>
			<button>
				<img alt="" className="h-20 w-24" src={navy_suit_1} />
			</button>
			<button>
				<img alt="" className="h-20 w-24" src={wool_navy_1} />
			</button>
			<button>
				<img alt="" className="h-20 w-24" src={brown_suit_1} />
			</button>

			<button onClick={() => setMaterial("Fabric_015")}>
				<img alt="" className="h-20 w-24" src={light_khaki_texture_1} />
			</button>
			<button onClick={() => setMaterial("Fabric_polyester_001_SD")}>
				<img alt="" className="h-20 w-24" src={light_olive_1} />
			</button>
			<button onClick={() => setMaterial("Fabric_011_SD")}>
				<img alt="" className="h-20 w-24" src={khaki_texture_1} />
			</button>
			<button>
				<img alt="" className="h-20 w-24" src={green_texture_1} />
			</button>
			<button onClick={() => setMaterial("Brown_001")}>
				<img alt="" className="h-20 w-24" src={dark_khaki_texture_1} />
			</button>
		</Container>

		// Fabric_Burlap_003_SD
	);
};

export default Materials_ViewAll;
