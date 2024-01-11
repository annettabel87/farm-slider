export type ImageFrameType = "circle" | "drop" | 'revertDrop';

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

export interface INavigationProps {
  leftClickHandler: () => void;
  rightClickHandler: () => void;
}
