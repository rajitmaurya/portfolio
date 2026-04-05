import React from 'react';
import { Navbar, Hero, About, Skills, Certifications, Experience, Education, Achievements, Projects, Contact, Footer } from './components/Sections';

function App() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-blue-200 dark:selection:bg-blue-900/40">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
