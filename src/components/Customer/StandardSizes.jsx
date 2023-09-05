import { Select } from "@chakra-ui/react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import FullShoulderWidth from "../../assets/images/measurements/men_size_1 (1).jpg";
import Sleeves from "../../assets/images/measurements/men_size_2.jpg";
import FullChest from "../../assets/images/measurements/men_size_3.jpg";
import Waist from "../../assets/images/measurements/men_size_4.jpg";
import Hips from "../../assets/images/measurements/men_size_5.jpg";
import FrontShoulderWidth from "../../assets/images/measurements/men_size_6.jpg";
import BackShoulderWidth from "../../assets/images/measurements/men_size_7.jpg";
import FrontJacketLength from "../../assets/images/measurements/men_size_8.jpg";
import Neck from "../../assets/images/measurements/men_size_9.jpg";
import TROUSER_WAIST from "../../assets/images/measurements/men_size_10.jpg";
import CROTCH from "../../assets/images/measurements/men_size_11.jpg";
import THIGH from "../../assets/images/measurements/men_size_12.jpg";
import TROUSER_LENGTH from "../../assets/images/measurements/men_size_13.jpg";
import CUFF from "../../assets/images/measurements/men_size_14.jpg";
import MeasurementBlock from "../../components/Customer/MeasurementBlock";
import { STANDARD_MEASUREMENTS } from "../../constants/index";


const StandardSizes = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [selectedSize, setSelectedSize] = useState("S");
    const [selectedUnit, setSelectedUnit] = useState("inch");
    const [selectedCategory, setSelectedCategory] = useState("jacket");
    return (
        <div className={`flex flex-col flex-wrap`}>
            <div className={`flex flex-col fixed bg-white z-20 top-10 m-5`}>
                <h1 className="pt-5 font-bold text-3xl">Use Standard Sizes</h1>
                <div className="flex gap-x-24 p-2">
                    <Select
                        width="250px"
                        value={selectedUnit}
                        onChange={(event) => setSelectedUnit(event.target.value)}
                    >
                        <option value="inch">Inch</option>
                        <option value="cm">Centimeters</option>
                    </Select>

                    <Select
                        width="250px"
                        value={selectedCategory}
                        onChange={(event) => setSelectedCategory(event.target.value)}
                    >
                        <option value="jacket">Jacket</option>
                        <option value="pant">Pant</option>
                        <option value="all">All</option>
                    </Select>

                    <Select
                        width="250px"
                        value={selectedSize}
                        onChange={(event) => setSelectedSize(event.target.value)}
                    >
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </Select>
                    <button
                        onClick={() => navigate(location.pathname.includes("/customize-suit/jacket") ? "/customer/customize-suit/jacket/measurements" : location.pathname.includes("/customize-suit/pant") ? "/customer/customize-suit/pant/measurements" : location.pathname.includes("/customize-suit/all") ? "/customer/customize-suit/all/measurements" : "/customer/customize-measurements")}
                        type="button"
                        className="inline-block rounded-full bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]">
                        Back
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-28">
                {(selectedCategory === "jacket" || selectedCategory === "all") && (
                    <>
                        <MeasurementBlock
                            image={FullShoulderWidth}
                            description='Measure from the end of the right shoulder to the end of the left shoulder. We define the "End of the Shoulder" as where the horizontal plane of the shoulder intersects thevertical plane of the arm'
                            header="Full Shoulder Width"
                            value={
                                STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
                                    ?.FullShoulderWidth
                            }
                            selectedUnit={selectedUnit}
                        />
                        <MeasurementBlock
                            image={Sleeves}
                            description='The "Pinch" of the hand is found where the base of the thumb and the base of the index finger intersect'
                            header="Sleeves"
                            value={
                                STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
                                    ?.Sleeves
                            }
                            selectedUnit={selectedUnit}
                        />
                        <MeasurementBlock
                            image={FullChest}
                            description='Measure around the chest and body at its fullest part (typically right under the armpits and shoulder blades, right across the nipples). Hold the tape against the body tight enough so that it does not slip down, but not so tight that it restricts breathing. It should be "snug". Make sure the tape is horizontal and theperson`s arms are by their side; then take a normal breath and measure. Do not puff out your chest.'
                            header="Full Chest"
                            value={
                                STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
                                    ?.FullChest
                            }
                            selectedUnit={selectedUnit}
                        />
                        <MeasurementBlock
                            image={Waist}
                            description="Measure around the fullest part of the waist/stomach or right below your bottom ribs, whichever is greater."
                            header="Waist"
                            value={
                                STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
                                    ?.Waist
                            }
                            selectedUnit={selectedUnit}
                        />
                        <MeasurementBlock
                            image={Hips}
                            description="Measure around the fullest part of your hips and buttocks."
                            header="Hips/Seat"
                            value={
                                STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
                                    ?.Hips
                            }
                            selectedUnit={selectedUnit}
                        />
                        <MeasurementBlock
                            image={FrontShoulderWidth}
                            description="With the person`s arms by their side, measure across the front of the chest. Start at the front of the right armpit, continue measuring across the nipples, and then stop at the front of the left armpit. Do not measure under the arms."
                            header="Front Shoulder Width"
                            value={
                                STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
                                    ?.FrontShoulderWidth
                            }
                            selectedUnit={selectedUnit}
                        />
                        <MeasurementBlock
                            image={BackShoulderWidth}
                            description="With the person`s arms by their side, measure across the back. Start at the back of the right armpit, continue measuring across the shoulder blades, and then stop at the back of the left armpit. Do not measure under the arms."
                            header="Back Shoulder Width"
                            value={
                                STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
                                    ?.BackShoulderWidth
                            }
                            selectedUnit={selectedUnit}
                        />
                        <MeasurementBlock
                            image={FrontJacketLength}
                            description="Measure straight down the front from the base of the neck (right or left side) to the point level with your thumb knuckle.or till the length you would like your jacket"
                            header="Front Jacket Length"
                            value={
                                STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
                                    ?.FrontJacketLength
                            }
                            selectedUnit={selectedUnit}
                        />
                        <MeasurementBlock
                            image={Neck}
                            description="The tape should be comfortably touching the skin, with enough room so that you do not feel restricted."
                            header="Neck"
                            value={
                                STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.jacket
                                    ?.Neck
                            }
                            selectedUnit={selectedUnit}
                        />
                    </>
                )}
                {(selectedCategory === "pant" || selectedCategory === "all") && (
                    <>
                        <MeasurementBlock
                            image={TROUSER_WAIST}
                            description="Measure around your waist at the level where you would normally wear your pant`s belt. With the tape measure snug around your waist, relax, and take the measurement. Don`t be alarmed if this measurement seems larger than expected; off-the-rack pants are normally labeled as being smaller than what they really are."
                            header="Trouser Waist"
                            value={
                                STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.trouser
                                    ?.TrouserWaist
                            }
                            selectedUnit={selectedUnit}
                        />
                        <MeasurementBlock
                            image={CROTCH}
                            description="Measure from the front top of the pant's waistband to the back top of the pant's waistband."
                            header="Crotch"
                            value={
                                STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.trouser
                                    ?.Crotch
                            }
                            selectedUnit={selectedUnit}
                        />
                        <MeasurementBlock
                            image={THIGH}
                            description="Measure around your thigh at its widest point. You need measure only one side."
                            header="Thigh"
                            value={
                                STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.trouser
                                    ?.Thigh
                            }
                            selectedUnit={selectedUnit}
                        />
                        <MeasurementBlock
                            image={TROUSER_LENGTH}
                            description="Measure from the top of your pant’s waistband to the floor along the outside of your leg. Make sure the tape is tight, that you are standing straight, and then measure."
                            header="Trouser Length"
                            value={
                                STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.trouser
                                    ?.TrouserLength
                            }
                            selectedUnit={selectedUnit}
                        />
                        <MeasurementBlock
                            image={CUFF}
                            description="Measure width around cuff as shown."
                            header="Cuff"
                            value={
                                STANDARD_MEASUREMENTS[selectedSize]?.[selectedUnit]?.trouser
                                    ?.Cuff
                            }
                            selectedUnit={selectedUnit}
                        />
                    </>
                )}
                <button
                    type="button"
                    className="m-5 block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    Save
                </button>
            </div>

        </div>
    )
}

export default StandardSizes