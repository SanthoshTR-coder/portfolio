import { useState, useEffect, useRef } from 'react';

const SkillBar = ({ skill, level, color }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTimeout(() => {
            setWidth(level);
          }, 300);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [level]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
        <span className="text-gray-600 dark:text-gray-400 text-sm">{level}%</span>
      </div>
      <div ref={barRef} className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full ${color}`}
          style={{ width: `${width}%`, transition: 'width 1s ease-in-out' }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
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

  const frontendSkills = [
    { skill: 'React', level: 90, color: 'bg-blue-600' },
    { skill: 'JavaScript', level: 85, color: 'bg-yellow-500' },
    { skill: 'TypeScript', level: 80, color: 'bg-blue-500' },
    { skill: 'HTML & CSS', level: 95, color: 'bg-orange-500' },
  ];

  const toolsSkills = [
    { skill: 'Tailwind CSS', level: 88, color: 'bg-teal-500' },
    { skill: 'Git & GitHub', level: 85, color: 'bg-gray-800' },
    { skill: 'Webpack/Vite', level: 75, color: 'bg-purple-600' },
    { skill: 'Figma', level: 70, color: 'bg-pink-500' },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white transition-all duration-700 transform opacity-0 translate-y-5"
        >
          My <span className="text-indigo-600">Skills</span>
        </h2>
        
        <div 
          ref={contentRef} 
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-opacity duration-1000 opacity-0"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Frontend Development</h3>
              {frontendSkills.map((skill) => (
                <SkillBar 
                  key={skill.skill} 
                  skill={skill.skill} 
                  level={skill.level} 
                  color={skill.color} 
                />
              ))}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Tools & Technologies</h3>
              {toolsSkills.map((skill) => (
                <SkillBar 
                  key={skill.skill} 
                  skill={skill.skill} 
                  level={skill.level} 
                  color={skill.color} 
                />
              ))}
            </div>
          </div>
          
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Other Skills</h3>
            <div className="flex flex-wrap gap-3">
              {['Redux', 'Next.js', 'SASS', 'Jest', 'GraphQL', 'Node.js', 'Express', 'MongoDB', 'RESTful APIs', 'Responsive Design', 'UI/UX', 'Performance Optimization'].map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;