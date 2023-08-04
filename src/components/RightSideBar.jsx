

const RightSideBar = () => {
    return (
        <div className="flex items-center justify-center m-auto border-2 border-gray-400 shadow bg-white divide-y divide-gray-100">
            <ul className=" text-md text-bg p-1">
                <li className={`rounded bg-black text-white `}>
                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">Style</a>
                </li>
                <li className={`rounded`}>
                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">Pleat</a>
                </li>
                <li className={`rounded`}>
                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">Pant Pocket</a>
                </li>
                <li className={`rounded`}>
                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">Back Pocket</a>
                </li>
                <li className={`rounded`}>
                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">Belt Loops</a>
                </li>
                <li className={`rounded`}>
                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">Cuffs</a>
                </li>

            </ul>
        </div>
    )
}

export default RightSideBar