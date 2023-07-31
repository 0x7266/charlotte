import { useEffect, useRef, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { products } from "../data/products";
import Product from "../components/Product";
import { motion } from "framer-motion";
import { productsContainerVariants } from "../variants";

export default function Products() {
	const [width, setWidth] = useState(null);
	const carousel = useRef<HTMLDivElement | null>(null);
	const size = useWindowSize();

	// useEffect(() => {
	// 	setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
	// }, [size]);

	return (
		<div className="container flex flex-col items-center">
			<div className="flex flex-col justify-center h-full sm:items-start gap-10 py-2 px-5 sm:overflow-hidden md:w-11/12">
				<motion.div drag="x" dragConstraints={{ right: 0, left: -width! }}>
					<motion.div
						variants={productsContainerVariants}
						initial="initial"
						animate="animate"
						exit="exit"
						ref={carousel}
						className="flex flex-col items-center sm:items-stretch sm:flex-row gap-3"
					>
						{products.map((product, index) => (
							<Product key={index} product={product} />
						))}
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
