import { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from "react-router-dom";
import { createClient, deleteClient, getClient, updateClient } from "../api/ClientRequest";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

export function ClientFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();

    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await updateClient(params.id, data);
            toast.success("Usuario actualizado", {
                position: "bottom-right",
                style: { background: "#101010", color: "#ffff" }
            });
        } else {
            await createClient(data);
            toast.success("Usuario creado", {
                position: "bottom-right",
                style: { background: "#101010", color: "#ffff" }
            });
        }
        navigate("/client");
    });

    useEffect(() => {
        async function loadClient() {
            if (params.id) {
                const { data } = await getClient(params.id);
                setValue("nombre", data.nombre);
                setValue("correo", data.correo);
                setValue("telefono", data.telefono);
                setValue("pais", data.pais);
                setValue("servicio", data.servicio);
                setValue("estado", data.estado);
            }
        }
        loadClient();
    }, [params.id, setValue]);

    return (
        <motion.div
            className="flex flex-col items-center justify-center flex-1 overflow-auto bg-gradient-to-br from-blue-600 via-teal-500 to-green-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl z-20">
                <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Crear o Actualizar Usuario</h2>

                <form onSubmit={onSubmit} className="space-y-6">
                    {/* Nombre */}
                    <div>
                        <input
                            type="text"
                            placeholder="Nombre del Usuario"
                            className={`bg-zinc-800 text-white p-4 rounded-lg block w-full mb-4 ${errors.nombre ? 'border-2 border-red-500' : ''}`}
                            {...register("nombre", { required: "El nombre es requerido" })}
                        />
                        {errors.nombre && <span className="text-red-500 text-sm">{errors.nombre.message}</span>}
                    </div>

                    {/* Correo */}
                    <div>
                        <input
                            type="email"
                            placeholder="Correo"
                            className={`bg-zinc-800 text-white p-4 rounded-lg block w-full mb-4 ${errors.correo ? 'border-2 border-red-500' : ''}`}
                            {...register("correo", { 
                                required: "El correo es requerido", 
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Formato de correo inválido"
                                }
                            })}
                        />
                        {errors.correo && <span className="text-red-500 text-sm">{errors.correo.message}</span>}
                    </div>

                    {/* Teléfono */}
                    <div>
                        <input
                            type="text"
                            placeholder="Teléfono"
                            className={`bg-zinc-800 text-white p-4 rounded-lg block w-full mb-4 ${errors.telefono ? 'border-2 border-red-500' : ''}`}
                            {...register("telefono", { required: "El teléfono es requerido" })}
                        />
                        {errors.telefono && <span className="text-red-500 text-sm">{errors.telefono.message}</span>}
                    </div>

                    {/* País */}
                    <div>
                        <select
                            className={`bg-zinc-800 text-white p-4 rounded-lg block w-full mb-4 ${errors.pais ? 'border-2 border-red-500' : ''}`}
                            {...register("pais", { required: "El país es requerido" })}
                        >
                            <option value="">Selecciona un país</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Brasil">Brasil</option>
                            <option value="Chile">Chile</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Honduras">Honduras</option>
                            <option value="México">México</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Panamá">Panamá</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Perú">Perú</option>
                            <option value="República Dominicana">República Dominicana</option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Albania">Albania</option>
                            <option value="Alemania">Alemania</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Austria">Austria</option>
                            <option value="Bélgica">Bélgica</option>
                            <option value="Bielorrusia">Bielorrusia</option>
                            <option value="Bosnia y Herzegovina">Bosnia y Herzegovina</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Croacia">Croacia</option>
                            <option value="Chipre">Chipre</option>
                            <option value="Dinamarca">Dinamarca</option>
                            <option value="Eslovaquia">Eslovaquia</option>
                            <option value="Eslovenia">Eslovenia</option>
                            <option value="España">España</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Finlandia">Finlandia</option>
                            <option value="Francia">Francia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Grecia">Grecia</option>
                            <option value="Hungría">Hungría</option>
                            <option value="Irlanda">Irlanda</option>
                            <option value="Islandia">Islandia</option>
                            <option value="Italia">Italia</option>
                            <option value="Kazajistán">Kazajistán</option>
                            <option value="Kosovo">Kosovo</option>
                            <option value="Letonia">Letonia</option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lituania">Lituania</option>
                            <option value="Luxemburgo">Luxemburgo</option>
                            <option value="Macedonia">Macedonia</option>
                            <option value="Malta">Malta</option>
                            <option value="Moldavia">Moldavia</option>
                            <option value="Mónaco">Mónaco</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Países Bajos">Países Bajos</option>
                            <option value="Polonia">Polonia</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Rumanía">Rumanía</option>
                            <option value="Rusia">Rusia</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Suecia">Suecia</option>
                            <option value="Suiza">Suiza</option>
                            <option value="Ucrania">Ucrania</option>
                            <option value="Reino Unido">Reino Unido</option>
                            <option value="Estados Unidos">Estados Unidos</option>
                        </select>
                        {errors.pais && <span className="text-red-500 text-sm">{errors.pais.message}</span>}
                    </div>


                    {/* Servicio */}
                    <div>
                        <select
                            className={`bg-zinc-800 text-white p-4 rounded-lg block w-full mb-4 ${errors.servicio ? 'border-2 border-red-500' : ''}`}
                            {...register("servicio", { required: "El servicio es requerido" })}
                        >
                            <option value="">Selecciona un servicio</option>
                            <option value="Economico">Economico</option>
                            <option value="Basico">Basico</option>
                            <option value="Premium">Premium</option>
                        </select>
                        {errors.servicio && <span className="text-red-500 text-sm">{errors.servicio.message}</span>}
                    </div>

                    {/* Estado */}
                    <div>
                        <select
                            className={`bg-zinc-800 text-white p-4 rounded-lg block w-full mb-4 ${errors.estado ? 'border-2 border-red-500' : ''}`}
                            {...register("estado", { required: "El estado es requerido" })}
                        >
                            <option value="activo">Activo</option>
                            <option value="inactivo">Inactivo</option>
                        </select>
                        {errors.estado && <span className="text-red-500 text-sm">{errors.estado.message}</span>}
                    </div>

                    {/* Botón de Enviar */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300"
                        >
                            {params.id ? "Actualizar Usuario" : "Crear Usuario"}
                        </button>
                    </div>

                    {/* Eliminar */}
                    {params.id && (
                        <button
                            className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                            onClick={async () => {
                                const aceptado = window.confirm("¿Estás seguro de eliminar este Usuario?");
                                if (aceptado) {
                                    await deleteClient(params.id);
                                    toast.success("Usuario eliminado", {
                                        position: "bottom-right",
                                        style: { background: "#101010", color: "#ffff" }
                                    });
                                    navigate("/client");
                                }
                            }}
                        >
                            Eliminar Cliente
                        </button>
                    )}
                </form>
            </div>
        </motion.div>
    );
} 
