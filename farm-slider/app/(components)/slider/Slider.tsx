"use client";
import React, { useRef, useState } from "react";
import data from "@/app/(data)/mockData";
import Card from "../Card/Card";
import { FrameTypes, ImageFrameType } from "@/app/(types)/types";
import styles from "./Slider.module.css";

function Slider() {
  const [startFrameType, setStartFrameType] = useState<FrameTypes>(() =>
    Math.random() > 0.5 ? FrameTypes.fromCircle : FrameTypes.fromDrop
  );

  const frameType = (i: number): ImageFrameType => {
    if (startFrameType === FrameTypes.fromCircle) {
      return i % 2 === 0 ? "drop" : "circle";
    } else {
      return i % 2 === 0 ? "circle" : "drop";
    }
  };
  return (
    <div className={styles.slider}>
      <div className={styles.container}>
        {data.map((item, i) => (
          <Card key={item.id} data={item} frame={frameType(i)} />
        ))}
      </div>
    </div>
  );
}

export default Slider;
