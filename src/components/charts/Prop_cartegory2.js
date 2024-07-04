import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Prop_cartegory2 = ({ data }) => {
    const chartRef3 = useRef(null);

    useEffect(() => {
        const chart = new Chart(chartRef3.current, {
            type: "doughnut",
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
                plugins: {
                    legend: {
                        position: 'none',
                    },
                },
            },
        });

        return () => {
            chart.destroy();
        };
    }, [data]);

    return (
        <div className="col-6"  style={{ position: 'relative', height: '150px', padding: "0" }}>
            <canvas ref={chartRef3} />
        </div>
    );
};

export default Prop_cartegory2;