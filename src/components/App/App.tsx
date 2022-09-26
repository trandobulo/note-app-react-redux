import React from "react";
import { useSelector } from "react-redux";
import { selectNotes } from "../ListTable/Note/noteSlices";
import {
  selectPopUpState,
  selectEditObj,
} from "../EditNotePopUp/editNotePopUpSlice";

import EditNotePopUp from "../EditNotePopUp/EditNotePopUp";
import ListTable from "../ListTable/ListTable";

function App() {
  const notes = useSelector(selectNotes);
  const isPopUpOpen = useSelector(selectPopUpState);
  const noteObj = useSelector(selectEditObj);

  return (
    <>
      <main>
        <ListTable notes={notes} list="noteList" />
        <ListTable notes={notes} list="summaryList" />
      </main>
      <EditNotePopUp active={isPopUpOpen} noteObj={noteObj} />
    </>
  );
}

export default App;
