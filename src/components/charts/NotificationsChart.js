import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, Filler, CategoryScale, LinearScale } from 'chart.js';

// Register the necessary components for Chart.js
ChartJS.register(Title, Tooltip, Legend, LineElement, Filler, CategoryScale, LinearScale);

const NotificationsLineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(1, 'rgba(75, 192, 192, 0.1)');

      chart.data.datasets[0].backgroundColor = gradient;
      chart.update();
    }
  }, []);

  const data = {
    labels: ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'],
    datasets: [
      {
        label: 'Notifications Sent',
        data: [12, 19, 7, 4, 14, 10, 17],
        fill: true,
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(75,192,192,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75,192,192,1)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'top',
        align: "end"
      },
    },
    scales: {
        x: {
            beginAtZero: true,
            grid: {
                display: false,
            },
            border: {
                color: 'transparent',
            },
        },
        y: {
            beginAtZero: true,
            grid: {
                display: false,
            },
            border: {
                color: 'transparent',
            },
        },
    },
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default NotificationsLineChart;
