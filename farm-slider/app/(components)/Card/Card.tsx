import React from "react";
import Image from "next/image";
import type { ICardProps } from "@/app/(types)/types";
import styles from "./Card.module.css";

function Card({ frame, data }: ICardProps) {
  const size = data.title.length > 35 ? "big" : "small";
  return (
    <figure className={`${styles.card} ${size === "big" ? styles[size] : ""}`}>
      <div
        className={`${styles.frame} ${size === "big" ? styles.bigFrame : ""} ${
          styles[frame]
        }
        }`}
      >
        <Image
          src={data.img}
          width={size === "big" ? 688 : 344}
          height={344}
          alt="image"
          className={styles.img}
        />
      </div>
      <figcaption className={styles.description}>
        <p className={styles.text}>{data.title}</p>
        <p className={styles.textSmall}>{data.date}</p>
      </figcaption>
    </figure>
  );
}

export default Card;
