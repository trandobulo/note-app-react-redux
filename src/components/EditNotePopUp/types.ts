import { INote } from "../../features/note/types";

export interface IPopUp {
  active: boolean;
  noteObj?: INote;
}

export interface IPopUpState {
  category: string;
  content: string;
}
