// components/Projects.jsx
import { useState, useEffect, useRef } from 'react';

const ProjectCard = ({ title, description, technologies, image, link, github }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  return (
    <div 
      ref={cardRef}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        {/* Replace with actual image */}
        <div className="absolute inset-0 bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-indigo-500 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        {/* <img src={image} alt={title} className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out scale-100 group-hover:scale-110" /> */}
        
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex space-x-3">
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-1 bg-indigo-600 text-white rounded-full text-sm hover:bg-indigo-700 transition-colors flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm hover:bg-gray-900 transition-colors flex items-center"
            >
              <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Code
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          headingRef.current.classList.remove('opacity-0', 'translate-y-5');
          setTimeout(() => {
            contentRef.current.classList.remove('opacity-0');
          }, 300);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: 'E-commerce Dashboard',
      description: 'A responsive admin dashboard with dark mode, charts, and data tables.',
      technologies: ['React', 'Tailwind CSS', 'Chart.js', 'Context API'],
      image: 'project1.jpg',
      link: 'https://example.com/demo1',
      github: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Task Management App',
      description: 'A drag-and-drop task manager with user authentication and real-time updates.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'React DnD'],
      image: 'project2.jpg',
      link: 'https://example.com/demo2',
      github: 'https://github.com/yourusername/project2',
    },
    {
      title: 'Weather Application',
      description: 'A weather app with location search, 7-day forecast, and animated weather icons.',
      technologies: ['React', 'OpenWeather API', 'Styled Components'],
      image: 'project3.jpg',
      link: 'https://example.com/demo3',
      github: 'https://github.com/yourusername/project3',
    },
    {
      title: 'Social Media Platform',
      description: 'A social network with real-time chat, post sharing, and user profiles.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      image: 'project4.jpg',
      link: 'https://example.com/demo4',
      github: 'https://github.com/yourusername/project4',
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white transition-all duration-700 transform opacity-0 translate-y-5"
        >
          My <span className="text-indigo-600">Projects</span>
        </h2>
        
        <div 
          ref={contentRef} 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-1000 opacity-0"
        >
          {projects.map((project) => (
            <ProjectCard 
              key={project.title} 
              title={project.title} 
              description={project.description} 
              technologies={project.technologies} 
              image={project.image} 
              link={project.link} 
              github={project.github} 
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;