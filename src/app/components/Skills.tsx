'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = {
  'Languages & Core': {
    expertise: 85,
    technologies: [
      { name: 'JavaScript', level: 'Proficient', description: 'Modern ES6+, async programming, DOM manipulation' },
      { name: 'Python', level: 'Proficient', description: 'Backend development, API integration, data processing' },
      { name: 'Java', level: 'Intermediate', description: 'Object-oriented programming, application development' },
      { name: 'Go', level: 'Intermediate', description: 'Concurrent programming, API development' },
      { name: 'HTML/CSS', level: 'Proficient', description: 'Semantic markup, responsive design, modern CSS features' }
    ]
  },
  'Frameworks & Libraries': {
    expertise: 80,
    technologies: [
      { name: 'React/Next.js', level: 'Proficient', description: 'Modern application architecture, SSR/SSG, performance optimization' },
      { name: 'Node.js', level: 'Proficient', description: 'Server-side development, RESTful APIs, real-time applications' },
      { name: 'Flask', level: 'Intermediate', description: 'Python web framework, API development' },
      { name: 'Tailwind CSS', level: 'Intermediate', description: 'Utility-first CSS, responsive design' },
      { name: 'Langchain', level: 'Intermediate', description: 'LLM applications, AI integration' }
    ]
  },
  'Database & Cloud': {
    expertise: 75,
    technologies: [
      { name: 'MongoDB', level: 'Proficient', description: 'Database design, aggregation pipelines' },
      { name: 'Firebase', level: 'Intermediate', description: 'Real-time database, authentication' },
      { name: 'PostgreSQL', level: 'Intermediate', description: 'Relational database design, queries' },
      { name: 'AWS', level: 'Intermediate', description: 'S3, Lambda, cloud infrastructure' },
      { name: 'Docker', level: 'Intermediate', description: 'Containerization, basic orchestration' }
    ]
  },
  'DevOps & Tools': {
    expertise: 75,
    technologies: [
      { name: 'Git & GitHub', level: 'Proficient', description: 'Version control, collaboration workflows' },
      { name: 'Testing', level: 'Intermediate', description: 'Unit testing, integration testing' },
      { name: 'API Design', level: 'Intermediate', description: 'RESTful architecture, documentation' },
      { name: 'System Design', level: 'Intermediate', description: 'Scalable architectures, performance optimization' },
      { name: 'CI/CD', level: 'Intermediate', description: 'Automated deployment, continuous integration' }
    ]
  }
};

const levelColors = {
  'Proficient': 'from-blue-500 to-blue-400',
  'Intermediate': 'from-purple-500 to-purple-400',
  'Learning': 'from-gray-500 to-gray-400'
};

const SkillCard = ({ name, level, description }: { 
  name: string; 
  level: string; 
  description: string;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <div className="p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h4 className="text-lg font-semibold text-white">{name}</h4>
            <p className="text-sm text-gray-400 mt-1 line-clamp-2 group-hover:line-clamp-none transition-all">
              {description}
            </p>
          </div>
          <span className={`px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r ${levelColors[level as keyof typeof levelColors]} bg-opacity-20 text-white`}>
            {level}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ 
  title, 
  expertise, 
  technologies,
  isVisible 
}: { 
  title: string; 
  expertise: number; 
  technologies: { name: string; level: string; description: string; }[];
  isVisible: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="flex items-center gap-2">
          <div className="text-sm text-gray-400">Expertise</div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
            <span className="text-blue-400 font-bold">{expertise}%</span>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {technologies.map((tech) => (
          <SkillCard
            key={tech.name}
            name={tech.name}
            level={tech.level}
            description={tech.description}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-90" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My technical expertise spans across various domains of software development,
            with a strong focus on modern web technologies and scalable architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, { expertise, technologies }]) => (
            <SkillCategory
              key={category}
              title={category}
              expertise={expertise}
              technologies={technologies}
              isVisible={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
