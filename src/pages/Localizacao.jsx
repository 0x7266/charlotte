import { motion } from "framer-motion";
import Map from "../components/Map";

export default function Localizacao() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, staggerChildren: 3 }}
      className="flex flex-col items-center sm:items-start gap-5 py-2 px-5 w-full"
    >
      <h2 className="text-5xl font-bold">Como chegar</h2>
      <div className="flex flex-col sm:flex-row gap-10 justify-center ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className=""
        >
          <Map />
        </motion.div>
        <div className="flex flex-col gap-10 flex-1 items-center">
          <p className="text-xl font-semibold w-60">
            Av. Dr. Nilo Peçanha, 67 Parque Santo Amaro, Campos dos Goytacazes
            RJ, 28030-035
          </p>
        </div>
      </div>
    </motion.div>
  );
}
