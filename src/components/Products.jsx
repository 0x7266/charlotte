import { motion } from "framer-motion";
import products from "../products";
import Product from "./Product";

export default function Products() {
  const listItemContainerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 1.3 },
    },
  };

  return (
    <div
      id="produtos"
      className="flex flex-col items-center sm:items-start gap-5 py-2 sm:overflow-hidden flex-1"
    >
      <h2 className="text-5xl font-bold">Produtos</h2>
      <motion.div
        className="flex flex-col items-center sm:items-stretch sm:flex-row gap-3"
        variants={listItemContainerVariant}
        initial="hidden"
        animate="show"
      >
        {products.map((p) => (
          <Product p={p} />
        ))}
      </motion.div>
    </div>
  );
}
