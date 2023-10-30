import PropTypes from 'prop-types'
import { IoCloseCircle } from 'react-icons/io5'

const ReviewStars = ({ rating }) => {
    const stars = Array.from({ length: rating }, (_, index) => (
        <svg key={index} className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
    ));

    return <div className="flex items-center mt-2.5 mb-5">{stars} <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating}.0</span></div>;
};

const ReviewCard = ({ author, comment, orderId,ratings,date, image }) => {
	return (
		<div className='flex flex-col py-6 px-8 border-2 border-borderColor rounded-xl items-center relative'>
			<img alt="" className='rounded-full object-cover h-28 w-28 mb-4' src={image} />
			<h1 className='text-center'>{author}</h1>
			<p className='text-center text-supplierColor'>{comment}</p>
			<p className='text-center text-supplierColor'>{orderId}</p>
			<p className='text-center text-supplierColor'>{ratings}</p>
			<p className='text-center text-supplierColor'>{date}</p>
			<ReviewStars rating={ratings} />
		</div>
	)
}

ReviewCard.propTypes = {
	author: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	orderId: PropTypes.string.isRequired,
}

export default ReviewCard