import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
            Aman Kumar Singh
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-400 mb-8">
            Software Engineer & Full Stack Developer
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center space-x-4"
        >
          <a
            href="https://github.com/amankumarsingh77"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/amankumarsingh77"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            LinkedIn
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Passionate about building scalable systems and creating impactful solutions.
            Experienced in full-stack development with a focus on performance and user experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
