import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experience = {
    title: 'Data Engineer Intern',
    company: 'Tata Technologies',
    location: 'Pune',
    period: 'June 2026 – Present',
    responsibilities: [
      'Built ETL pipelines in Databricks using PySpark and SQL to ingest, clean, and transform manufacturing data for a Manufacturing Execution System (MES) project supporting Tata Auto Comp production and operations reporting.',
      'Designed an AWS S3-based data lake for staging and storing processed manufacturing datasets; wrote large-scale PySpark transformations and SQL-based data quality checks.',
      'Collaborated with the engineering team to build scalable, reliable pipeline workflows, reducing manual data reconciliation effort for the operations reporting team.',
    ],
  };

  return (
    <section id="experience" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-teal-400 transform md:-translate-x-1/2"></div>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative mb-8 md:mb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-600 dark:bg-teal-400 rounded-full transform -translate-x-1/2 shadow-lg">
                <div className="absolute inset-0 bg-blue-600 dark:bg-teal-400 rounded-full animate-ping opacity-75"></div>
              </div>

              {/* Content Card */}
              <div className="ml-16 md:ml-0 md:w-[calc(50%-2rem)] md:mr-auto md:pr-8">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-xl p-6 md:p-8 border border-blue-100 dark:border-gray-700"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-teal-900/30 rounded-lg">
                      <Briefcase className="text-blue-600 dark:text-teal-400" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-lg font-semibold text-blue-600 dark:text-teal-400 mb-2">
                        {experience.company}
                      </p>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {experience.period}
                        </span>
                        <span>📍 {experience.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-3 mt-6">
                    {experience.responsibilities.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="flex gap-3 text-gray-700 dark:text-gray-300 leading-relaxed"
                      >
                        <span className="text-blue-600 dark:text-teal-400 font-bold mt-1">•</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-blue-100 dark:border-gray-700">
                    {['Python', 'PySpark', 'Databricks', 'AWS S3', 'SQL', 'ETL', 'Data Lakes'].map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-blue-600 dark:bg-teal-500 text-white rounded-full text-xs font-medium shadow-md"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Mock Terminal with PySpark Command */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6 }}
            className="max-w-3xl mx-auto mt-12 bg-gray-900 rounded-lg overflow-hidden shadow-2xl"
          >
            <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm ml-2">databricks-shell</span>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="text-green-400">$ spark-submit etl_pipeline.py</div>
              <div className="text-gray-400 mt-2">
                <span className="text-blue-400">[INFO]</span> Loading manufacturing data from S3...
              </div>
              <div className="text-gray-400">
                <span className="text-yellow-400">[TRANSFORM]</span> Applying PySpark transformations...
              </div>
              <div className="text-gray-400">
                <span className="text-green-400">[SUCCESS]</span> Pipeline completed. 2.3M records processed.
              </div>
              <div className="text-green-400 mt-2 animate-pulse">▊</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
