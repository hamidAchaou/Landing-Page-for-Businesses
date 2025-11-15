// src/components/layout/Header.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';

export const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#features', label: t('nav.features') },
    { href: '#benefits', label: t('nav.benefits') },
    { href: '#results', label: t('nav.results') },
    { href: '#pricing', label: t('nav.pricing') },
  ];

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const navItemVariants = {
    hover: {
      y: -2,
      color: "#0ea5e9",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg py-2 border-b border-gray-100' 
          : 'bg-white/90 backdrop-blur-md shadow-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <a 
              href="#" 
              className="flex items-center space-x-3 group"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-white" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
                <div className="absolute -inset-1 bg-primary-200 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-300 -z-10"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                ConvertLab
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                variants={navItemVariants}
                whileHover="hover"
                className="relative px-4 py-2 text-gray-700 font-medium rounded-lg transition-colors duration-200 hover:text-primary-600"
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-gray-600 hover:text-primary-600 font-medium px-3 py-2 rounded-lg transition-colors duration-200"
            >
              {t('nav.login')}
            </motion.a>
            
            <Button 
              variant="primary"
              size="md"
              className="shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {t('nav.getStarted')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
          >
            <motion.span
              animate={{ 
                rotate: isMobileMenuOpen ? 45 : 0, 
                y: isMobileMenuOpen ? 6 : 0 
              }}
              className="w-5 h-0.5 bg-gray-600 rounded-full"
            />
            <motion.span
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              className="w-5 h-0.5 bg-gray-600 rounded-full"
            />
            <motion.span
              animate={{ 
                rotate: isMobileMenuOpen ? -45 : 0, 
                y: isMobileMenuOpen ? -6 : 0 
              }}
              className="w-5 h-0.5 bg-gray-600 rounded-full"
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 border-t border-gray-200 mt-4">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileHover={{ x: 4 }}
                      className="text-lg font-medium text-gray-700 hover:text-primary-600 py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  
                  <div className="pt-4 border-t border-gray-200 space-y-4">
                    <LanguageSwitcher />
                    
                    <a
                      href="#"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-lg font-medium text-gray-700 hover:text-primary-600 py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200"
                    >
                      {t('nav.login')}
                    </a>
                    
                    <Button 
                      variant="primary"
                      size="md"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full justify-center"
                    >
                      {t('nav.getStarted')}
                    </Button>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};