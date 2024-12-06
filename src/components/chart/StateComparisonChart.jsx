import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Registra los componentes de chart.js necesarios
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StateComparisonChart = ({ data }) => {
    // Procesar los datos para contar clientes activos e inactivos
    const activeCount = data.filter(client => client.estado === "activo").length;
    const inactiveCount = data.filter(client => client.estado === "inactivo").length;

    // Configuración del gráfico
    const chartData = {
        labels: ["Activo", "Inactivo"], // Las categorías
        datasets: [
            {
                label: "Clientes",
                data: [activeCount, inactiveCount], // Los datos a mostrar
                backgroundColor: ["#4caf50", "#f44336"], // Colores para activo e inactivo
                borderColor: ["#388e3c", "#d32f2f"], // Bordes para cada barra
                borderWidth: 1,
            },
        ],
    }; 

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Comparativa de Estado de Clientes",
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

export default StateComparisonChart;