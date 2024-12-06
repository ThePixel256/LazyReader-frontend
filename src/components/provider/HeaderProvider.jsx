import { Link } from 'react-router-dom';

export function HeaderProvider() {
    return (
        <div className='flex justify-between py-3 items-center'>
            <Link to="/provider">
                <h1 className='font-bold text-3xl mb-4'>Proveedores de LazyReader</h1>
            </Link>

            <button className='bg-green-600 p-3 rounded-lg text-white font-bold'>
                <Link to="/provider-form">Crear Proveedor</Link>
            </button>
        </div>
    );
}