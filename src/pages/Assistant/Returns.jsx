import Returnset from '../../components/Assistant/ReturnedItems';

const Returns = () => {
    return (
        <div>
            <div className=" flex flex-col justify-between mx-10 my-8 p-5 h-96 border border-solid border-zinc-950 border-opacity-20 rounded-lg">
                <div className=" flex justify-between">This is returns page</div>
                <div className=" flex justify-between"></div>
                <div><Returnset /></div>
                <div className=" flex justify-between">
                    <div></div>
                    <div>
                        <nav aria-label="Page navigation example">
                            <ul className="list-style-none flex gap-2">
                                <li>
                                    <a
                                        className="pointer-events-none relative block rounded bg-stone-50 px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400"
                                    >Previous</a>
                                </li>
                                <li>
                                    <a
                                        className="relative block rounded bg-stone-50 px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                                        href="#!"
                                    >1</a>
                                </li>
                                <li aria-current="page">
                                    <a
                                        className="relative block rounded bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300"
                                        href="#!"
                                    >2
                                        <span
                                            className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
                                        >(current)</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="relative block rounded bg-stone-50 px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                                        href="#!"
                                    >3</a>
                                </li>
                                <li>
                                    <a
                                        className="relative block rounded bg-stone-50 px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                                        href="#!"
                                    >Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>


            <div className=" hidden flex justify-center w-full">
                <div className=" flex flex-col justify-center h-screen">
                    <div className=" text-4xl font-semibold text-zinc-400">This returns page is under development :(</div>
                </div>
            </div>
        </div>
    );
};

export default Returns;