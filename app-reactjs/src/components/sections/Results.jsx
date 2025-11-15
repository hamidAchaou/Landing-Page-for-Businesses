// src/components/sections/Results.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PerformanceChart } from '../charts/PerformanceChart';

export const Results = () => {
  const { t } = useTranslation();

  const benefits = t('results.benefits', { returnObjects: true });

  return (
    <section id="results" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            >
              {t('results.title')} <span className="gradient-text">{t('results.highlight')}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              {t('results.description')}
            </motion.p>
            <div className="space-y-6">
              {Array.isArray(benefits) && benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                      <Check size={16} className="text-primary-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-600">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-xl p-6 card-hover"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-800 text-lg">{t('results.chartTitle', { defaultValue: 'Performance Metrics' })}</h3>
                <div className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded-full">
                  {t('results.last30Days', { defaultValue: 'Last 30 days' })}
                </div>
              </div>
              <PerformanceChart />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-gradient-to-r from-primary-500 to-primary-700 text-white p-4 rounded-xl glow">
                  <p className="text-sm opacity-90">{t('results.bounceRate', { defaultValue: 'Bounce Rate' })}</p>
                  <p className="text-2xl font-bold">-32%</p>
                </div>
                <div className="bg-gradient-to-r from-primary-500 to-primary-700 text-white p-4 rounded-xl glow">
                  <p className="text-sm opacity-90">{t('results.pageViews', { defaultValue: 'Page Views' })}</p>
                  <p className="text-2xl font-bold">+47%</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};