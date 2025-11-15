// src/components/charts/PerformanceChart.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const PerformanceChart = () => {
  const { t } = useTranslation();

  const data = {
    labels: [
      t('performanceChart.loadTime', { defaultValue: 'Load Time' }),
      t('performanceChart.bounceRate', { defaultValue: 'Bounce Rate' }),
      t('performanceChart.conversions', { defaultValue: 'Conversions' }),
      t('performanceChart.pageViews', { defaultValue: 'Page Views' }),
      t('performanceChart.seoRank', { defaultValue: 'SEO Rank' })
    ],
    datasets: [
      {
        label: t('performanceChart.before', { defaultValue: 'Before' }),
        data: [3.2, 65, 12, 45, 28],
        backgroundColor: 'rgba(148, 163, 184, 0.8)',
        borderColor: 'rgba(148, 163, 184, 1)',
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: t('performanceChart.after', { defaultValue: 'After' }),
        data: [1.2, 33, 24, 68, 12],
        backgroundColor: 'rgba(14, 165, 233, 0.8)',
        borderColor: 'rgba(14, 165, 233, 1)',
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#6b7280',
          usePointStyle: true,
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: '#6b7280',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6b7280',
        },
      },
    },
  };

  return (
    <div className="h-64">
      <Bar data={data} options={options} />
    </div>
  );
};