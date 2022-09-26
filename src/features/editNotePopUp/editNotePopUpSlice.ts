import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INoteObj } from "../note/noteSlices";

export const popUpSlice = createSlice({
  name: "popUpReducer",
  initialState: { active: false, noteObj: undefined },
  reducers: {
    openClose: (state: { active: boolean; noteObj: undefined }) => {
      state.active = !state.active;
      state.noteObj = undefined;
    },

    openToEdit: (
      state: { active: boolean; noteObj: INoteObj | undefined },
      action?: PayloadAction<{ noteObj: INoteObj }>
    ) => {
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

export const selectEditObj = (state: { popUp: { noteObj: INoteObj } }) =>
  state.popUp.noteObj;

export const { openClose, openToEdit } = popUpSlice.actions;

export default popUpSlice.reducer;
