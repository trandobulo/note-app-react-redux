import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INote, IDeleteNotePayload, IEditNotePayload } from "./types";

const initialState: INote[] = [
  {
    category: "random thought",
    created: "september 22, 2022",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    id: "0",
    active: true,
  },
  {
    category: "random thought",
    created: "september 22, 2022",
    content:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    id: "1",
    active: true,
  },
  {
    category: "idea",
    created: "september 22, 2022",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    id: "2",
    active: true,
  },
  {
    category: "random thought",
    created: "september 22, 2022",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    id: "3",
    active: true,
  },
  {
    category: "task",
    created: "september 22, 2022",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit 5/1/2022 , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    id: "4",
    active: true,
  },
  {
    category: "random thought",
    created: "september 22, 2022",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    id: "5",
    active: true,
  },
  {
    category: "idea",
    created: "september 22, 2022",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit 5/1/2022 5/1/2022",
    id: "6",
    active: true,
  },
  {
    category: "random thought",
    created: "september 22, 2022",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    id: "7",
    active: true,
  },
];

function getNoteIndex(notes: INote[], id: string): number {
  return notes.findIndex((note: INote) => {
    return note.id === id;
  });
}

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (
      state: INote[],
      action: PayloadAction<{
        category: string;
        content: string;
        date: string;
        id: string;
      }>
    ) => {

      const noteObj = {
        category: action.payload.category,
        created: action.payload.date,
        content: action.payload.content,
        id: action.payload.id,
        active: true,
      };

      state.push(noteObj);
    },

    editNote: (state: INote[], action: PayloadAction<IEditNotePayload>) => {
      state[getNoteIndex(state, action.payload.id)] = {
        ...state[getNoteIndex(state, action.payload.id)],
        category: action.payload.category,
        content: action.payload.content,
      };
    },

    deleteNote: (state: INote[], action: PayloadAction<IDeleteNotePayload>) => {
      state.splice(getNoteIndex(state, action.payload.id), 1);
    },

    archiveUnarchiveNote: (
      state: INote[],
      action: PayloadAction<IDeleteNotePayload>
    ) => {
      state[getNoteIndex(state, action.payload.id)].active =
        !state[getNoteIndex(state, action.payload.id)].active;
    },
  },
});

export const { addNote, deleteNote, editNote, archiveUnarchiveNote } =
  noteSlice.actions;

export const selectNotes = (state: { notes: INote[] }) => state.notes;

export default noteSlice.reducer;
