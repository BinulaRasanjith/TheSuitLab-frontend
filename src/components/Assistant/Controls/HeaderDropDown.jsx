const DropDownFilter = () => {

    return (
        <>
            <select className=" appearance-none bg-gray-100 w-40 p-2.5 text-xs text-slate-400 rounded-lg focus:ring-gray-500 focus:border-gray-500 block" id="countries">
                <option selected>Sort by</option>
                <option value="desc">Newest</option>
                <option value="asc">Oldest</option>
            </select>
        </>
    );
};

export default DropDownFilter;