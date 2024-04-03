import Card from "components/Card";
import Titulo from "components/Titulo";
import styles from "./inicio.module.css";
import { useEffect, useState } from "react";

export default function Inicio() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/srkain/cineapi/videos")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideos(dados);
      });
  }, []);
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
