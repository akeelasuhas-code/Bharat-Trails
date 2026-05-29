'use client';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
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

interface AltitudeChartProps {
  data: number[];
  labels: string[];
  title: string;
}

export default function AltitudeChart({ data, labels, title }: AltitudeChartProps) {
  const chartData = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Altitude (meters)',
        data,
        borderColor: '#7D9E7E',
        backgroundColor: 'rgba(125, 158, 126, 0.2)',
        tension: 0.4,
        pointBackgroundColor: '#2D4A3E',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: title,
        font: {
          family: "'Cormorant Garamond', serif",
          size: 20
        },
        color: '#2D4A3E'
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Meters'
        }
      }
    }
  };

  return <div style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '8px' }}>
    <Line options={options} data={chartData} />
  </div>;
}
