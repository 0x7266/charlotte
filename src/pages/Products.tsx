import { products } from "../data/products";
import Product from "../components/Product";
import { motion } from "framer-motion";
import { productsContainerVariants } from "../variants";

export default function Products() {
	return (
		<div className="container flex flex-col items-center justify-center">
			<motion.div
				variants={productsContainerVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 max-h-[calc(100vh-300px)] overflow-y-auto px-2"
			>
				{products.map((product, index) => (
					<Product key={index} product={product} />
				))}
			</motion.div>
		</div>
	);
}
