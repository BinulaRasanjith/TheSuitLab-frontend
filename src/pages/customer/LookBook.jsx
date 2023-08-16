import { useState } from 'react'

import image1 from '../../assets/images/lookbook/image 27.png'
import image2 from '../../assets/images/lookbook/image 31.png'
import image3 from '../../assets/images/lookbook/image 32.png'
import image4 from '../../assets/images/lookbook/image 33.png'
import image5 from '../../assets/images/lookbook/image 34.png'
import image6 from '../../assets/images/lookbook/image 36.png'
import image7 from '../../assets/images/lookbook/image 37.png'
import image8 from '../../assets/images/lookbook/image 38.png'
import image9 from '../../assets/images/lookbook/image 39.png'
import image10 from '../../assets/images/lookbook/image 40.png'
import image11 from '../../assets/images/lookbook/image 42.png'
import image12 from '../../assets/images/lookbook/image 43.png'
import image13 from '../../assets/images/lookbook/image 44.png'
import image14 from '../../assets/images/lookbook/image 45.png'
import image15 from '../../assets/images/lookbook/image 46.png'
import image16 from '../../assets/images/lookbook/image 47.png'
import image17 from '../../assets/images/lookbook/image 49.png'
import image18 from '../../assets/images/lookbook/image 50.png'
import image19 from '../../assets/images/lookbook/image 51.png'
import ImagePopUp from './ImagePopUp'

const LookBook = () => {


    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19]

    const [selectedImage, setSelectedImage] = useState(null);

    const openPopup = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const closePopup = () => {
        setSelectedImage(null);
    };

    return (
        <div className='flex flex-col items-center p-5'>
            <h1 className='text-4xl font-bold py-4'>LookBook</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 overflow-y-auto h-screen">
                {images && images.map((imageUrl, index) => (
                    <img
                        alt={`Image ${index}`}
                        className="cursor-pointer"
                        key={index}
                        onClick={() => openPopup(imageUrl)}
                        src={imageUrl}
                    />
                ))}
                {selectedImage && <ImagePopUp imageUrl={selectedImage} onClose={closePopup} />}
            </div>
        </div>

    )
}

export default LookBook