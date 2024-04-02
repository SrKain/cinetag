import styles from "./banner.module.css";

export default function Banner({ imagem }) {
  return (
    <div
      className={styles.capa}
      style={{ backgroundImage: `url('/assets/banner-${imagem}.png')` }}
    />
  );
}
