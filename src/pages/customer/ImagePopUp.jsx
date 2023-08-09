import { AiOutlineCloseCircle } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
const ImagePopUp = ({ imageUrl, onClose }) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-2 rounded-lg shadow-lg">
                <AiOutlineCloseCircle onClick={onClose} size={40} />
                <img alt="Popup" className="sm:h-96 object-cover" src={imageUrl} />
            </div>
        </div>
    )
}

export default ImagePopUp