function Repos({ repos = [] }) {
  return (
    <section id="repos" className="reveal">
      <div className="section-title">
        <h3>Latest GitHub Repositories</h3>
        <div className="divider"></div>
      </div>

      <div className="repo-grid">
        {repos.slice(0, 6).map(repo => (
          <div className="repo-card" key={repo.id}>
            <h4 className="repo-title">{repo.name}</h4>

            <p className="repo-desc">
              {repo.description || "No description provided."}
            </p>

            <div className="repo-meta">
              <span>⭐ {repo.stargazers_count}</span>
              <span>{repo.language || "N/A"}</span>
            </div>

            <a
              className="repo-link"
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>

      <div className="github-more">
        <a
          className="btn"
          href="https://github.com/H-1709"
          target="_blank"
          rel="noreferrer"
        >
          View More on GitHub
        </a>
      </div>
    </section>
  );
}

export default Repos;
