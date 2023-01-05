import { motion } from "framer-motion";
import imagem from "../assets/charlotte.png";
import products from "../products";

export default function Main() {
  const listItemContainerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 1 },
    },
  };
  const listItemVariant = {
    hidden: { x: -2000 },
    show: { x: 0, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <div className="flex flex-col overflow-hidden">
      <div className="grid sm:grid-cols-2 gap-10 sm:gap-20 overflow-hidden h-screen relative -top-28">
        <div className="flex flex-col justify-center items-center sm:items-end h-full ">
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
        <div
          // ref={container}
          className="flex justify-center sm:justify-start items-start sm:items-center h-full relative"
        >
          <img className="w-9/12 rounded shadow-2xl" src={imagem} />
          <img
            src="images/10.png"
            className="w-24 absolute top-20 right-32 rotate-12"
          />
          <img
            src="images/20.png"
            className="w-24 absolute bottom-20 right-48 rotate-45"
          />
          <img
            src="images/30.png"
            className="w-40 absolute top-52 -left-5 rotate-12"
          />
        </div>
      </div>
      <motion.div
        className="flex sm:flex-row gap-3"
        variants={listItemContainerVariant}
        initial="hidden"
        animate="show"
      >
        {products.map((p) => (
          <motion.div
            className="flex flex-col gap-3 w-64 bg-chrltt p-3 rounded text-xl font-bold"
            variants={listItemVariant}
          >
            <img
              src={`src/assets/${p.id}.jpg`}
              className="w-full h-60 object-cover rounded"
            />
            <span>{p.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
