import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import products from "../products";
import Product from "../components/Product";

export default function Products() {
  const [width, setWidth] = useState(null);
  const carousel = useRef();
  const size = useWindowSize();

  // useEffect(() => {
  //   setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  // }, [size]);

  return (
    <div className="flex flex-col items-center sm:items-start gap-5 py-2 px-5 sm:overflow-hidden flex-1">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        Produtos
      </motion.h2>
      <motion.div
        // drag="x"
        // dragConstraints={{ right: 0, left: -width }}
        className=""
      >
        <div
          ref={carousel}
          className="flex flex-col items-center sm:items-stretch sm:flex-row gap-3"
          initial="hidden"
          animate="show"
        >
          {products.map((p, index) => (
            <Product key={index} p={p} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
