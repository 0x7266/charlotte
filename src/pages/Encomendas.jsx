import { motion } from "framer-motion";
export default function Encomendas() {
  return (
    <motion.div
      id="encomendas"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-5 py-2 px-5 w-full items-center sm:items-start"
    >
      <h2 className="text-5xl font-bold">Encomendas</h2>
      <div>aiosjdoasjdoij</div>
    </motion.div>
  );
}
