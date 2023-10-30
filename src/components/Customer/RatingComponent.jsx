import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const RatingComponent = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div className='flex flex-col'>
            <div className='flex'>
                {[...Array(5)].map((star, i) => {
                    const currentRating = i + 1;
                    return (
                        <label key={i}>
                            <input type="radio"
                                name="rating"
                                value={currentRating}
                                onClick={() => setRating(currentRating)}
                                className='hidden ' />
                            <FaStar
                                className="cursor-pointer"
                                size={20}
                                color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                onMouseEnter={() => setHover(currentRating)}
                                onMouseLeave={() => setHover(null)}
                            />
                        </label>
                    )
                })}


            </div>
            <p>rating is {rating}</p>
        </div>
    )
}

export default RatingComponent