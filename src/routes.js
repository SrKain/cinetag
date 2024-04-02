import Erro404 from "pages/404";
import BasePage from "pages/basePage";
import Favoritos from "pages/favoritos";
import Inicio from "pages/inicio";
import Player from "pages/player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Inicio />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<Erro404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
