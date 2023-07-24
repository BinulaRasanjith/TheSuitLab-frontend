// eslint-disable-next-line react/prop-types
function Input({ type, placeholder, id, name, value, onChange, error, className }) {
  return (
    <div className={"relative z-0 " + className}>
      <input type={type} id={id} name={name} value={value} onChange={onChange} className={"block py-2.5 px-0 w-full text-sm lg:text-md bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer " + (error ? "border-red-600" : "text-gray-900 focus:border-blue-600")} placeholder=" " />
      <label htmlFor={id} className={"absolute text-sm lg:text-md duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 " + (error ? " text-red-600" : "text-gray-500 peer-focus:text-blue-600")}>{placeholder}</label>
    </div>
  )
}

export default Input