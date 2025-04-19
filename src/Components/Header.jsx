import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from 'react';
import {FaGithub, FaLinkedin, FaWhatsapp} from 'react-icons/fa';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position to change header style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const social = {
    github: {
        icon: FaGithub,
      link: "https://github.com/inkinvissible",
    },
    linkedin: {
      icon: FaLinkedin,
        link: "https://www.linkedin.com/in/agust%C3%ADn-martin-40aa67312/",
    },
    whatsapp: {
        icon: FaWhatsapp,
        link: "https://wa.me/5493512050889",
    }
  }

  const menuItems = [
    { title: "Inicio", to: "home" },
    { title: "Proyectos", to: "proyectos" },
    { title: "Sobre mí", to: "about" },
    { title: "Contacto", to: "contacto" }
  ];

  const menuVariants = {
    open: {
      clipPath: "inset(0% 0% 0% 0% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.3,
        staggerChildren: 0.05
      }
    },
    closed: {
      clipPath: "inset(10% 50% 90% 50% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    open: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };

  const Path = props => (
      <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          {...props}
      />
  );

  return (
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
              ? "py-2 bg-black/80 backdrop-blur-lg shadow-lg"
              : "py-4 bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.nav
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.2 }}
              className="relative flex items-center justify-between"
          >
            {/* Logo */}
            <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
            >
              <motion.div
                  className="h-10 w-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mr-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.7 }}
              >
                <img src={logo} className="rounded-3xl" alt="Logo Agustín Martin Web"/>
              </motion.div>
              <div>
                <motion.div
                    className="text-xl font-bold text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                  Agustín Martin
                </motion.div>
                <motion.div
                    className="text-xs text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                  Desarrollador Web
                </motion.div>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, i) => (
                  <motion.div
                      key={item.to}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <ScrollLink
                        to={item.to}
                        smooth={true}
                        duration={500}
                        className="relative text-gray-200 hover:text-white px-3 py-2 cursor-pointer text-sm uppercase tracking-widest font-medium"
                    >
                      <motion.span
                          className="block"
                          whileHover={{ y: -3 }}
                          transition={{ type: "spring", stiffness: 300 }}
                      >
                        {item.title}
                      </motion.span>
                      <motion.span
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                      />
                    </ScrollLink>
                  </motion.div>
              ))}

              {/* Social Icons */}
              <motion.div
                  className="flex items-center space-x-3 pl-6 border-l border-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
              >
                {Object.values(social).map((item, i) => {
                  const Icon = item.icon;
                  return (
                      <motion.a
                          key={i}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                          whileHover={{ scale: 1.2 }}
                      >
                        <Icon size={24} />
                      </motion.a>
                  );
                })}
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex items-center justify-center h-10 w-10 rounded-full bg-gray-800/50 text-gray-200"
                aria-label="Menu"
            >
              <svg width="23" height="23" viewBox="0 0 23 23">
                <Path
                    variants={{
                      closed: { d: "M 2 2.5 L 20 2.5" },
                      open: { d: "M 3 16.5 L 17 2.5" }
                    }}
                    animate={isOpen ? "open" : "closed"}
                />
                <Path
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 }
                    }}
                    transition={{ duration: 0.1 }}
                    animate={isOpen ? "open" : "closed"}
                />
                <Path
                    variants={{
                      closed: { d: "M 2 16.346 L 20 16.346" },
                      open: { d: "M 3 2.5 L 17 16.346" }
                    }}
                    animate={isOpen ? "open" : "closed"}
                />
              </svg>
            </motion.button>
          </motion.nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={menuVariants}
                    className="absolute top-20 right-4 left-4 md:hidden bg-gray-900/95 backdrop-blur-md shadow-2xl rounded-xl p-5 border border-gray-800 overflow-hidden"
                >
                  <div className="flex flex-col space-y-4">
                    {menuItems.map((item) => (
                        <motion.div
                            key={item.to}
                            variants={itemVariants}
                            className="block"
                        >
                          <ScrollLink
                              to={item.to}
                              smooth={true}
                              duration={500}
                              className="flex items-center space-x-2 px-4 py-3 text-gray-200 hover:text-white hover:bg-gray-800/50 rounded-lg cursor-pointer transition-colors"
                              onClick={() => setIsOpen(false)}
                          >
                            <span className="h-2 w-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></span>
                            <span>{item.title}</span>
                          </ScrollLink>
                        </motion.div>
                    ))}

                    {/* Mobile Social Icons */}
                    <motion.div
                        variants={itemVariants}
                        className="pt-4 mt-4 border-t border-gray-800"
                    >
                      <div className="flex justify-center space-x-6 py-2">
                        <motion.div
                            className="flex items-center space-x-3 pl-6 border-l border-gray-700"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                          {Object.values(social).map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.a
                                    key={i}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    whileHover={{ scale: 1.2 }}
                                >
                                  <Icon size={24} />
                                </motion.a>
                            );
                          })}
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
  );
};

export default Header;