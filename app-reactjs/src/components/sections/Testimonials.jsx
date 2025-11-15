// src/components/sections/Testimonials.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, position, company, content, rating, initials }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 card-hover"
    >
      <div className="flex items-center mb-6">
        <div className="w-14 h-14 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
          {initials}
        </div>
        <div>
          <h4 className="font-bold text-gray-800">{name}</h4>
          <p className="text-gray-600 text-sm">{position}, {company}</p>
        </div>
      </div>
      <div className="flex text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} fill="currentColor" />
        ))}
      </div>
      <p className="text-gray-600 italic">"{content}"</p>
    </motion.div>
  );
};

export const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "John Doe",
      position: t('testimonials.positions.ceo', { defaultValue: "CEO" }),
      company: "TechStart Inc",
      content: t('testimonials.content.john', { defaultValue: "Our conversion rate increased by 35% after switching to ConvertLab. The mobile optimization alone was worth the investment." }),
      rating: 5,
      initials: "JD"
    },
    {
      name: "Sarah Johnson",
      position: t('testimonials.positions.marketing', { defaultValue: "Marketing Director" }),
      company: "GrowthCo",
      content: t('testimonials.content.sarah', { defaultValue: "The SEO improvements were noticeable within weeks. We're now ranking for keywords we never thought possible." }),
      rating: 5,
      initials: "SJ"
    },
    {
      name: "Michael Roberts",
      position: t('testimonials.positions.founder', { defaultValue: "Founder" }),
      company: "EcomStore",
      content: t('testimonials.content.michael', { defaultValue: "The speed optimization made a huge difference. Our bounce rate dropped by 22% after implementing their recommendations." }),
      rating: 5,
      initials: "MR"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            {t('testimonials.title')} <span className="gradient-text">{t('testimonials.highlight')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            {t('testimonials.description')}
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};