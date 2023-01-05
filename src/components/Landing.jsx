import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="flex justify-center overflow-hidden h-[80vh] relative sm:-top-28">
      <div className="flex flex-col justify-center items-center sm:items-end h-full">
        <motion.a
          drag={true}
          dragConstraints={{
            top: 20,
            right: 10,
            left: -10,
            bottom: -20,
          }}
          href="#produtos"
        >
          <div className="text-6xl sm:text-8xl font-semibold">Charlotte</div>
          <div className="flex justify-center gap-5">
            <div>c a k e </div> <div> s h o p</div>
          </div>
        </motion.a>
      </div>
    </div>
  );
}
