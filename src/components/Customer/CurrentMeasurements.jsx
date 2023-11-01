
import { Select, useDisclosure, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import React from "react";
// import { FaShoppingCart } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
// import { LuSave } from "react-icons/lu";
import { MdNavigateNext } from "react-icons/md";
// import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { getCoatMeasurements, getTrouserMeasurements } from "../../api/customerAPI";
import {
    // addCustomSuitToCart as addCustomSuitToCartAPI,
    // addNewCostumeToItemModel,
    setCoatMeasurements as setCoatMeasurementsAPI,
    setTrouserMeasurements as setTrouserMeasurementsAPI,
} from "../../api/customerAPI";
// import { calculatePrice } from "../../api/purchaseOrdersAPI";
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
import { inchesToCm } from "../../utils/measurements";
// import { CUSTOM } from "../../constants";
// import ItemType from "../../constants/ItemType";
import { selectUser } from "../../store/slices/authSlice";
import { selectJacket } from "../../store/slices/jacketCustomizationSlice";
import {
    getCourtMeasurementObject,
    getTrouserMeasurementObject,
} from "../../utils/measurements";

const CustomSizes = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const toast = useToast();
    const user = useSelector(selectUser);

    const { onOpen, onClose } = useDisclosure();

    const [selectedUnit, setSelectedUnit] = useState("inch");
    const [selectedCategory, setSelectedCategory] = useState("jacket");
    const [coatMeasurements, setCoatMeasurements] = useState({
        fullShoulderWidth: 0,
        sleeves: 0,
        fullChest: 0,
        waist: 0,
        hips: 0,
        frontShoulderWidth: 0,
        backShoulderWidth: 0,
        frontJacketLength: 0,
        neck: 0,
    });
    const [pantMeasurements, setPantMeasurements] = useState({
        waist: 0,
        crotch: 0,
        thigh: 0,
        length: 0,
        cuff: 0,
    });


    useEffect(() => {
        getCoatMeasurements(user.id)
            .then((res) => {
                console.log(res.data);
                // convert measurements to number
                const measurements = res.data;
                for (const key in measurements) {
                    measurements[key] = Number(measurements[key]);
                }
                setCoatMeasurements(measurements);
            })
            .catch((err) => {
                console.log(err);
                toast({
                    title: "Error",
                    description: "Something went wrong",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            });


        getTrouserMeasurements(user.id)
            .then((res) => {
                console.log(res.data);

                // convert measurements to number
                const measurements = res.data;
                for (const key in measurements) {
                    measurements[key] = Number(measurements[key]);
                }
                setPantMeasurements(measurements);
            })
            .catch((err) => {
                console.log(err);
                toast({
                    title: "Error",
                    description: "Something went wrong",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            });

    }, [toast, user]);

    // handle input changes for coat
    const handleCoatMeasurementsChange = (event) => {
        setCoatMeasurements({
            ...coatMeasurements,
            [event.target.name]: event.target.value,
        });
    };

    // handle input changes for pant
    const handlePantMeasurementsChange = (event) => {
        setPantMeasurements({
            ...pantMeasurements,
            [event.target.name]: event.target.value,
        });
    };

    // handle save button
    const handleSave = () => {
        // check if all fields filled
        if (selectedCategory === "jacket" || selectedCategory === "all") {
            for (const key in coatMeasurements) {
                if (coatMeasurements[key] === 0) {
                    toast({
                        title: "Please fill all the fields",
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                    });
                    return;
                }
            }
        }

        if (selectedCategory === "pant" || selectedCategory === "all") {
            for (const key in pantMeasurements) {
                if (pantMeasurements[key] === 0) {
                    toast({
                        title: "Please fill all the fields",
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                    });
                    return;
                }
            }
        }

        // save in the backend
        if (selectedCategory === "jacket" || selectedCategory === "all") {
            // save coat measurements
            const coatMeasurementsInInch = getCourtMeasurementObject(
                coatMeasurements,
                selectedUnit
            );

            setCoatMeasurementsAPI(coatMeasurementsInInch)
                .then((res) => {
                    console.log(res);
                    if (
                        (res.status === 200 || res.status === 201) &&
                        selectedCategory === "jacket"
                    ) {
                        toast({
                            title: "Measurements saved successfully",
                            status: "success",
                            duration: 3000,
                            isClosable: true,
                        });
                    } else {
                        toast({
                            title: "Something went wrong",
                            status: "error",
                            duration: 3000,
                            isClosable: true,
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                    toast({
                        title: "Something went wrong",
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                    });
                });
        }

        if (selectedCategory === "pant" || selectedCategory === "all") {
            // save pant measurements
            const pantMeasurementsInInch = getTrouserMeasurementObject(
                pantMeasurements,
                selectedUnit
            );
            setTrouserMeasurementsAPI(pantMeasurementsInInch)
                .then((res) => {
                    if (res.status === 200 || res.status === 201) {
                        toast({
                            title: "Measurements saved successfully",
                            status: "success",
                            duration: 3000,
                            isClosable: true,
                        });
                    } else {
                        toast({
                            title: "Something went wrong",
                            status: "error",
                            duration: 3000,
                            isClosable: true,
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                    toast({
                        title: "Something went wrong",
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                    });
                });
        }
    };

    // back button
    const handleBack = () =>
        navigate("/customer");

    return (
        <div className={`flex flex-col flex-wrap`}>
            <div className="flex flex-col m-5 z-20 top-10 p-2 fixed w-screen bg-white">
                <div className="flex items-center gap-4 pt-2">
                    <button
                        onClick={handleBack}
                        className="flex items-center gap-2 text-primary"
                    >
                        <IoArrowBackCircle className="text-4xl" />
                    </button>
                    <h1 className="font-bold text-3xl">Current Sizes</h1>
                </div>

                <div className="flex gap-x-4 pt-3">
                    {/* <Select
                        width="300px"
                        value={selectedUnit}
                        onChange={(event) => setSelectedUnit(event.target.value)}
                    >
                        <option value="inch">Inch</option>
                        <option value="cm">Centimeters</option>
                    </Select> */}

                    {!location.pathname.includes("customize-suit") && (
                        <Select
                            width="300px"
                            value={selectedCategory}
                            onChange={(event) => setSelectedCategory(event.target.value)}
                        >
                            <option value="jacket">Jacket</option>
                            <option value="pant">Pant</option>
                            <option value="all">All</option>
                        </Select>
                    )}
                </div>
            </div>
            <div className="mt-28 flex flex-wrap justify-center gap-4">
                {(selectedCategory === "jacket" || selectedCategory === "all") && (
                    <>
                        <MeasurementBlock
                            image={FullShoulderWidth}
                            value={coatMeasurements.fullShoulderWidth}
                            description='Measure from the end of the right shoulder to the end of the left shoulder. We define the "End of the Shoulder" as where the horizontal plane of the shoulder intersects thevertical plane of the arm'
                            header="Full Shoulder Width"
                            selectedUnit={selectedUnit}
                            name={"fullShoulderWidth"}
                            onChange={handleCoatMeasurementsChange}
                            min={selectedUnit === "inch" ? 6 : 14}
                            max={selectedUnit === "inch" ? 7 : 17}
                        />
                        <MeasurementBlock
                            image={Sleeves}
                            value={coatMeasurements.sleeves}
                            description='The "Pinch" of the hand is found where the base of the thumb and the base of the index finger intersect'
                            header="Sleeves"
                            selectedUnit={selectedUnit}
                            name={"sleeves"}
                            onChange={handleCoatMeasurementsChange}
                            min={selectedUnit === "inch" ? 32 : 81}
                            max={selectedUnit === "inch" ? 36 : 91}
                        />
                        <MeasurementBlock
                            image={FullChest}
                            value={coatMeasurements.fullChest}
                            description='Measure around the chest and body at its fullest part (typically right under the armpits and shoulder blades, right across the nipples). Hold the tape against the body tight enough so that it does not slip down, but not so tight that it restricts breathing. It should be "snug". Make sure the tape is horizontal and theperson`s arms are by their side; then take a normal breath and measure. Do not puff out your chest.'
                            header="Full Chest"
                            selectedUnit={selectedUnit}
                            name={"fullChest"}
                            onChange={handleCoatMeasurementsChange}
                            min={selectedUnit === "inch" ? 34 : 86}
                            max={selectedUnit === "inch" ? 42 : 106}
                        />
                        <MeasurementBlock
                            image={Waist}
                            value={coatMeasurements.waist}
                            description="Measure around the fullest part of the waist/stomach or right below your bottom ribs, whichever is greater."
                            header="Waist"
                            selectedUnit={selectedUnit}
                            name={"waist"}
                            onChange={handleCoatMeasurementsChange}
                            min={selectedUnit === "inch" ? 28 : 71}
                            max={selectedUnit === "inch" ? 36 : 91}
                        />
                        <MeasurementBlock
                            image={Hips}
                            value={coatMeasurements.hips}
                            description="Measure around the fullest part of your hips and buttocks."
                            header="Hips/Seat"
                            selectedUnit={selectedUnit}
                            name={"hips"}
                            onChange={handleCoatMeasurementsChange}
                            min={selectedUnit === "inch" ? 35 : 88}
                            max={selectedUnit === "inch" ? 43 : 109}
                        />
                        <MeasurementBlock
                            image={FrontShoulderWidth}
                            value={coatMeasurements.frontShoulderWidth}
                            description="With the person`s arms by their side, measure across the front of the chest. Start at the front of the right armpit, continue measuring across the nipples, and then stop at the front of the left armpit. Do not measure under the arms."
                            header="Front Shoulder Width"
                            selectedUnit={selectedUnit}
                            name={"frontShoulderWidth"}
                            onChange={handleCoatMeasurementsChange}
                            min={selectedUnit === "inch" ? 16 : 40}
                            max={selectedUnit === "inch" ? 18 : 45}
                        />
                        <MeasurementBlock
                            image={BackShoulderWidth}
                            value={coatMeasurements.backShoulderWidth}
                            description="With the person`s arms by their side, measure across the back. Start at the back of the right armpit, continue measuring across the shoulder blades, and then stop at the back of the left armpit. Do not measure under the arms."
                            header="Back Shoulder Width"
                            selectedUnit={selectedUnit}
                            name={"backShoulderWidth"}
                            onChange={handleCoatMeasurementsChange}
                            min={selectedUnit === "inch" ? 15 : 38}
                            max={selectedUnit === "inch" ? 17 : 43}
                        />
                        <MeasurementBlock
                            image={FrontJacketLength}
                            value={coatMeasurements.frontJacketLength}
                            description="Measure straight down the front from the base of the neck (right or left side) to the point level with your thumb knuckle.or till the length you would like your jacket"
                            header="Front Jacket Length"
                            selectedUnit={selectedUnit}
                            name={"frontJacketLength"}
                            onChange={handleCoatMeasurementsChange}
                            min={selectedUnit === "inch" ? 28 : 71}
                            max={selectedUnit === "inch" ? 30 : 76}
                        />
                        <MeasurementBlock
                            image={Neck}
                            value={coatMeasurements.neck}
                            description="The tape should be comfortably touching the skin, with enough room so that you do not feel restricted."
                            header="Neck"
                            selectedUnit={selectedUnit}
                            name={"neck"}
                            onChange={handleCoatMeasurementsChange}
                            min={selectedUnit === "inch" ? 14 : 35}
                            max={selectedUnit === "inch" ? 16 : 40}
                        />
                    </>
                )}
                {(selectedCategory === "pant" || selectedCategory === "all") && (
                    <>
                        <MeasurementBlock
                            image={TROUSER_WAIST}
                            value={pantMeasurements.waist}
                            description="Measure around your waist at the level where you would normally wear your pant`s belt. With the tape measure snug around your waist, relax, and take the measurement. Don`t be alarmed if this measurement seems larger than expected; off-the-rack pants are normally labeled as being smaller than what they really are."
                            header="Trouser Waist"
                            selectedUnit={selectedUnit}
                            name={"waist"}
                            onChange={handlePantMeasurementsChange}
                            min={selectedUnit === "inch" ? 28 : 71}
                            max={selectedUnit === "inch" ? 36 : 91}
                        />
                        <MeasurementBlock
                            image={CROTCH}
                            value={pantMeasurements.crotch}
                            description="Measure from the front top of the pant's waistband to the back top of the pant's waistband."
                            header="Crotch"
                            selectedUnit={selectedUnit}
                            name={"crotch"}
                            onChange={handlePantMeasurementsChange}
                            min={selectedUnit === "inch" ? 20 : 50}
                            max={selectedUnit === "inch" ? 24 : 61}
                        />
                        <MeasurementBlock
                            image={THIGH}
                            value={pantMeasurements.thigh}
                            description="Measure around your thigh at its widest point. You need measure only one side."
                            header="Thigh"
                            selectedUnit={selectedUnit}
                            name={"thigh"}
                            onChange={handlePantMeasurementsChange}
                            min={selectedUnit === "inch" ? 20 : 50}
                            max={selectedUnit === "inch" ? 24 : 61}
                        />
                        <MeasurementBlock
                            image={TROUSER_LENGTH}
                            value={pantMeasurements.length}
                            description="Measure from the top of your pant’s waistband to the floor along the outside of your leg. Make sure the tape is tight, that you are standing straight, and then measure."
                            header="Trouser Length"
                            selectedUnit={selectedUnit}
                            name={"length"}
                            onChange={handlePantMeasurementsChange}
                            min={selectedUnit === "inch" ? 29 : 73}
                            max={selectedUnit === "inch" ? 33 : 84}
                        />
                        <MeasurementBlock
                            image={CUFF}
                            value={pantMeasurements.cuff}
                            description="Measure width around cuff as shown."
                            header="Cuff"
                            selectedUnit={selectedUnit}
                            name={"cuff"}
                            onChange={handlePantMeasurementsChange}
                            min={selectedUnit === "inch" ? 14 : 35}
                            max={selectedUnit === "inch" ? 18 : 45}
                        />
                    </>
                )}
            </div>
            <div className="flex m-5 z-20 top-10 p-2 justify-between">

                <button
                    onClick={handleSave}
                    type="button"
                    className="m-5 flex items-center justify-center w-48 rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                    <span>Save</span>
                    <MdNavigateNext className="ml-2 text-xl" />
                </button>
            </div>
        </div>
    );
};

export default CustomSizes;
