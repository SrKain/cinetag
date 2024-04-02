import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import styles from "./favoritos.module.css";
import { useFavContext } from "context/fav";

export default function Favoritos() {
  const { fav } = useFavContext();
  return (
    <>
      <Titulo>
        <h1>Meus Favoritos!</h1>
        <section className={styles.galeria}>
          {fav.map((item) => (
            <Card
              id={item.id}
              key={item.id}
              titulo={item.titulo}
              capa={item.capa}
            />
          ))}
        </section>
      </Titulo>
    </>
  );
}
