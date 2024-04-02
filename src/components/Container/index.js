import Banner from "components/Banner";
import styles from "./Container.module.css";
import { Route, Routes } from "react-router-dom";
export default function Container({ children }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Banner imagem={"home"} />} />
        <Route path="/favoritos" element={<Banner imagem={"favoritos"} />} />
        <Route path="/player" element={<Banner imagem={"player"} />} />
      </Routes>
      <section className={styles.container}>{children}</section>
    </>
  );
}
