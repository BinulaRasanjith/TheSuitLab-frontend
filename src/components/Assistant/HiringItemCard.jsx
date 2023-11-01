import PropTypes from 'prop-types'
// import { IoCloseCircle } from 'react-icons/io5'

import { HIRE_COSTUME_IMAGES_URL } from '../../config/config'

const HiringItemCard = ({ costumeName, costumeType, rentalPrice, image, onClick }) => {
	return (
		<div onClick={onClick} className='flex flex-col py-6 px-8 border-2 border-borderColor rounded-xl items-center relative cursor-pointer'>
			{/* <IoCloseCircle className='absolute top-3 right-3 ' /> */}
			<img alt="" className='rounded-full object-cover h-28 w-28 mb-4' src={`${HIRE_COSTUME_IMAGES_URL}/${image}`} />
			<div className='text-center text-sm font-bold'>{costumeName}</div>
			<p className='text-center text-sm text-slate-500'>Type: {costumeType}</p>
			<p className='text-center text-sm text-slate-500'>Rental: {rentalPrice}</p>
		</div>
	)
}

HiringItemCard.propTypes = {
	costumeName: PropTypes.string.isRequired,
	costumeType: PropTypes.string.isRequired,
	rentalPrice: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
}

export default HiringItemCard;