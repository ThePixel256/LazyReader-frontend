import { Link } from 'react-router-dom';

export function HeaderClient() {
    return (
        <div className='flex justify-between py-3 items-center'>
            <Link to="/client">
                <h1 className='font-bold text-3xl mb-4'>Usuarios de LazyReader</h1>
            </Link>

            <button className='bg-blue-600 p-3 rounded-lg text-white font-bold'>
                <Link to="/grafica-contry">Pais</Link>
            </button>
            <button className='bg-yellow-600 p-3 rounded-lg text-white font-bold'>
                <Link to="/grafica-subs">Planes</Link>
            </button>
            <button className='bg-teal-600 p-3 rounded-lg text-white font-bold'>
                <Link to="/grafica">Estado</Link>
            </button>
            <button className='bg-purple-600 p-3 rounded-lg text-white font-bold'>
                <Link to="/client-form">Nuevo Usuario</Link>
            </button>
        </div>
    );
}