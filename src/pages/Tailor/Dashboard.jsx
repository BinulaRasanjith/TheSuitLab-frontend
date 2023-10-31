import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import button1 from '../../assets/images/buttons/button1.jpg';
import pic2 from "../../assets/images/material bg.jpg"
import button3 from "../../assets/images/asOrders.webp"
import button4 from "../../assets/images/buttons/button4.jpg"

const Dashboard = () => {

  return (
    <div className="flex flex-row">
      <div className='flex-auto'>
        <div className='flex flex-col'>

          <div className=" min-h-screen bg-white">
            <div className="mt-5 grid gap-10 lg:grid-cols-3 sm-grid-cols-2 p-5">
              <Link to={`/tailor/orders`}>
                <div className="flex px-5 md:pr-5 lg:pl-0 md:pl-5 transform transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex items-start justify-start relative">
                    <img
                      alt=""
                      className="max-w-full w-screen min-h-64 h-80 rounded-3xl"
                      src={button3}
                    />
                  </div>
                  <div className="flex flex-col flex-wrap items-start absolute pt-10 pl-3 sm:pl-10 ">
                    <div className="pb-3 flex flex-col flex-wrap">
                      {/* <h1 className="text-white font-bold text-2xl sm:text-4xl">
                      Reviews
                    </h1> */}
                      <h1 className="text-white font-bold text-2xl sm:text-4xl">
                        Assigned Orders
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to={`/tailor/materials`}>
                <div className="flex px-5 md:pr-5 lg:pl-0 md:pl-5 transform transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex items-start justify-start relative">
                    <img
                      alt=""
                      className="max-w-full w-screen min-h-64 h-80 rounded-3xl"
                      src={pic2}
                    />
                  </div>
                  <div className="flex flex-col flex-wrap items-start absolute pt-10 pl-3 sm:pl-10">
                    <div className="pb-3 flex flex-col flex-wrap">
                      {/* <h1 className="text-white font-bold text-2xl sm:text-4xl">
                      Reviews
                    </h1> */}
                      <h1 className="text-white font-bold text-2xl sm:text-4xl">
                        Materials
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={`/tailor/reviews`}>
                <div className="flex px-5 md:pr-5 lg:pl-0 md:pl-5  transform transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex items-start justify-start relative">
                    <img
                      alt=""
                      className="max-w-full w-screen min-h-64 h-80 rounded-3xl"
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
              </Link>
            </div>
          </div>

        </div>
      </div>

    </div>

  )
}

export default Dashboard