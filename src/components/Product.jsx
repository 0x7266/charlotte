import { motion } from "framer-motion";

export default function Product({ p }) {
  const listItemVariant = {
    hidden: { x: -2000 },
    show: { x: 0, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <motion.div
      className="flex flex-col gap-3 w-64 bg-chrltt p-3 rounded text-xl max-h-96 font-bold"
      variants={listItemVariant}
    >
      <img
        src={`src/assets/${p.id}.jpg`}
        className="w-full h-60 object-cover rounded"
      />
      <span>{p.name}</span>
    </motion.div>
  );
}
