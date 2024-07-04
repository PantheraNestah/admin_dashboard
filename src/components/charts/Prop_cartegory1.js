import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Prop_cartegory1 = ({ data }) => {
    const chartRef2 = useRef(null);

    useEffect(() => {
        const chart = new Chart(chartRef2.current, {
            type: "polarArea",
            data: {
                labels: data.map(d => d.type),
                datasets: [
                    {
                        label: "",
                        data: data.map(d => d.value),
                        backgroundColor: [
                            "rgba(253, 126, 20, 0.5)",
                            "rgba(111, 66, 193, 0.5)",
                            "rgba(25, 135, 84, 0.5)",
                        ],
                        borderWidth: 2,
                        borderColor:"rgb(255, 255, 255)",
                        hoverBorderWidth: 0
                    },
                ],
            },
            options: {
                layout: {
                    padding: 20, // Adjust padding around the chart
                },
                plugins: {
                    legend: {
                        position: 'none', // Position the legend at the bottom
                        /* align: "start",
                        labels: {
                            boxWidth: 20, // Adjust the size of the legend box
                            padding: 10, // Adjust padding between legend items
                        }, */
                    },
                },
                scales: {
                    r: {
                        angleLines: {
                            display: false, // Hide circular grid lines
                        },
                        ticks: {
                            display: false, // Hide scale labels
                        },
                        pointLabels: {
                            display: false, // Hide point labels around the chart
                        },
                        min: 0, // Minimum value for the scale
                        max: 120, // Maximum value for the scale based on data
                        grid: {
                            display: false,
                        }
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
            },
        });
        
        return () => {
            chart.destroy();
        };
    }, [data]);

    return (
        <div style={{ position: 'relative', width: '200px', height: '170px', padding: "0" }}>
            <canvas ref={chartRef2} />
        </div>
    );
};

export default Prop_cartegory1;