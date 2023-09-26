import { Button } from "@chakra-ui/react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { PRODUCT_MANAGER, TAILOR, OPERATION_ASSISTANT } from "../constants";
import { OrderedDesign } from "../components/OrderedDesign";
import { selectComponentHide } from "../store/slices/componentHideSlice";
import { selectUser } from "../store/slices/authSlice"


function OrderDetails() {
    const hide = useSelector(selectComponentHide);
    const user = useSelector(selectUser)

    const [control, setControl] = useState({
        x: 0,
        y: hide.BothInitialPosition,
        z: 0,
    });
    const [camCont, setCamCont] = useState({
        scale: 3,
    });

    const { orderId } = useParams();
    //const orderDetails = getOrderDetails(orderId);

    return (

        <div className="flex py-4 px-2 max-h-[calc(100vh-4rem)]">

            <div className="flex max-h-[calc(100vh-4rem)] z-10 bg-transparent absolute justify-start item-start space-y-2 flex-col">
                <h1 className="text-3xl  lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">OrderId: {orderId}</h1>
                <p className="text-base font-medium leading-6 text-gray-800">21st Mart 2021 at 10:34 PM</p>
            </div>
            <div className="max-h-[calc(100vh-4rem)] mt-20 flex flex-col xl:flex-row items-stretch w-full xl:space-x-8 space-y-8 md:space-y-6 xl:space-y-0">
                {user.role === (PRODUCT_MANAGER || TAILOR) && (
                    <div className=" flex flex-col w-full space-y-4 md:space-y-6 xl:space-y-8 overflow-scroll">
                        <div className="flex flex-col bg-gray-200 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                            <p className="text-lg md:text-xl  font-semibold leading-6 xl:leading-5 text-gray-800">Design Style</p>

                            <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                                <div className="w-full flex flex-col justify-start items-start space-y-8">
                                    <div className="flex justify-start items-start flex-col space-y-2">
                                        <p className="text-sm  leading-none text-gray-800">Fabric: </p>
                                        <p className="text-sm  font-semibold leading-none text-gray-800">Jacket</p>
                                        <p className="text-sm  ml-2 leading-none text-gray-800">Jacket Style:</p>
                                        <p className="text-sm  ml-2 leading-none text-gray-800">Button:</p>
                                        <p className="text-sm  ml-2 leading-none text-gray-800">Lapel: </p>
                                        <p className="text-sm  ml-2 leading-none text-gray-800">Chest Pocket: </p>
                                        <p className="text-sm  ml-2 leading-none text-gray-800">Sleeve Button: </p>

                                        <p className="text-sm  font-semibold leading-none text-gray-800">Pant</p>
                                        <p className="text-sm  ml-2 leading-none text-gray-800">Style:</p>
                                        <p className="text-sm  ml-2 leading-none text-gray-800">Back Pocket: </p>

                                        <p className="text-sm font-semibold leading-none text-gray-800">Color Contrast</p>
                                        <p className="text-sm ml-2 leading-none text-gray-800">Pocket: </p>
                                        <p className="text-sm ml-2 leading-none text-gray-800">Button: </p>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="flex flex-col justify-start items-start  bg-gray-200 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                            <p className="text-lg md:text-xl  font-semibold leading-6 xl:leading-5 text-gray-800">Measurements</p>

                            <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                                <div className="w-full flex flex-col justify-start items-start space-y-8">
                                    <div className="flex justify-start items-start flex-col space-y-2">
                                        <p className="text-sm  leading-none text-gray-800">Fabric: </p>
                                        <p className="text-sm  leading-none text-gray-800">Style:</p>
                                        <p className="text-sm  leading-none text-gray-800">Lapel: </p>
                                        <p className="text-sm  leading-none text-gray-800">Light Blue</p>
                                        <p className="text-sm  leading-none text-gray-800">Sleeve Button: </p>
                                        <p className="text-sm  leading-none text-gray-800">Chest Pocket: </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {user.role === PRODUCT_MANAGER && (
                        <div className="flex justify-center flex-col md:flex-row  items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-300 space-y-6">
                                <h3 className="text-xl  font-semibold leading-5 text-gray-800">Summary</h3>
                                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                    <div className="flex justify-between w-full">
                                        <p className="text-base  leading-4 text-gray-800">Subtotal</p>
                                        <p className="text-base  leading-4 text-gray-800">$56.00</p>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-base  leading-4 text-gray-800">Discount <span className="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">STUDENT</span></p>
                                        <p className="text-base  leading-4 text-gray-800">-$28.00 (50%)</p>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-base  leading-4 text-gray-800">Shipping</p>
                                        <p className="text-base  leading-4 text-gray-800">$8.00</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base  font-semibold leading-4 text-gray-800">Total</p>
                                    <p className="text-base  font-semibold leading-4 text-gray-800">$36.00</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center p-2 md:p-6 xl:p-4 w-full bg-gray-300 space-y-6">
                                <h3 className="text-xl  font-semibold leading-5 text-gray-800">Dates</h3>
                                <div className="flex justify-between items-start w-full">
                                    <div className="flex flex-col justify-center items-center space-x-4">
                                        <div className="flex justify-start items-center">
                                            <p className="text-lg leading-6  font-semibold text-gray-800">Fit-On: <span className="font-normal">2023-10-12</span></p>
                                        </div>
                                        <div className="flex  justify-start items-center">
                                            <p className="text-lg leading-6  font-semibold text-gray-800">Delivery: <span className="font-normal">2023-11-12</span></p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        )}
                    </div>
                )}
            </div>

            <div className=" overflow-hidden w-1/2 max-h-[calc(100vh-4rem)] flex items-center relative">

                <Canvas camera={{ position: [0, 0, 10], fov: 30 }}>
                    <Suspense fallback={false}>
                        <OrderedDesign camCont={camCont} control={control} />
                    </Suspense>
                    <OrbitControls
                        enableZoom={true}
                        makeDefault
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                    />
                    <Environment preset="city" />                            </Canvas>

            </div>

        </div>

    );
}

export default OrderDetails;
