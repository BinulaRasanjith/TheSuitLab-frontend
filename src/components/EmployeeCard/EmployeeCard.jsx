import PropTypes from 'prop-types'
import { IoCloseCircle } from 'react-icons/io5'

const EmployeeCard = ({ EmpName, role, image }) => {
	return (
		<div className='flex flex-col py-6 px-8 border-2 border-borderColor rounded-xl items-center relative'>
			<IoCloseCircle className='absolute top-3 right-3 ' />
			<img alt="" className='rounded-full object-cover h-28 w-28 mb-4' src={image} />
			<h1 className='text-center'>{EmpName}</h1>
			<p className='text-center text-supplierColor'>{role}</p>
		</div>
	)
}

EmployeeCard.propTypes = {
	EmpName: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired
}

export default EmployeeCard