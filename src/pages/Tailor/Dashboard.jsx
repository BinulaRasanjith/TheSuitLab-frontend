import { useEffect, useState } from "react";
import { Chart, initTE } from "tw-elements";
import { Link } from "react-router-dom";
import { HiChartBar, HiColorSwatch, HiShoppingCart } from "react-icons/hi";
import { HiHandThumbUp, HiUserCircle } from "react-icons/hi2";

// import staffCard from "../../components/staffCard";

const Dashboard = () => {

  // initTE({ Chart });
  // const [canvas, setCanvas] = useState(null);

  // window.onload = function () {
  //   new Chart(
  //     document.getElementById("chart-bar-double-datasets-example"),
  //     dataChartBarDoubleDatasetsExample,
  //     optionsChartBarDoubleDatasetsExample,
  //   );
  // };

  // useEffect(() => {
  //   const canvasElement = document.getElementById("chart-bar-double-datasets-example");
  //   setCanvas(canvasElement);

  //   // Destroy the canvas when the component unmounts
  //   return () => {
  //     if (canvas) {
  //       Chart.destroy(canvas);
  //     }
  //   };
  // }, []);

  // // DATA
  // const dataChartBarDoubleDatasetsExample = {
  //   type: "bar",
  //   data: {
  //     labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  //     datasets: [
  //       {
  //         label: "Last week",
  //         data: [22, 19, 23, 19, 25, 18, 23],
  //         backgroundColor: "#111111",
  //       },
  //       {
  //         label: "This week",
  //         data: [25, 21, 23, 24, 22, 20, 26],
  //         backgroundColor: "#D3D3D4",
  //       },
  //     ],
  //   },
  // };

  // // OPTIONS
  // const optionsChartBarDoubleDatasetsExample = {
  //   options: {
  //     scales: {
  //       y: {
  //         stacked: false,
  //         ticks: {
  //           beginAtZero: true,
  //         },
  //       },
  //       x: {
  //         stacked: false,
  //       },
  //     },
  //   },
  // };


  return (
    <div className="flex flex-row">
      <div className='flex-auto'>
        <div className='flex flex-col'>

          <div className=" min-h-screen bg-white">
            <div className="mt-5 grid gap-10 lg:grid-cols-4 sm-grid-cols-2 p-5">
              <Link to={`/tailor/orders`}>
                <div className="block max-w-[18rem] rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-500 transform transition-transform hover:scale-105 cursor-pointer">
                  <div className="p-6 flex gap-5">
                    <HiShoppingCart className="text-white text-4xl" />
                    <h5 className="text-2xl font-medium leading-tight text-white dark:text-neutral-50">
                      Orders
                    </h5>
                  </div>
                </div>
              </Link>

              <Link to={`/tailor/materials`}>
                <div className="block max-w-[18rem] rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-500 transform transition-transform hover:scale-105 cursor-pointer">
                  <div className="p-6 flex gap-5">
                    <HiColorSwatch className="text-white text-4xl" />
                    <h5 className="text-2xl font-medium leading-tight text-white dark:text-neutral-50">
                      Materials
                    </h5>
                  </div>
                </div>
              </Link>
              <Link to={`/tailor/reviews`}>
                <div className="block max-w-[18rem] rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-500 transform transition-transform hover:scale-105 cursor-pointer">
                  <div className="p-6 flex gap-5">
                    <HiHandThumbUp className="text-white text-4xl" />
                    <h5 className="text-2xl font-medium leading-tight text-white dark:text-neutral-50">
                      Reviews
                    </h5>
                  </div>
                </div>
              </Link>
              {/* <Link to={`/tailor/profile`}>
                <div className="block max-w-[18rem] rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-500 transform transition-transform hover:scale-105 cursor-pointer">
                  <div className="p-6 flex gap-5">
                    <HiUserCircle className="text-white text-4xl" />
                    <h5 className="text-2xl font-medium leading-tight text-white dark:text-neutral-50">
                      Profile
                    </h5>
                  </div>
                </div>
              </Link> */}
            </div>
          </div>

        </div>
      </div>

    </div>

  )
}

export default Dashboard