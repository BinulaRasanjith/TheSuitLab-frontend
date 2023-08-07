import Handsome from '../../assets/images/portrait-handsome-fashion-stylish-hipster-businessman-model-dressed-elegant-blue-suit-posing-gray 1.png'

const SuitCustomizationLanding = () => {
    return (
        <div>
            <img alt="" className="h-screen w-screen relative" src={Handsome} />
            <div className='flex flex-col items-start absolute top-20 left-2 md:left-10'>
                <h1 className='text-4xl md:text-6xl text-white font-bold pb-3 md:p-10'>Custom Suits</h1>
                <div className='text-white pb-5 md:px-10 w-full md:w-96 float-left'>100% Made to Measure Suits
                    Are you looking for a custom suit that will make you look
                    stunning and express your personal style to the fullest?
                    Our suits are not only high-quality but they are also hand
                    tailored to your measurements. Choose from more than 150
                    fabrics and various details and design your own outfit.</div>
                <button className='px-10 py-2.5 rounded-3xl bg-gray-400 md:mx-10 font-bold'>Design Your Suit</button>
            </div>
        </div>
    )
}

export default SuitCustomizationLanding