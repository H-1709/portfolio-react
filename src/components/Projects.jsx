function Projects() {
  return (
    <section id="projects" className="reveal">
      <div className="section-title">
        <h3>Featured Projects</h3>
        <div className="divider"></div>
      </div>

      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <h4>Intelligent Interview Scheduler & Skill Matcher</h4>
          <p>
            Designed an intelligent system to match candidates with interviewers
            using hash-based skill scoring and greedy scheduling algorithms.
            Automatically resolves availability conflicts while prioritizing
            skill overlap.
          </p>

          <div className="tech-stack">
            <span>Java</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>Next.js</span>
            <span>DSA</span>
          </div>

          <a
            className="project-btn"
            href="https://github.com/H-1709/interview-scheduler"
            target="_blank"
            rel="noreferrer"
          >
            View Code →
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h4>Smart Issue Tracker with Priority Engine</h4>
          <p>
            Built a priority-driven issue tracking system that dynamically ranks
            issues based on severity, frequency, and user impact using heap-based
            priority queues and hash-based lookups.
          </p>

          <div className="tech-stack">
            <span>Java</span>
            <span>React</span>
            <span>MongoDB</span>
            <span>Priority Queue</span>
          </div>

          <a
            className="project-btn"
            href="https://github.com/H-1709/issue-tracker"
            target="_blank"
            rel="noreferrer"
          >
            View Code →
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h4>Mini Search Engine (Document Indexing System)</h4>
          <p>
            Implemented a keyword-based document search engine using inverted
            indexing techniques. Optimized search performance using hash maps and
            analyzed time–space trade-offs.
          </p>

          <div className="tech-stack">
            <span>Java</span>
            <span>Data Structures</span>
            <span>Hash Maps</span>
            <span>Indexing</span>
          </div>

          <a
            className="project-btn"
            href="https://github.com/H-1709/Search-engine"
            target="_blank"
            rel="noreferrer"
          >
            View Code →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
