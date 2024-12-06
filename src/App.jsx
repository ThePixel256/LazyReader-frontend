import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Sidebar from "./components/common/Sidebar";

import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LogoutPage from './pages/LogoutPage';
import {TaskFormPage} from './pages/TaskFormPage';
import TaskPage from "./pages/TaskPage";

import ProviderPage from "./pages/ProviderPage";  // Proveedor
import { ProviderFormPage } from './pages/ProviderFormPage';  // Formulario Proveedor

import ClientPage from "./pages/ClientPage";      // Cliente
import { ClientFormPage } from './pages/ClientFormPage';      // Formulario Cliente

import BookPage from "./pages/BookPage";      // Libro
import { BookFormPage } from './pages/BookFormPage'; // Formulario Libro

import GraficPage from './pages/GraficPage';
import SucriPage from './pages/SucriPage';
import CountryPage from './pages/CountryPage';

import BooksDiaPage from './pages/BooksDiaPage';


function App() {
	const location = useLocation();

	// Rutas que no necesitan el Sidebar
	const cleanRoutes = ["/", "/register","/login"];
	const isCleanPage = cleanRoutes.includes(location.pathname);

	return (
		<div className={isCleanPage ? "" : "flex h-screen bg-red-500 text-gray-100 overflow-hidden"}>
			{/* Renderizar el Sidebar solo en páginas que no sean limpias */}
			{!isCleanPage && (
				<>
					<div className='fixed inset-0 z-0'>
						<div className='absolute inset-0 bg-gradient-to-br from-blue-600 via-teal-500 to-green-400 opacity-80' />
						<div className='absolute inset-0 backdrop-blur-sm' />
					</div>
					<Sidebar />
				</>
			)}

			{/* Rutas */}
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/dashboard" element={<OverviewPage />} />

				
				<Route path="/products" element={<ProductsPage />} />

				
				<Route path="/task" element={<TaskPage />} />
				<Route path="/task-form" element={<TaskFormPage />} />
				<Route path="/task-form/:id" element={<TaskFormPage />} />

				<Route path="/users" element={<UsersPage />} />


				<Route path="/sales" element={<SalesPage />} />

				<Route path="/provider" element={<ProviderPage />} />  
				<Route path="/provider-form" element={<ProviderFormPage />} /> 
				<Route path="/provider-form/:id" element={<ProviderFormPage />} />  

				<Route path="/client" element={<ClientPage />} />   
				<Route path="/client-form" element={<ClientFormPage />} /> 
				<Route path="/client-form/:id" element={<ClientFormPage />} />  

				

				<Route path="/book" element={<BookPage />} />     
				<Route path="/book-form" element={<BookFormPage />} /> 
				<Route path="/book-form/:id" element={<BookFormPage />} />  

				<Route path="/orders" element={<OrdersPage />} />

				<Route path="/analytics" element={<AnalyticsPage />} />
				<Route path="/settings" element={<SettingsPage />} />
				<Route path="/logout" element={<LogoutPage />} />

				<Route path="/grafica" element={<GraficPage />} /> 
				<Route path="/grafica-subs" element={<SucriPage />} /> 
				<Route path="/grafica-contry" element={<CountryPage />} /> 

				<Route path="/grafica-book" element={<BooksDiaPage />} /> 
			</Routes>
			<Toaster/>
		</div>
	);
}

export default App;
