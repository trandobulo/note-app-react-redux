import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "../features/note/noteSlices";
import popUpReducer from "../features/editNotePopUp/editNotePopUpSlice";

export const store = configureStore({
  reducer: {
    notes: noteReducer,
    popUp: popUpReducer,
  },
});

export type NoteListDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
