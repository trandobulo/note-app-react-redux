export enum ICONS {
  ARCHIVE_BOX = "archive-box",
  IDEA = "idea",
  PENCIL = "pencil",
  RANDOM_THOUGHT = "random-thought",
  RECOVERY = "recovery",
  TASK = "task",
  TRASH = "trash",
}

export type IconMap = {
  [key in ICONS]: JSX.Element;
};

export interface IIconProps {
  name: string;
  pointer?: boolean;
}
