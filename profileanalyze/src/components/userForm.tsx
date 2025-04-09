// components/UserForm.tsx
import { useState } from "react"

type Props = {
  onSubmit: (username: string) => void
}

export const UserForm = ({ onSubmit }: Props) => {
  const [username, setUsername] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username.trim() === "") {
      alert("Username cannot be empty")
      return
    }
    onSubmit(username)
  }

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 align-items-center justify-content-center mx-auto" style={{ maxWidth: "600px", width: "100%" }}>
  <input
    type="text"
    placeholder="Enter GitHub username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    className="form-control"
  />
  <button
    type="submit"
    className="btn btn-primary"
  >
    Analyze
  </button>
</form>

  )
}
