// src/components/charts/ConversionChart.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const ConversionChart = () => {
  const { t } = useTranslation();

  const data = {
    labels: [
      t('conversionChart.jan', { defaultValue: 'Jan' }),
      t('conversionChart.feb', { defaultValue: 'Feb' }),
      t('conversionChart.mar', { defaultValue: 'Mar' }),
      t('conversionChart.apr', { defaultValue: 'Apr' }),
      t('conversionChart.may', { defaultValue: 'May' }),
      t('conversionChart.jun', { defaultValue: 'Jun' })
    ],
    datasets: [
      {
        label: t('conversionChart.conversionRate', { defaultValue: 'Conversion Rate' }),
        data: [12, 19, 15, 22, 18, 24],
        borderColor: '#0ea5e9',
        backgroundColor: 'rgba(14, 165, 233, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#0ea5e9',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#0ea5e9',
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
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
    <div className="h-48">
      <Line data={data} options={options} />
    </div>
  );
};