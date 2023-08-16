import { useEffect, useState } from "react";
import { Chart, initTE } from "tw-elements";

const DashChart = () => {

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
        <div className=" flex flex-col w-7/12 p-6 border border-solid border-zinc-950 border-opacity-20 rounded-lg bg-stone-50 gap-4">
            <div className=" text-sm font-semibold text-zinc-400">
                PERFORMANCE
            </div>
            <div className=" text-sm font-regular text-black text-center">
                Total Orders
            </div>
            <canvas id="chart-bar-double-datasets-example"></canvas>
        </div>
    );
};

export default DashChart;
