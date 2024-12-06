import { useNavigate } from "react-router-dom";

export function ProviderCard({ provider }) {
    const navigate = useNavigate();

    return (
        <div
            className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
            onClick={() => navigate(`/provider-form/${provider._id}`)}
        >
            <h1 className="text-white font-bold uppercase rounded-lg">{provider.nombre}</h1>
            <p className="text-slate-400">Correo: {provider.correo}</p>
            <p className="text-slate-400">Teléfono: {provider.telefono}</p>
            <p className="text-slate-400">País: {provider.pais}</p>
            <p className="text-slate-400">Servicio: {provider.servicio}</p>
            <p className={`text-slate-400 ${provider.estado === "activo" ? "text-green-500" : "text-red-500"}`}>
                Estado: {provider.estado}
            </p>
            <hr />
        </div>
    );
}
