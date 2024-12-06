import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";

import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesTrendChart from "../components/products/SalesTrendChart";
import ProductsTable from "../components/products/ProductsTable";

const ProductsPage = () => {
	return (
		<div className='flex flex-col items-center justify-start flex-1 overflow-auto bg-gradient-to-br from-blue-600 via-teal-500 to-green-400'>
			{/* Cabecera */}
			<div className='w-full max-w-7xl sticky top-0 z-10'>
				<Header title='Inventario de Libros' />
			</div>

			{/* Contenido principal */}
			<main className='w-full max-w-7xl mx-auto py-6 px-4 lg:px-8 mt-16 overflow-y-auto max-h-[calc(100vh-200px)]'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total de Libros' icon={Package} value={1234} color='#6366F1' />
					<StatCard name='Libros Populares' icon={TrendingUp} value={89} color='#10B981' />
					<StatCard name='Pocas Unidades' icon={AlertTriangle} value={23} color='#F59E0B' />
					<StatCard name='Ingresos Totales' icon={DollarSign} value={"$543,210"} color='#EF4444' />
				</motion.div>

				<ProductsTable />

				{/* CHARTS */}
				<div className='grid grid-col-1 lg:grid-cols-2 gap-8'>
					<SalesTrendChart />
					<CategoryDistributionChart />
				</div>
			</main>
		</div>
	);
};

export default ProductsPage;
