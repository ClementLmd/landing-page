"use client";
import { useState } from "react";
import styles from "../styles/Item.module.css";

const MAX_CHARS = 200;

export default function Item(props: {
  image: string;
  title: string;
  text: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const needsExpansion = props.text.length > MAX_CHARS;

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;

    // Find the last space before maxLength
    const lastSpace = text.lastIndexOf(" ", maxLength);
    return text.slice(0, lastSpace) + " [...]";
  };

  const displayText = isExpanded
    ? props.text
    : truncateText(props.text, MAX_CHARS);

  return (
    <div className={styles.item}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${props.image})` }}
      />
      <div className={styles.title}>{props.title}</div>
      <div className={styles.text}>
        {displayText}
        {needsExpansion && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={styles.seeMore}
          >
            {isExpanded ? "Voir moins" : "Voir plus"}
          </button>
        )}
      </div>
    </div>
  );
}
