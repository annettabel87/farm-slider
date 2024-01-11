"use client";
import React, { useRef, useState } from "react";
import data from "@/app/(data)/mockData";
import Card from "../Card/Card";
import { ImageFrameType } from "@/app/(types)/types";
import Navigation from "../Navigation/Navigation";
import { getFramesArray } from "@/app/(helpers)/helpers";
import styles from "./Slider.module.css";

function Slider() {
  const [frames, setFrames] = useState<ImageFrameType[]>(
    getFramesArray(data.length)
  );
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const scrollAmount = 344;

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= scrollAmount;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className={styles.sliderBlock}>
      <div className={styles.slider}>
        <div className={styles.container} ref={sliderRef}>
          {data.map((item, i) => (
            <Card key={item.id} data={item} frame={frames[i]} />
          ))}
        </div>
      </div>
      <Navigation
        leftClickHandler={scrollLeft}
        rightClickHandler={scrollRight}
      />
    </div>
  );
}

export default Slider;
