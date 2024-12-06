import { motion } from "framer-motion";
import BookComparisonChart from "../components/chart/BookComparisonChart"; // Asegúrate de que la ruta sea correcta

function BooksDiaPage() {
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
                    Comparativa de Libros por Género
                </h1>

                {/* Comparación por Género */}
                <div className="w-full md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12 p-4 bg-white shadow-lg rounded-lg">
                    <BookComparisonChart />
                </div>
            </div>
        </motion.div>
    );
}

export default BooksDiaPage;
