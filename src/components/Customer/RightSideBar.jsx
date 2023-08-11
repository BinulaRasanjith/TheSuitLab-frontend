
// const style = ["Style", "Lapel", "Bottom", "Pockets", "Sleeve Button", "Vent"]
const fabric = ["View All", "Solid Colors", "Patterns", "Pure Linen", "Pure Wool"]
// const colorContrast = ["Jacket Contrast", "Button Color"]

const JacketStyleRightSideBar = () => {

    return (
        <div className="flex items-center justify-center m-auto border-2 border-gray-400 shadow bg-white divide-y divide-gray-100 right-0">
            <ul className=" text-md text-bg p-1">
                {fabric && fabric.map((item, index) =>
                (
                    <li className={`rounded`} key={index}>
                        <a className="block px-4 py-2 hover:bg-gray-100" href="#">{item}</a>
                    </li>
                )
                )}

            </ul>
        </div>
    )
}

export default JacketStyleRightSideBar