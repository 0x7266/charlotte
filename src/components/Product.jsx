import { motion } from "framer-motion";
import product from "../variants/product";
import productsList from "../variants/productsList";

export default function Product({ p, index }) {
  return (
    <motion.div
      className="flex flex-col items-center sm:items-stretch sm:flex-row gap-3"
      // variants={productsList}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="flex flex-col gap-3 w-64 bg-chrltt p-3 rounded text-xl max-h-96 font-bold"
        variants={product(index)}
      >
        <img
          src={`src/assets/${p.id}.jpg`}
          className="w-full h-60 object-cover rounded"
        />
        <span>{p.name}</span>
      </motion.div>
    </motion.div>
  );
}
