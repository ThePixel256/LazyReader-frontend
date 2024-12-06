import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

const productPerformanceData = [
	{ name: "Libro A", sales: 4000, ingresos: 2400, beneficios: 2400 },
	{ name: "Libro B", sales: 3000, ingresos: 1398, beneficios: 2210 },
	{ name: "Libro C", sales: 2000, ingresos: 9800, beneficios: 2290 },
	{ name: "Libro D", sales: 2780, ingresos: 3908, beneficios: 2000 },
	{ name: "Libro E", sales: 1890, ingresos: 4800, beneficios: 2181},
]

const ProductPerformance = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>Desempeño de Libros</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<BarChart data={productPerformanceData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='name' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						<Bar dataKey=' ventas' fill='#8B5CF6' />
						<Bar dataKey='ingresos' fill='#10B981' />
						<Bar dataKey='beneficios' fill='#F59E0B' />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default ProductPerformance;