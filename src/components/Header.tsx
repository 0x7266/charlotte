import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
	return (
		<header className="bg-chrltt flex flex-col justify-center items-center py-1 px-2 sm:px-10 pt-0 h-fit w-full">
			<div className="container flex flex-col sm:flex-row justify-around items-center">
				<Link to="/" className="focus:outline-red-400">
					<img className="w-20" src={logo} />
				</Link>
				<nav className="flex w-full justify-between sm:w-fit sm:gap-10 text-neutral-200 font-bold">
					<Link to="produtos">Produtos</Link>
					<Link to="encomendas">Encomendas</Link>
					<Link to="localizacao">Localização</Link>
				</nav>
			</div>
		</header>
	);
}
