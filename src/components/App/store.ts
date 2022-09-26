import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "../../components/ListTable/Note/noteSlices";
import popUpReducer from "../../components/EditNotePopUp/editNotePopUpSlice";

export const store = configureStore({
  reducer: {
    notes: noteReducer,
    popUp: popUpReducer,
  },
});

export type NoteListDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
