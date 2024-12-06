import React from 'react';
import { useForm } from 'react-hook-form';
import { loginApi } from '../api/AuthRequest.js';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    try {
      console.log('Intentando iniciar sesión con:', values);
      const res = await loginApi(values);
      console.log('Inicio de sesión exitoso:', res);

      navigate('/dashboard', {
        replace: true
      });
    } catch (error) {
      console.error('Error en el inicio de sesión:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Usuario o contraseña incorrectos. Por favor, verifica tus datos.');
    }
  });

  return (
    <div className='flex justify-center items-center min-h-screen bg-blue-50'>
      <div className='w-full max-w-lg p-10 space-y-6 bg-white shadow-lg rounded-lg'>
        <h1 className='text-3xl font-extrabold text-center text-gray-800'>Bienvenido de nuevo</h1>
        <p className='text-center text-gray-600'>Por favor, introduce tus credenciales para continuar.</p>

        <form onSubmit={onSubmit} className='space-y-5'>
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-700'>Correo electrónico</label>
            <input
              type="email"
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200'
              placeholder='LazyReader@react.com'
              {...register('email', { required: "El correo electrónico es obligatorio" })}
            />
            {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}
          </div>

          <div>
            <label className='block mb-2 text-sm font-medium text-gray-700'>Contraseña</label>
            <input
              type="password"
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200'
              placeholder='********'
              {...register('password', { required: "La contraseña es obligatoria" })}
            />
            {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}
          </div>

          <button
            type='submit'
            className='w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700'>
            Acceder
          </button>
        </form>

        <p className='text-center text-sm text-gray-600'>
          ¿No tienes cuenta?{' '}
          <a href='/register' className='text-blue-600 hover:text-blue-700'>
            Regístrate aquí
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
