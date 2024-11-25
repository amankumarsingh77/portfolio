'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'StreamScale',
    description: 'Architected and developed an affordable and scalable media transcoding and streaming service utilizing AWS services and Cloudflare R2 for storage.',
    longDescription: 'A sophisticated media transcoding and streaming platform designed for small and mid-scale startups. Features include pay-as-you-go pricing, minimal upfront costs, auto-scaling capabilities, and an easy-to-integrate API. The system leverages FFmpeg for high-quality transcoding and supports multiple formats and adaptive bitrate streaming.',
    tech: ['NodeJS', 'NextJS', 'AWS', 'MongoDB', 'FFmpeg', 'Cloudflare R2'],
    image: '/streaming.jpg',
    link: 'https://github.com/amankumarsingh77/streamscale',
    liveDemo: 'https://streamscale.aksdev.me/',
    metrics: [
      '35% cost reduction',
      'Multi-format support',
      'Auto-scaling',
      'REST API'
    ]
  },
  {
    title: 'GoDriveIndex',
    description: 'Engineered an efficient Google Drive indexing solution to enable high-speed search, download, and management of Google Drive contents, bypassing traditional download quota limits.',
    longDescription: 'A high-performance Google Drive indexing system that leverages Go\'s concurrency capabilities for rapid and reliable file indexing. The solution provides a streamlined interface for interacting with Drive contents and offers robust file organization and retrieval capabilities.',
    tech: ['Go', 'Google Drive API', 'Concurrency', 'RESTful API'],
    image: '/godriveindex.jpg',
    link: 'https://github.com/amankumarsingh77/godriveindex',
    liveDemo: '',
    metrics: [
      'High-speed indexing',
      'Quota bypass',
      'Concurrent processing',
      'Efficient retrieval'
    ]
  },
  {
    title: 'Studious',
    description: 'Developed and deployed an innovative exam preparation chat application for college students, featuring a robust API and an engaging, interactive frontend.',
    longDescription: 'An AI-powered exam preparation platform that utilizes chat history to continuously improve response accuracy and relevance. The system implements context embedding techniques for optimized database performance and enhanced query responsiveness.',
    tech: ['Python', 'Flask', 'React', 'MongoDB', 'Langchain'],
    image: '/studious.jpg',
    link: 'https://github.com/amankumarsingh77/studious',
    liveDemo: '',
    metrics: [
      'Improved accuracy',
      'Optimized queries',
      'Context-aware',
      'Interactive UI'
    ]
  }
];

const ProjectCard = ({ project, onClick }: { project: typeof projects[0], onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);
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
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
        <div className="h-48 bg-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-black/80"
          >
            <div className="flex items-center justify-center h-full p-6">
              <h3 className="text-2xl font-bold text-white text-center">{project.title}</h3>
            </div>
          </motion.div>
        </div>
        <div className="p-6">
          <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                +{project.tech.length - 4} more
              </span>
            )}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {project.metrics.slice(0, 2).map((metric, index) => (
              <div key={index} className="text-xs text-gray-400">
                • {metric}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, isOpen, onClose }: { 
  project: typeof projects[0], 
  isOpen: boolean, 
  onClose: () => void 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${!isOpen && 'pointer-events-none'}`}
    >
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: isOpen ? 1 : 0.9, opacity: isOpen ? 1 : 0 }}
        className="relative bg-gray-900 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold text-white mb-4">{project.title}</h2>
          <p className="text-gray-300 mb-6">{project.longDescription}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            {project.metrics.map((metric, index) => (
              <div key={index} className="bg-gray-800/50 p-3 rounded-lg">
                <div className="text-blue-400 font-medium">{metric}</div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-center hover:bg-blue-700 transition-colors"
            >
              View Source
            </a>
            <a
              href={project.liveDemo}
              target="_blank"
              hidden = {project.liveDemo === ''}
              rel="noopener noreferrer"
              className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-center hover:bg-gray-600 transition-colors"
            >
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-90" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my notable projects that showcase my expertise in building
            scalable and innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
