import { useState } from "react"
import api from "./config/api"
import axios from "axios"

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {
      email,
      password,
    }

    try {
      const response = await api.post("/auth/login", data)
      console.log(response.data)
    } catch (error) {
      const response = error.response
      console.log(response.status, response.data)
    }
  }

  const handleClick = async () => {
    try {
      const response = await api.get("/auth/get-all")
      console.log(response.data)
    } catch (error) {
      const response = error.response
      console.log(response.status, response.data)
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={e => setEmail(e.target.value)} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={e => setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
      </div>

      <button onClick={handleClick}>get</button>
    </>
  )
}

export default App
