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
      .then(data => setRepos(data));
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
