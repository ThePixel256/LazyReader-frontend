import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import CountryComparisonChart from "../components/chart/CountryComparisonChart"; // Asegúrate de que la ruta sea correcta

function CountryPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://lazyreader-backend-production.up.railway.app/api/clients/clients", {
                    params: {
                        pais: [
                            "Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Costa Rica", "Cuba", "Ecuador", "El Salvador", "Guatemala", "Honduras", 
                            "México", "Nicaragua", "Panamá", "Paraguay", "Perú", "República Dominicana", "Uruguay", "Venezuela", 
                            "Albania", "Alemania", "Andorra", "Armenia", "Austria", "Bélgica", "Bielorrusia", "Bosnia y Herzegovina", "Bulgaria", "Croacia", 
                            "Chipre", "Dinamarca", "Eslovaquia", "Eslovenia", "España", "Estonia", "Finlandia", "Francia", "Georgia", "Grecia", "Hungría", 
                            "Irlanda", "Islandia", "Italia", "Kazajistán", "Kosovo", "Letonia", "Liechtenstein", "Lituania", "Luxemburgo", "Macedonia", 
                            "Malta", "Moldavia", "Mónaco", "Montenegro", "Países Bajos", "Polonia", "Portugal", "Rumanía", "Rusia", "San Marino", "Serbia", 
                            "Suecia", "Suiza", "Ucrania", "Reino Unido", "Estados Unidos"],
                    },
                });
                setData(res.data);
            } catch (error) {
                console.error("Error en la conexión con la API", error);
            }
        };

        fetchData();
    }, []);

    return (
        <motion.div
            className="flex flex-col items-center justify-center flex-1 overflow-auto bg-gradient-to-br from-blue-600 via-teal-500 to-green-400 min-h-screen"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto p-4 flex flex-col items-center justify-center w-full">
                <h1 className="text-3xl font-semibold text-center text-white mb-8 md:text-4xl">
                    Comparativa de Usuarios por País
                </h1>

                {/* Comparación por País */}
                <div className="w-full md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12 p-4 bg-white shadow-lg rounded-lg">
                    <CountryComparisonChart data={data} />
                </div>
            </div>
        </motion.div>
    );
}

export default CountryPage;
