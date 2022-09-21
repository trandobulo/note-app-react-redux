import React from "react";
import Note from "./components/ListTable/Note/Note";
import NoteList from "./redux/NoteList";
import "./css/row.css";
import "./css/global.css";
import "./css/create-note-pop-up.css";
import Summary from "./components/ListTable/Summary/Summary";
import Title from "./components/ListTable/Title/Title";
import EditNotePopUp from "./components/EditNotePopUp/EditNotePopUp";

const noteList = new NoteList();

noteList.addNote(
  "random thought",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
);

const note = noteList.notes[0];

function App() {
  return (
    <main>
      <Title list="noteList" />
      <Note noteObj={note} />
      <Summary category="random-thought" noteList={noteList} />
      <EditNotePopUp />
      {/* <NoteList type="notes"/>
    <Notelist type="summary"/> */}
    </main>
  );
}

export default App;
