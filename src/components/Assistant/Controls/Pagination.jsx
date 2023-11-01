import PropTypes from "prop-types";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	const canGoPrevious = currentPage > 1;
	const canGoNext = currentPage < totalPages;

	return (
		<nav aria-label="Page navigation">
			<ul className="flex space-x-2">
				<li>
					<button
						className={`relative block rounded px-2.5 py-1 text-sm ${canGoPrevious
								? "bg-stone-100 text-black"
								: "bg-neutral-200 text-neutral-400 pointer-events-none"
							}`}
						onClick={() => canGoPrevious && onPageChange(currentPage - 1)}
						disabled={!canGoPrevious}
					>
						Previous
					</button>
				</li>
				{[...Array(totalPages).keys()].map((page) => (
					<li key={page} aria-current={page + 1 === currentPage ? "page" : null}>
						<button
							className={`relative block rounded px-2.5 py-1 text-sm ${page + 1 === currentPage
									? "bg-black text-neutral-100"
									: "bg-stone-100 text-black hover:bg-neutral-700 hover:text-white"
								}`}
							onClick={() => onPageChange(page + 1)}
						>
							{page + 1}
						</button>
					</li>
				))}
				<li>
					<button
						className={`relative block rounded px-2.5 py-1 text-sm ${canGoNext
								? "bg-stone-100 text-black"
								: "bg-neutral-200 text-neutral-400 pointer-events-none"
							}`}
						onClick={() => canGoNext && onPageChange(currentPage + 1)}
						disabled={!canGoNext}
					>
						Next
					</button>
				</li>
			</ul>
		</nav>
	);
};


Pagination.propTypes = {
	currentPage: PropTypes.number.isRequired,
	totalPages: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired
};

export default Pagination;