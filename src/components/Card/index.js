import styles from "./Card.module.css";
import iconeFavoritar from "./favorite_outline.png";
import iconeDesfavoritar from "./favorite.png";
import { useFavContext } from "context/fav";
import { Link } from "react-router-dom";

export default function Card({ id, titulo, capa }) {
  const { fav, adicionarFav } = useFavContext();
  const ehFav = fav.some((item) => item.id === id);
  const icone = ehFav ? iconeDesfavoritar : iconeFavoritar;
  return (
    <div className={styles.container}>
      <Link to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>
      <img
        onClick={() => adicionarFav({ titulo: titulo, capa: capa, id: id })}
        src={icone}
        alt="Favoritar filme"
        className={styles.favoritar}
      />
    </div>
  );
}
