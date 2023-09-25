import { useParams } from 'react-router-dom';
import { Button } from "@chakra-ui/react";
import { OrderedDesign } from "../components/OrderedDesign";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { selectComponentHide } from "../store/slices/componentHideSlice";
import { useState } from "react";



function OrderDetails() {
    const hide = useSelector(selectComponentHide);

    const [control, setControl] = useState({
        x: 0,
        y: hide.BothInitialPosition,
        z: 0,
    });
    const [camCont, setCamCont] = useState({
        scale: 3,
    });

    // Get the orderId parameter from the URL
    const { orderId } = useParams();

    // Fetch order details based on the orderId (you need to implement this)
    // For simplicity, let's assume you have an `orderDetails` object with details
    // of the order.
    //const orderDetails = getOrderDetails(orderId);

    return (

        <div class="flex py-4 px-2 max-h-[calc(100vh-4rem)]">

            <div class="flex max-h-[calc(100vh-4rem)] z-10 bg-transparent absolute justify-start item-start space-y-2 flex-col">
                <h1 class="text-3xl  lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">OrderId: {orderId}</h1>
                <p class="text-base font-medium leading-6 text-gray-800">21st Mart 2021 at 10:34 PM</p>
            </div>
            <div class="max-h-[calc(100vh-4rem)] mt-20 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-8 md:space-y-6 xl:space-y-0">
                <div class=" flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8 overflow-scroll">
                    <div class="flex flex-col justify-start items-start  bg-gray-300 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <p class="text-lg md:text-xl  font-semibold leading-6 xl:leading-5 text-gray-800">Design</p>
                        <div class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                            <div class="pb-4 md:pb-8 w-full md:w-40">
                                <img class="w-full hidden md:block" src="https://i.ibb.co/84qQR4p/Rectangle-10.png" alt="dress" />
                                <img class="w-full md:hidden" src="https://i.ibb.co/L039qbN/Rectangle-10.png" alt="dress" />
                            </div>
                            <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                <div class="w-full flex flex-col justify-start items-start space-y-8">
                                    <h3 class="text-xl  xl:text-2xl font-semibold leading-6 text-gray-800">Premium Quaility Dress</h3>
                                    <div class="flex justify-start items-start flex-col space-y-2">
                                        <p class="text-sm  leading-none text-gray-800"><span class=" text-gray-300">Style: </span> Italic Minimal Design</p>
                                        <p class="text-sm  leading-none text-gray-800"><span class=" text-gray-300">Size: </span> Small</p>
                                        <p class="text-sm  leading-none text-gray-800"><span class=" text-gray-300">Color: </span> Light Blue</p>
                                    </div>
                                </div>
                                <div class="flex justify-between space-x-8 items-start w-full">
                                    <p class="text-base  xl:text-lg leading-6">$36.00 <span class="text-red-300 line-through"> $45.00</span></p>
                                    <p class="text-base  xl:text-lg leading-6 text-gray-800">01</p>
                                    <p class="text-base  xl:text-lg font-semibold leading-6 text-gray-800">$36.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
                            <div class="w-full md:w-40">
                                <img class="w-full hidden md:block" src="https://i.ibb.co/s6snNx0/Rectangle-17.png" alt="dress" />
                                <img class="w-full md:hidden" src="https://i.ibb.co/BwYWJbJ/Rectangle-10.png" alt="dress" />
                            </div>
                            <div class="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
                                <div class="w-full flex flex-col justify-start items-start space-y-8">
                                    <h3 class="text-xl  xl:text-2xl font-semibold leading-6 text-gray-800">High Quaility Italic Dress</h3>
                                    <div class="flex justify-start items-start flex-col space-y-2">
                                        <p class="text-sm  leading-none text-gray-800"><span class=" text-gray-300">Style: </span> Italic Minimal Design</p>
                                        <p class="text-sm  leading-none text-gray-800"><span class=" text-gray-300">Size: </span> Small</p>
                                        <p class="text-sm  leading-none text-gray-800"><span class=" text-gray-300">Color: </span> Light Blue</p>
                                    </div>
                                </div>
                                <div class="flex justify-between space-x-8 items-start w-full">
                                    <p class="text-base  xl:text-lg leading-6">$20.00 <span class="text-red-300 line-through"> $30.00</span></p>
                                    <p class="text-base  xl:text-lg leading-6 text-gray-800">01</p>
                                    <p class="text-base  xl:text-lg font-semibold leading-6 text-gray-800">$20.00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col justify-start items-start  bg-gray-300 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <p class="text-lg md:text-xl  font-semibold leading-6 xl:leading-5 text-gray-800">Measurement</p>
                        <div class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                            <div class="pb-4 md:pb-8 w-full md:w-40">
                                <img class="w-full hidden md:block" src="https://i.ibb.co/84qQR4p/Rectangle-10.png" alt="dress" />
                                <img class="w-full md:hidden" src="https://i.ibb.co/L039qbN/Rectangle-10.png" alt="dress" />
                            </div>
                            <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                <div class="w-full flex flex-col justify-start items-start space-y-8">
                                    <h3 class="text-xl  xl:text-2xl font-semibold leading-6 text-gray-800">Premium Quaility Dress</h3>
                                    <div class="flex justify-start items-start flex-col space-y-2">
                                        <p class="text-sm  leading-none text-gray-800"><span class=" text-gray-300">Style: </span> Italic Minimal Design</p>
                                        <p class="text-sm  leading-none text-gray-800"><span class=" text-gray-300">Size: </span> Small</p>
                                        <p class="text-sm  leading-none text-gray-800"><span class=" text-gray-300">Color: </span> Light Blue</p>
                                    </div>
                                </div>
                                <div class="flex justify-between space-x-8 items-start w-full">
                                    <p class="text-base  xl:text-lg leading-6">$36.00 <span class="text-red-300 line-through"> $45.00</span></p>
                                    <p class="text-base  xl:text-lg leading-6 text-gray-800">01</p>
                                    <p class="text-base  xl:text-lg font-semibold leading-6 text-gray-800">$36.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
                            <div class="w-full md:w-40">
                                <img class="w-full hidden md:block" src="https://i.ibb.co/s6snNx0/Rectangle-17.png" alt="dress" />
                                <img class="w-full md:hidden" src="https://i.ibb.co/BwYWJbJ/Rectangle-10.png" alt="dress" />
                            </div>
                            <div class="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
                                <div class="w-full flex flex-col justify-start items-start space-y-8">
                                    <h3 class="text-xl  xl:text-2xl font-semibold leading-6 text-gray-800">High Quaility Italic Dress</h3>
                                    <div class="flex justify-start items-start flex-col space-y-2">
                                        <p class="text-sm  leading-none text-gray-800"><span class=" text-gray-300">Style: </span> Italic Minimal Design</p>
                                        <p class="text-sm  leading-none text-gray-800"><span class=" text-gray-300">Size: </span> Small</p>
                                        <p class="text-sm  leading-none text-gray-800"><span class=" text-gray-300">Color: </span> Light Blue</p>
                                    </div>
                                </div>
                                <div class="flex justify-between space-x-8 items-start w-full">
                                    <p class="text-base  xl:text-lg leading-6">$20.00 <span class="text-red-300 line-through"> $30.00</span></p>
                                    <p class="text-base  xl:text-lg leading-6 text-gray-800">01</p>
                                    <p class="text-base  xl:text-lg font-semibold leading-6 text-gray-800">$20.00</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="flex justify-center flex-col md:flex-row  items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-300 space-y-6">
                            <h3 class="text-xl  font-semibold leading-5 text-gray-800">Summary</h3>
                            <div class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div class="flex justify-between w-full">
                                    <p class="text-base  leading-4 text-gray-800">Subtotal</p>
                                    <p class="text-base  leading-4 text-gray-800">$56.00</p>
                                </div>
                                <div class="flex justify-between items-center w-full">
                                    <p class="text-base  leading-4 text-gray-800">Discount <span class="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">STUDENT</span></p>
                                    <p class="text-base  leading-4 text-gray-800">-$28.00 (50%)</p>
                                </div>
                                <div class="flex justify-between items-center w-full">
                                    <p class="text-base  leading-4 text-gray-800">Shipping</p>
                                    <p class="text-base  leading-4 text-gray-800">$8.00</p>
                                </div>
                            </div>
                            <div class="flex justify-between items-center w-full">
                                <p class="text-base  font-semibold leading-4 text-gray-800">Total</p>
                                <p class="text-base  font-semibold leading-4 text-gray-800">$36.00</p>
                            </div>
                        </div>
                        <div class="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-300 space-y-6">
                            <h3 class="text-xl  font-semibold leading-5 text-gray-800">Shipping</h3>
                            <div class="flex justify-between items-start w-full">
                                <div class="flex justify-center items-center space-x-4">
                                    <div class="w-8 h-8">
                                        <img class="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                    </div>
                                    <div class="flex flex-col justify-start items-center">
                                        <p class="text-lg leading-6  font-semibold text-gray-800">DPD Delivery<br /><span class="font-normal">Delivery with 24 Hours</span></p>
                                    </div>
                                </div>
                                <p class="text-lg font-semibold leading-6  text-gray-800">$8.00</p>
                            </div>
                            <div class="w-full flex justify-center items-center">
                                <button class="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">View Carrier Details</button>
                            </div>
                        </div>
                    </div>
                </div>
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
