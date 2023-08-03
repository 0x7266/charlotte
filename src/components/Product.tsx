import { motion } from "framer-motion";
import {
	productImageVariants,
	productNameVariants,
	productVariants,
} from "../variants/";
import { IProduct } from "../data/products";

interface Props {
	product: IProduct;
}

export default function Product({ product }: Props) {
	return (
		<motion.div
			className="flex flex-col gap-3 w-64 bg-gradient-to-tr from-chrltt from-80% to-rose-500 p-3 rounded-md text-xl h-96 font-bold overflow-hidden"
			variants={productVariants}
			viewport={{ once: true }}
		>
			<motion.img
				variants={productImageVariants}
				src={`/images/${product.id}.jpg`}
				className="w-full h-60 object-cover rounded pointer-events-none"
			/>
			<motion.span variants={productNameVariants}>{product.name}</motion.span>
		</motion.div>
	);
}
