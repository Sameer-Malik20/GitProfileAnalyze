type Repo = {
  id: number
  name: string
  html_url: string
  description: string
}

export const RepoList = ({ repos }: { repos: Repo[] }) => {
  return (
    <div className="mt-4">
      <h2 className="h5 mb-3 fw-semibold">Repositories:</h2>
      <ul className="list-group">
        {repos.map((repo) => (
          <li key={repo.id} className="list-group-item">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-primary fw-medium"
            >
              {repo.name}
            </a>
            {repo.description && (
              <p className="text-muted small mb-0">{repo.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
