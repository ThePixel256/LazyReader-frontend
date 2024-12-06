import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Registra los componentes necesarios de chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BookComparisonChart = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Función para contar las ocurrencias de cada género
    const countOccurrences = (field) => {
        const occurrences = {};
        data.forEach((item) => {
            const value = item[field]; // Obtener el valor del campo de género
            occurrences[value] = (occurrences[value] || 0) + 1; // Contar las ocurrencias
        });
        return occurrences;
    };

    // Fetch de datos de la API
    useEffect(() => {
        const fetchBooksData = async () => {
            try {
                const response = await axios.get("https://lazyreader-backend-production.up.railway.app/api/books/books");
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching books data:", error);
                setLoading(false);
            }
        };

        fetchBooksData();
    }, []);

    // Si aún está cargando los datos, mostrar un mensaje de carga
    if (loading) {
        return <div>Loading...</div>;
    }

    // Contamos las ocurrencias para el campo de género
    const occurrences = countOccurrences("genero");

    // Configuración de los datos del gráfico
    const chartData = {
        labels: Object.keys(occurrences), // Los géneros como etiquetas
        datasets: [
            {
                label: "Cantidad de Libros",
                data: Object.values(occurrences), // La cantidad de libros por género
                backgroundColor: [
                    "#FF5733",  // Ficción
                    "#33FF57",  // No Ficción
                    "#3357FF",  // Ciencia Ficción
                    "#FF33A6",  // Fantasía
                ],
                borderColor: [
                    "#C03C24",  // Bordes para Ficción
                    "#258B28",  // Bordes para No Ficción
                    "#1D3B99",  // Bordes para Ciencia Ficción
                    "#FF1C80",  // Bordes para Fantasía
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
                text: "Comparativa de Libros por Género", // Título dinámico del gráfico
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        return `${tooltipItem.raw} Libros`; // Formato del texto del tooltip
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

export default BookComparisonChart;
