import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INote } from "../../features/note/types";
import { IPopUp } from "../../components/EditNotePopUp/types";
import { INoteProps } from "../../components/ListTable/Note/types";

export const popUpSlice = createSlice({
  name: "popUpReducer",
  initialState: { active: false, noteObj: undefined },
  reducers: {
    toggle: (state: { active: boolean; noteObj: undefined }) => {
      state.active = !state.active;
      state.noteObj = undefined;
    },

    openToEdit: (state: IPopUp, action?: PayloadAction<INoteProps>) => {
      state.active = !state.active;
      if (action?.payload.noteObj) {
        state.noteObj = action.payload.noteObj;
      } else {
        state.noteObj = undefined;
      }
    },
  },
});

export const selectPopUpState = (state: { popUp: { active: boolean } }) =>
  state.popUp.active;

export const selectEditObj = (state: { popUp: { noteObj: INote } }) =>
  state.popUp.noteObj;

export const { toggle, openToEdit } = popUpSlice.actions;

export default popUpSlice.reducer;
