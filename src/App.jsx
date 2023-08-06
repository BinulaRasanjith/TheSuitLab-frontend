import { useEffect } from "react"
import { RouterProvider } from "react-router-dom"

import api from "./api/api"
import router from "./routes"

const App = () => {
	useEffect(() => {
		const accessToken = localStorage.getItem("accessToken")
		if (accessToken) {
			api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`
		}
	}, [])

	return (
		<RouterProvider router={router} />
	)
}

export default App