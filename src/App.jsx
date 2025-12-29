import { useEffect, useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Repos from "./components/Repos";
import Footer from "./components/Footer";

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/H-1709/repos")
      .then(res => res.json())
      .then(data => {
        const sorted = data
          .sort(
            (a, b) =>
              new Date(b.updated_at) - new Date(a.updated_at)
          )
          .slice(0, 6);

        setRepos(sorted);
      })
      .catch(err => console.error("Failed to load repos:", err));
  }, []);

  return (
    <>
      <Header />

      <div className="container">
        <Hero />
        <Skills />
        <Projects />
        <Repos repos={repos} />
        <Footer />
      </div>
    </>
  );
}

export default App;
