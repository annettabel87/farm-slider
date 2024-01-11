export type ImageFrameType = "circle" | "drop" | "oval";

export interface ICardProps {
  frame: ImageFrameType;
  data: ICardData;
}

export interface ICardData {
  id: number;
  types: string;
  img: string;
  title: string;
  date: string;
}

export enum FrameTypes {
  fromCircle,
  fromDrop,
}

export interface INavigationProps {
  leftClickHandler: () => void;
  rightClickHandler: () => void;
}
