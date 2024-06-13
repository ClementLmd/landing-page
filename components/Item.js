import styles from "../styles/Item.module.css";

export default function Item(props) {
  return (
    <div className={styles.item}>
      <img className={styles.image} src={props.image}></img>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
}
