// src/components/layout/Header.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold gradient-text flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            ConvertLab
          </a>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-primary-600 transition font-medium">
            {t('nav.features')}
          </a>
          <a href="#benefits" className="text-gray-600 hover:text-primary-600 transition font-medium">
            {t('nav.benefits')}
          </a>
          <a href="#results" className="text-gray-600 hover:text-primary-600 transition font-medium">
            {t('nav.results')}
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-primary-600 transition font-medium">
            {t('nav.pricing')}
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <a href="#" className="text-gray-600 hover:text-primary-600 hidden md:block font-medium">
            {t('nav.login')}
          </a>
          <Button>
            {t('nav.getStarted')}
          </Button>
        </div>
      </div>
    </motion.header>
  );
};