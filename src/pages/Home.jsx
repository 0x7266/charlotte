import { motion } from "framer-motion";
import Landing from "../components/Landing";
import Products from "../components/Products";
import Encomendas from "../components/Encomendas";
import Localizacao from "../components/Localizacao";

export default function Home() {
  return (
    <div className="flex justify-center h-full relative">
      <div className="flex flex-col justify-center items-center">
        <motion.div
          drag={true}
          dragConstraints={{
            top: 20,
            right: 10,
            left: -10,
            bottom: -20,
          }}
        >
          <div className="text-6xl sm:text-8xl font-semibold">Charlotte</div>
          <div className="flex justify-center gap-5">
            <div>c a k e </div> <div> s h o p</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
