// src/components/sections/CTA.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { CheckCircle, Send, Star } from 'lucide-react';

export const CTA = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '' });
      setIsSubmitting(false);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    t('cta.benefits.freeConsultation', { defaultValue: 'Free 30-minute consultation' }),
    t('cta.benefits.customQuote', { defaultValue: 'Custom quote for your project' }),
    t('cta.benefits.noObligation', { defaultValue: 'No obligation, no credit card' })
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent-300 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-400 rounded-full filter blur-3xl"></div>
      </div>

      {/* Floating Stars */}
      <div className="absolute top-20 left-20 opacity-20">
        <Star className="w-6 h-6 text-yellow-300 animate-pulse" />
      </div>
      <div className="absolute bottom-32 right-32 opacity-20">
        <Star className="w-4 h-4 text-yellow-300 animate-pulse" fill="currentColor" />
      </div>
      <div className="absolute top-40 right-40 opacity-20">
        <Star className="w-5 h-5 text-yellow-300 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                <span className="text-sm font-medium">{t('cta.badge', { defaultValue: 'Limited Time Offer' })}</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                {t('cta.title')}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl mb-8 opacity-90 max-w-lg"
              >
                {t('cta.description')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4 mb-8"
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={14} className="text-white" />
                    </div>
                    <span className="text-white/90">{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-center space-x-6 text-white/70"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-2 border-primary-800"
                      ></div>
                    ))}
                  </div>
                  <span className="text-sm">{t('cta.trustedBy', { defaultValue: 'Trusted by 2,500+ businesses' })}</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                {/* Form Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-400 rounded-full filter blur-3xl opacity-20 -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-400 rounded-full filter blur-3xl opacity-20 translate-y-12 -translate-x-12"></div>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle size={32} className="text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {t('cta.success.title', { defaultValue: 'Thank You!' })}
                      </h3>
                      <p className="text-white/80 mb-6">
                        {t('cta.success.message', { defaultValue: 'We\'ve received your request and will contact you within 24 hours.' })}
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-primary-600"
                      >
                        {t('cta.success.cta', { defaultValue: 'Send Another Message' })}
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl font-bold text-white mb-2 text-center"
                      >
                        {t('cta.form.title', { defaultValue: 'Get Your Free Quote' })}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/70 text-center mb-8"
                      >
                        {t('cta.form.subtitle', { defaultValue: 'Fill out the form and we\'ll get back to you ASAP' })}
                      </motion.p>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <Input
                            type="text"
                            name="name"
                            placeholder={t('cta.form.name')}
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/5 border-white/20 text-white placeholder-white/50 focus:bg-white/10 focus:border-white/40"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <Input
                            type="email"
                            name="email"
                            placeholder={t('cta.form.email')}
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/5 border-white/20 text-white placeholder-white/50 focus:bg-white/10 focus:border-white/40"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <Input
                            type="text"
                            name="company"
                            placeholder={t('cta.form.company')}
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full bg-white/5 border-white/20 text-white placeholder-white/50 focus:bg-white/10 focus:border-white/40"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <Button
                            type="submit"
                            size="lg"
                            className="w-full bg-white text-primary-600 hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 font-bold text-lg py-4"
                            loading={isSubmitting}
                          >
                            {!isSubmitting && <Send size={20} className="mr-2" />}
                            {t('cta.form.button')}
                          </Button>
                        </motion.div>

                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 }}
                          className="text-white/50 text-center text-sm"
                        >
                          {t('cta.form.note')}
                        </motion.p>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};