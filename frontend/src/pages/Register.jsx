import React, { useState } from 'react'

const Register = () => {
  const [username, setUsername] = useState("")

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Register</h1>

      <form>
        <div>
          <label className="block text-gray-700">UserName</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="border p-2 w-full"
          />
        </div>
      </form>
    </div>
  )
}

export default Register
