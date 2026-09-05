import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      degree: 'B.E. in Data Engineering',
      institution: 'Universal College of Engineering',
      period: '2022 – 2026',
      icon: '🎓',
    },
    {
      degree: 'H.S.C., Computer Science',
      institution: 'Vidya Niketan High School',
      period: '2020 – 2022',
      score: '77.33%',
      icon: '📚',
    },
    {
      degree: 'S.S.C.',
      institution: 'Mount Carmel Convent High School, Chandrapur',
      period: '2020',
      score: '72.88%',
      icon: '📖',
    },
  ];

  const certifications = [
    {
      title: 'Deloitte Data Analytics Job Simulation',
      issuer: 'Forage',
      icon: '📊',
    },
    {
      title: 'Python for Data Science',
      issuer: 'Great Learning Academy',
      icon: '🐍',
    },
    {
      title: 'AWS Academy Cloud Architecting',
      issuer: 'Amazon Web Services',
      icon: '☁️',
    },
  ];

  return (
    <section id="education" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Education & Certifications
            </span>
          </h2>

          {/* Education Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <GraduationCap className="text-blue-600 dark:text-teal-400" size={32} />
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Education</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: idx * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-lg border border-blue-100 dark:border-gray-700"
                >
                  <div className="text-5xl mb-4 text-center">{edu.icon}</div>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2 text-center">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-600 dark:text-teal-400 font-semibold text-center mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm text-center mb-2">
                    {edu.period}
                  </p>
                  {edu.score && (
                    <div className="mt-3 text-center">
                      <span className="inline-block px-4 py-1 bg-blue-600 dark:bg-teal-500 text-white rounded-full text-sm font-semibold">
                        {edu.score}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <div className="flex items-center gap-3 mb-8 justify-center">
              <Award className="text-blue-600 dark:text-teal-400" size={32} />
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Certifications</h3>
            </div>

            {/* Horizontal Scrollable Carousel */}
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-6 pb-4"
                style={{ overflowX: 'auto' }}
              >
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.6 + idx * 0.15 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="flex-shrink-0 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border-2 border-blue-200 dark:border-teal-700"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{cert.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">
                          {cert.title}
                        </h4>
                        <p className="text-blue-600 dark:text-teal-400 font-medium text-sm">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="px-4 py-1 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full text-xs font-semibold"
                        >
                          ✓ Certified
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Scroll Hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1 }}
              className="text-center text-gray-500 dark:text-gray-500 text-sm mt-4"
            >
              Scroll horizontally to view all certifications →
            </motion.p>
          </div>
        </motion.div>
      </div>

      <style>{`
        /* Custom scrollbar for certifications */
        #education [style*="overflowX"]::-webkit-scrollbar {
          height: 8px;
        }
        #education [style*="overflowX"]::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        #education [style*="overflowX"]::-webkit-scrollbar-thumb {
          background: linear-gradient(to right, #3b82f6, #14b8a6);
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default Education;
