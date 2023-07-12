import { motion } from "framer-motion";
export default function Orders() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="flex flex-col gap-5 py-2 px-5 sm:items-start w-full "
		>
			<h2 className="text-5xl font-bold self-start">Encomendas</h2>
			<div className="flex flex-col w-full gap-5 flex-grow ">
				<p>
					Nos links abaixo você consegue encontrar cardápios e os contatos para
					encomendas
				</p>
				<div className="flex flex-col gap-5 items-center ">
					<a
						href="https://delivery.yooga.app/charlotte-cake-shop"
						target="_blank"
						className="font-bold bg-white text-center rounded-3xl p-3 shadow-[5px_9px_0_rgba(255,70,69,255)] hover:translate-x-[5px] hover:translate-y-[9px] text-black ease-out transition-all hover:shadow-none duration-200 w-full sm:w-2/5 max-w-2xl"
					>
						Delivery
					</a>
					<a
						href="https://drive.google.com/file/d/1GDIqnYJ_Q59OkjaiMlsiMA9OFh-Sus-K/view?usp=drivesdk"
						target="_blank"
						className="font-bold bg-white text-center rounded-3xl p-3 shadow-[5px_9px_0_rgba(255,70,69,255)] hover:translate-x-[5px] hover:translate-y-[9px] text-black ease-out transition-all hover:shadow-none duration-200 w-full sm:w-2/5 max-w-2xl"
					>
						Cardápio de Páscoa
					</a>
					<a
						href="https://wa.me/message/IKQHQOIETDGZG1"
						target="_blank"
						className="font-bold bg-white text-center rounded-3xl p-3 shadow-[5px_9px_0_rgba(255,70,69,255)] hover:translate-x-[5px] hover:translate-y-[9px] text-black ease-out transition-all hover:shadow-none duration-200 w-full sm:w-2/5 max-w-2xl"
					>
						Whatsapp
					</a>
				</div>
			</div>
		</motion.div>
	);
}
