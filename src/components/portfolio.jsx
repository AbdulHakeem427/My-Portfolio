import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Download, Menu, X, Code, Database, Globe, Smartphone, Cloud, Server, ChevronRight, Star, Zap, Heart, Coffee } from 'lucide-react';
import smartchefImage from '../assets/smartchef.jpg'; // Assuming you have an image for SmartChef AI
import chatAppImage from '../assets/chat app.png'; // Assuming you have an image for the chat application
import blogImage from '../assets/blog.jpg';
import visitorImage  from '../assets/visitor.jpg';
import productImage from '../assets/product.jpg'; // Assuming you have an image for the blog application
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };
  const downloadResume = () => {
    // Method 1: Local file download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Abdul_Hakeem_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Method 2: If using Google Drive, uncomment below and comment above
    // window.open('https://drive.google.com/uc?export=download&id=your-file-id', '_blank');
  };

  const skills = [
    { name: 'Java', icon: <Code className="w-6 h-6" />, level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'Spring Boot', icon: <Code className="w-6 h-6" />, level: 90, color: 'from-green-500 to-emerald-500' },
    { name: 'Servlets & JSP', icon: <Code className="w-6 h-6" />, level: 90, color: 'from-blue-500 to-indigo-500' },
    { name: 'RESTful API', icon: <Globe className="w-6 h-6" />, level: 90, color: 'from-purple-500 to-violet-500' },
    { name: 'React', icon: <Code className="w-6 h-6" />, level: 90, color: 'from-cyan-500 to-blue-500' },
    { name: 'Git/GitHub', icon: <Github className="w-6 h-6" />, level: 95, color: 'from-gray-600 to-gray-800' },
    { name: 'Responsive Design', icon: <Smartphone className="w-6 h-6" />, level: 100, color: 'from-pink-500 to-rose-500' },
    { name: 'MySQL/MongoDB', icon: <Database className="w-6 h-6" />, level: 80, color: 'from-yellow-500 to-orange-500' },
    { name: 'Docker', icon: <Cloud className="w-6 h-6" />, level: 90, color: 'from-blue-600 to-blue-700' },
    { name: 'Kubernetes', icon: <Server className="w-6 h-6" />, level: 90, color: 'from-indigo-600 to-purple-600' },
    { name: 'Distributed Systems', icon: <Globe className="w-6 h-6" />, level: 70, color: 'from-teal-500 to-cyan-500' },
    { name: 'Polarion ALM Plugin', icon: <Zap className="w-6 h-6" />, level: 95, color: 'from-emerald-500 to-green-500' }
  ];

  const projects = [
    
    {
      title: 'RESTful Product API (Scalable & High-Performance)',
      description: 'Engineered a production-ready REST API with dynamic, multi-criteria filtering (JPA Specifications) and high-performance pagination to handle large-scale datasets efficiently.',
      technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'RESTful APIs', 'Maven'],
      github: 'https://github.com/AbdulHakeem427/RESTful-Product-API',
      demo: '#',
      image: productImage,
      featured: true
    },
    {
      title: 'Real-Time Visitor Analytics System (Event-Driven)',
      description: 'Developed a full-stack analytics dashboard using Node.js. Engineered a bidirectional, real-time communication layer using WebSockets to ingest and display live visitor events.',
      technologies: ['Node.js', 'Express.js', 'WebSockets', 'HTML/CSS'],
      github: 'https://github.com/AbdulHakeem427/visitor-analytics-system',
      demo: '#',
      image: visitorImage,
      featured: true
    },
    {
      title: 'Blogging App (Full-Stack with Security)',
      description: 'Architected a secure, feature-driven application using Spring Boot. Implemented a stateless authentication/authorization system from the ground up with Spring Security and JWT.',
      technologies: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'JPA'],
      github: 'https://github.com/AbdulHakeem427/spring-boot-blogapp',
      demo: '#',
      image: blogImage,
      featured: true
    },
    {
  title: 'SmartChef AI - Ask AI & Recipe Generator',
  description: 'A full-stack application that leverages AI to generate recipes based on user queries. It features a recipe generator, and a user-friendly interface built with React and Tailwind CSS.',
  technologies: ['Java', 'Spring Boot', 'React', 'Spring AI', 'Deepseek', 'Tailwind CSS'],
  github: 'https://github.com/AbdulHakeem427/Spring-ai-react',
  demo: '#',
  image: smartchefImage,
  featured: true
},
{
  title: 'Real-Time Chat Application (WebSockets)',
  description: 'A real-time chat application that allows users to communicate instantly. It is built with Spring Boot and WebSockets for the backend, and HTML/CSS with JavaScript for the frontend.',
  technologies: ['Spring Boot', 'WebSockets', 'HTML/CSS', 'JavaScript'],
  github: 'https://github.com/AbdulHakeem427/spring-boot-chat-app',
  demo: '#',
  image: chatAppImage,
  featured: true
}
];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-100 overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl animate-pulse"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-2xl animate-bounce" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-green-500/5 to-teal-500/5 blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Abdul Hakeem
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === item 
                      ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/25' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 rounded-b-2xl">
              <div className="px-4 pt-4 pb-6 space-y-2">
                {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="capitalize block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 w-full text-left rounded-lg transition-all duration-300"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <div className={`mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Enhanced Profile Image */}
            <div className="relative group mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 animate-pulse"></div>
              <div className="relative w-40 h-40 mx-auto rounded-full border-4 border-white/20 backdrop-blur-sm bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-2xl">
                <div className="w-28 h-28 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-inner">
                  <span className="text-3xl font-bold text-white">AH</span>
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Abdul Hakeem
              </span>
            </h1>
            
            <div className="mb-8">
              <p className="text-2xl md:text-3xl mb-4 font-light">
                <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                  Java Software Engineer
                </span>
              </p>
              <div className="flex items-center justify-center gap-2 text-cyan-400 mb-6">
                <Coffee className="w-5 h-5 animate-bounce" />
                <span className="text-lg">Crafting digital experiences</span>
                <Heart className="w-5 h-5 animate-pulse text-red-400" />
              </div>
            </div>

            <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-300 leading-relaxed">
             I love turning ideas into scalable, beautiful applications and continuously exploring the latest in technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
              >
                View My Work
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={downloadResume} className="group border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-400/25">
                <Download   className="w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative p-4 bg-gray-900/50 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-72 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700">
                    <div className="text-6xl font-bold text-cyan-400">AH</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-6">
                Java Developer & 
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Tech Enthusiast</span>
              </h3>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  I'm a Java Developer with expertise in building scalable RESTful APIs and cloud-native applications. Skilled in Java, Spring Boot, React, and SQL, I specialize in designing end-to-end solutions that combine robust backends with dynamic user interfaces.
                </p>
                <p className="text-lg">
                  Experienced in containerizing microservices with Docker and Kubernetes for efficient cloud deployments, I thrive on solving complex problems and delivering high-performance software solutions.
                </p>
                <p className="text-lg">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or learning about the latest trends in Backend development.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center p-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                  <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                  <span className="text-gray-300">India, IN</span>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                  <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                  <span className="text-gray-300">9347557332</span>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 sm:col-span-2">
                  <Mail className="w-5 h-5 mr-3 text-cyan-400" />
                  <span className="text-gray-300">aabdulhakeem427@email.com</span>
                </div>
                
              </div>
             
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Here are the technologies and tools I'm proficient in and continuously learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="group bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/10 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`text-white p-2 rounded-lg bg-gradient-to-r ${skill.color} mr-3 group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
                
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Proficiency</span>
                    <span className="font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                    <div
                      className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out shadow-lg`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                My Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Here are some of the projects I've worked on that demonstrate my skills and passion for development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/10 hover:-translate-y-3 ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  </div>
                )}
                
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 border border-cyan-400/30 px-3 py-1 rounded-full text-xs font-medium hover:bg-cyan-400/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105 group"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105 group"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-cyan-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Passionate about building, learning, and sharing—always open to opportunities, projects, and conversations in tech.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-400/50 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/10">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Let's Connect</h3>
              <p className="text-lg text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                aabdulhakeem427@email.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 text-gray-300 py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>by Abdul Hakeem</span>
          </div>
          <p className="text-sm">&copy; 2024 Abdul Hakeem. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;