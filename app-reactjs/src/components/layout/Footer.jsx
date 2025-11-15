// src/components/layout/Footer.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              ConvertLab
            </h3>
            <p className="text-gray-400">
              {t('footer.description', { defaultValue: 'We build high-converting landing pages with focus on speed, SEO, and mobile optimization.' })}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('footer.services', { defaultValue: 'Services' })}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">{t('footer.landingPageDesign', { defaultValue: 'Landing Page Design' })}</a></li>
              <li><a href="#" className="hover:text-white transition">{t('footer.conversionOptimization', { defaultValue: 'Conversion Optimization' })}</a></li>
              <li><a href="#" className="hover:text-white transition">{t('footer.seoServices', { defaultValue: 'SEO Services' })}</a></li>
              <li><a href="#" className="hover:text-white transition">{t('footer.speedOptimization', { defaultValue: 'Speed Optimization' })}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('footer.company', { defaultValue: 'Company' })}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">{t('footer.aboutUs', { defaultValue: 'About Us' })}</a></li>
              <li><a href="#" className="hover:text-white transition">{t('footer.caseStudies', { defaultValue: 'Case Studies' })}</a></li>
              <li><a href="#" className="hover:text-white transition">{t('footer.blog', { defaultValue: 'Blog' })}</a></li>
              <li><a href="#" className="hover:text-white transition">{t('footer.contact', { defaultValue: 'Contact' })}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('footer.connect', { defaultValue: 'Connect' })}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2023 ConvertLab. {t('footer.rights', { defaultValue: 'All rights reserved.' })}</p>
        </div>
      </div>
    </footer>
  );
};