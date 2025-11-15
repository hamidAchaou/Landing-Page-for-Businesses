// src/components/sections/CTA.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export const CTA = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your interest! We will contact you shortly.');
      setFormData({ name: '', email: '', company: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 gradient-bg text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary-300 rounded-full filter blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          {t('cta.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl mb-8 max-w-2xl mx-auto"
        >
          {t('cta.description')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input 
              type="text" 
              name="name"
              placeholder={t('cta.form.name')}
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full"
            />
            <Input 
              type="email" 
              name="email"
              placeholder={t('cta.form.email')}
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
            />
            <Input 
              type="text" 
              name="company"
              placeholder={t('cta.form.company')}
              value={formData.company}
              onChange={handleChange}
              className="w-full"
            />
            <Button 
              type="submit" 
              size="lg" 
              className="w-full"
              loading={isSubmitting}
            >
              {t('cta.form.button')}
            </Button>
            <p className="text-gray-500 text-sm">{t('cta.form.note')}</p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};