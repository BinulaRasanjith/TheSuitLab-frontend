import KissingOne from '../assets/images/sleeve_button_styles/kissing (1).png'
import KissingTwo from '../assets/images/sleeve_button_styles/kissing (2).png'
import Kissing from '../assets/images/sleeve_button_styles/kissing.png'
import StandardOne from '../assets/images/sleeve_button_styles/standard (1).png'
import StandardTwo from '../assets/images/sleeve_button_styles/standard (2).png'
import Standard from '../assets/images/sleeve_button_styles/standard.png'
import WorkingOne from '../assets/images/sleeve_button_styles/working (1).png'
import WorkingTwo from '../assets/images/sleeve_button_styles/working (2).png'
import Working from '../assets/images/sleeve_button_styles/working.png'


const ChooseSleeveButtons = () => {
  return (
    <div className='my-5 px-20 border-r-4 border-gray-400'>
        <span className='p-5 text-2xl font-bold'>Choose your sleeve button</span>
        <div className='grid grid-cols-3 gap-5 mt-10'>
            <div className='flex flex-col items-center p-5 justify-center'>
                <img alt="" className="pb-3"  src={Kissing}  />
                <label>3 KISSING <br/>BUTTONS</label>
            </div>
            <div className='flex flex-col items-center p-5 justify-center'>
                <img alt="" className="pb-3"  src={KissingOne}  /> 
                <label>4 KISSING<br/> BUTTONS</label>
            </div>
            <div className='flex flex-col items-center p-5 justify-center'>
                <img alt="" className="pb-3"  src={KissingTwo}  />
                <label>5 KISSING <br/>BUTTONS</label>
            </div>
            <div className='flex flex-col items-center p-5 justify-center'>
                <img alt="" className="pb-3"  src={Standard}  />
                <label>3 STANDARD <br/>BUTTONS</label>
            </div>
            <div className='flex flex-col items-center p-5 justify-center'>
                <img alt="" className="pb-3"  src={StandardOne}  />
                <label>4 STANDARD <br/>BUTTONS</label>
            </div>
            <div className='flex flex-col items-center p-5 justify-center'>
                <img alt="" className="pb-3"  src={StandardTwo}  />
                <label>5 STANDARD <br/>BUTTONS</label>
            </div>
            <div className='flex flex-col items-center p-5 justify-center'>
                <img alt="" className="pb-3"  src={Working}  />
                <label>3 WORKING<br/> BUTTONS</label>
            </div>
            <div className='flex flex-col items-center p-5 justify-center'>  
                <img alt="" className="pb-3"  src={WorkingOne}  />
                <label>4 WORKING <br/>BUTTONS</label>
            </div>
            <div className='flex flex-col items-center p-5 justify-center'>
                <img alt="" className="pb-3"  src={WorkingTwo}  />
                <label>5 WORKING<br/> BUTTONS</label>
            </div>
        </div>
    </div>
  )
}

export default ChooseSleeveButtons