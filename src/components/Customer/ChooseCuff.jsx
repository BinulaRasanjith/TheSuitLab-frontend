import Cuff from '../../assets/images/cuffs_styles/Cuff.png'
import DoubleTabs from '../../assets/images/cuffs_styles/DoubleTabs.png'
import FoldoverTabs from '../../assets/images/cuffs_styles/FoldoverTabs.png'
import None from '../../assets/images/cuffs_styles/None (2).png'
import SingleTab from '../../assets/images/cuffs_styles/SingleTabs.png'

const ChooseCuff = () => {
    return (
        <div className='my-5 px-10'>

            <span className='p-5 text-2xl font-bold'>Choose Your cuff style</span>
            <div className='grid grid-cols-3 gap-3 mt-10'>
                <button className='bg-gray-200 rounded-lg py-3 px-5 m-1'>Normal</button>
                <button className='bg-gray-200 rounded-lg py-3 px-5 m-1'>Round</button>
                <button className='bg-gray-200 rounded-lg py-3 px-5 m-1'>Square</button>
                <div className='flex flex-col items-center p-5 justify-center'>
                    <img alt="REGULAR" className='pb-5' src={None} />
                    <label className='text-sm'>REGULAR</label>
                </div>

                <div className='flex flex-col items-center p-5 justify-center'>
                    <img alt="CUFFS" className='pb-5' src={Cuff} />
                    <label className='text-sm'>CUFFS</label>
                </div>
                <div className='flex flex-col items-center p-5 justify-center'>
                    <img alt="Double" className='pb-5' src={DoubleTabs} />
                    <label className='text-sm'>DOUBLE TABS</label>
                </div>
                <div className='flex flex-col items-center p-5 justify-center'>
                    <img alt="Modern" className='pb-5' src={FoldoverTabs} />
                    <label className='text-sm'>SINGLE TABS</label>
                </div>
                <div className='flex flex-col items-center p-5 justify-center'>
                    <img alt="FOLD OVER TABS" className='pb-5' src={SingleTab} />
                    <label className='text-sm'>FOLDOVER TABS</label>
                </div>

            </div>

        </div>
    )
}

export default ChooseCuff