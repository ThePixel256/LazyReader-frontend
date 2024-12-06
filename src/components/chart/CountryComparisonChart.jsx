import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Registra los componentes de chart.js necesarios
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CountryComparisonChart = ({ data }) => {
    // Procesar los datos para contar clientes por país
    const countryCounts = {};

    data.forEach(client => {
        const country = client.pais; // Asumimos que 'pais' es el campo que contiene el país del cliente
        if (country) {
            countryCounts[country] = (countryCounts[country] || 0) + 1; // Contamos cuántos clientes hay por país
        }
    });

    // Configuración del gráfico
    const chartData = {
        labels: Object.keys(countryCounts), // Las etiquetas serán los países
        datasets: [
            {
                label: "Clientes", // Etiqueta para el gráfico
                data: Object.values(countryCounts), // Los valores a mostrar (el número de clientes por país)
                backgroundColor: [
                    "#FF5733", // Color para cada barra (puedes agregar más colores si tienes más países)
                    "#33FF57",
                    "#3357FF",
                    "#FFC300",
                    "#DAF7A6",
                    "#FF5733",
                    "#C70039",
                    "#900C3F",
                    "#581845",
                    "#FF6F61",
                ],
                borderColor: [
                    "#C03C24", // Bordes para cada barra
                    "#258B28",
                    "#1D3B99",
                    "#FFB300",
                    "#8DCD4E",
                    "#C70039",
                    "#9E1F2C",
                    "#9C1C43",
                    "#E21D63",
                    "#F17A69",
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Comparativa de Clientes por País", // Título dinámico del gráfico
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        return `${tooltipItem.raw} Clientes`; // Formato del texto del tooltip
                    },
                },
            },
        },
    };

    return (
        <div className="chart-container">
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default CountryComparisonChart;
