import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import ComparisonChart from "../components/chart/ComparisonChart"; // Asegúrate de que la ruta esté correcta

function SucriPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/clients/clients", {
                    params: {
                        servicio: ["Economico", "Basico", "Premium"],  // Filtro por servicio
                    },
                });

                setData(res.data);
                console.log(res);
            } catch (error) {
                console.error("Error en la conexión con la API", error);
            }
        };

        fetchData();
    }, []);

    return (
        <motion.div
            className="flex flex-col items-center justify-center flex-1 overflow-auto bg-gradient-to-br from-blue-600 via-teal-500 to-green-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-full p-4 min-h-screen flex flex-col items-center">
                <h1 className="text-3xl font-bold text-center mb-8 text-white">Comparativa de Usuarios por Planes</h1>

                {/* Contenedor del gráfico con fondo blanco */}
                <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
                    {/* Comparación por Servicio */}
                    <ComparisonChart data={data} comparisonField="servicio" label="Servicio" />
                </div>
            </div>
        </motion.div>
    );
}

export default SucriPage;
