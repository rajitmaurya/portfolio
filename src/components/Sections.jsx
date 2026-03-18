import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Mail, ExternalLink, Download, Code2, Database, Layout, Server, Briefcase, GraduationCap, Trophy, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImage from '../assets/HeroProfile.jpg';
import resumeFile from '../assets/Resume.pdf';
const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`glass-nav transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
        >
          Rajitram.Dev
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="group relative flex items-center h-8 w-14 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-1 cursor-pointer transition-colors duration-300"
            aria-label="Toggle Dark Mode"
          >
            <motion.div
              className="absolute left-1 h-6 w-6 rounded-full bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center z-10"
              animate={{ x: darkMode ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {darkMode ? (
                <Moon size={14} className="text-blue-500 fill-blue-500" />
              ) : (
                <Sun size={14} className="text-amber-500 fill-amber-500" />
              )}
            </motion.div>
            <div className="flex justify-between w-full px-1.5 text-slate-400 dark:text-slate-500">
              <Sun size={12} className={!darkMode ? "opacity-100" : "opacity-40 transition-opacity"} />
              <Moon size={12} className={darkMode ? "opacity-100" : "opacity-40 transition-opacity"} />
            </div>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="group relative flex items-center h-7 w-12 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-0.5 cursor-pointer transition-colors"
            aria-label="Toggle Dark Mode"
          >
            <motion.div
              className="absolute left-0.5 h-6 w-6 rounded-full bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center z-10"
              animate={{ x: darkMode ? 20 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {darkMode ? (
                <Moon size={12} className="text-blue-500 fill-blue-500" />
              ) : (
                <Sun size={12} className="text-amber-500 fill-amber-500" />
              )}
            </motion.div>
            <div className="flex justify-between w-full px-1 text-slate-400">
              <Sun size={10} className={!darkMode ? "opacity-100" : "opacity-40"} />
              <Moon size={10} className={darkMode ? "opacity-100" : "opacity-40"} />
            </div>
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--card)] border-b border-[var(--border)] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link text-lg py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-50 to-white dark:from-slate-900 dark:to-slate-950">
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300 ring-1 ring-brand-500/20">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-500"></span>
              Open to opportunities
            </span>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight">
              Hi, I’m Rajitram — MERN Stack Developer
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              I build responsive, scalable web apps with measurable outcomes: faster development cycles, optimized APIs,
              and crash‑free UX.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:rajitmaurya8318@gmail.com"
                className="inline-flex items-center gap-2 rounded-md bg-brand-600 px-4 py-2 text-white hover:bg-brand-700 transition">
                {/* Heroicon: Paper Airplane */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12l14-7-7 14-2-5-5-2z" />
                </svg>
                Get in touch
              </a>
              <a href={resumeFile} download="Rajitram_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 dark:border-slate-700 px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                {/* Heroicon: Document Download */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                    d="M12 16v-4m0 4l-2-2m2 2l2-2m-6 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Download Resume
              </a>
              <a href="#projects"
                className="inline-flex items-center gap-2 rounded-md border border-brand-200 dark:border-brand-800 px-4 py-2  dark:hover:bg-brand-950 transition">
                {/* Heroicon: Command Line */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                    d="M8 9l3 3-3 3M13 15h3M3 5h18v14H3z" />
                </svg>
                View projects
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                {/* Heroicon: Map Pin */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-600" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                    d="M12 11a4 4 0 100-8 4 4 0 000 8zm0 0c-5 0-9 2.5-9 5.5V19h18v-2.5c0-3-4-5.5-9-5.5z" />
                </svg>
                Noida, Uttar Pradesh, India
              </div>
              <div className="flex items-center gap-2">
                {/* Heroicon: Inbox */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-600" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                    d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6m16 0h-4l-2 3h-4l-2-3H4m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5" />
                </svg>
                rajitmaurya8318@gmail.com
              </div>
              <div className="flex items-center gap-2">
                {/* Heroicon: Phone */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-600" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                    d="M3 5a2 2 0 012-2h1a2 2 0 012 2v1c0 .5-.2 1-.6 1.4L6.6 9.2a16 16 0 006.2 6.2l1.8-1.8c.4-.4.9-.6 1.4-.6h1a2 2 0 012 2v1a2 2 0 01-2 2h-.5C9.6 23 1 14.4 1.6 5.5 1.7 4.7 2.3 4 3.1 4H3a2 2 0 010 1z" />
                </svg>
                +91 8318237520
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-brand-200/50 to-sky-100 dark:from-brand-900/20 dark:to-slate-900 blur-2xl">
            </div>
            <img className="w-full max-w-md mx-auto rounded-2xl shadow-card ring-1 ring-slate-200/60 dark:ring-slate-800"
              src={profileImage} alt="Rajitram"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop'; }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SectionTitle = ({ title, subtitle, icon: Icon }) => (
  <div className="flex flex-col items-center text-center mb-16">
    {Icon && (
      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-2xl text-blue-600 mb-4 border border-blue-100 dark:border-blue-800">
        <Icon size={28} />
      </div>
    )}
    <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
    {subtitle && <p className="text-slate-600 dark:text-slate-400 max-w-2xl">{subtitle}</p>}
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div
              className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-brand-200/50 to-sky-100 dark:from-brand-900/20 dark:to-slate-900 blur-2xl">
            </div>
            <img src="./assets/19362653.jpg" alt="Developer vector"
              className="w-full max-w-md mx-auto rounded-2xl shadow-card ring-1 ring-slate-200/60 dark:ring-slate-800"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200' }} />
          </motion.div>

          {/* Right column: Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm <span className="font-semibold text-brand-600 dark:text-brand-400">Rajitram</span>, a Full Stack
              Developer focused on the MERN stack. I build responsive, scalable web apps with clean architecture and
              measurable results.
            </p>

            <ul className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
              {[
                "Delivered 4+ full-stack apps with 0% crash rates and ~40% API optimization.",
                "Designed reusable UI components and modular file structures.",
                "Passionate about clean UX, backend integration, and professional polish."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-brand-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript (ES6+)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Tailwind CSS", icon: "./assets/tailwindcss-logotype-white.svg", isLocal: true, fallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/api/api-original.svg" },
        { name: "JWT Authentication", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/4/jwt-icon-138bxvrhijus263d2f2wur.png/jwt-icon-aqjx58uyj3lrxtborzgyg.png?_a=DATAg1AAZAA0" },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Oracle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      ]
    },
    {
      title: "CMS & E-commerce",
      skills: [
        { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
        { name: "WooCommerce", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg" },
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem-solving", emoji: "🧠" },
        { name: "Communication", emoji: "💬" },
        { name: "Time Management", emoji: "⏱️" },
        { name: "Teamwork", emoji: "🤝" },
        { name: "Creativity", emoji: "🎨" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-center"
        >
          Skills
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="rounded-xl bg-slate-50 dark:bg-slate-900 p-6 shadow-card ring-1 ring-slate-200/60 dark:border-slate-800"
            >
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {category.skills.map((skill, skillIdx) => (
                  <li key={skillIdx} className="flex items-center gap-3">
                    {skill.icon ? (
                      <img
                        src={skill.icon}
                        className="h-5 w-5 object-contain"
                        alt={skill.name}
                        onError={(e) => {
                          if (skill.fallback) e.target.src = skill.fallback;
                        }}
                      />
                    ) : (
                      <span className="text-lg leading-none">{skill.emoji}</span>
                    )}
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Certifications = () => {
  const certifications = [
    { title: "MERN Stack", issuer: "GeeksforGeeks" },
    { title: "Developing Applications with Google Cloud Specialization", issuer: "Google Cloud" },
    { title: "Programming Foundations: Databases", issuer: "LinkedIn Learning" },
    { title: "SEO Foundations", issuer: "LinkedIn Learning" }
  ];

  return (
    <section id="certifications" className="py-16 sm:py-20 border-t border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-8"
        >
          Certifications
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-xl border border-slate-200/70 dark:border-slate-800 p-5 bg-slate-50 dark:bg-slate-900/50 hover:shadow-md transition"
            >
              <p className="font-medium text-slate-900 dark:text-white">{cert.title}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-center"
        >
          Experience
        </motion.h2>

        <div className="mt-12 space-y-10">
          {/* GeeksforGeeks Internship */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative border-l-4 border-brand-500 pl-6"
          >
            <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-brand-500 ring-2 ring-white dark:ring-slate-950">
            </div>
            <div
              className="bg-slate-50 dark:bg-slate-900 rounded-xl shadow-card ring-1 ring-slate-200/60 dark:ring-slate-800 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">MERN Stack Intern — GeeksforGeeks</h3>
                <span className="text-sm text-slate-500 dark:text-slate-400">June 2025 – Sept 2025</span>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Built full-stack applications using MongoDB, Express.js, React.js, and Node.js. Delivered optimized APIs,
                reusable UI components, and crash-free deployments.
              </p>
              <ul className="mt-4 grid gap-2 text-sm list-disc pl-5 text-slate-600 dark:text-slate-300">
                <li>Designed RESTful APIs and integrated JWT-based authentication.</li>
                <li>Improved development speed by ~25% through modular architecture.</li>
                <li>Collaborated in Agile sprints and Git workflows with CI/CD pipelines.</li>
                <li>Handled backend debugging, frontend responsiveness, and deployment.</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {["React", "Node.js", "Express", "MongoDB", "JWT", "Git"].map(tech => (
                  <span key={tech}
                    className="px-2 py-1 rounded bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Future Experience Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative border-l-4 border-slate-300 dark:border-slate-700 pl-6"
          >
            <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-slate-300 dark:bg-slate-700 ring-2 ring-white dark:ring-slate-950"></div>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl ring-1 ring-slate-200/60 dark:ring-slate-800 p-6">
              <h3 className="text-lg font-semibold text-slate-400 dark:text-slate-500">Your Next Role</h3>
              <p className="mt-2 text-sm text-slate-400 dark:text-slate-500 italic">Ready to add your next achievement here — freelance, full-time, or open-source.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  const educationItems = [
    {
      degree: "B.Tech — Information Technology",
      period: "2022 – 2025",
      institution: "Kanpur Institute of Technology, Kanpur",
      result: "7.22",
      resultType: "CGPA"
    },
    {
      degree: "Diploma — Information Technology",
      period: "2019 – 2022",
      institution: "Feroze Gandhi Polytechnic, Raebareli",
      result: "77%",
      resultType: "Percentage"
    },
    {
      degree: "XII — CISCE Board",
      period: "2018",
      institution: "Radha Krishna Memorial Education Center, Raebareli",
      result: "48%",
      resultType: "Percentage"
    },
    {
      degree: "X — CISCE Board",
      period: "2016",
      institution: "Radha Krishna Memorial Education Center, Raebareli",
      result: "60%",
      resultType: "Percentage"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-center"
        >
          Education
        </motion.h2>

        <div className="mt-12 space-y-10">
          {educationItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative border-l-4 border-brand-500 pl-6"
            >
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-brand-500 ring-2 ring-white dark:ring-slate-950">
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl shadow-card ring-1 ring-slate-200/60 dark:ring-slate-800 p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-lg font-semibold">{item.degree}</h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{item.period}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {item.institution}
                  <br />
                  {item.resultType}: <span className="font-medium text-brand-600 dark:text-brand-400">{item.result}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Achievements = () => {
  const achievements = [
    {
      title: "Open Source Contributor",
      desc: "Contributed to various MERN stack projects and UI libraries, improving documentation and fixing bugs."
    },
    {
      title: "Hackathon Finalist",
      desc: "Developed a full-stack solution for local businesses during a regional engineering hackathon."
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200/60 dark:border-slate-800">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-center"
        >
          Achievements
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 bg-brand-100 dark:bg-brand-900/30 rounded-lg text-brand-600">
                  <Trophy size={20} />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "QuickBill Restaurant POS",
      desc: "Full-stack POS system for restaurants with table-wise billing, category-based menus, order tracking, and printable receipts. Built with REST APIs, MongoDB, and Tailwind/PostCSS.",
      tech: ["React", "Node/Express", "MongoDB", "Tailwind"],
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
      code: "https://github.com/kushvijay234/quickbill-restaurant-pos",
      live: "https://quickbill-restaurant-pos.vercel.app/"
    },
    {
      title: "HyperMarket Ecommerce App",
      desc: "Ecommerce website for hypermarkets with product management, category filters, dynamic cart, and receipt generation. Optimized for speed and scalability using Vite and MongoDB.",
      tech: ["React", "Node/Express", "MongoDB", "Vite"],
      image: "./assets/hyper-market-eight.vercel.app.png",
      code: "https://github.com/kushvijay234/hyper-market",
      live: "https://hyper-market-eight.vercel.app/",
      fallbackImage: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200"
    },
    {
      title: "Voucher Receipt App",
      desc: "Voucher management with create/list/print, REST APIs, UUID IDs, xlsx persistence (1,000+ records), and print-ready receipts.",
      tech: ["React", "Node/Express", "Vite", "xlsx"],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
      code: "https://github.com/kushvijay234/voucher-receipt-app",
    },
    {
      title: "Movie Explorer App",
      desc: "Responsive movie search using Watchmode API (4000+ records), debounced input (500ms), modular components, and zero-crash fallbacks.",
      tech: ["React", "Tailwind", "Watchmode API"],
      image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop",
      code: "https://github.com/rajitmaurya/movieapp",
      live: "https://movieapp-one-alpha.vercel.app/"
    },
    {
      title: "Tourism Web Page",
      desc: "Fully responsive tourism site with 10+ destinations, optimized assets (~30% faster loads), and improved SEO visibility.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "./assets/Tourism.jpeg",
      code: "https://github.com/rajitmaurya/Tourism",
      fallbackImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200"
    },
    {
      title: "GitHub Finder App",
      desc: "Real-time GitHub user search with REST API, repositories, followers, and robust error handling (0% crashes in testing).",
      tech: ["HTML/CSS", "JavaScript", "GitHub API"],
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
      code: "https://github.com/rajitmaurya/githubFinder",
      live: "https://rajitmaurya.github.io/githubFinder/"
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 border-t border-slate-200/60 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold">Projects</h2>
          <a href="https://github.com/rajitmaurya" target="_blank" rel="noopener noreferrer"
            className="text-sm text-brand-700 dark:text-brand-300 hover:underline">View GitHub</a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group rounded-2xl border border-slate-200/70 dark:border-slate-800 p-5 hover:shadow-card transition bg-white dark:bg-slate-900/50"
            >
              <div className="aspect-[16/9] overflow-hidden rounded-lg ring-1 ring-slate-200/60 dark:ring-slate-800">
                <img
                  src={project.image}
                  className="h-full w-full object-cover group-hover:scale-[1.02] transition"
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => {
                    if (project.fallbackImage) e.target.src = project.fallbackImage;
                  }}
                />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
                {project.desc}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2 text-[11px]">
                {project.tech.map((t, i) => (
                  <li key={i} className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex gap-3">
                {project.code && (
                  <a href={project.code} target="_blank" rel="noopener noreferrer"
                    className="text-sm inline-flex items-center gap-1 hover:text-brand-600 dark:hover:text-brand-400 transition hover:underline">
                    <span>Code</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="text-sm inline-flex items-center gap-1 hover:text-brand-600 dark:hover:text-brand-400 transition hover:underline">
                    <span>Live Preview</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 border-t border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold"
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-slate-600 dark:text-slate-300"
        >
          I’d love to hear about your project or collaboration ideas. Email me or connect on LinkedIn.
        </motion.p>

        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <motion.a
            href="mailto:rajitmaurya8318@gmail.com"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 rounded-xl border border-slate-200/70 dark:border-slate-800 p-5 hover:shadow-card transition bg-slate-50 dark:bg-slate-900/50"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 flex items-center justify-center">
              <Mail size={20} />
            </div>
            <div>
              <div className="text-sm font-semibold">Email</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">rajitmaurya8318@gmail.com</div>
            </div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/rajit-maurya"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 rounded-xl border border-slate-200/70 dark:border-slate-800 p-5 hover:shadow-card transition bg-slate-50 dark:bg-slate-900/50"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 flex items-center justify-center">
              <Linkedin size={20} />
            </div>
            <div>
              <div className="text-sm font-semibold">LinkedIn</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">linkedin.com/in/rajit-maurya</div>
            </div>
          </motion.a>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 space-y-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800 focus:outline-none focus:border-brand-500 transition-colors" />
            <input type="email" placeholder="Email" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800 focus:outline-none focus:border-brand-500 transition-colors" />
          </div>
          <input type="text" placeholder="Subject" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800 focus:outline-none focus:border-brand-500 transition-colors" />
          <textarea rows="4" placeholder="Message" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800 focus:outline-none focus:border-brand-500 transition-colors"></textarea>
          <button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-medium py-4 rounded-xl transition shadow-lg shadow-brand-500/20">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-[var(--border)] text-center text-slate-500 text-sm">
    <p>© {new Date().getFullYear()} Rajitram. Built with React & Tailwind CSS.</p>
  </footer>
);

export { Navbar, Hero, About, Skills, Certifications, Experience, Education, Achievements, Projects, Contact, Footer };

