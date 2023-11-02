import PropTypes from 'prop-types'
// import { IoCloseCircle } from 'react-icons/io5'

import { ACCESSORY_IMAGES_URL } from '../../config/config'

const AccessoryCard = ({ accessoryName, brand, unitPrice, image, onClick }) => {
	return (
		<div onClick={onClick} className='flex flex-col cursor-pointer py-6 px-8 border-2 border-borderColor rounded-xl items-center relative'>
			{/* <IoCloseCircle className='absolute top-3 right-3 ' /> */}
			<img alt="" className='rounded-full object-cover h-28 w-28 mb-4' src={`${ACCESSORY_IMAGES_URL}/${image}`} />
			<div className='text-center text-sm font-bold'>{accessoryName}</div>
			<p className='text-center text-sm text-slate-500'>Brand: {brand}</p>
			<p className='text-center text-sm text-slate-500'>Unit Price: {unitPrice}</p>
		</div>
	)
}

AccessoryCard.propTypes = {
	accessoryName: PropTypes.string.isRequired,
	brand: PropTypes.string.isRequired,
	unitPrice: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
}

export default AccessoryCard