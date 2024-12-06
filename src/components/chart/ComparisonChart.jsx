import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Registra los componentes necesarios de chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ComparisonChart = ({ data, comparisonField, label }) => {
  // Función para contar las ocurrencias de cada valor en el campo
  const countOccurrences = (field) => {
    const occurrences = {};
    data.forEach((item) => {
      const value = item[field]; // Obtener el valor del campo (servicio en este caso)
      occurrences[value] = (occurrences[value] || 0) + 1; // Contar las ocurrencias
    });
    return occurrences;
  };

  // Contamos las ocurrencias para el campo de servicio
  const occurrences = countOccurrences(comparisonField);

  // Configuración de los datos del gráfico
const chartData = {
  labels: Object.keys(occurrences), // Las etiquetas serán los valores del servicio (Economico, Basico, Premium)
  datasets: [
    {
      label: label, // Etiqueta para el gráfico, puede ser 'Clientes por Servicio'
      data: Object.values(occurrences), // Los valores a graficar (el número de clientes por servicio)
      backgroundColor: [
        "#FF5733",  // Color para Economico
        "#33FF57",  // Color para Basico
        "#3357FF",  // Color para Premium
      ],
      borderColor: [
        "#C03C24",  // Bordes para Economico
        "#258B28",  // Bordes para Basico
        "#1D3B99",  // Bordes para Premium
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
        text: `Comparativa de Clientes por ${label}`, // Título dinámico del gráfico
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

export default ComparisonChart;