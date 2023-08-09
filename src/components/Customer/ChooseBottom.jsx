import SlightlyCurved from '../../assets/images/bottom_styles/SlightlyCurved 1.png'
import Straight from '../../assets/images/bottom_styles/Straight 1.png'
import Curved from '../../assets/images/bottom_styles/curved 1.png'

const ChooseBottom = () => {
    return (
        <div className='my-5 px-3 border-r-4 border-gray-200'>
            <span className='p-5 text-2xl font-bold'>Choose Your Bottom</span>
            <div className='grid grid-cols-3 gap-5 mt-10'>
                <div className='flex flex-col items-center p-3 justify-center'>
                    <img alt="Curved" className='pb-5' src={Curved} />
                    <label>CURVED</label>
                </div>
                <div className='flex flex-col items-center p-3 justify-center'>
                    <img alt="SLIGHTLY CURVED" className='pb-5' src={SlightlyCurved} />
                    <label>SLIGHTLY CURVED</label>
                </div>
                <div className='flex flex-col items-center p-3 justify-center'>
                    <img alt="STRAIGHT" className='pb-5' src={Straight} />
                    <label>STRAIGHT</label>
                </div>
            </div>
        </div>

    )
}

export default ChooseBottom