import { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from "react-router-dom";
import { createTask, deleteTask, getTask, updateTask } from "../api/TaskRequest";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

export function TaskFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue} = useForm();
    const navigate = useNavigate();

    const params = useParams()
    console.log(params)
    
    const onSubmit = handleSubmit(async (data) => {
        

        if (params.id) {
            await updateTask(params.id,data)
            toast.success("Tarea actualizada", {
                position:"bottom-right",
                style:{
                    background:"#101010",
                    color:"#ffff"
                }
            })
        }else{
            await createTask(data);
            toast.success("Tarea Creada", {
                position:"bottom-right",
                style:{
                    background:"#101010",
                    color:"#ffff"
                }
            })
        }
        navigate("/task");
    });

    useEffect(()=>{
        async function loadTask() {
            if (params.id) {
                const {data} = await getTask(params.id)
                setValue("title",data.title)
                setValue("description",data.description)
            }
        }
        loadTask()
    },[])

    return (
        <motion.div
            className="flex flex-col items-center justify-center flex-1 overflow-auto bg-gradient-to-br from-blue-600 via-teal-500 to-green-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl z-20">
                <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Crear Nueva Tarea</h2>

                <form onSubmit={onSubmit} className="space-y-6">
                    {/* Input de Titulo */}
                    <div>
                        <input
                            type="text"
                            placeholder="Título"
                            autoFocus
                            className={`bg-zinc-800 text-white p-4 rounded-lg block w-full mb-4 ${errors.title ? 'border-2 border-red-500' : ''}`}
                            {...register("title", { required: "El título es requerido" })}
                        />
                        {errors.title && <span className="text-red-500 text-sm">{errors.title.message}</span>}
                    </div>

                    {/* Input de Descripción */}
                    <div>
                        <textarea
                            placeholder="Descripción"
                            className={`bg-zinc-800 text-white p-4 rounded-lg block w-full mb-4 ${errors.description ? 'border-2 border-red-500' : ''}`}
                            {...register("description", { required: "La descripción es requerida" })}
                        />
                        {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
                    </div>

                    {/* Botón de Enviar */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300"
                        >
                            Crear Tarea
                        </button>
                    </div>
                    {
                        params.id &&(
                        <button
                            className="w-full py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300"
                            onClick={async () => {
                                const aceptado = window.confirm("Estas seguro de eliminar esta tarea?..")
                                if (aceptado) {
                                    await deleteTask(params.id)
                                    toast.success("Tarea eliminada", {
                                        position:"bottom-right",
                                        style:{
                                            background:"#101010",
                                            color:"#ffff"
                                        }
                                    })
                                    navigate("/task")
                                }

                            }}
                        >
                            Eliminar
                        </button>
                    )}
                </form>
                
            </div>
        </motion.div>
    );
}
