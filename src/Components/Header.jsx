import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Inicio", to: "home" },
    { title: "Proyectos", to: "proyectos" },
    { title: "Contacto", to: "contacto" }
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: { staggerChildren: 0.1 }
    },
    closed: {
      opacity: 0,
      height: 0
    }
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 }
  };

  return (
      <header className="fixed w-full top-0 z-50 bg-white/10 border border-white/10 shadow-lg backdrop-blur-md">
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex justify-between items-center h-16">
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-xl font-bold text-gray-800"
            >
              Agustín Martin
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                  <motion.div
                      key={item.to}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                  >
                    <ScrollLink
                        to={item.to}
                        smooth={true}
                        duration={500}
                        className="text-gray-200 hover:text-gray-900 px-3 py-2 rounded-md cursor-pointer transition-colors"
                    >
                      {item.title}
                    </ScrollLink>
                  </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2"
            >
              <div className="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
              <div className="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
              <div className="w-6 h-0.5 bg-gray-600"></div>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={menuVariants}
                    className="md:hidden overflow-hidden"
                >
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
                            className="block px-4 py-2 text-gray-200 hover:bg-gray-100 cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </ScrollLink>
                      </motion.div>
                  ))}
                </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </header>
  );
};

export default Header;