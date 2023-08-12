

const BackNext = () => {
    return (
        <div className='flex justify-around  absolute bottom-20 left-[50%] right-[50%] gap-x-20'>
            <div>
                <button className='bg-black text-white rounded-2xl py-3 px-5 m-2 lg:m-0'>Back</button>

            </div>
            <div>
                <button className='bg-black text-white rounded-2xl py-3 px-5 m-2 lg:m-0'>Next</button>

            </div>
        </div>
    )
}

export default BackNext