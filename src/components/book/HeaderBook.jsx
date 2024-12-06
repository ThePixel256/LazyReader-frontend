import { Link } from 'react-router-dom';

export function HeaderBook() {
    return (
        <div className='flex justify-between py-3 items-center'>
            <Link to="/grafica-book">
                <h1 className='font-bold text-3xl mb-4'>Libros de LazyReader</h1>
            </Link>

            <button className='bg-blue-600 p-3 rounded-lg text-white font-bold'>
                <Link to="/book-form">Agregar Libro</Link>
            </button>
        </div>
    );
}