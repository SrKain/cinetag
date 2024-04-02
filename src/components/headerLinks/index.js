import { Link } from "react-router-dom";
import styles from "components/headerLinks/headerLinks.module.css";

export default function CabecalhoLink(props) {
  return (
    <Link to={props.url} className={styles.link}>
      {props.children}
    </Link>
  );
}
