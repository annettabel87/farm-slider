import { ImageFrameType } from "../(types)/types";
const types: ImageFrameType[] = ["circle", "drop", "revertDrop"];

export const getFramesArray = (length: number): ImageFrameType[] => {
  const frameType = () => {
    const index = Math.floor(Math.random() * types.length);
    return types[index];
  };
  const arr: ImageFrameType[] = [];
  let i = 0;
  while (i < length) {
    let frame = frameType();

    if (arr[i - 1] === "circle" && frame === "circle") {
      console.log(arr[i - 1] === "circle");
      continue;
    }
    arr.push(frame);
    i++;
  }
  return arr;
};
