// src/components/sections/Hero.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ConversionChart } from '../charts/ConversionChart';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="gradient-bg text-white pt-24 pb-32 relative overflow-hidden" style={{ minHeight: '80vh' }}>
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse-slow"></span>
              <span className="text-sm font-medium">{t('hero.badge')}</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              {t('hero.title')}{' '}
              <span className="text-yellow-300">{t('hero.highlight')}</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8 opacity-90 max-w-lg"
            >
              {t('hero.description')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button 
                href="#contact" 
                variant="primary" 
                size="lg"
                className="text-center"
              >
                {t('hero.cta.primary')}
              </Button>
              <Button 
                href="#features" 
                variant="outline" 
                size="lg"
                className="flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                {t('hero.cta.secondary')}
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center mt-8 space-x-6"
            >
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full border-2 border-white"></div>
              </div>
              <p className="text-white/80 text-sm">
                {t('hero.companies', { count: 2500 })}
              </p>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md animate-float relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-gray-800">
                    {t('hero.dashboard.title', { defaultValue: 'Conversion Dashboard' })}
                  </h3>
                  <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    {t('hero.dashboard.live', { defaultValue: 'Live' })}
                  </div>
                </div>
                <ConversionChart />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-primary-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600">
                      {t('hero.dashboard.conversionRate', { defaultValue: 'Conversion Rate' })}
                    </p>
                    <p className="text-xl font-bold text-primary-700">24.7%</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600">
                      {t('hero.dashboard.pageLoadTime', { defaultValue: 'Page Load Time' })}
                    </p>
                    <p className="text-xl font-bold text-green-700">1.2s</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary-200 rounded-2xl transform rotate-3"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};