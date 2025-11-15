// src/components/sections/Features.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Zap, Search, Smartphone } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, progress }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2"
    >
      <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 text-white">
        <Icon size={32} />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-primary-500 to-primary-700 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </motion.div>
  );
};

export const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Zap,
      title: t('features.speed.title'),
      description: t('features.speed.description'),
      progress: 75
    },
    {
      icon: Search,
      title: t('features.seo.title'),
      description: t('features.seo.description'),
      progress: 85
    },
    {
      icon: Smartphone,
      title: t('features.mobile.title'),
      description: t('features.mobile.description'),
      progress: 90
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            {t('features.title')} <span className="gradient-text">{t('features.highlight')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            {t('features.description')}
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};