import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiChartBar, HiColorSwatch, HiShoppingCart } from "react-icons/hi";
import { HiHandThumbUp, HiUserCircle } from "react-icons/hi2";
import button1 from '../../assets/images/buttons/button1.jpg';
import button2 from "../../assets/images/buttons/button2.jpg"
import button3 from "../../assets/images/buttons/button3.jpg"
import button4 from "../../assets/images/buttons/button4.jpg"
import { Button } from "@chakra-ui/button";

const Dashboard = () => {

  const cardImages = [button1, button2, button3, button4]; // Array of background images

  return (
    <div className="flex flex-row">
      <div className='flex-auto'>
        <div className='flex flex-col'>

          <div className=" min-h-screen bg-white">
            <div className="mt-5 grid gap-10 lg:grid-cols-3 sm-grid-cols-2 p-5">
              {/* <Link to={`/tailor/orders`}>

                <div className="flex items-start justify-start relative">
                  <img
                    alt=""
                    className="max-w-full w-screen min-h-64 h-80"
                    src={button1}
                  />
                </div>

                <div className=" max-w-[18rem] rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-500 transform transition-transform hover:scale-105 cursor-pointer">
                  <div className="p-6 flex gap-5">
                    <HiShoppingCart className="text-white text-4xl" />
                    <h5 className="text-2xl font-medium leading-tight text-white ">
                      Assigned Orders
                    </h5>
                  </div>
                </div>
              </Link> */}

              <div className="flex px-5 md:pr-5 lg:pl-0 md:pl-5 ">
                <div className="flex items-start justify-start relative">
                  <img
                    alt=""
                    className="max-w-full w-screen min-h-64 h-80"
                    src={button1}
                  />
                </div>
                <div className="flex flex-col flex-wrap items-start absolute pt-10 pl-3 sm:pl-10">
                  <div className="pb-3 flex flex-col flex-wrap">
                    {/* <h1 className="text-white font-bold text-2xl sm:text-4xl">
                      Reviews
                    </h1> */}
                    <h1 className="text-white font-bold text-2xl sm:text-4xl">
                      Reviews
                    </h1>
                  </div>
                </div>
              </div>

              <Link to={`/tailor/materials`}>
                <div className=" max-w-[18rem] rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-500 transform transition-transform hover:scale-105 cursor-pointer">
                  <div className="p-6 flex gap-5">
                    <HiColorSwatch className="text-white text-4xl" />
                    <h5 className="text-2xl font-medium leading-tight text-white ">
                      Materials
                    </h5>
                  </div>
                </div>
              </Link>
              {/* <Link to={`/tailor/reviews`}>
                <div className=" max-w-[18rem] rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-500 transform transition-transform hover:scale-105 cursor-pointer">
                  <div className="p-6 flex gap-5">
                    <HiHandThumbUp className="text-white text-4xl" />
                    <h5 className="text-2xl font-medium leading-tight text-white ">
                      Reviews
                    </h5>
                  </div>
                </div>
              </Link> */}

              <div className="flex px-5 md:pr-5 lg:pl-0 md:pl-5 ">
                <div className="flex items-start justify-start relative">
                  <img
                    alt=""
                    className="max-w-full w-screen min-h-64 h-80"
                    src={button1}
                  />
                </div>
                <div className="flex flex-col flex-wrap items-start absolute pt-10 pl-3 sm:pl-10">
                  <div className="pb-3 flex flex-col flex-wrap">
                    {/* <h1 className="text-white font-bold text-2xl sm:text-4xl">
                      Reviews
                    </h1> */}
                    <h1 className="text-white font-bold text-2xl sm:text-4xl">
                      Reviews
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

  )
}

export default Dashboard