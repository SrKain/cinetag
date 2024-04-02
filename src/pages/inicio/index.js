import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import videos from "json/db.json";
import styles from "./inicio.module.css";

export default function Inicio() {
  return (
    <>
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.galeria}>
        {videos.map((item) => (
          <Card
            titulo={item.titulo}
            id={item.id}
            key={item.id}
            capa={item.capa}
          />
        ))}
      </section>
    </>
  );
}
