import { motion } from "framer-motion";
import { productsContainerVariants } from "../variants";
import { products } from "../data/products";
import Product from "../components/Product";

export default function Products() {
	return (
		<div className="container flex flex-col items-center">
			<div className="flex flex-col justify-center h-full sm:items-start gap-10 py-2 px-5  md:w-11/12">
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
		</div>
	);
}
