import { Link } from 'react-router-dom'; // Import Link from React Router

// eslint-disable-next-line react/prop-types
const AccessoryCard = ({ image, label, to = null }) => {

    if (to) {
        return (
            // Wrap the card in a Link component with the 'to' prop if 'to' is provided
            <Link to={to} className='block'>
                <div className='grid gap-5 p-3 rounded-xl shadow-md bg-white w-56 max-h-full'>
                    <div className="flex items-center justify-center">
                        <img alt="Shoe1" className='h-24 object-cover p-2' src={image} />
                    </div>
                    <label className="text-sm px-3 py-2.5 border-t-2 border-gray-400">{label}</label>
                </div>
            </Link>
        );
    }


    // If 'to' is not provided, render the card without the Link wrapper
    return (
        <div className='grid gap-5 p-3 rounded-xl shadow-md bg-white w-56 max-h-full'>
            <div className="flex items-center justify-center">
                <img alt="Shoe1" className='h-24 object-cover p-2' src={image} />
            </div>
            <label className="text-sm px-3 py-2.5 border-t-2 border-gray-400">{label}</label>
        </div>
    );
}

export default AccessoryCard