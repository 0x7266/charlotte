import { motion } from "framer-motion";
import { ordersContainerVariants, ordersLinkVariants } from "../variants";

const links = [
	{ url: "https://delivery.yooga.app/charlotte-cake-shop", label: "Delivery" },
	{
		url: "https://wa.me/message/IKQHQOIETDGZG1",
		label: "Whatsapp",
	},
	{
		url: "https://drive.google.com/file/d/1GDIqnYJ_Q59OkjaiMlsiMA9OFh-Sus-K/view?usp=drivesdk",
		label: "Cardápio de Páscoa",
	},
];

export default function Orders() {
	return (
		<div className="container flex flex-col items-center">
			<div className="flex flex-col justify-center gap-10 py-2 px-5 w-full m:items-start md:w-11/12 h-full">
				<motion.div
					variants={ordersContainerVariants}
					initial="initial"
					animate="animate"
					exit="exit"
					className="flex flex-col gap-5 items-center w-full px-5"
				>
					{links.map((link, index) => (
						<Button link={link} key={index} />
					))}
				</motion.div>
			</div>
		</div>
	);
}

type ButtonProps = {
	link: {
		url: string;
		label: string;
	};
};

function Button({ link }: ButtonProps) {
	return (
		<motion.a
			variants={ordersLinkVariants}
			href={link.url}
			target="_blank"
			className="font-bold bg-white text-center rounded-md px-3 py-5 shadow-[5px_9px_0_rgba(255,70,69,255)] hover:translate-x-[5px] hover:translate-y-[9px] text-black ease-out transition-all hover:shadow-none duration-200 w-full sm:w-4/5 max-w-2xl"
		>
			{link.label}
		</motion.a>
	);
}
