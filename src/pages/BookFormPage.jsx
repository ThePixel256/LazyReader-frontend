import { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from "react-router-dom";
import { createBook, deleteBook, getBook, updateBook } from "../api/BookRequest";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

export function BookFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();

    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await updateBook(params.id, data);
            toast.success("Libro actualizado", {
                position: "bottom-right",
                style: { background: "#101010", color: "#ffff" }
            });
        } else {
            await createBook(data);
            toast.success("Libro creado", {
                position: "bottom-right",
                style: { background: "#101010", color: "#ffff" }
            });
        }
        navigate("/book");
    });

    useEffect(() => {
        async function loadBook() {
            if (params.id) {
                const { data } = await getBook(params.id);
                setValue("titulo", data.titulo);
                setValue("autor", data.autor);
                setValue("genero", data.genero);
                setValue("fechaPublicacion", data.fechaPublicacion);
                setValue("descripcion", data.descripcion);
                setValue("estado", data.estado);
            }
        }
        loadBook();
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
                <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Crear o Actualizar Libro</h2>

                <form onSubmit={onSubmit} className="space-y-6">
                    {/* Título */}
                    <div>
                        <input
                            type="text"
                            placeholder="Título"
                            className={`bg-zinc-800 text-white p-4 rounded-lg block w-full mb-4 ${errors.titulo ? 'border-2 border-red-500' : ''}`}
                            {...register("titulo", { required: "El título es requerido" })}
                        />
                        {errors.titulo && <span className="text-red-500 text-sm">{errors.titulo.message}</span>}
                    </div>

                    {/* Autor */}
                    <div>
                        <input
                            type="text"
                            placeholder="Autor"
                            className={`bg-zinc-800 text-white p-4 rounded-lg block w-full mb-4 ${errors.autor ? 'border-2 border-red-500' : ''}`}
                            {...register("autor", { required: "El autor es requerido" })}
                        />
                        {errors.autor && <span className="text-red-500 text-sm">{errors.autor.message}</span>}
                    </div>

                    {/* Género */}
                    <div>
                        <select
                            className={`bg-zinc-800 text-white p-4 rounded-lg block w-full mb-4 ${errors.genero ? 'border-2 border-red-500' : ''}`}
                            {...register("genero", { required: "El género es requerido" })}
                        >
                            <option value="">Selecciona un género</option>
                            <option value="novela">Novela</option>
                            <option value="cuento">Cuento</option>
                            <option value="fábula">Fábula</option>
                            <option value="leyenda">Leyenda</option>
                            <option value="ciencia ficción">Ciencia ficción</option>
                            <option value="fantasía">Fantasía</option>
                            <option value="terror">Terror</option>
                            <option value="aventura">Aventura</option>
                            <option value="histórica">Histórica</option>
                            <option value="policíaca">Policíaca</option>
                            <option value="misterio">Misterio</option>
                            <option value="thriller">Thriller</option>
                            <option value="romántica">Romántica</option>
                            <option value="juvenil">Juvenil</option>
                            <option value="realismo mágico">Realismo mágico</option>
                            <option value="biografía">Biografía</option>
                            <option value="autobiografía">Autobiografía</option>
                            <option value="ensayo">Ensayo</option>
                            <option value="crónica">Crónica</option>
                            <option value="documental">Documental</option>
                            <option value="reportaje">Reportaje</option>
                            <option value="ensayo académico">Ensayo académico</option>
                            <option value="ensayo filosófico">Ensayo filosófico</option>
                            <option value="ensayo científico">Ensayo científico</option>
                            <option value="ensayo literario">Ensayo literario</option>
                            <option value="manual">Manual</option>
                            <option value="guía">Guía</option>
                            <option value="memoir">Memoir</option>
                            <option value="poesía lírica">Poesía lírica</option>
                            <option value="poesía épica">Poesía épica</option>
                            <option value="poesía dramática">Poesía dramática</option>
                            <option value="soneto">Soneto</option>
                            <option value="ode">Ode</option>
                            <option value="elegía">Elegía</option>
                            <option value="haiku">Haiku</option>
                            <option value="acróstico">Acrostico</option>
                            <option value="verso libre">Verso libre</option>
                            <option value="poesía concreta">Poesía concreta</option>
                            <option value="tragedia">Tragedia</option>
                            <option value="comedia">Comedia</option>
                            <option value="drama">Drama</option>
                            <option value="tragicomedia">Tragicomedia</option>
                            <option value="monólogo">Monólogo</option>
                            <option value="musical">Musical</option>
                            <option value="ópera">Ópera</option>
                            <option value="teatro experimental">Teatro experimental</option>
                            <option value="cuento infantil">Cuento infantil</option>
                            <option value="fábula">Fábula</option>
                            <option value="poesía infantil">Poesía infantil</option>
                            <option value="álbum ilustrado">Álbum ilustrado</option>
                            <option value="libro de imágenes">Libro de imágenes</option>
                            <option value="novela juvenil">Novela juvenil</option>
                            <option value="fantasía infantil">Fantasía infantil</option>
                            <option value="aventura infantil">Aventura infantil</option>
                            <option value="cómic">Cómic</option>
                            <option value="manga">Manga</option>
                            <option value="novela gráfica">Novela gráfica</option>
                            <option value="webtoon">Webtoon</option>
                        </select>
                        {errors.genero && <span className="text-red-500 text-sm">{errors.genero.message}</span>}
                    </div>

                    {/* Fecha de insercion */}
                    <div>
                        <input
                            type="date"
                            placeholder="Fecha de publicación"
                            className={`bg-zinc-800 text-white p-4 rounded-lg block w-full mb-4 ${errors.fechaPublicacion ? 'border-2 border-red-500' : ''}`}
                            {...register("fechaPublicacion", { required: "La fecha de publicación es requerida" })}
                        />
                        {errors.fechaPublicacion && <span className="text-red-500 text-sm">{errors.fechaPublicacion.message}</span>}
                    </div>

                    {/* Descripción */}
                    <div>
                        <textarea
                            placeholder="Descripción"
                            className={`bg-zinc-800 text-white p-4 rounded-lg block w-full mb-4 ${errors.descripcion ? 'border-2 border-red-500' : ''}`}
                            {...register("descripcion", { required: "La descripción es requerida" })}
                        />
                        {errors.descripcion && <span className="text-red-500 text-sm">{errors.descripcion.message}</span>}
                    </div>

                    {/* Estado */}
                    <div>
                        <select
                            className={`bg-zinc-800 text-white p-4 rounded-lg block w-full mb-4 ${errors.estado ? 'border-2 border-red-500' : ''}`}
                            {...register("estado", { required: "El estado es requerido" })}
                        >
                            <option value="disponible">Disponible</option>
                            <option value="no disponible">No disponible</option>
                        </select>
                        {errors.estado && <span className="text-red-500 text-sm">{errors.estado.message}</span>}
                    </div>

                    {/* Botón de Enviar */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300"
                        >
                            {params.id ? "Actualizar Libro" : "Crear Libro"}
                        </button>
                    </div>

                    {/* Eliminar */}
                    {params.id && (
                        <button
                            className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                            onClick={async () => {
                                const aceptado = window.confirm("¿Estás seguro de eliminar este libro?");
                                if (aceptado) {
                                    await deleteBook(params.id);
                                    toast.success("Libro eliminado", {
                                        position: "bottom-right",
                                        style: { background: "#101010", color: "#ffff" }
                                    });
                                    navigate("/book");
                                }
                            }}
                        >
                            Eliminar Libro
                        </button>
                    )}
                </form>
            </div>
        </motion.div>
    );
}
