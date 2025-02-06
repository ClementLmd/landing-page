import styles from "../styles/Item.module.css";

export default function Item(props: {
  image: string;
  title: string;
  text: string;
}) {
  return (
    <div className={styles.item}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
}
