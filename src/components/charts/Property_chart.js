import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PropertyChart = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chart = new Chart(chartRef.current, {
            type: 'bar',
            data: {
                labels: data.map(d => d.month),
                datasets: [{
                    label: 'Property',
                    data: data.map(d => d.value),
                    barThickness: 10,
                    borderRadius: 8,
                    backgroundColor: 'rgba(253, 126, 20, 0.5)',
                }]
            },
            options: {
                scales: {
                    x: {
                        grid: {
                            display: false,  // Disable x-axis grid lines
                        },
                        ticks: {
                            callback: function(value, index) {
                                // Show label every 2nd item (0, 2, 4, ...)
                                return index % 2 === 0 ? this.getLabelForValue(value) : '';
                            },
                            color: 'rgba(0, 0, 0, 0.5)',
                        }
                    },
                    y: {
                        beginAtZero: true,
                        grid: {
                            display: false,  // Disable y-axis grid lines
                        },
                        display: false,  // Hide y-axis
                    }
                },
                plugins: {
                    legend: {
                        position: "top",
                        align: "start"
                    }
                }
            }
        });

        return () => {
            chart.destroy();
        };
    }, [data]);

    return <canvas ref={chartRef} />;
};

export default PropertyChart;