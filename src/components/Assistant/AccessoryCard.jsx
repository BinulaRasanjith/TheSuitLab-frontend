import PropTypes from 'prop-types'
import { IoCloseCircle } from 'react-icons/io5'

const AccessoryCard = ({ materialName, supplierID, image }) => {
	return (
		<div className='flex flex-col py-6 px-8 border-2 border-borderColor rounded-xl items-center relative'>
			<IoCloseCircle className='absolute top-3 right-3 ' />
			<img alt="" className='rounded-full object-cover h-28 w-28 mb-4' src={image} />
			<div className='text-center text-sm font-bold'>{materialName}</div>
			<p className='text-center text-sm text-slate-500'>Brand: {supplierID}</p>
		</div>
	)
}

AccessoryCard.propTypes = {
	materialName: PropTypes.string.isRequired,
	supplierID: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired
}

export default AccessoryCard