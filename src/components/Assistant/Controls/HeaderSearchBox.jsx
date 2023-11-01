import PropTypes from 'prop-types';

const SearchBox = ({ onSearch }) => {

    const handleSearch = (e) => {
        const searchText = e.target.value;
        onSearch(searchText);
    };


    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                    aria-hidden="true"
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                    />
                </svg>
            </div>
            <input
                className="block w-60 p-2.5 pl-10 text-xs text-gray-700 rounded-lg bg-gray-100"
                id="default-search"
                placeholder="Search with customer name"
                type="search"
                onInput={handleSearch}
            />
        </div>
    );
};

SearchBox.propTypes = {
    onSearch: PropTypes.func.isRequired
};

export default SearchBox;