import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Mail, ExternalLink, Download, Code2, Database, Layout, Server, Briefcase, GraduationCap, Trophy, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImage from '../assets/1.jpg';
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
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
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
          Rajit.Dev
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
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
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
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-8 border border-blue-100 dark:border-blue-800"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        Open to Opportunities
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-[1.1]"
      >
        MERN Stack <br />
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Developer
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
      >
        Hi, I'm Rajit Maurya. I build modern, scalable, and high-performance web applications
        with a focus on clean code and exceptional user experience.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 sm:gap-6"
      >
        <button className="btn-primary">
          <Mail size={18} />
          Get in touch
        </button>
        <button className="btn-secondary">
          <Download size={18} />
          Download Resume
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-20 animate-bounce text-slate-400"
      >
        <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-700 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-slate-400 rounded-full"></div>
        </div>
      </motion.div>
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
    <section id="about" className="py-24 max-w-7xl mx-auto px-6">
      <SectionTitle title="About Me" icon={User} />
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
          <div className="premium-card relative h-[400px] overflow-hidden !p-0">
            <img
              src={profileImage}
              alt="Rajit Maurya Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Passionate about building scalable web solutions</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            As a MERN Stack Developer, I specialize in crafting robust backend architectures with Node.js
            and Express, paired with intuitive, high-performance frontends using React. I'm driven by
            the challenge of solving complex problems and optimizing applications for the best user experience.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Experience', value: '2+ Years' },
              { label: 'Completed', value: '15+ Projects' },
              { label: 'Support', value: '24/7 Online' },
              { label: 'Tech', value: 'MERN Stack' },
            ].map((stat) => (
              <div key={stat.label} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-[var(--border)]">
                <span className="block text-blue-600 font-bold text-xl">{stat.value}</span>
                <span className="text-sm text-slate-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Layout,
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'TypeScript', 'Framer Motion'],
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL', 'REST APIs'],
    },
    {
      title: 'Tools & DevOps',
      icon: Code2,
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Firebase', 'Jest'],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Technical Skills" subtitle="Categorized expertise in modern web development" icon={Code2} />
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="premium-card flex flex-col items-center text-center h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center mb-6">
                <cat.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-6">{cat.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {cat.skills.map((skill) => (
                  <span key={skill} className="tech-pill">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const jobs = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Tech Innovators Inc.',
      period: 'Jan 2023 - Present',
      desc: 'Leading the development of a microservices-based e-commerce platform. Improved load times by 40% and implemented real-time tracking using WebSockets.',
      tags: ['React', 'Node.js', 'Redis'],
    },
    {
      role: 'MERN Stack Developer',
      company: 'Digital Solutions Co.',
      period: 'June 2021 - Dec 2022',
      desc: 'Developed and maintained various client-facing web applications. Specialized in optimizing database queries and frontend performance.',
      tags: ['MongoDB', 'Express', 'AWS'],
    },
  ];

  return (
    <section id="experience" className="py-24 max-w-7xl mx-auto px-6">
      <SectionTitle title="Work Experience" icon={Briefcase} />
      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-24 space-y-12 pb-12">
        {jobs.map((job, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-10"
          >
            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-blue-600 border-4 border-[var(--background)]"></div>
            <div className="premium-card relative">
              <span className="text-blue-600 text-sm font-bold uppercase tracking-wider">{job.period}</span>
              <h3 className="text-2xl font-bold mt-1 mb-2">{job.role}</h3>
              <p className="text-slate-500 font-medium mb-4">{job.company}</p>
              <p className="text-slate-600 dark:text-slate-400 mb-6">{job.desc}</p>
              <div className="flex flex-wrap gap-2">
                {job.tags.map(tag => <span key={tag} className="tech-pill">{tag}</span>)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'EchoStream Pro',
      desc: 'Highly scalable video streaming platform with real-time comments and dynamic adaptive bitrate.',
      tech: ['Next.js', 'Firebase', 'Stripe'],
      metric: '30% Faster Loads',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1074',
    },
    {
      title: 'FinanceFlow',
      desc: 'Intelligent expense tracker with automated bank sync and AI-powered spending insights.',
      tech: ['React Native', 'Node.js', 'PostgreSQL'],
      metric: '10k+ Monthly Users',
      image: 'https://images.unsplash.com/photo-1551288049-bbbda5366991?auto=format&fit=crop&q=80&w=1170',
    },
    {
      title: 'DevCollab',
      desc: 'Real-time collaborative code editor with video conferencing and integrated debugger.',
      tech: ['Socket.io', 'Monaco', 'WebRTC'],
      metric: '99.9% Uptime',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1170',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Featured Projects" subtitle="A selection of my best work, focused on performance and impact" icon={Layout} />
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group overflow-hidden premium-card !p-0"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">
                  {project.metric}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 flex justify-between items-center group-hover:text-blue-600 transition-colors">
                  {project.title}
                  <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => <span key={t} className="tech-pill !bg-white dark:!bg-slate-700">{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
      <SectionTitle title="Get In Touch" subtitle="Let's discuss how we can work together on your next project" icon={Mail} />
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center border border-blue-100 dark:border-blue-800">
              <Mail size={22} />
            </div>
            <div>
              <p className="text-sm text-slate-500">Email Me</p>
              <p className="font-medium">rajit.maurya@example.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center border border-blue-100 dark:border-blue-800">
              <Github size={22} />
            </div>
            <div>
              <p className="text-sm text-slate-500">GitHub</p>
              <p className="font-medium">github.com/rajit-maurya</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center border border-blue-100 dark:border-blue-800">
              <Linkedin size={22} />
            </div>
            <div>
              <p className="text-sm text-slate-500">LinkedIn</p>
              <p className="font-medium">linkedin.com/in/rajit-maurya</p>
            </div>
          </div>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-[var(--border)] focus:outline-none focus:border-blue-600 transition-colors" />
            <input type="email" placeholder="Email" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-[var(--border)] focus:outline-none focus:border-blue-600 transition-colors" />
          </div>
          <input type="text" placeholder="Subject" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-[var(--border)] focus:outline-none focus:border-blue-600 transition-colors" />
          <textarea rows="4" placeholder="Message" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-[var(--border)] focus:outline-none focus:border-blue-600 transition-colors"></textarea>
          <button className="btn-primary w-full justify-center">Send Message</button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-[var(--border)] text-center text-slate-500 text-sm">
    <p>© {new Date().getFullYear()} Rajit Maurya. Built with React & Tailwind CSS.</p>
  </footer>
);

export { Navbar, Hero, About, Skills, Experience, Projects, Contact, Footer };

