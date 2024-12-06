import { HeaderBook } from "../components/book/HeaderBook";
import { BookList } from "../components/book/BookList";
import { motion } from "framer-motion";
import BookComparisonChart from "../components/chart/BookComparisonChart";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";

function BookPage() {
    return (
        <motion.div
            className="flex flex-col items-center justify-start flex-1 overflow-auto bg-gradient-to-br from-blue-600 via-teal-500 to-green-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
        >
            {/* Cabecera */}
            <div className="w-full max-w-6xl sticky top-0 z-10">
                <HeaderBook />
            </div>

            {/* Contenedor principal */}
            <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 mt-6 px-4">
                {/* Contenido principal (Lista de Libros) a la izquierda */}
                <main className="w-full md:w-2/3 bg-slate-400 shadow-lg rounded-lg p-6 overflow-y-auto max-h-[calc(100vh-200px)]">
                    <BookList />
                </main>

                {/* Contenedor para la comparativa y gráfico de ventas (Derecha) */}
                <div className="flex flex-col w-full md:w-1/3 gap-6">
                    {/* Comparativa por Género */}
                    <div className="w-full p-4 bg-slate-400 shadow-lg rounded-lg">
                        <h1 className="text-3xl font-semibold text-center text-white mb-8 md:text-4xl">
                            Comparativa de Libros por Género
                        </h1>
                        <BookComparisonChart />
                    </div>

                    {/* Gráfico de ventas (Sales Overview) */}
                    <div className="w-full p-4 bg-slate-400 shadow-lg rounded-lg">
                        <SalesOverviewChart />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default BookPage;
