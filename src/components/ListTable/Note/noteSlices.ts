import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface INoteObj {
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

const initialState: INoteObj[] = [
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

function getNoteIndex(notes: INoteObj[], id: string): number {
  return notes.findIndex((note: INoteObj) => {
    return note.id === id;
  });
}

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (
      state: INoteObj[],
      action: PayloadAction<{ category: string; content: string }>
    ) => {
      const date = new Date();

      const monthNames = [
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december",
      ];

      const noteObj = {
        category: action.payload.category,
        created: `${
          monthNames[date.getMonth()]
        } ${date.getDate()}, ${date.getFullYear()}`,
        content: action.payload.content,
        id: `${state.length}`,
        active: true,
      };

      state.push(noteObj);
    },

    editNote: (
      state: INoteObj[],
      action: PayloadAction<{ id: string; category: string; content: string }>
    ) => {
      state[getNoteIndex(state, action.payload.id)] = {
        ...state[getNoteIndex(state, action.payload.id)],
        category: action.payload.category,
        content: action.payload.content,
      };
    },

    deleteNote: (state: INoteObj[], action: PayloadAction<{ id: string }>) => {
      state.splice(getNoteIndex(state, action.payload.id), 1);
    },

    archiveUnarchiveNote: (
      state: INoteObj[],
      action: PayloadAction<{ id: string }>
    ) => {
      state[getNoteIndex(state, action.payload.id)].active =
        !state[getNoteIndex(state, action.payload.id)].active;
    },
  },
});

export const { addNote, deleteNote, editNote, archiveUnarchiveNote } =
  noteSlice.actions;

export const selectNotes = (state: { notes: INoteObj[] }) => state.notes;

export default noteSlice.reducer;
