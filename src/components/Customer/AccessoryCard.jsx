

// eslint-disable-next-line react/prop-types
const AccessoryCard = ({ image, label }) => {
    return (
        <div className='grid p-3 items-center justify-around m-auto rounded-xl shadow-md bg-white h-max w-52'>
            <img alt="Shoe1" className='h-30 w-44 object-cover p-2' src={image} />
            <label className="text-sm px-3 py-2.5 border-t-2 border-gray-400" >{label}</label>
        </div>
    )
}

export default AccessoryCard