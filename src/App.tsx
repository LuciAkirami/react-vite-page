'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const projectsRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact']
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    controls.start({
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    })
  }, [controls])

  const skills = [
    { name: 'Python', icon: '🐍' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'Scikit-learn', icon: '🔬' },
    { name: 'Pandas', icon: '🐼' },
    { name: 'Numpy', icon: '🔢' },
    { name: 'Keras', icon: '🧬' },
    { name: 'SQL', icon: '💾' },
  ]

  const projects = [
    {
      title: 'Predictive Analytics Dashboard',
      description: 'A real-time dashboard for predictive analytics in e-commerce.',
      tech: ['Python', 'React', 'TensorFlow'],
      image: '/placeholder.svg?height=200&width=300',
    },
    {
      title: 'NLP-Powered Chatbot',
      description: 'An intelligent chatbot using advanced NLP techniques.',
      tech: ['Python', 'NLTK', 'FastAPI'],
      image: '/placeholder.svg?height=200&width=300',
    },
    {
      title: 'Computer Vision for Quality Control',
      description: 'AI-powered quality control system for manufacturing.',
      tech: ['Python', 'OpenCV', 'PyTorch'],
      image: '/placeholder.svg?height=200&width=300',
    },
    {
      title: 'Data Visualization Platform',
      description: 'Interactive data visualization tool for complex datasets.',
      tech: ['D3.js', 'React', 'Node.js'],
      image: '/placeholder.svg?height=200&width=300',
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-gray-100">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-30 backdrop-blur-md">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-2">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-zinc-900'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeSection === item.toLowerCase() && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-white rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item}</span>
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-zinc-900">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400"
            >
              Data Science & AI Portfolio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 mb-8"
            >
              Transforming Data into Intelligent Solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#projects"
                className="bg-violet-600 text-white px-6 py-3 rounded-full font-medium hover:bg-violet-500 transition-colors"
              >
                Explore My Work
              </a>
            </motion.div>
          </div>
        </section>

        <section id="about" className="min-h-screen flex flex-col items-center justify-center py-20 bg-zinc-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">About Me</h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-gray-300 mb-4">
                As a passionate Data Scientist and AI/ML Engineer, I specialize in developing
                cutting-edge solutions that leverage the power of artificial intelligence and
                machine learning. With a strong foundation in statistical analysis and predictive
                modeling, I strive to uncover meaningful insights from complex datasets.
              </p>
              <p className="text-gray-300">
                My expertise spans across various domains including natural language processing,
                computer vision, and deep learning. I'm committed to pushing the boundaries of
                what's possible with AI, always seeking innovative ways to solve real-world
                problems.
              </p>
            </div>
          </div>
          <div className="mt-16 w-full">
            <h3 className="text-2xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Tech Stack</h3>
            <motion.div 
              className="flex flex-wrap justify-center gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.3,
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="bg-zinc-800 p-4 rounded-lg text-center hover:bg-zinc-700 transition-colors border border-violet-500 w-32"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: '0 0 8px rgb(167, 139, 250)'
                  }}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1
                    }
                  }}
                >
                  <motion.div
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 2, delay: index * 0.2, repeat: Infinity, repeatDelay: 5 }}
                    className="text-3xl mb-2"
                  >
                    {skill.icon}
                  </motion.div>
                  {skill.name}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-black overflow-hidden">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Featured Projects</h2>
            <motion.div 
              ref={projectsRef}
              className="flex space-x-8"
              animate={controls}
              style={{ x }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-900 p-6 rounded-xl hover:bg-zinc-800 transition-all duration-300 border border-blue-500 shadow-lg flex-shrink-0 w-80"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  onHoverStart={() => controls.stop()}
                  onHoverEnd={() => controls.start({
                    x: [x.get(), x.get() - 1000],
                    transition: {
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                      },
                    },
                  })}
                >
                  <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-violet-400">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-purple-900 text-purple-200 text-xs px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-zinc-900 to-black">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400">Get In Touch</h2>
            <p className="text-gray-300 mb-8">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex justify-center space-x-6">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-violet-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:your.email@example.com"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2023 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}