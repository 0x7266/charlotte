import { products } from "../data/products";
import Product from "../components/Product";
import { motion } from "framer-motion";
import { productsContainerVariants } from "../variants";

export default function Products() {
	return (
		<div className="flex flex-col items-center justify-center h-full w-full text-white">
			<motion.div
				variants={productsContainerVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				className="w-full h-full max-h-[calc(100vh-300px)] md:max-h-[calc(100vh-200px)] flex flex-col items-center gap-3 overflow-y-auto px-4 md:p-0"
			>
				{products.map((product, index) => (
					<Product key={index} product={product} />
				))}
			</motion.div>
		</div>
	);
}
