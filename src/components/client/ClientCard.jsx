import { useNavigate } from "react-router-dom";

export function ClientCard({ client }) {
    const navigate = useNavigate();

    return (
        <div
            className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
            onClick={() => navigate(`/client-form/${client._id}`)}
        >
            <h1 className="text-white font-bold uppercase rounded-lg">{client.nombre}</h1>
            <p className="text-slate-400">Correo: {client.correo}</p>
            <p className="text-slate-400">Teléfono: {client.telefono}</p>
            <p className="text-slate-400">País: {client.pais}</p>
            <p className="text-slate-400">Servicio: {client.servicio}</p>
            <p className={`text-slate-400 ${client.estado === "activo" ? "text-green-500" : "text-red-500"}`}>
                Estado: {client.estado}
            </p>
            <hr />
        </div>
    );
}
