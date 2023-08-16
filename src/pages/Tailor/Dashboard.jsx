import { useEffect, useState } from "react";
import { Chart, initTE } from "tw-elements";

// import staffCard from "../../components/staffCard";


const Dashboard = () => {

  initTE({ Chart });
  const [canvas, setCanvas] = useState(null);

  window.onload = function () {
    new Chart(
      document.getElementById("chart-bar-double-datasets-example"),
      dataChartBarDoubleDatasetsExample,
      optionsChartBarDoubleDatasetsExample,
    );
  };

  useEffect(() => {
    const canvasElement = document.getElementById("chart-bar-double-datasets-example");
    setCanvas(canvasElement);

    // Destroy the canvas when the component unmounts
    return () => {
      if (canvas) {
        Chart.destroy(canvas);
      }
    };
  }, []);

  // DATA
  const dataChartBarDoubleDatasetsExample = {
    type: "bar",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Last week",
          data: [22, 19, 23, 19, 25, 18, 23],
          backgroundColor: "#111111",
        },
        {
          label: "This week",
          data: [25, 21, 23, 24, 22, 20, 26],
          backgroundColor: "#D3D3D4",
        },
      ],
    },
  };

  // OPTIONS
  const optionsChartBarDoubleDatasetsExample = {
    options: {
      scales: {
        y: {
          stacked: false,
          ticks: {
            beginAtZero: true,
          },
        },
        x: {
          stacked: false,
        },
      },
    },
  };


  return (
    <div className="flex flex-row">
      <div className='flex-auto'>
        <div className='flex flex-col'>

          <div className=" min-h-screen bg-white">
            <div className="mt-5 grid gap-10 lg:grid-cols-4 sm-grid-cols-2 p-5">
              {/* grid stat here*/}
              <div className="flex items-center bg-white border-0 rounded shadow-lg justify-between p-5">
                <div>
                  <div className=" text-xs text-gray-500">CUSTOMER</div>
                  <div className='text-2xl font-medium text-gray-600'>924</div>
                  <div className=' text-xs font-medium text-gray-400'>Since last week</div>
                </div>
                <div className="text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>

                </div>

              </div>

              <div className="flex items-center bg-white border-0 rounded shadow-lg justify-between p-5">
                <div>
                  <div className="text-sm text-gray-500">ORDERS</div>
                  <div className='text-2xl font-medium text-gray-600'>89</div>
                  <div className=' text-xs font-medium text-gray-400'>Since last week</div>

                </div>
                <div className="text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>

                </div>

              </div>

              <div className="flex items-center bg-white border-0 rounded shadow-lg justify-between p-5">
                <div>
                  <div className="text-sm text-gray-500">PROCESSING</div>
                  <div className='text-2xl font-medium text-gray-600'>12</div>
                  <div className=' text-xs font-medium text-gray-400'>Since last week</div>

                </div>
                <div className="text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />
                  </svg>

                </div>

              </div>

              <div className="flex items-center bg-white border-0 rounded shadow-lg justify-between p-5">
                <div>
                  <div className="text-sm text-gray-500">INCOMES</div>
                  <div className='text-2xl font-medium text-gray-600'>Rs. 110,000</div>
                  <div className=' text-xs font-medium text-gray-400'>Since last week</div>

                </div>
                <div className=" text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>

                </div>

              </div>

              {/*grid end here*/}
            </div>
            {/*grid start here*/}
            <div className="mt-5   grid lg:grid-cols-3 md:grid-cols-2 p-4 gap-2">
              <div className="bg-white p-8 flex-col rounded shadow-lg">
                <div className=" text-sm font-semibold text-zinc-400">
                  PERFORMANCE
                </div>
                <div className=" text-sm font-regular text-black text-center">
                  Total Orders
                </div>
                <canvas id="chart-bar-double-datasets-example"></canvas>
              </div>

              <div className="flex flex-col p-8 bg-white rounded shadow-lg">
                <b className="b flex flex-row text-gray-500">TOP SELLING ITEMS</b>
                <canvas className='p-5' id='chartRadar'></canvas>
              </div>

            </div>
            {/*grid end here*/}

          </div>


        </div>
      </div>

    </div>

  )
}

export default Dashboard