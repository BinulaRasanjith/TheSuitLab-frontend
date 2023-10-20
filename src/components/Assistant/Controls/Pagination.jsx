const Pagination = () => {
	return (
		<>
			<nav aria-label="Page navigation example">
				<ul className="list-style-none flex gap-2.5">
					<li>
						<a className="pointer-events-none relative block rounded bg-stone-100 px-2.5 py-1 text-sm text-black transition-all duration-300 hover:bg-neutral-700 hover:text-white">
							Previous
						</a>
					</li>
					<li aria-current="page">
						<a
							className="relative block rounded bg-black px-2.5 py-1 text-sm text-neutral-100 transition-all duration-300"
							href="#!"
						>
							1
							<span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
								(current)
							</span>
						</a>
					</li>
					{/* <li>
                        <a
                            className="relative block rounded bg-stone-100 px-2.5 py-1 text-sm text-black transition-all duration-300 hover:bg-neutral-700 hover:text-white"
                            href="#!"
                        >2</a>
                    </li>

                    <li>
                        <a
                            className="relative block rounded bg-stone-100 px-2.5 py-1 text-sm text-black transition-all duration-300 hover:bg-neutral-700 hover:text-white"
                            href="#!"
                        >3</a>
                    </li> */}
					<li>
						<a
							className=" relative block rounded bg-stone-100 px-2.5 py-1 text-sm text-black transition-all duration-300 hover:bg-neutral-700 hover:text-white"
							href="#!"
						>
							Next
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Pagination;
