import { Button, useToast } from "@chakra-ui/react";
import { HiCreditCard } from "react-icons/hi";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const PaymentPage = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('type1');
    const toast = useToast();

    const handlePlaceOrder = () => {
        toast({
            title: "Order placed successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "bottom",
        });
        setTimeout(() => {
            navigate("/customer");
        }, 2000);
    }
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.id);
    };
    return (
        <div className="flex flex-col justify-center w-full">
            <div className=" bg-gray-200 flex flex-col items-center">
                <div className="m-14 px-12 py-4 rounded-lg bg-white shadow-lg text-gray-700">
                    <div className="w-full pt-1 pb-2">
                        <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                            <i className="mdi mdi-credit-card-outline text-3xl"></i>
                            <HiCreditCard size={30} />
                        </div>
                        <div className="mb-2">
                            <h1 className="text-center font-bold text-xl uppercase">Secure payment info</h1>
                        </div>
                    </div>
                    <div className="mb-2 flex -mx-2">
                        <div className="px-2">
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked={selectedOption === 'type1'} onChange={handleOptionChange} />
                                <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3" />
                            </label>
                        </div>
                        <div className="px-2">
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type2" checked={selectedOption === 'type2'} onChange={handleOptionChange} />
                                <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" className="h-8 ml-3" />
                            </label>
                        </div>
                    </div>

                    <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
                    <div>
                        <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" />
                    </div>


                    <label className="font-bold text-sm mb-2 ml-1">Card number</label>
                    <div>
                        <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text" />
                    </div>

                    <div className="mb-2 -mx-2 flex items-end">
                        <div className="px-2 w-3/4">
                            <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
                            <div>
                                <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                    <option value="01">01 - January</option>
                                    <option value="02">02 - February</option>
                                    <option value="03">03 - March</option>
                                    <option value="04">04 - April</option>
                                    <option value="05">05 - May</option>
                                    <option value="06">06 - June</option>
                                    <option value="07">07 - July</option>
                                    <option value="08">08 - August</option>
                                    <option value="09">09 - September</option>
                                    <option value="10">10 - October</option>
                                    <option value="11">11 - November</option>
                                    <option value="12">12 - December</option>
                                </select>
                            </div>
                        </div>
                        <div className="px-2 w-1/2">
                            <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2020">2030</option>
                                <option value="2021">2031</option>
                                <option value="2022">2032</option>
                            </select>
                        </div>
                    </div>

                    <label className="font-bold text-sm mb-2 ml-1">Security code</label>
                    <div>
                        <input className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text" />
                    </div>

                    <div>
                        <Button
                            className="block w-full p-2 mt-2"
                            rounded={"md"}
                            color={"white"}
                            bgColor={"black"}
                            size="sm"
                            _hover={{
                                bgColor: "gray",
                                color: "blue-50",
                            }}
                        >
                            
                            PAY NOW
                        </Button>
                        <Button

                            className="mt-2 block w-full p-2"
                            rounded={"md"}
                            color={"white"}
                            bgColor={"black"}
                            size="sm"
                            _hover={{
                                bgColor: "gray",
                                color: "blue-50",
                            }}
                            //</div></div> onClick={() => navigate("/customer")}
                            onClick={handlePlaceOrder}
                        >
                            DONE
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PaymentPage;
