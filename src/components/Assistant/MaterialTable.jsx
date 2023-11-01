
const MaterialsTable = ({ data }) => {

	const [materials, setMaterialData] = useState([]);

    useEffect(() => {
        const fetchMaterialData = async () => {
            try {
                const response = await getMaterials();
                setMaterialData(response.data.materials);
            } catch (error) {
                console.error("API Error:", error);
            }
        };
    
        fetchMaterialData();
    }, []);

    return (
        <table className="">
                            <thead className=" text-left text-sm font-medium border-b-2 border-gray-200 text-gray-400 w-full">
                                <tr className="py-4">
                                    <th className="py-3 w-72">
                                        Sample
                                    </th>
                                    <th className="py-3 w-72 text-center">
                                        Material Name
                                    </th>
                                    <th className="py-3 w-60 text-center">
                                        Color
                                    </th>
                                    <th className="py-3 w-60 text-center">
                                        Unit Price
                                    </th>
                                    <th className="py-3 w-60 text-center">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className=" text-left text-md font-medium text-gray-400 w-full">
                                {materials.length <= 0 ?
                                    <tr>
                                        <td className='text-center text-black font-bold text-xl' width={100} height={320} colSpan="6">No data</td>
                                    </tr>
                                    :
                                    materials.map((item, index) => (
                                        <tr key={index} className="items-center text-centers border-b-2 hover:bg-gray-100 text-black whitespace-nowrap font-medium w-full">
                                            <td className="hidden"> <Link to={`${item.materialCode}`}>{item.userId}</Link></td>
                                            <td className="py-4 w-72">{item.firstName} {item.lastName}</td>
                                            <td className="py-4 w-60 text-center">{item.mobileNo}</td>
                                            <td className="py-4 w-60 text-center">{item.email ? item.email : " - "}</td>
                                            <td className="py-4 w-60 text-center">{item.Customer.address ? item.Customer.address : " - "}</td>
                                            <td className="py-4 w-60 text-center">{item.progress ? "Working" : "Blocked"}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
    );
};

export default MaterialsTable;
