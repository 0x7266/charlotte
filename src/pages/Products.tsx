import { motion } from "framer-motion";
import { productsContainerVariants } from "../variants";
import { products } from "../data/products";
import Product from "../components/Product";

export default function Products() {
	return (
		<div className="container flex flex-col items-center">
			<motion.div
				variants={productsContainerVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				className="flex flex-col flex-wrap items-center sm:items-stretch sm:flex-row gap-3"
			>
				{products.map((product, index) => (
					<Product key={index} product={product} />
				))}
			</motion.div>
		</div>
	);
}
