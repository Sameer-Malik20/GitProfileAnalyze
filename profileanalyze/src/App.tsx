import { useState } from "react"
import { UserForm } from "./components/userForm"
import { RepoList } from "./components/repoList"

type Repo = {
  id: number
  name: string
  html_url: string
  description: string
}

function App() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const fetchRepos = async (username: string) => {
    setLoading(true)
    setError("")
    try {
      const res = await fetch(`https://api.github.com/users/${username}/repos`)
      if (!res.ok) throw new Error("User not found or API error")
      const data = await res.json()
      setRepos(data)
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("An unknown error occurred")
      }
      setRepos([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="d-flex justify-content-center bg-light min-vh-100 py-5 px-3">
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <h1 className="text-center mb-4 display-5 fw-bold">GitHub Profile Analyzer</h1>
        <UserForm onSubmit={fetchRepos} />
        {loading && <p className="mt-4 text-primary text-center">Loading...</p>}
        {error && <p className="mt-4 text-danger text-center">{error}</p>}
        {!loading && repos.length > 0 && <RepoList repos={repos} />}
      </div>
    </div>
  )
}

export default App
