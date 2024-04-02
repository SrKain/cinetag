import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import videos from "json/db.json";
import Erro404 from "pages/404";

export default function Player() {
  const param = useParams();
  const item = videos.find((video) => {
    return video.id === Number(param.id);
  });

  if(!item){
    return <Erro404/>
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
