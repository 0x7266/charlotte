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
			className="flex gap-3 md:w-2/3 bg-gradient-to-tr from-chrltt from-80% to-rose-500 p-3 rounded-md text-sm md:text-xl min-h-[300px]"
			variants={productVariants}
			viewport={{ once: true }}
		>
			<motion.img
				variants={productImageVariants}
				src={`/images/${product.id}.jpg`}
				className="w-1/3 object-cover rounded pointer-events-none"
			/>
			<div className="flex flex-col gap-3 w-full">
				<motion.span
					variants={productNameVariants}
					className="md:text-4xl font-extrabold"
				>
					{product.name}
				</motion.span>
				<div className="flex flex-col justify-between h-full">
					<motion.span variants={productNameVariants} className="w-4/5 text-lg">
						{product.description}
					</motion.span>
					<motion.span variants={productNameVariants} className="self-end">
						R$ {product.price},00
					</motion.span>
				</div>
			</div>
		</motion.div>
	);
}
