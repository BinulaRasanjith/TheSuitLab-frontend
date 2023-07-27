// eslint-disable-next-line react/prop-types
function Input({ type, placeholder, id, name, value, onChange, error, className }) {
  return (
    <div className={"relative z-0 " + className}>
      <input type={type} id={id} name={name} value={value} onChange={onChange} className={"block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer " + (error ? "border-red-600" : "text-gray-900 focus:border-blue-600")} placeholder=" " />
      <label htmlFor={id} className={"absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 " + (error ? " text-red-600" : "text-gray-500 peer-focus:text-blue-600")}>{placeholder}</label>
    </div>
  )
}

export default Input