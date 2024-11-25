'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  // { label: 'Years Experience', value: '2+' },
  { label: 'Projects Completed', value: '15+' },
  { label: 'Technologies', value: '20+' },
  { label: 'User Scale', value: '660K+' }
];

// const experiences = [
//   {
//     title: 'Backend Developer',
//     company: 'Team Shiksha',
//     period: 'Jan 2024 - Present',
//     type: 'Remote',
//     achievements: [
//       'Led database migration POC from Firebase to MongoDB',
//       'Developed comprehensive unit and integration tests',
//       'Reduced login latency by 40% through API optimization',
//       'Improved system reliability and maintainability'
//     ]
//   }
// ];

const education = {
  degree: 'Bachelor of Technology',
  institution: 'KL University',
  location: 'Aziznagar, Hyderabad',
  period: '2020 - 2024'
};

const interests = [
  {
    title: 'Backend Development',
    description: 'Building scalable systems and optimizing performance'
  },
  {
    title: 'System Architecture',
    description: 'Designing robust and efficient software solutions'
  },
  {
    title: 'Cloud Technologies',
    description: 'Leveraging cloud services for scalable applications'
  },
  {
    title: 'AI Integration',
    description: 'Implementing AI solutions in practical applications'
  }
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate Backend Developer with expertise in building scalable systems and
            optimizing performance. Experienced in modern web technologies and cloud services.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50"
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Experience Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Professional Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                    <p className="text-blue-400">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-400">{exp.period}</div>
                    <div className="text-gray-500">{exp.type}</div>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div> */}

        {/* Education Section
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-xl font-semibold text-white">{education.degree}</h4>
                <p className="text-blue-400">{education.institution}</p>
                <p className="text-gray-400">{education.location}</p>
              </div>
              <div className="text-gray-400">{education.period}</div>
            </div>
          </div>
        </motion.div> */}

        {/* Interests/Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Areas of Focus</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50"
              >
                <h4 className="text-xl font-semibold text-white mb-2">{interest.title}</h4>
                <p className="text-gray-300">{interest.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
