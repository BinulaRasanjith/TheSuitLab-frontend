import React from 'react'

const Instructions = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-white mb-5 mx-5'>
            <div className='p-3'>
                <h1 className='text-3xl text-bold'>THE FIT MAKES YOU A REAL MEN</h1>
            </div>
            <div className='flex flex-col items-center px-1 md:px-0'>
                <p>We create clothes designed just for you. It's time to move beyond unflattering </p>
                <p>conventional sizes and join a personalised future. The time has come for you to start </p>
                <p>wearing high-quality clothes made just for you.</p>
            </div>
            <div className='p-3'>
                <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Instructions</button>
            </div>
        </div>
    )
}

export default Instructions