import { useNavigate } from "react-router-dom";

export function BookCard({ book }) {
    const navigate = useNavigate();

    return (
        <div
            className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
            onClick={() => navigate(`/book-form/${book._id}`)}
        >
            <h1 className="text-white font-bold uppercase rounded-lg">{book.titulo}</h1>
            <p className="text-slate-400">Autor: {book.autor}</p>
            <p className="text-slate-400">Género: {book.genero}</p>
            <p className="text-slate-400">Fecha de Publicación: {new Date(book.fechaPublicacion).toLocaleDateString()}</p>
            <p className="text-slate-400">Descripción: {book.descripcion}</p>
            <p className={`text-slate-400 ${book.estado === "disponible" ? "text-green-500" : "text-red-500"}`}>
                Estado: {book.estado}
            </p>
            <hr />
        </div>
    );
}
