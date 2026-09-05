import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Cloud, Server } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = {
    'Programming Languages': ['Python', 'SQL', 'PySpark', 'JavaScript', 'C++', 'C', 'HTML', 'CSS'],
    'Big Data & Cloud': ['Databricks', 'Apache Spark', 'AWS S3'],
    'Libraries & Frameworks': ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Matplotlib'],
    'Databases': ['MySQL', 'MongoDB', 'Firebase Realtime Database'],
    'Tools & Platforms': ['GitHub', 'Power BI', 'Databricks', 'Linux Ubuntu', 'Windows'],
  };

  const iconMap = {
    'Programming Languages': Code2,
    'Big Data & Cloud': Cloud,
    'Libraries & Frameworks': Server,
    'Databases': Database,
    'Tools & Platforms': Server,
  };

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="max-w-3xl mx-auto mb-12">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed"
            >
              Data Engineering graduate with hands-on internship experience building production ETL pipelines
              at Tata Technologies using Python, PySpark, Databricks, and AWS. Skilled in end-to-end data pipeline
              design, SQL transformations, and cloud data lake architecture. Actively seeking a full-time Data
              Engineer role starting July 2026.
            </motion.p>
          </div>

          {/* Skills Section */}
          <div className="mt-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-200"
            >
              Technical Skills
            </motion.h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items], idx) => {
                const Icon = iconMap[category];
                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.1 * idx }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 dark:bg-teal-900/30 rounded-lg">
                        <Icon className="text-blue-600 dark:text-teal-400" size={24} />
                      </div>
                      <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                        {category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-blue-50 dark:bg-gray-800 text-blue-700 dark:text-teal-300 rounded-full text-sm font-medium border border-blue-200 dark:border-teal-700 transition-all duration-200 hover:bg-blue-100 dark:hover:bg-gray-700"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Currently Exploring Ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg p-4 overflow-hidden"
          >
            <div className="flex items-center gap-4 text-white">
              <span className="font-semibold whitespace-nowrap">Currently Exploring:</span>
              <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="flex gap-8 whitespace-nowrap"
              >
                <span>Advanced Data Engineering Patterns</span>
                <span>•</span>
                <span>Real-time Stream Processing</span>
                <span>•</span>
                <span>Data Mesh Architecture</span>
                <span>•</span>
                <span>MLOps & Model Deployment</span>
                <span>•</span>
                <span>Advanced Data Engineering Patterns</span>
                <span>•</span>
                <span>Real-time Stream Processing</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
