import { Link } from "react-router-dom";
import logo from "./logo.png";
import CabecalhoLink from "components/headerLinks";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img src={logo} alt="logo da cinetag" />
      </Link>
      <nav>
        <CabecalhoLink  url="/">Home</CabecalhoLink>
        <CabecalhoLink url="/favoritos">Favoritos</CabecalhoLink>
      </nav>
    </header>
  );
}
