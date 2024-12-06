import { HeaderTask } from "../components/task/HeaderTask";
import { TaskList } from "../components/task/TaskList";
import { motion } from "framer-motion";

function TaskPage() {
    return (
        <motion.div
            className="flex flex-col items-center justify-start flex-1 overflow-auto bg-gradient-to-br from-blue-600 via-teal-500 to-green-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
        >
            {/* Cabecera */}
            <div className="w-full max-w-4xl sticky top-0 z-10">
                <HeaderTask />
            </div>

            {/* Contenido principal */}
            <main className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mt-6 overflow-y-auto max-h-[calc(100vh-200px)]">
                <TaskList />
            </main>
        </motion.div>
    );
}

export default TaskPage;
