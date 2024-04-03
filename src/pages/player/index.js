import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import Erro404 from "pages/404";
import { useEffect, useState } from "react";

export default function Player() {
  const [item, setItem] = useState();
  const param = useParams();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/srkain/cineapi/videos?id=${param.id}`
    )
      .then((resposta) => resposta.json())
      .then((dados) => setItem(...dados));
  }, []);

  if (!item) {
    return <Erro404 />;
  }

  return (
    <>
      <Titulo>
        <h2>{item.titulo}</h2>
      </Titulo>
      <iframe
        width="1000"
        height="500"
        src={item.link}
        title={item.titulo}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </>
  );
}
