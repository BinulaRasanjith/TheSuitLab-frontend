import fitness from '../assets/images/fitness.png'

const Fitness = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center md:lg-x-60 lg:gap-x-80 bg-white  my-5 mx-5'>
            <div className='flex flex-col items-start justify-start'>
                <div><p className='text-4xl text-bg py-5'>FITNESS</p></div>
                <div className='float-left'>The fit of a costume is important for both comfort and<br></br>
                    aesthetics. A costume that is too tight can be uncomfortable<br></br>
                    and restrict movement, while a costume that is too loose<br></br>
                    can be baggy and unflattering. The ideal fit will be snug but<br></br>
                    not restrictive, and it will flatter the wearer&apos;s figure.
                </div>
                <div>
                    <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-10 py-2.5 my-3 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" type="button">Visit</button>
                </div>
            </div>
            <div className=''>
                <img alt="Trouser and Coat" className="h-44 w-48 bg-cover " src={fitness} />
            </div>
        </div>
    )
}

export default Fitness