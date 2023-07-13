import { motion } from "framer-motion";
import { productVariant } from "../variants/";
import { IProduct } from "../data/products";

interface Props {
	product: IProduct;
	index: number;
}

export default function Product({ product, index }: Props) {
	return (
		<motion.div
			className="flex flex-col items-center sm:items-stretch sm:flex-row gap-3"
			// variants={productsList}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.4 }}
		>
			<motion.div
				className="flex flex-col gap-3 w-64 bg-gradient-to-tr from-chrltt from-80% to-rose-500 p-3 rounded text-xl max-h-96 font-bold"
				variants={productVariant(index)}
			>
				<img
					// src={`https://production-darez-api.s3.amazonaws.com/products/1599053284028_IMAGE1599053283566.jpg`}
					src={`/images/${product.id}.jpg`}
					className="w-full h-60 object-cover rounded"
				/>
				<span>{product.name}</span>
			</motion.div>
		</motion.div>
	);
}
