import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'adityathakur7803@gmail.com',
      href: 'mailto:adityathakur7803@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-8793937803',
      href: 'tel:+918793937803',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chandrapur, Maharashtra, India',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:adityathakur7803@gmail.com',
      color: 'hover:text-red-600 dark:hover:text-red-400',
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 text-lg">
            Let's build something with data
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I'm actively seeking full-time Data Engineer opportunities starting July 2026.
                Feel free to reach out for collaborations, opportunities, or just to connect!
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4"
                  >
                    <div className="p-3 bg-blue-100 dark:bg-teal-900/30 rounded-lg">
                      <item.icon className="text-blue-600 dark:text-teal-400" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-500">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-800 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-teal-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-800 dark:text-gray-200 font-medium">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 bg-white dark:bg-gray-900 rounded-full shadow-lg text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8">
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-700 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400">
              © 2026 Aditya Singh Thakur. Built with React, Tailwind CSS & Framer Motion.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
              Designed for data engineers who build the future
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
