

// eslint-disable-next-line react/prop-types
const AccessoryCard = ({ image, label }) => {
    return (
        <div className='grid gap-5 p-3 rounded-xl shadow-md bg-white w-56 max-h-full'>
            <div className="flex items-center justify-center">
                <img alt="Shoe1" className='h-24 object-cover p-2' src={image} />
            </div>
            <label className="text-sm px-3 py-2.5 border-t-2 border-gray-400" >{label}</label>
        </div>
    )
}

export default AccessoryCard