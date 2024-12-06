import React, { useEffect } from 'react';
import { logoutApi } from '../api/AuthRequest.js';
import { useNavigate } from 'react-router-dom';

function LogoutPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const handleLogout = async () => {
            try {
                // Llama al API de logout
                const res = await logoutApi();
                console.log(res);

                // Limpia cualquier dato relacionado con la sesión
                localStorage.removeItem('token'); // Borra el token del almacenamiento local

                // Redirige al usuario a la página de login
                navigate('/login', { replace: true });
            } catch (error) {
                console.error('Error al cerrar sesión:', error);
                alert('Ocurrió un problema al cerrar sesión. Inténtalo de nuevo.');
                navigate('/login', { replace: true }); // Redirige al login incluso si hay un error
            }
        };

        handleLogout();
    }, [navigate]);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-center">
                <h2 className="text-xl font-semibold">Cerrando sesión...</h2>
            </div>
        </div>
    );
}

export default LogoutPage;