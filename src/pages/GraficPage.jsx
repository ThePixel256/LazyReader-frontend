import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import StateComparisonChart from "../components/chart/StateComparisonChart"; 
import ComparisonChart from "../components/chart/StateComparisonChart";

function GraficPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Estado para manejar la carga de los datos
    const [error, setError] = useState(null); // Estado para manejar errores

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://lazyreader-backend-production.up.railway.app/api/clients/clients", {
                    params: {
                        estado: ["activo", "inactivo"],  // Filtro de estado
                    },
                });
                setData(res.data);
            } catch (error) {
                setError("Error en la conexión con la API");
                console.error(error);
            } finally {
                setLoading(false); // Finaliza la carga cuando los datos se han recibido o ha ocurrido un error
            }
        };

        fetchData();
    }, []);

    // Si la API está cargando
    if (loading) {
        return (
            <motion.div
                className="flex flex-col items-center justify-center flex-1 bg-gradient-to-br from-blue-600 via-teal-500 to-green-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
            >
                <div className="text-white">Cargando datos...</div>
            </motion.div>
        );
    }

    // Si ocurrió un error al cargar los datos
    if (error) {
        return (
            <motion.div
                className="flex flex-col items-center justify-center flex-1 bg-gradient-to-br from-blue-600 via-teal-500 to-green-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
            >
                <div className="text-white">{error}</div>
            </motion.div>
        );
    }

    return (
        <motion.div
            className="flex flex-col items-center justify-center flex-1 overflow-auto bg-gradient-to-br from-blue-600 via-teal-500 to-green-400 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-full max-w-7xl p-6 min-h-screen flex flex-col items-center justify-center space-y-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-white mb-8">
                    Comparativa de Usuarios por Servicio
                </h1>
    
                {/* Contenedor del gráfico con fondo blanco */}
                <div className="w-full max-w-7xl bg-white p-8 rounded-2xl shadow-2xl">
                    {/* Comparación por Servicio */}
                    <ComparisonChart data={data} comparisonField="servicio" label="Servicio" />
                </div>
            </div>
        </motion.div>
    );
    
    
}

export default GraficPage;
