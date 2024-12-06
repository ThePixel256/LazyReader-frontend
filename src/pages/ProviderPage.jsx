import { HeaderProvider } from "../components/provider/HeaderProvider";
import { ProviderList } from "../components/provider/ProviderList";
import { motion } from "framer-motion";

function ProviderPage() {
    return (
        <motion.div
            className="flex flex-col items-center justify-start flex-1 overflow-auto bg-gradient-to-br from-blue-600 via-teal-500 to-green-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
        >
            {/* Cabecera fija */}
            <div className="w-full max-w-4xl sticky top-0 z-10">
                <HeaderProvider />
            </div>

            {/* Contenido principal desplazable */}
            <main className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mt-16 overflow-y-auto max-h-[calc(100vh-200px)]">
                <ProviderList />
            </main>
        </motion.div>
    );
}

export default ProviderPage;