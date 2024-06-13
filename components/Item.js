import styles from "../styles/Item.module.css";

export default function Item(props) {
  return (
    <div className={styles.item}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      {/* <img className={styles.image} src={props.image}></img> */}
      <div className={styles.title}>{props.title}</div>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
}
