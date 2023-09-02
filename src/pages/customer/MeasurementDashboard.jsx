
import { useNavigate } from "react-router-dom"

const MeasurementDashboard = () => {

    const navigate = useNavigate()
    return (
        <div className="flex flex-wrap gap-4 justify-around">

            <div onClick={() => navigate("/customer/customize-measurements/current-sizes")}
                className="block max-w-[18rem] rounded-lg bg-neutral-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-600">
                <div
                    className="border-b-2 border-[#0000002d] px-6 py-3 text-white dark:text-neutral-50">
                    Choose This
                </div>
                <div className="p-6">
                    <h5
                        className="mb-2 text-4xl font-medium leading-tight text-white dark:text-neutral-50">
                        Use Current Sizes
                    </h5>
                    <p className="text-base text-white dark:text-neutral-50">
                        You can use your current sizes to place your order. You can also edit your sizes later on. Our stylist will guide you with your measurements later on.Be at ease and continue with your order.
                    </p>
                </div>
            </div>

            <div onClick={() => navigate("/customer/customize-measurements/standard-sizes")}
                className="block max-w-[18rem] rounded-lg bg-neutral-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-600">
                <div
                    className="border-b-2 border-[#0000002d] px-6 py-3 text-white dark:text-neutral-50">
                    Choose This
                </div>
                <div className="p-6">
                    <h5
                        className="mb-2 text-4xl font-medium leading-tight text-white dark:text-neutral-50">
                        Use Standard Sizes
                    </h5>
                    <p className="text-base text-white dark:text-neutral-50">
                        You can use our standard sizes to place your order. You can also edit your sizes later on. Our stylist will guide you with your measurements later on.Be at ease and continue with your order.
                    </p>
                </div>
            </div>

            <div onClick={() => navigate("/customer/customize-measurements/custom-sizes")}
                className="block max-w-[18rem] rounded-lg bg-neutral-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-600">
                <div
                    className="border-b-2 border-[#0000002d] px-6 py-3 text-white dark:text-neutral-50">
                    Choose This
                </div>
                <div className="p-6">
                    <h5
                        className="mb-2 text-4xl font-medium leading-tight text-white dark:text-neutral-50">
                        Use Custom Sizes
                    </h5>
                    <p className="text-base text-white dark:text-neutral-50">
                        You can give us your custom sizes to place your order. You can also edit your sizes later on. Our stylist will guide you with your measurements later on.Be at ease and continue with your order.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default MeasurementDashboard


















