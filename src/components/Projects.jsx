import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [flippedCard, setFlippedCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'AWS-based ETL Data Pipeline',
      description: 'Designed and deployed a scalable cloud ETL pipeline using Python and AWS services (S3, Lambda, Glue, Redshift) to automate data ingestion, transformation, and loading for analytics consumption.',
      details: 'Built serverless architecture with AWS Lambda for data processing triggers, AWS Glue for cataloging and transformations, and Redshift for data warehousing. Implemented data quality checks and error handling.',
      tags: ['Python', 'AWS S3', 'AWS Lambda', 'AWS Glue', 'Redshift', 'ETL'],
      gradient: 'from-blue-500 to-cyan-500',
      github: '#',
    },
    {
      id: 2,
      title: 'Blockchain-based E-Voting System',
      description: 'Built a decentralized, secure voting platform using Solidity smart contracts on Ethereum with hashing and public-private key encryption for vote integrity.',
      details: 'Full-stack interface with React.js and Node.js. Implemented MetaMask integration for wallet authentication, vote encryption using cryptographic hashing, and immutable vote storage on Ethereum blockchain.',
      tags: ['Solidity', 'Ethereum', 'React.js', 'Node.js', 'Web3', 'Blockchain'],
      gradient: 'from-purple-500 to-pink-500',
      github: '#',
    },
    {
      id: 3,
      title: 'Real-time Chat Application',
      description: 'Developed a real-time messaging app using Firebase Realtime Database and Firebase Authentication for instant sync.',
      details: 'Responsive UI in HTML, CSS, and JavaScript supporting multi-user concurrent chat with real-time message updates, user presence indicators, typing indicators, and message history.',
      tags: ['Firebase', 'JavaScript', 'HTML', 'CSS', 'Real-time', 'Authentication'],
      gradient: 'from-orange-500 to-red-500',
      github: '#',
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            Hover over cards to see more details • Click to flip
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="perspective-1000"
              >
                <motion.div
                  className="relative h-[400px] cursor-pointer preserve-3d"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: flippedCard === project.id ? 'rotateY(180deg)' : 'rotateY(0)',
                    transition: 'transform 0.6s',
                  }}
                  onClick={() => setFlippedCard(flippedCard === project.id ? null : project.id)}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Front of Card */}
                  <div
                    className="absolute inset-0 backface-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="h-full bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                      {/* Gradient Header */}
                      <div className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="text-white text-5xl"
                        >
                          💻
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                          {project.description}
                        </p>

                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-teal-400 rounded text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 4 && (
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs font-medium">
                              +{project.tags.length - 4}
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-gray-500 dark:text-gray-500 text-center mt-4">
                          Click to see more details
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div
                    className="absolute inset-0 backface-hidden"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <div className="h-full bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black rounded-xl shadow-xl overflow-hidden p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                          {project.details}
                        </p>

                        {/* All Tech Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-white/10 text-white rounded text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 mt-4">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.github}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold text-sm"
                        >
                          <Github size={16} />
                          GitHub
                        </motion.a>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold text-sm"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </motion.button>
                      </div>

                      <p className="text-xs text-gray-400 text-center mt-4">
                        Click to flip back
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default Projects;
