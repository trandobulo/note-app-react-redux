export interface INote {
  category: string;
  created: string;
  content: string;
  id: string;
  active: boolean;
}

export interface ISummary {
  active: number;
  archived: number;
}

export interface IEditNotePayload {
  id: string;
  category: string;
  content: string;
}
export interface IDeleteNotePayload {
  id: string;
}
