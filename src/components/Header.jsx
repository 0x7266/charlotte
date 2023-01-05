import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="bg-chrltt flex justify-center p-2 z-10">
      <div className="container flex flex-col sm:flex-row justify-between items-center">
        <Link to="/" className="focus:outline-red-400 focus:">
          <img className="w-20" src={logo} />
        </Link>
        <nav className="flex w-full justify-between sm:w-fit sm:gap-10 text-neutral-400 font-bold">
          <Link to="/produtos">Produtos</Link>
          <Link to="/encomendas">Encomendas</Link>
          <Link to="/localizacao">Localização</Link>
        </nav>
      </div>
    </header>
  );
}
